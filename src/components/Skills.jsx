
import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
    {
        title: "Languages & Tools",
        skills: ["Python", "C++", "GitHub", "Docker", "FastAPI", "Flask", "Streamlit"]
    },
    {
        title: "AI & Machine Learning",
        skills: ["Generative AI", "AI Agents", "Computer Vision", "CNN", "OpenCV", "LLMs", "RAG", "Prompt Engineering"]
    },
    {
        title: "Deep Learning Frameworks",
        skills: ["PyTorch", "TensorFlow", "Keras", "GANs", "Transformers"]
    },
    {
        title: "Frameworks & Liabraries",
        skills: ["LangChain", "LangGraph", "Llama Index", "CrewAI", "AutoGen", "Ollama"]
    },
    {
        title: "Cloud & Data",
        skills: ["Google Cloud", "Azure", "AWS", "Neo4j", "PostgreSQL", "MLOps", "LLMOps"]
    }
]

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem', fontSize: '2.5rem' }}
                >
                    Technical <span className="gradient-text">Skills</span>
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scaling: 0.9 }}
                            whileInView={{ opacity: 1, scaling: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                background: 'var(--bg-secondary)',
                                padding: '2rem',
                                borderRadius: '1rem',
                                border: '1px solid var(--border-color)'
                            }}
                        >
                            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>{category.title}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {category.skills.map((skill, i) => (
                                    <span key={i} style={{
                                        background: 'var(--bg-primary)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '0.5rem',
                                        fontSize: '0.9rem',
                                        border: '1px solid var(--border-color)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
