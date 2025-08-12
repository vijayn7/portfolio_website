import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCogs, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ExperienceCard({ experience, index }) {
  return (
    <motion.div 
      className={`experience-card card ${experience.type}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        transition: { duration: 0.3 }
      }}
      style={{
        '--card-color': experience.color
      }}
    >
      <div className="experience-header">
        <div className="company-position">
          <h4 className="company-name">{experience.company}</h4>
          <h5 className="position">{experience.position}</h5>
        </div>
        <div className="header-right">
          <div className="time-period">
            <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
            <span>{experience.period}</span>
          </div>
          <div className="company-logo">
            <img 
              src={experience.logo} 
              alt={`${experience.company} logo`}
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="logo-fallback" style={{ display: 'none' }}>
              {experience.company.charAt(0)}
            </div>
          </div>
        </div>
      </div>
      
      <motion.p 
        className="experience-summary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {experience.summary}
      </motion.p>

      {experience.highlights && (
        <motion.div 
          className="highlights"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h6>Key Achievements:</h6>
          <ul>
            {experience.highlights.map((highlight, highlightIndex) => (
              <motion.li 
                key={highlightIndex}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + highlightIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={faChevronRight} className="highlight-icon" />
                {highlight}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
      
      <motion.div 
        className="technologies"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="tech-header">
          <FontAwesomeIcon icon={faCogs} className="tech-icon" />
          <span>Technologies & Skills</span>
        </div>
        <div className="tech-tags">
          {experience.technologies.map((tech, techIndex) => (
            <motion.span 
              className="tech-tag"
              key={techIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.7 + techIndex * 0.05,
                type: "spring",
                stiffness: 200 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ExperienceCard;
