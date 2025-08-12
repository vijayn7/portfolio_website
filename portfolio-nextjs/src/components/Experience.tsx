'use client';

import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import ExperienceCard from './ExperienceCard';

function Experience() {
  const experiences = [
    {
      company: "APTIV",
      position: "Software Engineer Intern",
      period: "May 2025 – Aug 2025",
      summary: "Reduced lead time by 31% via Kubernetes‑integrated metrics. Improved CI/CD observability with Datadog & Slack, slashing MTTR by 36%. Delivered full‑stack features with Spring Boot, TypeScript, React, serving 50+ divisions. Optimized backend queries (‑28% load time) and drove test coverage up 22% using GitHub Actions.",
      highlights: [
        "31% reduction in lead time",
        "36% reduction in MTTR",
        "28% improvement in query performance",
        "22% increase in test coverage"
      ],
      technologies: ["Kubernetes", "Datadog", "Slack API", "Java", "Spring Boot", "TypeScript", "React", "GitHub Actions"],
      type: "internship",
      logo: "/assets/aptiv_logo.jpeg",
      color: "#ff6600ff"
    },
    {
      company: "FIRST Robotics Competition",
      position: "Lead Software Developer",
      period: "Sep 2020 – Jun 2024",
      summary: "Managed 32 developers in Java, debugging, and algorithm design. Reduced deployment failures by 88% using GitHub Actions. Implemented Java Logger monitoring, cutting troubleshooting time by 40%.",
      highlights: [
        "Managed 32 developers",
        "88% reduction in deployment failures",
        "40% reduction in troubleshooting time"
      ],
      technologies: ["Java", "GitHub Actions", "Java Logger", "Team Leadership", "Code Review"],
      type: "leadership",
      logo: "/assets/First Robotics Competition.jpeg",
      color: "#8f03d4ff"
    },
    {
      company: "University of Michigan Tech Shop",
      position: "Sales Consultant",
      period: "Sep 2024 – Present",
      summary: "Handled accurate POS transactions. Advised on computer configurations and price comparisons through phone, email, and in‑person. Guided product recommendations using personal expertise and customer insights.",
      highlights: [
        "Multi-channel customer support",
        "Technical product expertise",
        "Personalized recommendations"
      ],
      technologies: ["POS Systems", "Customer Service", "Technical Consultation", "Communication"],
      type: "current",
      logo: "/assets/Michigan.jpeg",
      color: "#00284eff"
    }
  ];

  return (
    <motion.div 
      className="experiences"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="experience"
    >
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>
          <FontAwesomeIcon icon={faBuilding} className="section-icon" /> 
          Professional Experience
        </h3>
      </motion.div>
      
      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={`${experience.company}-${index}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
