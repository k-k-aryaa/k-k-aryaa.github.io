
import React from 'react'
import { motion } from 'framer-motion'
import { FaGamepad, FaRunning, FaPlane } from 'react-icons/fa'

const hobbies = [
    {
        icon: <FaGamepad size={40} />,
        title: "Gaming",
        description: "Multiplayer games enthusiast. Strategy and teamwork are key."
    },
    {
        icon: <FaRunning size={40} />,
        title: "Marathon",
        description: "42.2km finisher. Endurance and discipline in every step."
    },
    {
        icon: <FaPlane size={40} />,
        title: "Traveling",
        description: "Exploring new cultures and perspectives around the globe."
    }
]

const Personal = () => {
    return (
        <section id="personal" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem', fontSize: '2.5rem' }}
                >
                    Beyond <span className="gradient-text">Coding</span>
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ rotate: [0, -5, 5, 0] }}
                            style={{
                                background: 'var(--bg-primary)',
                                padding: '2rem',
                                borderRadius: '1rem',
                                textAlign: 'center',
                                border: '1px solid var(--border-color)'
                            }}
                        >
                            <div style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>
                                {hobby.icon}
                            </div>
                            <h3 style={{ marginBottom: '0.5rem' }}>{hobby.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                {hobby.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Personal
