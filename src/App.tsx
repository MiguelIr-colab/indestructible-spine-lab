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
import Tienda from "./pages/Tienda";
import NotFound from "./pages/NotFound";

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
          <Route path="/tienda" element={<Tienda />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
