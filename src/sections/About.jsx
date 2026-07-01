// src/sections/About.jsx
import { motion } from 'framer-motion';
import { MapPin, Mail, GraduationCap, Download } from 'lucide-react';
import { personal } from '../data/siteData';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { value: '2+', label: 'Projects' },
  { value: '6+', label: 'Certifications' },
  { value: '4', label: 'Awards' },
  { value: 'MERN', label: 'Core Stack' },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-inner">
        <motion.p
          className="eyebrow"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          About Me
        </motion.p>
        <motion.h2
          className="section-title"
          variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          The person behind the code
        </motion.h2>

        <div className="about-grid">
          {/* Text column */}
          <div className="about-text">
            {personal.about.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp} custom={i + 2} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="about-para"
              >
                {para}
              </motion.p>
            ))}

            {/* Info chips */}
            <motion.div
              className="about-chips"
              variants={fadeUp} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { Icon: GraduationCap, text: 'B.Tech CSE (DS & AI)' },
                { Icon: MapPin, text: personal.location },
                { Icon: Mail, text: personal.email },
              ].map(({ Icon, text }) => (
                <motion.span
                  key={text}
                  className="about-chip"
                  whileHover={{ scale: 1.05, borderColor: 'var(--hover-border)', y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={13} />
                  {text}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <a href={personal.resumeFile} download className="btn btn-primary" style={{ width: 'fit-content' }}>
                <Download size={15} /> Download Resume
              </a>
            </motion.div>
          </div>

          {/* Stats column */}
          <div className="about-stats">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                className="stat-card card"
                variants={fadeUp} custom={i + 2} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4, boxShadow: '0 12px 32px var(--accent-glow)', borderColor: 'var(--hover-border)' }}
                transition={{ duration: 0.2 }}
              >
                <span className="stat-value grad-text">{value}</span>
                <span className="stat-label">{label}</span>
              </motion.div>
            ))}

            <motion.div
              className="lang-card card"
              variants={fadeUp} custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }}
              whileHover={{ y: -3, boxShadow: '0 12px 32px var(--accent-glow)', borderColor: 'var(--hover-border)' }}
              transition={{ duration: 0.2 }}
            >
              <p className="lang-title">Languages</p>
              <div className="lang-tags">
                {['Tamil', 'Hindi', 'English'].map(l => (
                  <motion.span
                    key={l}
                    className="tag"
                    whileHover={{ scale: 1.08, boxShadow: '0 0 10px var(--accent-glow)' }}
                    transition={{ duration: 0.15 }}
                  >
                    {l}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
