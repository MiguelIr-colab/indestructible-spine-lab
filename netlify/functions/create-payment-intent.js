const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  // Solo permitimos POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");

    const amount = data.amount; // en céntimos
    const currency = data.currency || "eur";
    const productName = data.productName || "Producto sin nombre";

    if (!amount) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Amount is required" }),
      };
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      description: productName,
      metadata: {
        productName,
      },
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      }),
    };
  } catch (err) {
    console.error("Stripe error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
