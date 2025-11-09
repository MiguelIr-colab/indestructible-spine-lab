import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import teamRoberto from "@/assets/team-roberto.png";
import teamMaria from "@/assets/team-maria.png";
import teamCarlos from "@/assets/team-carlos.png";
import teamHugo from "@/assets/team-hugo.png";
import teamKevin from "@/assets/team-kevin.png";
import teamLaura from "@/assets/team-laura.png";

const Equipo = () => {
  const teamMembers = [
    {
      name: "Roberto Galván",
      role: "Entrenador Personal Especializado",
      description: "Experto en readaptación de patologías de columna. Más de 10 años ayudando a personas a recuperar su vida activa sin dolor.",
      specialties: ["Hernia Discal", "Estenosis Lumbar", "Protusión Discal"],
      certifications: [
        "Graduado en Ciencias de la Actividad Física y el Deporte",
        "Especialización en Readaptación Funcional",
        "Certificación en Métodos McGill de Estabilización Lumbar",
        "Formación continua en patologías de columna vertebral",
      ],
      image: teamRoberto,
    },
    {
      name: "María Fernández",
      role: "Fisioterapeuta Deportiva",
      description: "Especializada en rehabilitación funcional y prevención de lesiones. Enfoque integral para recuperar movilidad y fuerza.",
      specialties: ["Rehabilitación", "Terapia Manual", "Prevención"],
      certifications: [
        "Graduada en Fisioterapia",
        "Máster en Fisioterapia Deportiva",
        "Especialización en Terapia Manual Ortopédica",
        "Formación en Ejercicio Terapéutico",
      ],
      image: teamMaria,
    },
    {
      name: "Carlos Martínez",
      role: "Coach de Movimiento",
      description: "Experto en biomecánica y patrones de movimiento. Ayuda a restaurar la función natural del cuerpo.",
      specialties: ["Biomecánica", "Movilidad", "Estabilidad"],
      certifications: [
        "Certificado en Functional Movement Screen (FMS)",
        "Especialización en Biomecánica Aplicada",
        "Formación en Corrección de Patrones de Movimiento",
        "Certificación en Entrenamiento Funcional",
      ],
      image: teamCarlos,
    },
    {
      name: "Hugo",
      role: "Fisioterapeuta Deportivo",
      description: "Especializado en tratamiento de lesiones deportivas y recuperación funcional. Enfoque personalizado para cada paciente.",
      specialties: ["Lesiones Deportivas", "Recuperación", "Movilidad"],
      certifications: [
        "Graduado en Fisioterapia",
        "Especialización en Fisioterapia Deportiva",
        "Formación en Terapia Manual",
        "Certificación en Readaptación Funcional",
      ],
      image: teamHugo,
    },
    {
      name: "Kevin",
      role: "Fisioterapeuta Especializado",
      description: "Experto en tratamiento de patologías de columna vertebral. Combina técnicas manuales con ejercicio terapéutico.",
      specialties: ["Columna Vertebral", "Terapia Manual", "Ejercicio Terapéutico"],
      certifications: [
        "Graduado en Fisioterapia",
        "Máster en Terapia Manual Ortopédica",
        "Especialización en Patologías de Columna",
        "Formación en Ejercicio Correctivo",
      ],
      image: teamKevin,
    },
    {
      name: "Laura Sánchez",
      role: "Nutricionista Deportiva",
      description: "Especializada en nutrición antiinflamatoria y recuperación. Optimiza tu alimentación para una espalda saludable.",
      specialties: ["Antiinflamatorio", "Recuperación", "Rendimiento"],
      certifications: [
        "Graduada en Nutrición Humana y Dietética",
        "Máster en Nutrición Deportiva",
        "Especialización en Nutrición Antiinflamatoria",
        "Formación en Suplementación Deportiva",
      ],
      image: teamLaura,
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--light-gray))]">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-[hsl(var(--light-gray))]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-secondary-foreground">
                Nuestro Equipo
              </h1>
              <p className="text-xl text-secondary-foreground/70 max-w-3xl mx-auto">
                Profesionales especializados en ayudarte a volver a entrenar sin dolor
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-background border-border p-6 flex flex-col">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-2">
                      {member.name}
                    </h2>
                    <p className="text-primary font-semibold text-sm mb-3">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 text-center flex-grow">
                    {member.description}
                  </p>

                  <div className="border-t border-border pt-6">
                    <h3 className="text-sm font-bold text-foreground mb-3 text-center">
                      Especialidades
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="bg-primary text-primary-foreground px-3 py-1 rounded-md font-semibold text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 mt-6">
                    <h3 className="text-base font-bold text-foreground mb-3 text-center">
                      Formación y Certificaciones
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {member.certifications.map((cert, i) => (
                        <li key={i} className="flex items-start text-xs">
                          <span className="text-primary mr-2 flex-shrink-0">✓</span>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Equipo;
