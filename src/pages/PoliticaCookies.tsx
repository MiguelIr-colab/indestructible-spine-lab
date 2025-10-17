import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background pt-24">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Política de Cookies – Unbreakable Back LLC ("Espalda Indestructible")</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introducción</h2>
            <p className="text-muted-foreground mb-4">
              Unbreakable Back LLC, en adelante Espalda Indestructible, informa sobre el uso de cookies en su página web: https://espaldaindestructible.com/.
            </p>
            <p className="text-muted-foreground">
              El acceso y la navegación en este sitio web suponen la aceptación del uso de cookies en los términos establecidos en la presente Política. Si no está de acuerdo, puede configurar su navegador para bloquear o eliminar las cookies según se detalla más adelante.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. ¿Qué son las cookies?</h2>
            <p className="text-muted-foreground">
              Las cookies son archivos pequeños que se descargan en su dispositivo al acceder a determinadas páginas web. Estas herramientas tienen un papel esencial para la prestación de numerosos servicios digitales, ya que permiten, entre otras funciones, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo, y dependiendo de la información obtenida, se pueden utilizar para reconocer al usuario y mejorar los servicios ofrecidos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Tipos de cookies utilizadas</h2>
            <p className="text-muted-foreground mb-4">Según la entidad que gestione las cookies, estas pueden clasificarse en:</p>
            <p className="text-muted-foreground mb-4">
              <strong>Cookies propias:</strong> Son aquellas enviadas al dispositivo del usuario desde un equipo o dominio gestionado por Espalda Indestructible y desde el que se presta el servicio solicitado.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Cookies de terceros:</strong> Son aquellas enviadas al dispositivo del usuario desde un dominio que no es gestionado por Unbreakable Back LLC, sino por otra entidad que trata los datos obtenidos a través de las cookies.
            </p>
            <p className="text-muted-foreground mb-4">También se pueden clasificar según el tiempo que permanecen activas:</p>
            <p className="text-muted-foreground mb-4">
              <strong>Cookies de sesión:</strong> Diseñadas para recopilar y almacenar datos mientras el usuario accede a una página web. Se eliminan al cerrar el navegador.
            </p>
            <p className="text-muted-foreground">
              <strong>Cookies persistentes:</strong> Permanecen almacenadas en el equipo del usuario durante un periodo definido por el responsable de la cookie, que puede variar desde unos minutos hasta varios años.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Clasificación según su finalidad</h2>
            <p className="text-muted-foreground mb-4">Espalda Indestructible utiliza los siguientes tipos de cookies en su sitio web:</p>
            <p className="text-muted-foreground mb-4">
              <strong>Cookies técnicas:</strong> Permiten al usuario navegar por el sitio web y utilizar las diferentes opciones o servicios que se ofrecen, como controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a zonas restringidas, realizar procesos de compra o inscripciones, usar elementos de seguridad, almacenar contenidos para la difusión de vídeo o sonido, o compartir contenidos en redes sociales.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Cookies de personalización:</strong> Permiten acceder al servicio con características predefinidas como el idioma, el tipo de navegador, la configuración regional, o el diseño del sitio web.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Cookies de análisis:</strong> Permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico del uso que hacen los usuarios del sitio web, con el fin de mejorar la oferta de productos y servicios.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Cookies publicitarias:</strong> Permiten la gestión eficaz de los espacios publicitarios que se incluyen en el sitio web, adaptando el contenido del anuncio al servicio solicitado o al uso que haga el usuario del sitio.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Cookies de publicidad comportamental:</strong> Almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad personalizada.
            </p>
            <p className="text-muted-foreground">
              <strong>Cookies de redes sociales externas:</strong> Se utilizan para interactuar con el contenido de distintas plataformas sociales (como Facebook, Instagram, YouTube, etc.). Su uso se rige por las políticas de privacidad de cada red social.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Desactivación o eliminación de cookies</h2>
            <p className="text-muted-foreground mb-4">
              El usuario tiene la posibilidad de permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador que utilice.
            </p>
            <p className="text-muted-foreground mb-4">
              Debe tener en cuenta que, si desactiva las cookies, es posible que algunos servicios o funcionalidades del sitio web dejen de estar disponibles.
            </p>
            <p className="text-muted-foreground mb-4">A continuación, se incluyen enlaces con información para gestionar cookies en los navegadores más comunes:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>
                <a href="https://support.microsoft.com/es-es/topic/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Microsoft Edge / Internet Explorer
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Safari
                </a>
              </li>
              <li>
                <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Opera
                </a>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Asimismo, puede gestionar las cookies desde herramientas externas como Ghostery o Your Online Choices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Cookies utilizadas en https://espaldaindestructible.com/</h2>
            <p className="text-muted-foreground">
              El sitio web de Unbreakable Back LLC puede utilizar cookies propias y de terceros con fines técnicos, analíticos y publicitarios. La información específica sobre las cookies activas, su duración y finalidad se muestra en el banner de consentimiento de cookies, disponible al acceder al sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Aceptación de la Política de Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Al continuar navegando en https://espaldaindestructible.com/, se entiende que el usuario acepta la instalación y uso de cookies. El sitio mostrará un aviso informativo en la parte inferior que permitirá al usuario:
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Aceptar todas las cookies:</strong> No se mostrará el aviso nuevamente durante la sesión actual.
            </p>
            <p className="text-muted-foreground">
              <strong>Rechazar o configurar:</strong> El usuario podrá personalizar sus preferencias y obtener más información sobre las cookies utilizadas.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaCookies;
