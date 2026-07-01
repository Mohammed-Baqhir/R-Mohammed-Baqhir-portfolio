// src/App.jsx
import { useAccentColor } from './hooks/useAccentColor';
import CapsuleNav   from './components/CapsuleNav';
import Footer       from './components/Footer';
import Hero         from './sections/Hero';
import About        from './sections/About';
import Skills       from './sections/Skills';
import Projects     from './sections/Projects';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Contact      from './sections/Contact';
import './styles/globals.css';

export default function App() {
  // Drives the smooth accent-color shift as user scrolls
  useAccentColor();

  return (
    <>
      {/* Floating capsule navigation */}
      <CapsuleNav />

      {/* Page sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
