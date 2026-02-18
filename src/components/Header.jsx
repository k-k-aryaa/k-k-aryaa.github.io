
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
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
                background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                transition: 'all 0.3s ease',
                borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1px' }}>
                        KK<span style={{ color: 'var(--accent-primary)' }}>ARYAA</span>
                    </a>
                    <nav>
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
                </div>
            </header>
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
