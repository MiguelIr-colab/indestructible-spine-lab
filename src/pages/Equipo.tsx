import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Equipo = () => {
  const teamMembers = [
    {
      name: "Roberto Galván",
      role: "Entrenador Personal Especializado",
      description: "Experto en readaptación de patologías de columna. Más de 10 años ayudando a personas a recuperar su vida activa sin dolor.",
      specialties: ["Hernia Discal", "Estenosis Lumbar", "Protusión Discal"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">
                Nuestro Equipo
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Profesionales especializados en ayudarte a volver a entrenar sin dolor
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-card border-border p-8 md:p-12">
                  <div className="text-center mb-8">
                    <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-card-foreground mb-2">
                      {member.name}
                    </h2>
                    <p className="text-primary font-semibold text-lg mb-4">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-lg mb-8 text-center max-w-2xl mx-auto">
                    {member.description}
                  </p>

                  <div className="border-t border-border pt-8">
                    <h3 className="text-xl font-bold text-card-foreground mb-4 text-center">
                      Especialidades
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-card-foreground mb-6 text-center">
                Formación y Certificaciones
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Graduado en Ciencias de la Actividad Física y el Deporte</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Especialización en Readaptación Funcional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Certificación en Métodos McGill de Estabilización Lumbar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Formación continua en patologías de columna vertebral</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Equipo;
