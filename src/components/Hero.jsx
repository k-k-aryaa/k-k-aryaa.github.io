
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

const Hero = () => {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 200])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])

    return (
        <section id="hero" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'radial-gradient(circle at center, #f1f5f9 0%, #f8fafc 100%)'
        }}>
            {/* Abstract Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'var(--accent-primary)',
                    filter: 'blur(100px)',
                    opacity: 0.1,
                    zIndex: 0
                }}
            />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '10%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'var(--accent-secondary)',
                    filter: 'blur(120px)',
                    opacity: 0.1,
                    zIndex: 0
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.div style={{ y, opacity }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: '1.5rem',
                            color: 'var(--accent-primary)',
                            marginBottom: '1rem',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}
                    >
                        This is
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 6rem)',
                            marginBottom: '1.5rem',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            color: 'var(--text-primary)'
                        }}
                    >
                        K K Aryaa
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="gradient-text" style={{
                            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                            marginBottom: '2rem',
                            fontWeight: 700
                        }}>
                            AI Specialist & Data Scientist
                        </h3>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '600px',
                            margin: '0 auto 3rem',
                            lineHeight: 1.8
                        }}
                    >
                        Building scalable AI agentic systems, vision intelligence, and automated workflows.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
                    >
                        <a href="#projects" style={{
                            padding: '1rem 2.5rem',
                            background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))',
                            color: '#fff',
                            borderRadius: '50px',
                            fontWeight: 600,
                            boxShadow: '0 10px 20px -5px var(--accent-glow)',
                            textDecoration: 'none'
                        }}>
                            View Work
                        </a>
                        <a href="#contact" style={{
                            padding: '1rem 2.5rem',
                            border: '2px solid var(--text-secondary)',
                            color: 'var(--text-secondary)',
                            borderRadius: '50px',
                            fontWeight: 600,
                            background: 'transparent',
                            textDecoration: 'none'
                        }}>
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.a
                href="#about"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    color: 'var(--text-secondary)',
                    fontSize: '2rem',
                    zIndex: 10
                }}
            >
                <FaChevronDown />
            </motion.a>
        </section>
    )
}

export default Hero
