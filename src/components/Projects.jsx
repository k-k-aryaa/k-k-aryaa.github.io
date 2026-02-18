
import React from 'react'
import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'
import ProjectCard from './ProjectCard'

const personalProjects = [
    {
        title: "MF Forecast",
        description: "Predict live NAV using AI. Eliminated the investor 'blind spot' by calculating real-time portfolio performance between 9:15 AM and 3:30 PM. Features a multi-asset valuation engine (Equity, Gold, Cash) and a 'Truth Lens' for prediction accuracy verification.",
        tags: ["Solutions Architecture", "FastAPI", "Redis", "PostgreSQL", "FinTech"],
        links: { github: "#" }
    }
]

const Projects = () => {
    return (
        <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem', fontSize: '2.5rem' }}
                >
                    Personal <span className="gradient-text">Innovations</span>
                </motion.h2>

                {/* Personal Projects */}
                <div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {personalProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
