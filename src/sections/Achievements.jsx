// src/sections/Achievements.jsx
import { motion } from 'framer-motion';
import { achievements } from '../data/siteData';
import './Achievements.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="section-inner">
        <motion.p className="eyebrow" initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>
          Recognition
        </motion.p>
        <motion.h2 className="section-title" initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}>
          Leadership & Achievements
        </motion.h2>
        <motion.p className="section-subtitle" initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.18 }}>
          Events coordinated, awards received, and communities served.
        </motion.p>

        <motion.div
          className="achievements-grid"
          variants={container} initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-60px' }}
        >
          {achievements.map((a) => (
            <motion.div
              key={a.title}
              className="achievement-card card"
              variants={item}
              whileHover={{ y: -5, boxShadow: '0 16px 48px var(--accent-glow)', borderColor: 'var(--hover-border)' }}
              transition={{ duration: 0.22 }}
            >
              <div className="achievement-icon-wrap">
                <span className="achievement-icon">{a.icon}</span>
              </div>
              <div>
                <h3 className="achievement-title">{a.title}</h3>
                <p className="achievement-desc">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
