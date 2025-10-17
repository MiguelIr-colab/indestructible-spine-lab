import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background pt-24">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">🔒 Política de Privacidad – Unbreakable Back LLC ("Espalda Indestructible")</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Protección de datos personales según el RGPD y la LOPDGDD</h2>
            <p className="text-muted-foreground mb-4">
              Unbreakable Back LLC, en adelante Espalda Indestructible, en cumplimiento de la normativa vigente en materia de protección de datos de carácter personal, informa que los datos personales que se recogen a través del sitio web https://espaldaindestructible.com/ se incluyen en ficheros automatizados titularidad de la empresa, creados y mantenidos bajo su responsabilidad.
            </p>
            <p className="text-muted-foreground mb-4">
              La recogida y el tratamiento automatizado de los datos personales tienen como finalidad mantener la relación comercial, así como realizar tareas de información, formación, asesoramiento y comunicación relacionadas con los servicios ofrecidos por Unbreakable Back LLC.
            </p>
            <p className="text-muted-foreground mb-4">
              Estos datos no serán cedidos a ninguna entidad externa, salvo obligación legal o consentimiento expreso del interesado.
            </p>
            <p className="text-muted-foreground">
              Espalda Indestructible aplica las medidas técnicas y organizativas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos personales, de acuerdo con lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Derechos de las personas interesadas</h2>
            <p className="text-muted-foreground mb-4">
              El usuario puede ejercer en cualquier momento los siguientes derechos reconocidos por la normativa vigente:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>Derecho de acceso:</strong> conocer qué datos personales tratamos y con qué finalidad.</li>
              <li><strong>Derecho de rectificación:</strong> solicitar la modificación de sus datos si son inexactos o incompletos.</li>
              <li><strong>Derecho de supresión (derecho al olvido):</strong> solicitar la eliminación de sus datos personales cuando ya no sean necesarios para los fines recogidos.</li>
              <li><strong>Derecho de oposición:</strong> oponerse a un tratamiento concreto de sus datos.</li>
              <li><strong>Derecho de limitación:</strong> solicitar la restricción temporal del tratamiento de sus datos.</li>
              <li><strong>Derecho a la portabilidad:</strong> recibir los datos en formato estructurado y de uso común, y poder transmitirlos a otro responsable.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              El ejercicio de estos derechos puede realizarse de forma gratuita enviando una solicitud escrita a:
              <br />
              📩 info@espaldaindestructible.com
            </p>
            <p className="text-muted-foreground">
              El usuario declara que todos los datos facilitados son veraces y se compromete a mantenerlos actualizados, notificando cualquier modificación a Unbreakable Back LLC.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Finalidad del tratamiento de los datos personales</h2>
            <p className="text-muted-foreground mb-4">
              En Espalda Indestructible, tratamos los datos personales recogidos a través del sitio web con las siguientes finalidades:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-foreground mb-2">Prestación de servicios:</h3>
                <p className="text-muted-foreground">
                  En caso de contratación de los servicios o productos ofrecidos en https://espaldaindestructible.com/, los datos se utilizarán para gestionar la relación contractual, administrativa y técnica necesaria para su correcta ejecución.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Gestión de consultas y solicitudes:</h3>
                <p className="text-muted-foreground">
                  Los datos enviados mediante formularios de contacto se emplearán para dar respuesta a las peticiones, sugerencias o consultas realizadas por los usuarios.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Comunicaciones comerciales y newsletters:</h3>
                <p className="text-muted-foreground mb-4">
                  Si el usuario lo autoriza expresamente, Unbreakable Back LLC podrá enviar boletines informativos, promociones y comunicaciones publicitarias relacionadas con sus servicios y actividades.
                </p>
                <p className="text-muted-foreground">
                  El usuario podrá revocar su consentimiento para el envío de comunicaciones comerciales en cualquier momento, enviando un correo electrónico a info@espaldaindestructible.com con el asunto "Baja de comunicaciones".
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Conservación de los datos</h2>
            <p className="text-muted-foreground">
              Los datos personales proporcionados se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y mientras exista una relación comercial o contractual entre el usuario y Espalda Indestructible. Posteriormente, se mantendrán bloqueados durante el plazo legalmente establecido para atender posibles responsabilidades derivadas del tratamiento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Legitimación del tratamiento</h2>
            <p className="text-muted-foreground mb-4">
              El tratamiento de los datos personales se basa en las siguientes bases jurídicas:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>Ejecución de un contrato o solicitud de servicios:</strong> necesaria para la prestación de los servicios ofrecidos por Unbreakable Back LLC.</li>
              <li><strong>Consentimiento del interesado:</strong> otorgado de forma libre, específica, informada e inequívoca mediante la aceptación de esta Política de Privacidad.</li>
              <li><strong>Cumplimiento de obligaciones legales:</strong> cuando sea necesario para el cumplimiento de normas fiscales, contables o administrativas.</li>
            </ul>
            <p className="text-muted-foreground">
              En caso de que el usuario no proporcione los datos solicitados o los facilite de forma incompleta, Espalda Indestructible no podrá garantizar la correcta prestación del servicio ni atender adecuadamente la solicitud.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Destinatarios de los datos</h2>
            <p className="text-muted-foreground">
              Unbreakable Back LLC no comunicará los datos personales a terceros, salvo obligación legal o requerimiento judicial. En caso de ser necesario compartir información con proveedores tecnológicos o de servicios, estos actuarán en calidad de encargados del tratamiento, con contratos que garantizan la confidencialidad y seguridad de los datos personales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Datos recopilados por los usuarios del servicio</h2>
            <p className="text-muted-foreground mb-4">
              En los casos en que los usuarios incluyan datos personales de terceros en los servidores de alojamiento o formularios gestionados por Espalda Indestructible, la empresa no será responsable del incumplimiento del RGPD por parte de dichos usuarios.
            </p>
            <p className="text-muted-foreground">
              El usuario garantiza que dispone de la legitimación necesaria para incluir esos datos y que ha informado debidamente a las personas afectadas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Conservación de datos y cumplimiento de la LSSI</h2>
            <p className="text-muted-foreground">
              En virtud de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), Unbreakable Back LLC conservará durante un periodo máximo de 12 meses la información necesaria para identificar el origen de los datos alojados y el momento en que se inició la prestación del servicio. Estos datos solo se pondrán a disposición de autoridades competentes en el marco de una investigación judicial o de seguridad pública.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Propiedad intelectual y derechos sobre los contenidos</h2>
            <p className="text-muted-foreground mb-4">
              Todos los derechos de autor, propiedad intelectual e industrial sobre el sitio web https://espaldaindestructible.com/ y sus contenidos pertenecen a Unbreakable Back LLC.
            </p>
            <p className="text-muted-foreground">
              No se permite la reproducción, publicación o uso no autorizado, total o parcial, de los contenidos del sitio sin el consentimiento previo y por escrito de la empresa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Seguridad de la información</h2>
            <p className="text-muted-foreground">
              Espalda Indestructible realiza copias de seguridad de los contenidos alojados en sus servidores, pero no se hace responsable de la pérdida o borrado accidental de datos por parte del usuario. En caso de pérdida imputable a la empresa, se procederá a la reposición de los datos según los términos del servicio contratado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Comunicaciones comerciales</h2>
            <p className="text-muted-foreground mb-4">
              De acuerdo con la LSSI, Unbreakable Back LLC no enviará comunicaciones publicitarias por correo electrónico u otro medio electrónico sin el consentimiento expreso de los destinatarios.
            </p>
            <p className="text-muted-foreground">
              En el caso de clientes con una relación contractual previa, la empresa podrá enviar comunicaciones sobre productos o servicios similares a los ya contratados. El usuario podrá solicitar la baja en cualquier momento escribiendo a:
              <br />
              📩 info@espaldaindestructible.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;
