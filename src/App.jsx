import { useEffect, useState } from 'react';
import './index.css';
import avatar from './assets/profile.png';

const projects = [
  {
    title: 'Talk Nest',
    description: 'A real-time communication platform for seamless collaboration.',
    stack: ['React', 'socket.io', 'Tailwind'],
    link: 'https://chat-app-client-gold-two.vercel.app/',
  },
  {
    title: 'Event Booking Platform',
    description: 'A comprehensive platform for event management and ticketing.',
    stack: ['React', 'PostgreSQL', 'Node'],
    link: 'https://event-booking-app-nine-smoky.vercel.app/',
  },
  {
    title: 'Image Editor',
    description: 'A feature-rich image editing application with advanced tools and filters.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://devcode172.github.io/Image-Editor/',
  },
  {
    title: 'Password Generator',
    description: 'A secure and easy-to-use password generator with customizable options.',
    stack: ['React', 'TailwindCSS',],
    link: 'https://password-generator-one-umber.vercel.app/',
  },
  {
    title: 'Quiz App',
    description: 'An interactive quiz application with multiple categories and scoring system.',
    stack: ['React', 'TailwindCSS',],
    link: 'https://simple-quiz-app-khaki.vercel.app/',
  },
];

const skills = ['React', 'TypeScript', 'UI Systems', 'Performance', 'Accessibility'];
const roles = ['Full Stack Developer'];
const orbitTech = ['ReactJS', 'NodeJS', 'NextJS', 'PostgreSQL', 'ExpressJS', 'TailwindCSS', 'DaisyUI', 'Zustand' , 'socket.io'];

function App() {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let current = '';
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const phrase = roles[currentIndex];

      if (!deleting && current === phrase) {
        deleting = true;
        timeoutId = window.setTimeout(tick, 1400);
        return;
      }

      if (deleting && current === '') {
        deleting = false;
        currentIndex = (currentIndex + 1) % roles.length;
        timeoutId = window.setTimeout(tick, 250);
        return;
      }

      current = deleting ? current.slice(0, -1) : phrase.slice(0, current.length + 1);
      setDisplayText(current);
      timeoutId = window.setTimeout(tick, deleting ? 55 : 90);
    };

    timeoutId = window.setTimeout(tick, 250);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -60px',
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <header className="hero" id="home">
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="hero-intro">
          <div className="portrait-section">
            <div className="portrait-stage">
              <img className="portrait-image" src={avatar} alt="Profile portrait" />
              {orbitTech.map((tech, index) => (
                <div
                  key={tech}
                  className="orbit-badge"
                  style={{
                    '--angle': `${(360 / orbitTech.length) * index}deg`,
                    '--counter-angle': `${(360 / orbitTech.length) * index * -1}deg`,
                    '--entry-delay': `${index * 90}ms`,
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-copy">
            <h1 className="typing-heading">
              <span className="typing-text">{displayText}</span>
              <span className="cursor"></span>
            </h1>
            <p className="hero-text">
              I design and build fast, polished web experiences that feel modern, useful, and
              memorable.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn secondary" href="#contact">
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="section-heading scroll-reveal">
            <h2>About Me</h2>
          </div>
          <div className="about-panel scroll-reveal">
            <div className="about-copy scroll-reveal">
              <p>
                I am a Full Stack Developer who builds modern, responsive, and user-friendly web
                applications with strong attention to detail, clean architecture, and thoughtful
                user experiences.
              </p>
              <p>
                My work blends frontend creativity with backend reliability, allowing me to create
                complete solutions that are fast, scalable, and easy to maintain.
              </p>
            </div>
            <div className="about-highlights">
              <div className="scroll-reveal" style={{ '--reveal-delay': '90ms' }}>
                <strong>Frontend polish</strong>
                <p>Clean interfaces, smooth interactions, and responsive layouts.</p>
              </div>
              <div className="scroll-reveal" style={{ '--reveal-delay': '180ms' }}>
                <strong>Backend logic</strong>
                <p>Reliable APIs, data flow, and maintainable application structure.</p>
              </div>
              <div className="scroll-reveal" style={{ '--reveal-delay': '270ms' }}>
                <strong>Product thinking</strong>
                <p>Practical decisions that turn ideas into useful web experiences.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading scroll-reveal">
            <h2>Recent projects that balance beauty and function.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className="project-card scroll-reveal"
                key={project.title}
                style={{ '--reveal-delay': `${index * 90}ms` }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  <span>Live Demo</span>
                  {/* <span aria-hidden="true">-&gt;</span> */}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact scroll-reveal" id="contact">
          <div className="contact-copy scroll-reveal">
            <h2>Ready to build something meaningful?</h2>
            <p>
              Send me a quick message and I will get back to you for collaborations,
              opportunities, or project ideas.
            </p>
          </div>
          <form
            className="contact-form scroll-reveal"
            style={{ '--reveal-delay': '120ms' }}
            action="https://formsubmit.co/abdulbasit7151x@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New portfolio contact message" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <label>
              {/* <h3>Your name</h3> */}
              <input type="text" name="name" placeholder="Your Name" required />
            </label>
            <label>
              {/* <span>Email address</span> */}
              <input type="email" name="email" placeholder="Your Email" required />
            </label>
            <label className="message-field">
             {/*  <span>Message</span> */}
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </label>
            <button className="btn primary contact-submit" type="submit">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
