import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Styles within the same file using styled-components approach
const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f4f4f9',
  },
  navbar: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
  },
  navbarUl: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navbarLi: {
    display: 'inline',
    margin: '0 15px',
  },
  navbarLink: {
    color: 'white',
    textDecoration: 'none',
  },
  section: {
    padding: '60px 20px',
  },
  projectList: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  project: {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '250px',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
  },
  socialLinks: {
    marginTop: '10px',
  },
  socialLink: {
    color: 'white',
    margin: '0 10px',
    textDecoration: 'none',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

// Navbar component
const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarUl}>
        <li style={styles.navbarLi}><a href="#about" style={styles.navbarLink}>About Me</a></li>
        <li style={styles.navbarLi}><a href="#projects" style={styles.navbarLink}>Projects</a></li>
        <li style={styles.navbarLi}><a href="#contact" style={styles.navbarLink}>Contact</a></li>
      </ul>
    </nav>
  );
};

// About component
const About = () => {
  return (
    <section id="about" style={styles.section}>
      <h2>About Me</h2>
      <p>
        I'm a passionate web developer with expertise in React, HTML, CSS, and JavaScript. I love building interactive and responsive websites.
      </p>
    </section>
  );
};

// Projects component
const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <h2>My Projects</h2>
      <div style={styles.projectList}>
        <div style={styles.project}>
          <h3>Project 1</h3>
          <p>A brief description of the project.</p>
        </div>
        <div style={styles.project}>
          <h3>Project 2</h3>
          <p>A brief description of the project.</p>
        </div>
      </div>
    </section>
  );
};

// Contact component
const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent: ${message}`);
  };

  return (
    <section id="contact" style={styles.section}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message"
          style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '5px' }}
        />
        <br />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </section>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Your Name. All rights reserved.</p>
      <div style={styles.socialLinks}>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>GitHub</a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>LinkedIn</a>
      </div>
    </footer>
  );
};

// Main App component
const App = () => {
  return (
    <div style={styles.body}>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
