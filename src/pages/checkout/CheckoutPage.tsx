import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { useToast } from "@/hooks/use-toast";

const stripePromise = loadStripe(
  "pk_live_51QiLdnLv0O1dNyb5yj8OC8mIlsw2JNRupZxGEsRsz7opO5P28NpNZIb4gIuTYpFjt9FhZ9rk5t7NN4bao8YWjt0c00izSQSz4q"
);

const products = {
  "12-semanas": {
    name: "ESPALDA INDESTRUCTIBLE",
    duration: "12 semanas",
    price: 950,
    priceFormatted: "950,00€",
  },
  "6-meses": {
    name: "ESPALDA INDESTRUCTIBLE",
    duration: "6 meses",
    price: 1695,
    priceFormatted: "1.695,00€",
  },
  "1-ano": {
    name: "ESPALDA INDESTRUCTIBLE",
    duration: "1 año",
    price: 2795,
    priceFormatted: "2.795,00€",
  },
};

const CheckoutPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [loading, setLoading] = useState(true);

  const product = slug ? products[slug as keyof typeof products] : null;

  // Mantiene tu vista EXACTA — solo añade la lógica del cupón
  useEffect(() => {
    if (!product) {
      navigate("/espalda-indestructible");
      return;
    }

    const createPaymentIntent = async () => {
      const API_URL = import.meta.env.VITE_API_URL;
      try {
        const response = await fetch(
          `${API_URL}/api/create-payment-intent`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount: product.price * 100,
              currency: "eur",
              productName: `${product.name} - ${product.duration}`,
              productSlug: slug,
            }),
          }
        );

        const data = await response.json();

        setClientSecret(data.clientSecret);
        setPaymentIntentId(data.paymentIntentId);
        setLoading(false);

      } catch (error) {
        toast({
          title: "Error",
          description: "No se pudo iniciar el proceso de pago.",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    createPaymentIntent();
  }, [product, navigate, toast]);

  if (!product) return null;

  const appearance = { theme: "stripe" as const };
  const options = { clientSecret, appearance };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 md:pt-36 pb-16">
        <div className="container mx-auto px-4">

          <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-primary">
            Finalizar Compra
          </h1>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

              {/* Stripe Form */}
              {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              )}

              {/* Order Summary con precio FINAL */}
              <OrderSummary
                product={product}
                paymentIntentId={paymentIntentId}
                productSlug={slug || ""}
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;


