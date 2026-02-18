
import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import ProjectCard from './ProjectCard'

const experiences = [
    {
        role: "Data Scientist",
        company: "Mott Macdonald",
        period: "November 2024 – Present",
        location: "Bangalore, India",
        description: [
            // Keeping the original description items if needed, but the user wants "move the content", 
            // implying the projects ARE the description now, or at least a significant part of it.
            // I will append the projects to this list or render them below the description list.
            // The user said "move the content and design in selected work to near company name".
        ],
        projects: [
            {
                title: "QuantaBIM Multi agents",
                description: "Enterprise-grade agentic AI system integrating Autodesk Construction Cloud with PostgreSQL. Features task supervisors, orchestrators, and specialized expert agents.",
                tags: ["Python", "AI Agents", "PostgreSQL", "BIM"]
            },
            {
                title: "Multimodal Smart Search",
                description: "AI-powered document intelligence platform using trained YOLO v11 for technical drawing extraction. Hybrid search with vector similarity and keyword filtering.",
                tags: ["YOLO v11", "RAG", "Vector DB", "Computer Vision"]
            },
            {
                title: "Fast Intel Toolkit",
                description: "Low-code AI toolkit leveraging design patterns for instant chatbot deployment. Supports multimodal content processing with configurable pipelines.",
                tags: ["Low-code", "Chatbot", "Design Patterns"]
            },
            {
                title: "Project Management Agent",
                description: "Automation system processing real-time emails and proposal documents using deep research agents. Reduced documentation time by 80%.",
                tags: ["Deep Research", "Automation"]
            },
            {
                title: "Vision Intelligence",
                description: "Modular system for 360° image processing involving object detection via LLMs, zero-shot segmentation (SegZero), and geolocation.",
                tags: ["SegZero", "360° Vision", "Geolocation"]
            }
        ]
    },
    {
        role: "Research Data Scientist",
        company: "Wipro LAB45",
        period: "July 2022 – November 2024",
        location: "Bangalore, India",
        description: [],
        projects: [
            {
                title: "Persuasion Engine",
                description: "System delivering personalized, context-aware communication to persuade individuals toward specific goals using LLMs.",
                tags: ["LLMs", "Context-Aware", "Psychology"]
            },
            {
                title: "Fine-tuned LLM Models",
                description: "Fine-tuned MT5 and NLLB models for CodeMix on Hinglish, achieving SOTA results using LoRA and QLoRA.",
                tags: ["MT5", "NLLB", "LoRA", "QLoRA"]
            },
            {
                title: "Data Augmentation",
                description: "Employed GANs for pulse velocity data augmentation, trained using MLFlow.",
                tags: ["GANs", "MLFlow", "Data Augmentation"]
            }
        ]
    }
]

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem', fontSize: '2.5rem' }}
                >
                    Professional <span className="gradient-text">Experience</span>
                </motion.h2>

                <div style={{ position: 'relative', borderLeft: '2px solid var(--border-color)', marginLeft: '1rem', paddingLeft: '2rem' }}>
                    <div style={{ position: 'absolute', left: '-1px', top: 0, bottom: 0, width: '2px', background: 'var(--bg-secondary)' }}></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            style={{ marginBottom: '4rem', position: 'relative' }}
                        >
                            <div style={{
                                position: 'absolute',
                                left: '-2.6rem',
                                top: '0.5rem',
                                width: '1.2rem',
                                height: '1.2rem',
                                background: 'var(--accent-primary)',
                                borderRadius: '50%',
                                border: '4px solid var(--bg-primary)'
                            }}></div>

                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FaBriefcase /> {exp.company}
                            </h4>

                            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaCalendarAlt /> {exp.period}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaMapMarkerAlt /> {exp.location}</span>
                            </div>

                            {/* Render Projects/Work Highlights as Cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                                {exp.projects && exp.projects.map((project, i) => (
                                    <ProjectCard key={i} project={project} index={i} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
