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
    try {
      const response = await fetch('/api/mailrelay/subscribe', {
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
                  src="https://res.cloudinary.com/draffep0n/video/upload/v1763053775/Landing_Evento_xsxre4.mp4"
                  className="absolute inset-0 w-full h-full"
                  controls
                  controlsList="nodownload"
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <div className="absolute left-[-5000px]" aria-hidden="true">
                    <Input id="website" type="text" value={formData.website} onChange={e => setFormData({
                    ...formData,
                    website: e.target.value
                  })} placeholder="Your website" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-primary mb-2">
                      Nombre
                    </label>
                    <Input id="nombre" type="text" value={formData.nombre} onChange={e => setFormData({
                    ...formData,
                    nombre: e.target.value
                  })} placeholder="Tu nombre completo" className="bg-background border-input" required />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} placeholder="tu@email.com" className="bg-background border-input" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} required />
                    {errors.email && <p id="email-error" className="text-destructive text-sm mt-1" role="alert" aria-live="polite">
                        {errors.email}
                      </p>}
                  </div>

                  <div>
                    <div className="flex items-start gap-3">
                      <Checkbox id="privacidad" checked={formData.privacidad} onCheckedChange={checked => setFormData({
                      ...formData,
                      privacidad: checked as boolean
                    })} className="mt-1" aria-invalid={!!errors.privacidad} aria-describedby={errors.privacidad ? "privacidad-error" : undefined} />
                      <label htmlFor="privacidad" className="text-sm text-foreground">
                        Acepto la{" "}
                        <a href="/politica-privacidad" className="text-primary hover:underline">
                          política de privacidad
                        </a>
                        {" "}y el tratamiento de datos para recibir información sobre el programa
                      </label>
                    </div>
                    {errors.privacidad && <p id="privacidad-error" className="text-destructive text-sm mt-1" role="alert" aria-live="polite">
                        {errors.privacidad}
                      </p>}
                  </div>

                  {errors.captcha && <p className="text-destructive text-sm" role="alert" aria-live="polite">
                      {errors.captcha}
                    </p>}

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6" disabled={!formData.privacidad || isSubmitting}>
                    {isSubmitting ? "ENVIANDO..." : "ENVIAR"}
                  </Button>
                </form>
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
