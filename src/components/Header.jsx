
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
                background: isScrolled || isMobileMenuOpen ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                backdropFilter: (isScrolled || isMobileMenuOpen) ? 'blur(10px)' : 'none',
                transition: 'all 0.3s ease',
                borderBottom: (isScrolled || isMobileMenuOpen) ? '1px solid var(--border-color)' : 'none'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1px', zIndex: 102 }}>
                        KK<span style={{ color: 'var(--accent-primary)' }}>ARYAA</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="desktop-only">
                        <ul style={{ display: 'flex', gap: '2rem' }}>
                            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        style={{
                                            fontSize: '0.95rem',
                                            fontWeight: 500,
                                            opacity: 0.9
                                        }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-only"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            background: 'transparent',
                            fontSize: '1.5rem',
                            color: 'var(--text-primary)',
                            zIndex: 102,
                            padding: '0.5rem'
                        }}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'var(--bg-primary)',
                            zIndex: 99,
                            paddingTop: '80px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start'
                        }}
                    >
                        <nav>
                            <ul style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2rem',
                                alignItems: 'center',
                                width: '100%'
                            }}>
                                {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            style={{
                                                fontSize: '1.5rem',
                                                fontWeight: 600,
                                                color: 'var(--text-primary)'
                                            }}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                style={{
                    scaleX,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'var(--accent-primary)',
                    transformOrigin: '0%',
                    zIndex: 101
                }}
            />
        </>
    )
}

export default Header
