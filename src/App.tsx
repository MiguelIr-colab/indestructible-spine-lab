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
import HerniaDiscal from "./pages/HerniaDiscal";
import Tienda from "./pages/Tienda";
import Programa from "./pages/Programa";
import Eventos from "./pages/Eventos";
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
          <Route path="/blog/hernia-discal" element={<HerniaDiscal />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/programa" element={<Programa />} />
          <Route path="/eventos" element={<Eventos />} />
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
