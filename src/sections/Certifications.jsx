// src/sections/Certifications.jsx
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications, education } from '../data/siteData';
import './Certifications.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const item = {
  hidden:  { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-inner">
        <motion.p className="eyebrow" initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>
          Credentials
        </motion.p>
        <motion.h2 className="section-title" initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}>
          Education & Certifications
        </motion.h2>

        <div className="certs-layout">
          {/* Education */}
          <div>
            <h3 className="sub-heading">Education</h3>
            {education.map((edu, i) => (
            <motion.div
              key={i}
              className="edu-card card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -3, boxShadow: '0 12px 36px var(--accent-glow)', borderColor: 'var(--hover-border)' }}
            >
                <div className="edu-icon"><Award size={20} /></div>
                <div>
                  <p className="edu-degree">{edu.degree}</p>
                  <p className="edu-inst">{edu.institution}</p>
                  <p className="edu-meta">{edu.duration} · {edu.status} · {edu.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="sub-heading">Certifications</h3>
            <motion.div
              className="certs-grid"
              variants={container} initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-40px' }}
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  className="cert-card card"
                  variants={item}
                  whileHover={{ y: -5, boxShadow: '0 14px 40px var(--accent-glow)', borderColor: 'var(--hover-border)' }}
                >
                  <div className="cert-top">
                    <span className="cert-icon">{cert.icon}</span>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                  <p className="cert-name">{cert.name}</p>
                  <p className="cert-provider">{cert.provider}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
