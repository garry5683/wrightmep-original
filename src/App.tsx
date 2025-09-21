import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter,HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import AllServices from './pages/AllServices';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import AllProjects from './pages/AllProjects';

const queryClient = new QueryClient();

// ScrollToTop component to handle scroll reset on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
        {/* <HashRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter> */}
      <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;