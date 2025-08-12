import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJava, faPython, faJs, faHtml5, faCss3Alt, faGithub, faDocker, faAws, faNode } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

function Skills() {
  const scrollContainerRef = useRef(null);
  const scrollContainerRef2 = useRef(null);
  const animationRef = useRef(null);
  const animationRef2 = useRef(null);

  const allSkills = [
    { icon: faReact, name: 'React', category: 'Frontend', level: 'Advanced', color: '#61DAFB' },
    { icon: faJava, name: 'Java', category: 'Backend', level: 'Expert', color: '#ED8B00' },
    { icon: faPython, name: 'Python', category: 'Backend', level: 'Advanced', color: '#3776AB' },
    { icon: faJs, name: 'TypeScript', category: 'Frontend', level: 'Advanced', color: '#3178C6' },
    { icon: faJs, name: 'JavaScript', category: 'Frontend', level: 'Expert', color: '#F7DF1E' },
    { icon: faHtml5, name: 'HTML5', category: 'Frontend', level: 'Expert', color: '#E34F26' },
    { icon: faCss3Alt, name: 'CSS3', category: 'Frontend', level: 'Advanced', color: '#1572B6' },
    { icon: faGithub, name: 'GitHub', category: 'DevOps', level: 'Expert', color: '#181717' },
    { icon: faDocker, name: 'Docker', category: 'DevOps', level: 'Intermediate', color: '#2496ED' },
    { icon: faAws, name: 'AWS', category: 'Cloud', level: 'Intermediate', color: '#FF9900' },
    { icon: faNode, name: 'Node.js', category: 'Backend', level: 'Advanced', color: '#339933' },
    { icon: faLaptopCode, name: 'Spring Boot', category: 'Backend', level: 'Advanced', color: '#6DB33F' },
    { icon: faLaptopCode, name: 'Kubernetes', category: 'DevOps', level: 'Intermediate', color: '#326CE5' },
    { icon: faLaptopCode, name: 'MongoDB', category: 'Database', level: 'Intermediate', color: '#47A248' },
    { icon: faLaptopCode, name: 'PostgreSQL', category: 'Database', level: 'Advanced', color: '#336791' },
    { icon: faLaptopCode, name: 'Redis', category: 'Database', level: 'Intermediate', color: '#DC382D' },
    { icon: faLaptopCode, name: 'Kafka', category: 'Backend', level: 'Intermediate', color: '#231F20' },
    { icon: faLaptopCode, name: 'GraphQL', category: 'Backend', level: 'Intermediate', color: '#E10098' },
    { icon: faLaptopCode, name: 'REST APIs', category: 'Backend', level: 'Expert', color: '#009688' },
    { icon: faLaptopCode, name: 'Microservices', category: 'Architecture', level: 'Advanced', color: '#FF6B35' },
  ];

  // Split skills into two rows
  const topRowSkills = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const bottomRowSkills = allSkills.slice(Math.ceil(allSkills.length / 2));

  // Passive scrolling animation for top row
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      
      const startAnimation = () => {
        const scrollWidth = container.scrollWidth;
        const containerWidth = container.clientWidth;
        
        if (scrollWidth > containerWidth) {
          let scrollPosition = 0;
          const scrollSpeed = 0.5; // pixels per frame
          
          const animate = () => {
            scrollPosition += scrollSpeed;
            if (scrollPosition >= scrollWidth - containerWidth) {
              scrollPosition = 0;
            }
            if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollLeft = scrollPosition;
            }
            animationRef.current = requestAnimationFrame(animate);
          };
          
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      
      const timer = setTimeout(startAnimation, 1000);
      
      return () => {
        clearTimeout(timer);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, []);

  // Passive scrolling animation for bottom row (opposite direction)
  useEffect(() => {
    if (scrollContainerRef2.current) {
      const container = scrollContainerRef2.current;
      
      const startAnimation = () => {
        const scrollWidth = container.scrollWidth;
        const containerWidth = container.clientWidth;
        
        if (scrollWidth > containerWidth) {
          let scrollPosition = scrollWidth - containerWidth; // Start from the end
          const scrollSpeed = -0.5; // negative for opposite direction
          
          const animate = () => {
            scrollPosition += scrollSpeed;
            if (scrollPosition <= 0) {
              scrollPosition = scrollWidth - containerWidth;
            }
            if (scrollContainerRef2.current) {
              scrollContainerRef2.current.scrollLeft = scrollPosition;
            }
            animationRef2.current = requestAnimationFrame(animate);
          };
          
          animationRef2.current = requestAnimationFrame(animate);
        }
      };
      
      const timer = setTimeout(startAnimation, 1000);
      
      return () => {
        clearTimeout(timer);
        if (animationRef2.current) {
          cancelAnimationFrame(animationRef2.current);
        }
      };
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (animationRef2.current) {
        cancelAnimationFrame(animationRef2.current);
      }
    };
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return '#4CAF50';
      case 'Advanced': return '#2196F3';
      case 'Intermediate': return '#FF9800';
      default: return '#9E9E9E';
    }
  };

  return (
    <motion.div 
      className="skills-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="stack"
    >
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>
          <FontAwesomeIcon icon={faLaptopCode} className="section-icon" /> 
          Technical Toolkit
        </h3>
        <p className="section-subtitle">
          Technologies and tools I use to build exceptional software
        </p>
      </motion.div>

      <motion.div 
        className="skills-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Top Row */}
        <div 
          className="skills-scroll-container top-row"
          ref={scrollContainerRef}
        >
          <motion.div 
            className="skills-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {topRowSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-tile"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="skill-tile-content">
                  <div 
                    className="skill-icon-container"
                    style={{ backgroundColor: `${skill.color}15` }}
                  >
                    <FontAwesomeIcon 
                      icon={skill.icon} 
                      className="skill-icon"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category">{skill.category}</span>
                    <span 
                      className="skill-level"
                      style={{ color: getLevelColor(skill.level) }}
                    >
                      {skill.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row - Offset */}
        <div 
          className="skills-scroll-container bottom-row"
          ref={scrollContainerRef2}
        >
          <motion.div 
            className="skills-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {bottomRowSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-tile"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: (index + topRowSkills.length) * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="skill-tile-content">
                  <div 
                    className="skill-icon-container"
                    style={{ backgroundColor: `${skill.color}15` }}
                  >
                    <FontAwesomeIcon 
                      icon={skill.icon} 
                      className="skill-icon"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category">{skill.category}</span>
                    <span 
                      className="skill-level"
                      style={{ color: getLevelColor(skill.level) }}
                    >
                      {skill.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
