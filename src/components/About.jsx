
import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBrain } from 'react-icons/fa'
import profileImg from '../assets/profile.jpeg'

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '2rem', fontSize: '2.5rem' }}
                >
                    About <span className="gradient-text">Me</span>
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>

                    {/* Intro Section with Image */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <img
                                src={profileImg}
                                alt="Profile"
                                style={{
                                    width: '100%',
                                    maxWidth: '350px',
                                    borderRadius: '1rem',
                                    boxShadow: '0 10px 30px -10px var(--shadow-color)',
                                    border: '1px solid var(--border-color)'
                                }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                                I am a <strong style={{ color: 'var(--accent-primary)' }}>Data Scientist</strong> with 3.5+ years of experience in Python, specializing in scalable AI agentic systems, chatbots, vision intelligence, and document intelligence using LLMs and RAG.
                            </p>
                            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                                My expertise lies in fine-tuning models, multi-agent architectures, computer vision, and automating workflows for compliance and project management. I am proficient in performing POCs, API development, microservices, and deploying production-ready AI solutions.
                            </p>
                        </motion.div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <motion.div
                            whileHover={{ y: -5 }}
                            style={{
                                padding: '2rem',
                                background: 'var(--bg-primary)',
                                borderRadius: '1rem',
                                border: '1px solid var(--border-color)'
                            }}
                        >
                            <FaGraduationCap size={40} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '0.5rem' }}>Education</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                <strong>M.S. Computer Science (ML)</strong><br />
                                Georgia Tech (2025–2027)
                            </p>
                            <br />
                            <p style={{ color: 'var(--text-secondary)' }}>
                                <strong>B.E. Instrumentation & Control</strong><br />
                                PSG College of Technology (2018–2022)<br />
                                CGPA: 9.14
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            style={{
                                padding: '2rem',
                                background: 'var(--bg-primary)',
                                borderRadius: '1rem',
                                border: '1px solid var(--border-color)'
                            }}
                        >
                            <FaBrain size={40} color="var(--accent-secondary)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '0.5rem' }}>Core Focus</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Generative AI, AI Agents, Computer Vision, LLMs, Deep Learning, MLOps
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
