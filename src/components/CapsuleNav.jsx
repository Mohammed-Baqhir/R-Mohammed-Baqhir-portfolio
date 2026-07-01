// src/components/CapsuleNav.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Zap, FolderOpen, FileText, Mail, Menu, X } from 'lucide-react';
import './CapsuleNav.css';

const NAV_ITEMS = [
  { id: 'home',           label: 'Home',     Icon: Home },
  { id: 'about',          label: 'About',    Icon: User },
  { id: 'skills',         label: 'Skills',   Icon: Zap },
  { id: 'projects',       label: 'Projects', Icon: FolderOpen },
  { id: 'certifications', label: 'Certs',    Icon: FileText },
  { id: 'contact',        label: 'Contact',  Icon: Mail },
];

export default function CapsuleNav() {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show nav after slight delay on load
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const ids = NAV_ITEMS.map(n => n.id);
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop capsule */}
      <AnimatePresence>
        {visible && (
          <motion.nav
            className="capsule-nav"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            {NAV_ITEMS.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`capsule-item ${active === id ? 'capsule-item--active' : ''}`}
                aria-label={label}
              >
                <Icon size={15} />
                <span className="capsule-label">{label}</span>
                {active === id && (
                  <motion.span
                    className="capsule-pill"
                    layoutId="capsule-active"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile fab */}
      <button
        className="mobile-fab"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_ITEMS.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`mobile-menu-item ${active === id ? 'mobile-menu-item--active' : ''}`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
