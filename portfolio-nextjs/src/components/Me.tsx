'use client';

import './Me.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Experience, Skills, Education, Projects } from './index';
import Image from 'next/image';

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
                <Image 
                  src="/profile-image.jpg" 
                  alt="Vijay Raju Nannapuraju"
                  width={200}
                  height={200}
                  priority
                />
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
                Hi, I&apos;m <motion.span 
                  className="name-highlight"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >Vijay Raju Nannapuraju</motion.span>.<br />
                I&apos;m a Computer Engineering student at the University of Michigan who enjoys turning ideas into reliable, scalable software.
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
          
          <Skills />
          
          <Experience />
          
          <Projects />
          
          <div id="education">
            <Education />
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Me;
