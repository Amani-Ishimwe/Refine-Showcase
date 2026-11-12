import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import WorkPage from './pages/WorkPage';
import ProjectDetails from './pages/ProjectDetails';
import ProductsPage from './pages/ProductsPage';
import ProductDetails from './pages/ProductDetails';
import VenturesPage from './pages/VenturesPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PricingPage from './pages/PricingPage';
import ExperiencePage from './pages/ExperiencePage';
import InitiativesPage from './pages/InitiativesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WritingDetails from './pages/WritingDetails';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout toggleTheme={toggleTheme} currentTheme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<WorkPage />} />
          <Route path="/project" element={<WorkPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:id" element={<ProjectDetails />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="/studios" element={<VenturesPage />} />
          <Route path="/agencies" element={<VenturesPage />} />
          <Route path="/businesses" element={<VenturesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/initiatives" element={<InitiativesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/writing/:id" element={<WritingDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
