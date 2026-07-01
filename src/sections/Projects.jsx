// src/sections/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/siteData';
import './Projects.css';

const FILTERS = ['All', 'AI / ML', 'Web'];

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="project-card card"
      whileHover={{ y: -7, boxShadow: '0 20px 56px var(--accent-glow)', borderColor: 'var(--hover-border)', transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Accent top bar */}
      <div className="project-accent-bar" />

      <div className="project-body">
        {/* Category + links */}
        <div className="project-meta">
          <span className="project-cat tag">{project.category}</span>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
                <Github size={14} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Live demo">
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <ul className="project-highlights">
          {project.highlights.map((h, i) => (
            <li key={i}>
              <ArrowUpRight size={12} className="highlight-icon" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="project-tech">
          {project.tech.map(t => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <motion.p className="eyebrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Projects
        </motion.p>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Things I've built
        </motion.h2>
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.18 }}>
          Projects spanning AI/ML and full-stack web development.
        </motion.p>

        {/* Filter tabs */}
        <motion.div className="filter-tabs" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-btn ${filter === f ? 'filter-btn--active' : ''}`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
          </AnimatePresence>
        </motion.div>

        <motion.div className="projects-cta" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <a href="https://github.com/Mohammed-Baqhir" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <Github size={15} /> More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
