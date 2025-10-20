import { Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    legal: [
      { label: "Aviso Legal", href: "/aviso-legal" },
      { label: "Política de Privacidad", href: "/politica-privacidad" },
      { label: "Política de Cookies", href: "/politica-cookies" },
      { label: "Declaración de Accesibilidad", href: "/declaracion-accesibilidad" },
    ],
    resources: [
      { label: "Equipo", href: "/equipo" },
      { label: "Blog", href: "/blog" },
      { label: "Regalo", href: "/lead-magnet" },
      { label: "Contacto", href: "/#preguntame" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span className="text-foreground">ROBERTO</span>
                <span className="text-primary">GALVAN</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Entrenamiento personal online especializado en patologías de columna.
              Vuelve a entrenar sin miedo.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@RoberGalvan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/robertogalvan.hernias?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Roberto Galvan - Espalda Indestructible. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Este sitio no sustituye el diagnóstico médico profesional. Consulta siempre con tu médico.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
