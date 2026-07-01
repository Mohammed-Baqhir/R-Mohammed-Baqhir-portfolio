// src/components/Footer.jsx
import { Github, Linkedin, Mail, ArrowUp, Download } from 'lucide-react';
import { personal } from '../data/siteData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner section-inner">
        <div className="footer-top">
          <p className="footer-brand">
            <span className="grad-text">&lt;</span>Baqhir<span className="grad-text">/&gt;</span>
          </p>
          <p className="footer-sub">Software Developer · AI/ML · Full Stack · Chennai</p>
        </div>

        <div className="footer-actions">
          {[
            { href: personal.github,   Icon: Github,   label: 'GitHub' },
            { href: personal.linkedin, Icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${personal.email}`, Icon: Mail, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer" className="footer-icon" aria-label={label}>
              <Icon size={16} />
            </a>
          ))}
          <a href={personal.resumeFile} download className="footer-icon" aria-label="Download Resume">
            <Download size={16} />
          </a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="footer-icon" aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} {personal.name} · Built with React + Vite + Framer Motion
        </p>
      </div>
    </footer>
  );
}
