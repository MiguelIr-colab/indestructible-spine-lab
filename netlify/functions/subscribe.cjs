const { resolveMx } = require("dns").promises;

const MAILRELAY_API_KEY = process.env.MAILRELAY_API_KEY;
const MAILRELAY_BASE_URL = process.env.MAILRELAY_BASE_URL;
const MAILRELAY_GROUP_EVENTO_ID = process.env.MAILRELAY_GROUP_EVENTO_ID;
const MAILRELAY_GROUP_EVENTO2_ID = process.env.MAILRELAY_GROUP_EVENTO2_ID;

async function hasValidMx(email) {
  const domain = email.split("@")[1];
  if (!domain) return false;
  try {
    const records = await resolveMx(domain);
    return records && records.length > 0;
  } catch {
    return false;
  }
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ message: "Method not allowed" }) };
  }

  const body = JSON.parse(event.body || "{}");
  const { nombre = "", email = "", timeSinceLoad, website, sourcePage } = body;

  if (!email) return { statusCode: 400, body: JSON.stringify({ message: "Email requerido" }) };

  if (website && website.trim() !== "") {
    return { statusCode: 400, body: JSON.stringify({ message: "No verificado como humano" }) };
  }

  if (typeof timeSinceLoad !== "number" || timeSinceLoad < 3) {
    return { statusCode: 400, body: JSON.stringify({ message: "No verificado como humano" }) };
  }

  const mxOk = await hasValidMx(email);
  if (!mxOk) {
    return { statusCode: 400, body: JSON.stringify({ message: "Dominio de email inválido" }) };
  }

  let groupId = MAILRELAY_GROUP_EVENTO_ID;
  if (sourcePage === "evento2") groupId = MAILRELAY_GROUP_EVENTO2_ID;

  try {
    const mailrelayRes = await fetch(`${MAILRELAY_BASE_URL}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": MAILRELAY_API_KEY,
      },
      body: JSON.stringify({
        email,
        name: nombre,
        groups: [groupId],
      }),
    });

    if (!mailrelayRes.ok) {
      const txt = await mailrelayRes.text();
      console.error("Mailrelay error:", txt);
      return { statusCode: 500, body: JSON.stringify({ message: "Error con Mailrelay" }) };
    }

    return { statusCode: 200, body: JSON.stringify({ message: "Suscripción correcta" }) };
  } catch (err) {
    console.error("Error:", err);
    return { statusCode: 500, body: JSON.stringify({ message: "Error al conectar con Mailrelay" }) };
  }
};

