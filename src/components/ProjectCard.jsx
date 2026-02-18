import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const ProjectCard = ({ project, index = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        style={{
            background: 'var(--bg-primary)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            marginBottom: '1rem'
        }}
    >
        <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1rem' }}>
                {project.description}
            </p>
            {project.tags && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.tags.map((tag, i) => (
                        <span key={i} style={{
                            fontSize: '0.8rem',
                            background: 'rgba(56, 189, 248, 0.1)',
                            color: 'var(--accent-primary)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '50px',
                            border: '1px solid var(--border-color)'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
        {project.links && (
            <div style={{ display: 'flex', gap: '1rem' }}>
                {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}><FaGithub /></a>}
            </div>
        )}
    </motion.div>
)

export default ProjectCard
