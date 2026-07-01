// src/sections/Hero.jsx
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { personal } from '../data/siteData';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const wordReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 18, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="home" className="hero-section section">
      <div className="section-inner hero-inner">

        {/* ── Left — text ── */}
        <div className="hero-text">

          {/* Status pill */}
          <motion.div
            className="hero-status"
            {...fadeUp(0.1)}
            whileHover={{ scale: 1.04, boxShadow: '0 0 18px rgba(124,58,237,0.3)' }}
            transition={{ duration: 0.18 }}
          >
            <span className="status-dot" />
            Available for Jobs & Internships
          </motion.div>

          {/* Name */}
          <motion.h1 className="hero-name">
            <motion.span
              style={{ display: 'inline-block' }}
              {...wordReveal(0.18)}
            >
              {personal.displayName.split(' ')[0]}
            </motion.span>{' '}
            <motion.span
              className="grad-text"
              style={{ display: 'inline-block' }}
              {...wordReveal(0.3)}
            >
              {personal.displayName.split(' ').slice(1).join(' ')}
            </motion.span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div className="hero-role" {...fadeUp(0.35)}>
            <TypeAnimation
              sequence={personal.roles.flatMap(r => [r, 2400])}
              wrapper="span"
              cursor
              repeat={Infinity}
              className="role-typed"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p className="hero-tagline" {...fadeUp(0.45)}>
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero-ctas" {...fadeUp(0.55)}>
            <motion.a
              href="#projects"
              className="btn btn-primary"
              onClick={e => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.03, y: -2, boxShadow: '0 0 28px rgba(124,58,237,0.35)' }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects <ArrowRight size={15} />
            </motion.a>
            <motion.a
              href={personal.resumeFile}
              download
              className="btn btn-outline"
              whileHover={{ scale: 1.03, y: -2, borderColor: 'var(--accent)', backgroundColor: 'var(--accent-glow)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={15} /> Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline"
              onClick={e => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.03, y: -2, borderColor: 'var(--accent)', backgroundColor: 'var(--accent-glow)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={15} /> Contact
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div className="hero-socials" {...fadeUp(0.65)}>
            {[
              { href: personal.github, Icon: Github, label: 'GitHub' },
              { href: personal.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${personal.email}`, Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="social-link"
                aria-label={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, scale: 1.12 }}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── Right — circular photo + side tags ── */}
        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ambient glow */}
          <div className="photo-glow" />

          {/* Circular ring border — static */}
          <div className="photo-ring" />

          {/* Pulsing orbit ring */}
          <div className="photo-ring-pulse" />



          {/* Photo */}
          <img
            src={personal.photo}
            alt={personal.name}
            className="hero-photo"
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />

          {/* Fallback initials */}
          <div className="photo-placeholder" style={{ display: 'none' }}>
            {personal.displayName.split(' ').map(w => w[0]).join('')}
          </div>

          {/* ── Floating side tags ── */}

          {/* Top-right: Full Stack Dev */}
          <motion.div
            className="chip chip-top chip-float-a"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            <span className="chip-dot" />
            Full Stack Dev
          </motion.div>

          {/* Left-center: Data Analytics */}
          <motion.div
            className="chip-left chip-float-b"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            <span className="chip-dot-blue" />
            Data Analytics
          </motion.div>

          {/* Bottom-right: AI & ML */}
          <motion.div
            className="chip chip-bottom chip-float-c"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <span className="chip-dot" />
            AI & ML
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="scroll-dot"
        />
      </motion.div>
    </section>
  );
}
