// src/sections/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, Download } from 'lucide-react';
import { personal } from '../data/siteData';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const sub = encodeURIComponent('Portfolio Enquiry from ' + form.name);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personal.email}?subject=${sub}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const links = [
    { href: `mailto:${personal.email}`, Icon: Mail, label: personal.email },
    { href: personal.github, Icon: Github, label: 'github.com/Mohammed-Baqhir' },
    { href: personal.linkedin, Icon: Linkedin, label: 'linkedin.com/in/mohammed-baqhir' },
    { href: '#', Icon: MapPin, label: personal.location, noTarget: true },
  ];

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <motion.p className="eyebrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Contact
        </motion.p>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Open to work. Let's connect.
        </motion.h2>
        <motion.p className="section-subtitle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.18 }}>
          Looking for internships, jobs, and interesting collaborations. Whether it's a project, an opportunity, or just a conversation — my inbox is open.
        </motion.p>

        <div className="contact-grid">
          {/* Info column */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <div className="contact-links">
              {links.map(({ href, Icon, label, noTarget }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={noTarget ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-link-row"
                  whileHover={{ x: 6, borderColor: 'rgba(124,58,237,0.5)', scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className="contact-link-icon"><Icon size={16} /></span>
                  <span>{label}</span>
                </motion.a>
              ))}
            </div>

            <motion.a
              href={personal.resumeFile}
              download
              className="btn btn-primary contact-resume-btn"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={15} /> Download Resume
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
          >
            <form className="contact-form card" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="What's on your mind?" />
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {sent ? '✓ Opening mail client' : <><Send size={14} /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
