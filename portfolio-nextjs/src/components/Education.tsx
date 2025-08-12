'use client';

import './Education.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Education() {
  return (
    <motion.div 
      className="education"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>
          <FontAwesomeIcon icon={faGraduationCap} className="section-icon" /> 
          Education
        </h3>
      </motion.div>
      
      <motion.div 
        className="education-item"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="education-header">
          <h4>University of Michigan</h4>
          <span className="education-duration">2024 - 2027</span>
        </div>
        <p className="education-degree">Bachelor of Engineering in Computer Engineering</p>

        <div className="education-subsection">
          <h5>Relevant Coursework</h5>
          <div className="course-list">
            {[
              'Data Structures & Algorithms',
              'Computer Organization',
              'Logic Design',
              'Discrete Mathematics',
              'Differential Equations',
              'Probability & Statistics',
              'Circuit Design',
              'Economics'
            ].map((course, index) => (
              <motion.span 
                key={index}
                className="course-tag"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {course}
              </motion.span>
            ))}
          </div>
        </div>
        
        <div className="education-subsection">
          <h5>Extracurricular Activities</h5>
          <div className="extracurricular-list">
            {[
              { activity: 'Spark Electric Racing', role: 'Corporate Outreach Member' },
              { activity: 'Hackathon Participant', role: 'Hacker' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="extracurricular-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <span className="activity-name">{item.activity}</span>
                <span className="activity-role"> - {item.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Education;
