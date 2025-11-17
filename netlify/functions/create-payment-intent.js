const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
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
    const coupon = data.coupon || null;

    if (!amount) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Amount is required" }),
      };
    }

    // -------------------------------
    // CUPÓN "50k50" → descuento 50€
    // -------------------------------
    let finalAmount = amount;

    if (coupon && coupon.toLowerCase() === "50k50") {
      const discount = 50 * 100; // 50€ → céntimos
      finalAmount = Math.max(amount - discount, 0);
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: finalAmount,
      currency,
      description: productName,
      metadata: {
        productName,
        couponUsed: coupon || "none",
        originalAmount: amount,
        finalAmount,
      },
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
        finalAmount,
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
