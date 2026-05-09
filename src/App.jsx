import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

const MainLayout = ({ toggleTheme, theme }) => (
  <>
    <ScrollProgress />
    <Navbar toggleTheme={toggleTheme} theme={theme} />
    <main>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout toggleTheme={toggleTheme} theme={theme} />} />
          <Route path="/project/:id" element={
            <>
              <Navbar toggleTheme={toggleTheme} theme={theme} />
              <ProjectDetail />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
