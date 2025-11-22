import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Testimonios from "./pages/Testimonios";
import LeadMagnet from "./pages/LeadMagnet";
import Equipo from "./pages/Equipo";
import Blog from "./pages/Blog";
import AntiinflamatorioHerniaDiscal from "./pages/AntiinflamatorioHerniaDiscal";
import HerniaDiscal from "./pages/HerniaDiscal";
import HerniaDiscalL5S1 from "./pages/HerniaDiscalL5S1";
import EstenosisLumbar from "./pages/EstenosisLumbar";
import HerniaCervicalC5C6 from "./pages/HerniaCervicalC5C6";
import HerniaDiscalReabsorber from "./pages/HerniaDiscalReabsorber";
import HerniaDiscalCurar from "./pages/HerniaDiscalCurar";
import HerniaDiscalEjerciciosEvitar from "./pages/HerniaDiscalEjerciciosEvitar";
import HerniaDiscalLumbar from "./pages/HerniaDiscalLumbar";
import EjerciciosQueNoDeboHacer from "./pages/EjerciciosQueNoDeboHacer";
import HerniaDiscalComoSeProduceYComoCurarla from "./pages/HerniaDiscalComoSeProduceYComoCurarla";
import EspaldaIndestructible from "./pages/EspaldaIndestructible";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import Programa from "./pages/Programa";
import Evento from "./pages/Evento";
import Evento2 from "./pages/Evento2";
import Thankyou from "./pages/Thankyou";
import NotFound from "./pages/NotFound";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaCookies from "./pages/PoliticaCookies";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import DeclaracionAccesibilidad from "./pages/DeclaracionAccesibilidad";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/lead-magnet" element={<LeadMagnet />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/antiinflamatorio-hernia-discal" element={<AntiinflamatorioHerniaDiscal />} />
          <Route path="/blog/como-curar-hernia-discal-sin-cirugia" element={<HerniaDiscal />} />
          <Route path="/blog/hernia-discal-l5-s1" element={<HerniaDiscalL5S1 />} />
          <Route path="/blog/estenosis-lumbar" element={<EstenosisLumbar />} />
          <Route path="/blog/hernia-cervical-c5-c6" element={<HerniaCervicalC5C6 />} />
          <Route path="/blog/hernia-discal-se-puede-reabsorber-sola-sin-cirugia" element={<HerniaDiscalReabsorber />} />
          <Route path="/blog/curar-hernia-discal-sin-cirugia" element={<HerniaDiscalCurar />} />
          <Route path="/blog/ejercicios-que-no-debo-hacer-hernia-discal" element={<HerniaDiscalEjerciciosEvitar />} />
          <Route path="/blog/ejercicios-hernia-discal-lumbar" element={<HerniaDiscalLumbar />} />
          <Route path="/blog/ejercicios-que-no-debo-hacer-si-tengo-hernia-discal" element={<EjerciciosQueNoDeboHacer />} />
          <Route path="/blog/hernia-discal-como-se-produce-y-como-curarla-sin-cirugia" element={<HerniaDiscalComoSeProduceYComoCurarla />} />
          <Route path="/espalda-indestructible" element={<EspaldaIndestructible />} />
          <Route path="/espalda-indestructible/:slug" element={<CheckoutPage />} />
          <Route path="/programa" element={<Programa />} />
          <Route path="/evento" element={<Evento />} />
          <Route path="/evento2" element={<Evento2 />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/declaracion-accesibilidad" element={<DeclaracionAccesibilidad />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
