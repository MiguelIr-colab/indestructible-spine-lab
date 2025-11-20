const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { paymentIntentId, couponCode, originalAmount } = JSON.parse(event.body || "{}");

    if (!paymentIntentId || !couponCode || !originalAmount) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          valid: false,
          error: "Faltan parámetros requeridos" 
        }),
      };
    }

    // Verificar el cupón con Stripe
    try {
      const coupon = await stripe.coupons.retrieve(couponCode.toUpperCase());
      
      if (!coupon || !coupon.valid) {
        return {
          statusCode: 200,
          body: JSON.stringify({ 
            valid: false,
            error: "Cupón no válido o expirado" 
          }),
        };
      }

      // Calcular el descuento
      let discountAmount = 0;
      const amountInCents = originalAmount * 100;

      if (coupon.amount_off) {
        // Descuento fijo en céntimos
        discountAmount = coupon.amount_off / 100; // Convertir a euros
      } else if (coupon.percent_off) {
        // Descuento porcentual
        discountAmount = (originalAmount * coupon.percent_off) / 100;
      }

      const finalAmount = Math.max(originalAmount - discountAmount, 0);
      const finalAmountInCents = Math.floor(finalAmount * 100);

      // Actualizar el PaymentIntent con el nuevo monto
      await stripe.paymentIntents.update(paymentIntentId, {
        amount: finalAmountInCents,
        metadata: {
          couponApplied: couponCode,
          originalAmount: amountInCents,
          discountAmount: Math.floor(discountAmount * 100),
          finalAmount: finalAmountInCents,
        },
      });

      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          valid: true,
          discount: discountAmount,
          finalAmount: finalAmount,
          couponCode: couponCode.toUpperCase(),
        }),
      };

    } catch (couponError) {
      console.log("Error al verificar cupón:", couponError.message);
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          valid: false,
          error: "Cupón no encontrado en Stripe" 
        }),
      };
    }

  } catch (err) {
    console.error("Error general:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        valid: false,
        error: "Error interno del servidor" 
      }),
    };
  }
};
