import React from 'react';
import './Me.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faBriefcase, faGraduationCap, faCamera, faRobot, faMountain } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJava, faPython, faGithub } from '@fortawesome/free-brands-svg-icons';
import Experience from './Experience';

function Me() {
  return (
    <>
      <motion.section 
        className="me-section" 
        id="home"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="me-container">
          <motion.div 
            className="me-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="profile-image-container"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="profile-image"
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                {/* Image path corrected to point to the public folder */}
                <img src="profile-image.jpg" alt="Vijay Raju Nannapuraju" />
              </motion.div>
            </motion.div>
            <motion.div 
              className="me-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>About Me</h2>
              <motion.p 
                className="intro"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Hi, I'm <motion.span 
                  className="name-highlight"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >Vijay Raju Nannapuraju</motion.span>.<br />
                I'm a Computer Engineering student at the University of Michigan who enjoys turning ideas into reliable, scalable software.
              </motion.p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="what-i-love"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3><FontAwesomeIcon icon={faBriefcase} className="section-icon" /> What drives me</h3>
            <p className="section-subtitle">The passions that fuel my approach to software development</p>
            <ul>
              {[
                { text: <><span className="highlight">Building & automating:</span> I refine development workflows and deployment processes so teams can ship quickly and confidently.</> },
                { text: <><span className="highlight">Leading & mentoring:</span> I guide fellow developers, share best practices, and foster a collaborative culture focused on learning and quality.</> },
                { text: <><span className="highlight">Shipping impactful projects:</span> From data-driven tools to machine-learning experiments and responsive web apps, I focus on solutions that make a real difference.</> }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="toolkit card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            id="stack"
          >
            <h3><FontAwesomeIcon icon={faLaptopCode} className="section-icon" /> Technical Toolkit</h3>
            <p className="section-subtitle">Technologies and tools I use to build exceptional software</p>
            <div className="skills-container">
              {[
                { icon: faReact, name: 'React', className: 'react', level: 'Advanced' },
                { icon: faJava, name: 'Java', className: 'java', level: 'Expert' },
                { icon: faPython, name: 'Python', className: 'python', level: 'Advanced' },
                { icon: faCode, name: 'TypeScript', className: 'typescript', level: 'Advanced' },
                { icon: faGithub, name: 'GitHub', className: 'github', level: 'Expert' },
                { icon: faCode, name: 'Kubernetes', className: 'kubernetes', level: 'Intermediate' },
                { icon: faCode, name: 'Spring Boot', className: 'spring', level: 'Advanced' },
                { icon: faCode, name: 'CI/CD', className: 'cicd', level: 'Advanced' }
              ].map((skill, index) => (
                <motion.div 
                  className={`skill-item ${skill.className}`}
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="skill-icon-container">
                    <FontAwesomeIcon icon={skill.icon} className={`skill-icon ${skill.className}`} />
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <Experience />
          
          <div className="interests-personal-container">
            <motion.div 
              className="interests card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3><FontAwesomeIcon icon={faGraduationCap} className="section-icon" /> What inspires me:</h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >Closing the loop between code and users, data-informed performance wins, and clean, expressive UIs.</motion.p>
            </motion.div>
            
            <motion.div 
              className="personal card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3><FontAwesomeIcon icon={faMountain} className="section-icon" /> Off the clock:</h3>
              <div className="hobbies">
                {[
                  { icon: faCode, text: 'Mentoring student coders' },
                  { icon: faRobot, text: 'Tinkering with robots' },
                  { icon: faCamera, text: 'Chasing sunsets with my camera' }
                ].map((hobby, index) => (
                  <motion.div 
                    className="hobby-item"
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <FontAwesomeIcon icon={hobby.icon} className="hobby-icon" />
                    <p>{hobby.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            id="contact"
          >
            <div className="cta-content">
              <h3>Let's Build Something Amazing Together</h3>
              <p>I'm looking for new challenges—internships or roles where I can keep learning and ship software that matters. Ready to make an impact?</p>
              <motion.button 
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Me;