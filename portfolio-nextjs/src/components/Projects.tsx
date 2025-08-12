'use client';

import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { ProjectCard } from './index';

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      period: "Aug 2025",
      summary: "Designed and deployed a personal portfolio website to showcase projects, experience, and skills. Built with Next.js and Static Site Generation to ensure fast loading, SEO optimization, and accessibility. Features responsive design, smooth animations, and works without JavaScript enabled.",
      highlights: [
        "Static Site Generation with Next.js",
        "Works without JavaScript enabled",
        "SEO optimized",
        "Smooth animations with Framer Motion"
      ],
      technologies: ["Next.js", "TypeScript", "Static Site Generation", "Netlify"],
      type: "current",
      color: "#007bff"
    },
    {
      title: "Raspberry Pi Photo Server",
      period: "May 2025",
      summary: "Developed a private photo/video server using Raspberry Pi and an external SSD with secure per-user storage. Built a FastAPI backend with JWT authentication and RESTful APIs, paired with a React Native cross-platform app for automatic uploads, offline caching, and album sync. Automated server boot and CI/CD using systemd and GitHub webhooks.",
      highlights: [
        "Secure per-user storage system",
        "Cross-platform mobile app",
        "Automated CI/CD deployment",
        "Offline caching functionality"
      ],
      technologies: ["Raspberry Pi", "FastAPI", "JWT", "REST API", "React Native", "systemd", "GitHub Webhooks"],
      type: "recent",
      color: "#28a745"
    },
    {
      title: "Digit Classifier Neural Network",
      period: "Nov 2024",
      summary: "Implemented a multi-layer neural network achieving 97%+ accuracy for handwritten digit classification. Optimized performance with gradient descent and backpropagation for a 27% speedup. Applied normalization, noise filtering, and pixel scaling to enhance robustness and generalization.",
      highlights: [
        "97%+ accuracy achieved",
        "27% performance speedup",
        "Advanced data preprocessing",
        "Robust generalization"
      ],
      technologies: ["Neural Networks", "Gradient Descent", "Backpropagation", "Data Normalization"],
      type: "ml",
      color: "#ff6b35"
    },
    {
      title: "Zenith Digital Marketing",
      period: "Jul 2023",
      summary: "Built responsive websites using React and Tailwind, improving mobile engagement by 44% through optimized UI. Integrated REST APIs for dynamic content, reducing bounce rate by 14%. Collaborated cross-functionally with marketers to align UI/UX via Figma prototypes, boosting click-through rate by 18%.",
      highlights: [
        "44% improvement in mobile engagement",
        "14% reduction in bounce rate",
        "18% increase in click-through rate",
        "Cross-functional collaboration"
      ],
      technologies: ["React", "Tailwind CSS", "REST API", "Figma"],
      type: "web",
      color: "#6f42c1"
    }
  ];

  return (
    <motion.div 
      className="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="projects"
    >
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>
          <FontAwesomeIcon icon={faCode} className="section-icon" /> 
          Projects
        </h3>
      </motion.div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`${project.title}-${index}`}
            project={project}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
