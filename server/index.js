require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

/**
 * Reusable function to send notification emails
 * @param {string} subject - Email subject
 * @param {string} text - Plain text content
 * @param {string} html - HTML content (optional)
 * @returns {Promise<object>} - Nodemailer send result
 */
async function sendNotificationEmail(subject, text, html) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.MAIL_TO,
    subject,
    text,
    html: html || text,
  };

  return transporter.sendMail(mailOptions);
}

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  /\.netlify\.app$/,
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, etc.)
      if (!origin) return callback(null, true);

      const isAllowed = allowedOrigins.some((allowed) =>
        allowed instanceof RegExp ? allowed.test(origin) : allowed === origin
      );

      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Create Payment Intent
app.post("/api/create-payment-intent", async (req, res) => {
  try {
    const { amount, currency = "eur", productName, productSlug } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    if (!productSlug) {
      return res.status(400).json({ error: "productSlug is required" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      description: productName || "Producto sin nombre",
      metadata: {
        productName: productName || "Producto sin nombre",
        productSlug,
        originalAmount: amount,
      },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Apply Coupon
app.post("/api/apply-coupon", async (req, res) => {
  try {
    const { paymentIntentId, couponCode, originalAmount, productSlug } = req.body;

    if (!paymentIntentId || !couponCode || !originalAmount || !productSlug) {
      return res.status(400).json({
        valid: false,
        error: "Faltan parámetros requeridos",
      });
    }

    // Special validation for 200K100 coupon
    const upperCode = couponCode.toUpperCase();
    if (upperCode === "200K100") {
      if (productSlug !== "6-meses" && productSlug !== "1-ano") {
        return res.json({
          valid: false,
          error: "Este cupón solo se puede usar en los planes de 6 meses o 1 año.",
        });
      }
    }

    // Find promotion code by code
    const promotionCodes = await stripe.promotionCodes.list({
      code: couponCode,
      active: true,
      limit: 1,
      expand: ["data.coupon"],
    });

    if (!promotionCodes.data.length) {
      return res.json({
        valid: false,
        error: "El código no es válido o está caducado",
      });
    }

    const promo = promotionCodes.data[0];
    const coupon = promo.coupon;

    if (!coupon || !coupon.valid) {
      return res.json({
        valid: false,
        error: "El cupón no es válido o ha expirado",
      });
    }

    // Calculate discount
    let discountAmount = 0;
    if (coupon.amount_off) {
      // amount_off is in cents
      discountAmount = coupon.amount_off / 100;
    } else if (coupon.percent_off) {
      discountAmount = (originalAmount * coupon.percent_off) / 100;
    }

    const finalAmount = Math.max(0, originalAmount - discountAmount);
    const finalAmountCents = Math.round(finalAmount * 100);

    // Update Payment Intent with new amount
    await stripe.paymentIntents.update(paymentIntentId, {
      amount: finalAmountCents,
      metadata: {
        productSlug,
        appliedCoupon: couponCode.toUpperCase(),
        originalAmount: Math.round(originalAmount * 100),
        discountAmount: Math.round(discountAmount * 100),
        finalAmount: finalAmountCents,
      },
    });

    res.json({
      valid: true,
      discount: discountAmount,
      finalPrice: finalAmount,
    });
  } catch (err) {
    console.error("Coupon error:", err);
    res.status(500).json({
      valid: false,
      error: "Error al aplicar el cupón",
    });
  }
});

// Mailrelay subscribe endpoint (placeholder - implement your logic)
app.post("/api/mailrelay/subscribe", async (req, res) => {
  try {
    const { nombre, email, timeSinceLoad } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // TODO: Implement Mailrelay API integration
    // For now, just return success
    console.log("Subscribe request:", { nombre, email, timeSinceLoad });

    res.json({ success: true, message: "Subscribed successfully" });
  } catch (err) {
    console.error("Subscribe error:", err);
    res.status(500).json({ message: "Error al suscribir" });
  }
});

// Mailrelay resend endpoint (placeholder - implement your logic)
app.post("/api/mailrelay/resend", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // TODO: Implement Mailrelay API integration
    console.log("Resend request:", { email });

    res.json({ success: true, message: "Email resent successfully" });
  } catch (err) {
    console.error("Resend error:", err);
    res.status(500).json({ message: "Error al reenviar" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export for potential testing
module.exports = { app, sendNotificationEmail };
