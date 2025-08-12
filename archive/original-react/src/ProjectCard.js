import './ProjectCard.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCogs, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ProjectCard({ project, index }) {
  return (
    <motion.div 
      className={`project-card card ${project.type}`}
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
        '--card-color': project.color
      }}
    >
      <div className="project-header">
        <div className="project-title-section">
          <h4 className="project-title">{project.title}</h4>
          <div className="time-period">
            <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
            <span>{project.period}</span>
          </div>
        </div>
      </div>
      
      <motion.p 
        className="project-summary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {project.summary}
      </motion.p>

      {project.highlights && (
        <motion.div 
          className="highlights"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h6>Key Features:</h6>
          <ul>
            {project.highlights.map((highlight, highlightIndex) => (
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
          <span>Technologies Used</span>
        </div>
        <div className="tech-tags">
          {project.technologies.map((tech, techIndex) => (
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

export default ProjectCard;
