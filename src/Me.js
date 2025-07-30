import React from 'react';
import './Me.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faBriefcase, faGraduationCap, faCamera, faRobot, faMountain } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJava, faPython, faGithub } from '@fortawesome/free-brands-svg-icons';

function Me() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

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
            <h3><FontAwesomeIcon icon={faBriefcase} className="section-icon" /> What I love doing:</h3>
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
            <h3><FontAwesomeIcon icon={faLaptopCode} className="section-icon" /> Toolkit:</h3>
            <div className="skills-container">
              {[
                { icon: faReact, name: 'React', className: 'react' },
                { icon: faCode, name: 'Tailwind', className: '' },
                { icon: faJava, name: 'Java', className: 'java' },
                { icon: faPython, name: 'Python', className: 'python' },
                { icon: faGithub, name: 'GitHub', className: '' },
                { icon: faCode, name: 'CI/CD', className: '' }
              ].map((skill, index) => (
                <motion.div 
                  className="skill-item"
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FontAwesomeIcon icon={skill.icon} className={`skill-icon ${skill.className}`} /> {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
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
            <p>I'm looking for new challenges—internships or roles where I can keep learning and ship software that matters. Let's talk!</p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Placeholder sections for other content */}
      {/* <section id="portfolio" className="placeholder-section">
        <h2>Portfolio</h2>
        <p>Portfolio content would go here</p>
      </section>
      
      <section id="store" className="placeholder-section">
        <h2>Store</h2>
        <p>Store content would go here</p>
      </section>
      
      <section id="blog" className="placeholder-section">
        <h2>Blog</h2>
        <p>Blog content would go here</p>
      </section> */}
    </>
  );
}

export default Me;