// src/hooks/useAccentColor.js
// Shifts the CSS --accent variable as the user scrolls through sections
import { useEffect } from 'react';

const SECTION_ACCENTS = {
  home:           { accent: '#7C3AED', light: '#A78BFA', glow: 'rgba(124,58,237,0.18)' },
  about:          { accent: '#0EA5E9', light: '#7DD3FC', glow: 'rgba(14,165,233,0.15)' },
  skills:         { accent: '#10B981', light: '#6EE7B7', glow: 'rgba(16,185,129,0.15)' },
  projects:       { accent: '#F59E0B', light: '#FCD34D', glow: 'rgba(245,158,11,0.15)' },
  certifications: { accent: '#EC4899', light: '#F9A8D4', glow: 'rgba(236,72,153,0.15)' },
  achievements:   { accent: '#8B5CF6', light: '#C4B5FD', glow: 'rgba(139,92,246,0.15)' },
  contact:        { accent: '#7C3AED', light: '#A78BFA', glow: 'rgba(124,58,237,0.18)' },
};

export function useAccentColor() {
  useEffect(() => {
    const root = document.documentElement;

    const applyAccent = (sectionId) => {
      const colors = SECTION_ACCENTS[sectionId] || SECTION_ACCENTS.home;
      root.style.setProperty('--accent',       colors.accent);
      root.style.setProperty('--accent-light', colors.light);
      root.style.setProperty('--accent-glow',  colors.glow);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            applyAccent(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    Object.keys(SECTION_ACCENTS).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
