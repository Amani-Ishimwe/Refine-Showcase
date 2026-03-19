import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import WritingDetails from './pages/WritingDetails';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="selection:bg-fg selection:text-bg">
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} currentTheme={theme} />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/writing/:id" element={<WritingDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
