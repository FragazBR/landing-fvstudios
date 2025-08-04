import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import LeadStep2 from "./pages/LeadStep2";
import Index from "./pages/Index";
import Food from "./pages/Food";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();



const App = () => {
  const location = useLocation();
  useEffect(() => {
    // Remove pixel anterior se houver
    const pixelScript = document.getElementById('fb-pixel-script');
    if (pixelScript) pixelScript.remove();
    const pixelNoscript = document.getElementById('fb-pixel-noscript');
    if (pixelNoscript) pixelNoscript.remove();

    // Decide qual pixel usar
    let pixelId = '726481886758284'; // brand padrão
    if (location.pathname.startsWith('/food')) {
      pixelId = '3978487882368573'; // food
    }

    // Injeta script do pixel
    const script = document.createElement('script');
    script.id = 'fb-pixel-script';
    script.innerHTML = `!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');`;
    document.head.appendChild(script);

    // Injeta noscript
    const noscript = document.createElement('noscript');
    noscript.id = 'fb-pixel-noscript';
    noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1" />`;
    document.body.appendChild(noscript);
  }, [location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/food" element={<Food />} />
          <Route path="/lead-step2" element={<LeadStep2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
