import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AvisoLegal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">🧾 Aviso Legal – Unbreakable Back LLC ("Espalda Indestructible")</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Información general</h2>
            <p className="text-muted-foreground mb-4">
              En cumplimiento de lo dispuesto por la legislación aplicable, Unbreakable Back LLC (en adelante, "la Empresa" o "Espalda Indestructible") no puede asumir ninguna responsabilidad derivada del uso incorrecto, inapropiado o ilícito de la información aparecida en el sitio web: https://espaldaindestructible.com/.
            </p>
            <p className="text-muted-foreground">
              Con los límites establecidos en la ley, Unbreakable Back LLC no asume ninguna responsabilidad derivada de la falta de veracidad, integridad, actualización y precisión de los datos o informaciones contenidas en sus páginas web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Contenidos</h2>
            <p className="text-muted-foreground mb-4">
              Los contenidos e información incluidos en el Sitio Web no vinculan a Unbreakable Back LLC, ni constituyen opiniones, consejos o asesoramiento legal de ningún tipo. Se trata exclusivamente de un servicio ofrecido con carácter informativo y divulgativo.
            </p>
            <p className="text-muted-foreground">
              Las páginas del Sitio Web pueden contener enlaces (links) a sitios web de terceros que están fuera del control de Espalda Indestructible. Por tanto, Unbreakable Back LLC no puede asumir responsabilidad alguna por el contenido que pueda aparecer en dichos sitios externos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Propiedad intelectual</h2>
            <p className="text-muted-foreground mb-4">
              Los textos, imágenes, sonidos, animaciones, software y demás contenidos incluidos en este sitio web son propiedad exclusiva de Unbreakable Back LLC o de sus licenciantes.
            </p>
            <p className="text-muted-foreground">
              Cualquier acto de transmisión, distribución, cesión, reproducción, almacenamiento o comunicación pública total o parcial deberá contar con el consentimiento expreso y por escrito de Espalda Indestructible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Protección de datos personales</h2>
            <p className="text-muted-foreground mb-4">
              Para acceder a algunos de los servicios ofrecidos por Unbreakable Back LLC a través del Sitio Web, puede ser necesario proporcionar determinados datos de carácter personal.
            </p>
            <p className="text-muted-foreground mb-4">
              En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD), relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, le informamos que los datos personales facilitados a través de los formularios de este sitio quedarán incorporados a los ficheros titularidad de Unbreakable Back LLC, con el fin de poder prestar y ofrecer nuestros servicios, así como informarle sobre novedades o mejoras del sitio web.
            </p>
            <p className="text-muted-foreground">
              En cualquier momento, el usuario podrá ejercer sus derechos de acceso, rectificación, cancelación, oposición, limitación y portabilidad de sus datos personales de manera gratuita, enviando un correo electrónico a:
              <br />
              📩 info@espaldaindestructible.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Limitación de responsabilidad</h2>
            <p className="text-muted-foreground">
              Espalda Indestructible no garantiza la disponibilidad continua y permanente del sitio web y de los servicios ofrecidos en él. Unbreakable Back LLC no será responsable de los daños y perjuicios que pudieran derivarse de la falta de disponibilidad o continuidad del funcionamiento del Sitio Web o de los servicios asociados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Legislación aplicable y jurisdicción</h2>
            <p className="text-muted-foreground">
              Las relaciones entre Unbreakable Back LLC y los usuarios de sus servicios telemáticos presentes en este sitio web se someten a la legislación y jurisdicción de los tribunales competentes conforme al domicilio de la empresa, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AvisoLegal;
