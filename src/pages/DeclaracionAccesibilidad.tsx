import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DeclaracionAccesibilidad = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background pt-24">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Declaración de Accesibilidad – Unbreakable Back LLC ("Espalda Indestructible")</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introducción</h2>
            <p className="text-muted-foreground mb-4">
              Unbreakable Back LLC, en adelante Espalda Indestructible, está firmemente comprometida con garantizar la accesibilidad universal de su sitio web y su aplicación para dispositivos móviles, en cumplimiento con lo establecido en el Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público.
            </p>
            <p className="text-muted-foreground">
              La presente declaración de accesibilidad se aplica al sitio web:
              <br />
              👉 https://espaldaindestructible.com/
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Alcance y ámbito de aplicación</h2>
            <p className="text-muted-foreground mb-4">
              Esta declaración se refiere exclusivamente al sitio web corporativo de Espalda Indestructible, el cual comparte la misma estructura, contenido y nivel de cumplimiento en todas sus secciones y subdominios.
            </p>
            <p className="text-muted-foreground">
              De acuerdo con las recomendaciones nacionales e internacionales, Unbreakable Back LLC mantiene su compromiso de ofrecer información clara, verificable y actualizada sobre el grado de accesibilidad de su entorno digital, para garantizar que todas las personas puedan acceder a sus contenidos y servicios sin barreras.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Situación de cumplimiento</h2>
            <p className="text-muted-foreground mb-4">
              El sitio web https://espaldaindestructible.com/ es parcialmente conforme con los requisitos de accesibilidad establecidos en el Real Decreto 1112/2018, debido a las excepciones y limitaciones que se indican a continuación:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Algunos vídeos del sitio web pueden carecer de subtítulos o audiodescripción.</li>
              <li>Ciertos elementos de formularios podrían no estar plenamente etiquetados para lectores de pantalla.</li>
              <li>En ocasiones se utilizan combinaciones de colores con bajo contraste.</li>
            </ul>
            <p className="text-muted-foreground">
              Espalda Indestructible trabaja de manera continua para corregir estas incidencias y mejorar la experiencia de navegación de todos los usuarios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Preparación de esta declaración de accesibilidad</h2>
            <p className="text-muted-foreground mb-4">
              La presente declaración fue elaborada el 14 de marzo de 2023, mediante una autoevaluación interna llevada a cabo por el equipo técnico de Unbreakable Back LLC.
            </p>
            <p className="text-muted-foreground">
              La empresa revisa periódicamente sus plataformas digitales para garantizar la mejora progresiva en materia de accesibilidad, conforme a las directrices WCAG (Web Content Accessibility Guidelines).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Observaciones y datos de contacto</h2>
            <p className="text-muted-foreground mb-4">
              Puede comunicarse con Espalda Indestructible para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Informar sobre posibles incumplimientos de accesibilidad.</li>
              <li>Transmitir dificultades de acceso al contenido.</li>
              <li>Formular consultas o sugerencias de mejora relativas a la accesibilidad del sitio web.</li>
            </ul>
            <p className="text-muted-foreground">
              📩 Correo electrónico de contacto:
              <br />
              info@espaldaindestructible.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Procedimiento de aplicación</h2>
            <p className="text-muted-foreground mb-4">
              Si, tras realizar una solicitud de información accesible o presentar una queja, el usuario considera que la respuesta obtenida no cumple los requisitos establecidos en el artículo 12.5 del Real Decreto 1112/2018, o no ha recibido respuesta dentro del plazo de veinte días hábiles, podrá presentar una reclamación formal.
            </p>
            <p className="text-muted-foreground">
              La reclamación puede interponerse mediante la Instancia Genérica de la Sede Electrónica del Ministerio de Asuntos Económicos y Transformación Digital, o por cualquiera de los medios previstos en la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Compromiso de mejora continua</h2>
            <p className="text-muted-foreground mb-4">
              Unbreakable Back LLC mantiene un compromiso activo con la mejora constante de la accesibilidad digital, con el objetivo de que su sitio web y sus aplicaciones sean plenamente utilizables por todas las personas, independientemente de sus capacidades, entorno tecnológico o idioma.
            </p>
            <p className="text-muted-foreground">
              El equipo de Espalda Indestructible trabaja de forma continua en la optimización de contenidos, la revisión técnica del diseño y la formación de su personal en buenas prácticas de accesibilidad web.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeclaracionAccesibilidad;
