// src/sections/Skills.jsx
import { motion } from 'framer-motion';
import { skills } from '../data/siteData';
import './Skills.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          What I Work With
        </motion.h2>
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.18 }}>
          Technologies and tools I use to build, analyse, and deploy.
        </motion.p>

        <motion.div
          className="skills-grid"
          variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map((cat) => (
            <motion.div
              key={cat.category}
              className="skill-card card"
              variants={item}
              whileHover={{ y: -5, boxShadow: '0 16px 48px var(--accent-glow)', borderColor: 'var(--hover-border)' }}
              transition={{ duration: 0.22 }}
            >
              {/* Header */}
              <div className="skill-card-head">
                <span className="skill-icon">{cat.icon}</span>
                <h3 className="skill-cat">{cat.category}</h3>
              </div>
              {/* Badges */}
              <div className="skill-badges">
                {cat.items.map((skill) => (
                  <motion.span
                    key={skill}
                    className="tag"
                    whileHover={{ scale: 1.08, boxShadow: '0 0 12px var(--accent-glow)' }}
                    transition={{ duration: 0.15 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
