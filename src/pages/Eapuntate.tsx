import { useRef, useEffect } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import MinimalFooter from "@/components/MinimalFooter";
const Eapuntate = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    // Set video volume
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
    }
  }, []);
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
                <video ref={videoRef} src="https://res.cloudinary.com/draffep0n/video/upload/c_limit,w_720,f_auto,q_auto:eco/v1763053775/Landing_Evento_xsxre4.mp4" className="absolute inset-0 w-full h-full" controls controlsList="nodownload" preload="metadata" />
              </div>

              {/* Countdown Timer */}
              <div className="mb-8">
                
              </div>

              {/* Form Section */}
            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
    ACCEDE PARA FORTALECER TU COLUMNA
  </h2>

  {/* Formulario Mailrelay embebido */}
  <div className="space-y-6">
    <div className="ipz-container max-w-lg mx-auto">
      <iframe data-skip-lazy="" src="https://entrenaconrobertogalvan.ipzmarketing.com/f/e_QDvtOPmPI" frameBorder="0" scrolling="no" width="100%" className="ipz-iframe rounded-xl shadow-lg" style={{
                    background: "transparent",
                    minHeight: "420px",
                    border: "none"
                  }}></iframe>
    </div>

    <p className="text-center text-sm text-muted-foreground mt-4">
      Al enviar tus datos aceptas nuestra{" "}
      <a href="/politica-privacidad" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
        política de privacidad
      </a>.
    </p>
  </div>

  {/* Script de Mailrelay */}
  <script data-cfasync="false" type="text/javascript" src="https://assets.ipzmarketing.com/assets/signup_form/iframe_v1.js"></script>
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
export default Eapuntate;