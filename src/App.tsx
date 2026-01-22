import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import WritingDetails from './pages/WritingDetails';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="selection:bg-accent selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/writing/:id" element={<WritingDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
