import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <h1 className="logo"><span>Portfolio</span></h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="social-links">
              <a href="https://github.com/erwinagcanas4205" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/agcanas-john-erwin-c-677668359/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/__lazzyjay" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="greeting">Hello, I'm</span>
              <h1>John Erwin Agcanas</h1>
              <p className="title">Future Full Stack Developer</p>
              <p className="description">Crafting digital experiences with modern web technologies</p>
              <div className="cta-buttons">
                <button className="primary-btn">View My Work</button>
                <button className="secondary-btn">Contact Me</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <img src="/src/assets/er.png" alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <div className="section-line"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a passionate Full Stack Developer with a keen eye for creating elegant solutions to complex problems. With expertise in modern web technologies, I build responsive and user-friendly applications that make a difference.</p>
              <div className="experience">
                <div className="exp-item">
                  <span className="number">2+</span>
                  <span className="label">Years Experience</span>
                </div>
                <div className="exp-item">
                  <span className="number">10+</span>
                  <span className="label">Projects Completed</span>
                </div>
              </div>
            </div>
            <div className="skills">
              <h3>Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <ul>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Backend</h4>
                  <ul>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>API Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <div className="section-line"></div>
          </div>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/src/assets/Create Account.png" alt="Project 1" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                    <a href="https://github.com/erwinagcanas4205" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Web Application Project</h3>
                <p>A full-stack solution with modern UI/UX</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/src/assets/clocky.png" alt="Project 2" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                    <a href="https://github.com/erwinagcanas4205" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>HCI Individul Project</h3>
                <p>A collaborative task management application</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Firebase</span>
                  <span>Tailwind</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/src/assets/eme.png" alt="Project 3" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                    <a href="https://github.com/erwinagcanas4205" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Awesometodos Deployment</h3>
                <p>Rendering </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get in Touch</h2>
            <div className="section-line"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>johnerwrinagcanas09@gmail.com</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>09129615238</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>La Paz, Iloilo City</p>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
              <button type="submit" className="primary-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Erwin Agcanas Portfolio. All rights reserved.</p>
            <div className="footer-social">
              <a href="https://github.com/erwinagcanas4205" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/agcanas-john-erwin-c-677668359/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/__lazzyjay" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
