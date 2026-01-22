import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import CountdownTimer from "@/components/CountdownTimer";
import MinimalFooter from "@/components/MinimalFooter";

const Evento = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    privacidad: false,
    website: "" // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    privacidad: "",
    email: "",
    captcha: ""
  });
  const formLoadTime = useRef<number>(Date.now());

  useEffect(() => {
    // Record when the form was loaded
    formLoadTime.current = Date.now();
    // Set video volume
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
    }
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({
      privacidad: "",
      email: "",
      captcha: ""
    });

    // Check honeypot (should be empty)
    if (formData.website) {
      setErrors(prev => ({
        ...prev,
        captcha: "No verificado como humano"
      }));
      return;
    }

    // Check timing (must be at least 3 seconds since page load)
    const timeSinceLoad = (Date.now() - formLoadTime.current) / 1000;
    if (timeSinceLoad < 3) {
      setErrors(prev => ({
        ...prev,
        captcha: "No verificado como humano"
      }));
      return;
    }

    // Validate privacy acceptance
    if (!formData.privacidad) {
      setErrors(prev => ({
        ...prev,
        privacidad: "Debes aceptar la política de privacidad"
      }));
      return;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      setErrors(prev => ({
        ...prev,
        email: "Email inválido"
      }));
      return;
    }

    setIsSubmitting(true);
    const API_URL = import.meta.env.VITE_API_URL;
    try {
      const response = await fetch(`${API_URL}/api/mailrelay/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          timeSinceLoad
        })
      });

      if (response.ok) {
        // Redirect to thank you page on success
        navigate('/thankyou');
      } else {
        const data = await response.json();
        toast.error(data.message || "Error al enviar el formulario");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Error al conectar con el servidor");
    } finally {
      setIsSubmitting(false);
    }
  };

  return <div className="min-h-screen bg-background">
      <main className="py-8 md:py-12">
        {/* VSL Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-center mb-8 md:mb-12">
                ESPALDA INDESTRUCTIBLE
              </h1>
              
              {/* Video Container - Smaller */}
              <div className="relative w-full max-w-3xl mx-auto aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <video 
                  ref={videoRef}
                  src="https://res.cloudinary.com/draffep0n/video/upload/c_limit,w_720,f_auto,q_auto:eco/v1763053775/Landing_Evento_xsxre4.mp4"
                  className="absolute inset-0 w-full h-full"
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                />
              </div>

              {/* Countdown Timer */}
              <div className="mb-8">
                <CountdownTimer />
              </div>

              {/* Form Section */}
<div className="bg-card border border-border rounded-lg p-8 md:p-12">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
    ACCEDE PARA FORTALECER TU COLUMNA
  </h2>

  {/* Formulario Mailrelay embebido */}
  <div className="space-y-6">
    <div className="ipz-container max-w-lg mx-auto">
      <iframe
        data-skip-lazy=""
        src="https://entrenaconrobertogalvan.ipzmarketing.com/f/eOO2aPOsX1A"
        frameBorder="0"
        scrolling="no"
        width="100%"
        className="ipz-iframe rounded-xl shadow-lg"
        style={{
          background: "transparent",
          minHeight: "420px",
          border: "none",
        }}
      ></iframe>
    </div>

    <p className="text-center text-sm text-muted-foreground mt-4">
      Al enviar tus datos aceptas nuestra{" "}
      <a
        href="/politica-privacidad"
        className="text-primary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        política de privacidad
      </a>.
    </p>
  </div>

  {/* Script de Mailrelay */}
  <script
    data-cfasync="false"
    type="text/javascript"
    src="https://assets.ipzmarketing.com/assets/signup_form/iframe_v1.js"
  ></script>
</div>


              {/* Next Steps Section */}
              <div className="mt-16 bg-card border border-border rounded-lg p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
                  ¿CUÁL ES EL SIGUIENTE PASO?
                </h3>
                
                <div className="space-y-4 max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <div className="text-primary text-xl mt-1">✓</div>
                    <p className="text-foreground">
                      Te llegará un email de verificación
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary text-xl mt-1">✓</div>
                    <p className="text-foreground">
                      Tras verificar se abrirá YouTube y te llegará un email con un enlace al grupo de WhatsApp
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary text-xl mt-1">✓</div>
                    <p className="text-foreground">
                      Mira la carpeta de SPAM por si acaso
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary text-xl mt-1">✓</div>
                    <p className="text-foreground">
                      Si no llega el email pulsa en volver a enviar
                    </p>
                  </div>
                </div>
              </div>

              {/* Waiting Message */}
              <div className="mt-12 text-center">
                
              </div>
            </div>
          </div>
        </section>
      </main>
      <MinimalFooter />
    </div>;
};

export default Evento;
