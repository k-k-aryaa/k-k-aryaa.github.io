
import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaPhone, FaInstagram } from 'react-icons/fa'

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem', fontSize: '2.5rem' }}
                >
                    Get In <span className="gradient-text">Touch</span>
                </motion.h2>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}
                    >
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                            <a href="mailto:aryaakk1708@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1.2rem', padding: '1rem', borderRadius: '1rem', background: 'var(--bg-primary)', width: '100%', maxWidth: '400px', justifyContent: 'flex-start', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px -1px var(--shadow-color)' }}>
                                <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <FaEnvelope size={20} />
                                </div>
                                aryaakk1708@gmail.com
                            </a>
                            <a href="tel:+919597924809" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1.2rem', padding: '1rem', borderRadius: '1rem', background: 'var(--bg-primary)', width: '100%', maxWidth: '400px', justifyContent: 'flex-start', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px -1px var(--shadow-color)' }}>
                                <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <FaPhone size={20} />
                                </div>
                                +91 9597924809
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1.2rem', padding: '1rem', borderRadius: '1rem', background: 'var(--bg-primary)', width: '100%', maxWidth: '400px', justifyContent: 'flex-start', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px -1px var(--shadow-color)' }}>
                                <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                Indiranagar, Bangalore, India
                            </div>
                            <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                                <a href="https://linkedin.com/in/k-k-aryaa-9485461b8" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                    <FaLinkedin size={30} color="#0077b5" />
                                </a>
                                <a href="https://instagram.com/k_k_aryaa" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                    <FaInstagram size={30} color="#E1306C" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
