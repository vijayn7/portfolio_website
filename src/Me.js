import React from 'react';
import './Me.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faBriefcase, faGraduationCap, faCamera, faRobot, faMountain } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJava, faPython, faGithub } from '@fortawesome/free-brands-svg-icons';

function Me() {
  return (
    <section className="me-section" id="me">
      <div className="me-container">
        <div className="me-header">
          <div className="profile-image-container">
            <div className="profile-image">
              {/* Replace with your actual image path */}
              <img src="/profile-image.jpg" alt="Vijay Raju Nannapuraju" />
            </div>
          </div>
          <div className="me-title">
            <h2>About Me</h2>
            <p className="intro">
              Hi, I'm <span className="name-highlight">Vijay Raju Nannapuraju</span>.<br />
              I'm a Computer Engineering student at the University of Michigan who enjoys turning ideas into reliable, scalable software.
            </p>
          </div>
        </div>
        
        <div className="what-i-love">
          <h3><FontAwesomeIcon icon={faBriefcase} className="section-icon" /> What I love doing:</h3>
          <ul>
            <li><span className="highlight">Building & automating:</span> I refine development workflows and deployment processes so teams can ship quickly and confidently.</li>
            <li><span className="highlight">Leading & mentoring:</span> I guide fellow developers, share best practices, and foster a collaborative culture focused on learning and quality.</li>
            <li><span className="highlight">Shipping impactful projects:</span> From data-driven tools to machine-learning experiments and responsive web apps, I focus on solutions that make a real difference.</li>
          </ul>
        </div>
        
        <div className="toolkit card">
          <h3><FontAwesomeIcon icon={faLaptopCode} className="section-icon" /> Toolkit:</h3>
          <div className="skills-container">
            <div className="skill-item"><FontAwesomeIcon icon={faReact} className="skill-icon react" /> React</div>
            <div className="skill-item"><FontAwesomeIcon icon={faCode} className="skill-icon" /> Tailwind</div>
            <div className="skill-item"><FontAwesomeIcon icon={faJava} className="skill-icon java" /> Java</div>
            <div className="skill-item"><FontAwesomeIcon icon={faPython} className="skill-icon python" /> Python</div>
            <div className="skill-item"><FontAwesomeIcon icon={faGithub} className="skill-icon" /> GitHub</div>
            <div className="skill-item"><FontAwesomeIcon icon={faCode} className="skill-icon" /> CI/CD</div>
          </div>
        </div>
        
        <div className="interests-personal-container">
          <div className="interests card">
            <h3><FontAwesomeIcon icon={faGraduationCap} className="section-icon" /> What excites me:</h3>
            <p>Closing the loop between code and users, data-informed performance wins, and clean, expressive UIs.</p>
          </div>
          
          <div className="personal card">
            <h3><FontAwesomeIcon icon={faMountain} className="section-icon" /> Off the clock:</h3>
            <div className="hobbies">
              <div className="hobby-item">
                <FontAwesomeIcon icon={faCode} className="hobby-icon" />
                <p>Mentoring student coders</p>
              </div>
              <div className="hobby-item">
                <FontAwesomeIcon icon={faRobot} className="hobby-icon" />
                <p>Tinkering with robots</p>
              </div>
              <div className="hobby-item">
                <FontAwesomeIcon icon={faCamera} className="hobby-icon" />
                <p>Chasing Michigan sunsets with my camera</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cta">
          <p>I'm looking for new challenges—internships or roles where I can keep learning and ship software that matters. Let's talk!</p>
        </div>
      </div>
    </section>
  );
}

export default Me;