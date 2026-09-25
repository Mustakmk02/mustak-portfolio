import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Download, Mail, Github, Linkedin, Sun, Moon, Menu, X,
  Code2, Database, Server, Wrench, Layers, ExternalLink, MapPin,
  Phone, Send, CheckCircle2, Terminal, Braces, Sparkles
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Mustak Khan",
  role: "Software Developer",
  email: "mustakmk2000@gmail.com",
  phone: "(+91) 6263808200",
  linkedin: "https://www.linkedin.com/in/mustak-khan-623489271/",
  github: "https://github.com/Mustakmk02",
  resume: "/resume1.pdf" 
};

const skills = {
  Backend: ["Java", "Advanced Java", "JDBC", "Servlets", "Hibernate", "Spring", "Spring Boot", "REST APIs"],
  Frontend: ["HTML", "CSS", "JavaScript", "React.js","Bootstrap"],
  Database: ["MySQL", "SQL"],
  Tools: ["Git", "GitHub", "Maven", "Postman", "VS Code", "Eclipse"],
  Other: ["DSA", "OOP", "Debugging", "API Integration"]
};

const projects = [
  {
    title: "Cricket Tournament Management System",
    description: "A full-stack platform for managing tournaments, teams, players, matches, scores and tournament workflows.",
    tech: ["Java", "Spring Boot", "React.js", "MySQL"],
    features: ["Tournament creation", "Team & player management", "Match & score management", "Admin dashboard"],
    github: "https://github.com/YOUR_USERNAME/cricket-tournament-management",
    live: "#"
  },
  {
    title: "Employee Management System",
    description: "A responsive CRUD application for managing employee records through a Spring Boot REST API and React frontend.",
    tech: ["Spring Boot", "React", "MySQL", "REST API"],
    features: ["Employee CRUD", "Search & filtering", "REST API integration", "Database persistence"],
    github: "https://github.com/YOUR_USERNAME/employee-management",
    live: "#"
  },
  {
    title: "E-Commerce Application",
    description: "A modern e-commerce application with product browsing, authentication, cart and order workflows.",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    features: ["Authentication", "Product management", "Shopping cart", "Orders"],
    github: "https://github.com/YOUR_USERNAME/ecommerce",
    live: "#"
  }
];

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  const closeMenu = () => setMenu(false);

  return (
    <div className="app">
      <nav className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">MK</span>
          <span>Mustak <b>Khan</b></span>
        </a>

        <div className={`nav-links ${menu ? "open" : ""}`}>
          {["Home","About","Skills","Experience","Projects","Education","Resume","Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-btn" aria-label="Toggle theme" onClick={() => setDark(v => !v)}>
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
          <button className="menu-btn" aria-label="Open menu" onClick={() => setMenu(v => !v)}>
            {menu ? <X/> : <Menu/>}
          </button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow"><Sparkles size={15}/> Welcome to my portfolio</span>
              <h1>Hi, I'm Mustak Khan — <span>Software Developer</span></h1>
              <p className="hero-text">
                Java Full Stack Developer with 2+ years of experience building scalable backend
                systems, REST APIs and modern web applications.
              </p>
              <div className="hero-buttons">
                <a className="btn primary" href="#projects">View Projects <ArrowRight size={18}/></a>
                <a className="btn secondary" href={profile.resume} download>Download Resume <Download size={18}/></a>
                <a className="btn secondary" href="#contact">Contact Me <Mail size={18}/></a>
              </div>
              <div className="tech-row">
                {["Java","Spring Boot","React","MySQL","Git"].map(x => <span key={x}>{x}</span>)}
              </div>
            </div>

            <div className="code-window reveal">
              <div className="window-top"><i/><i/><i/><span>developer.java</span></div>
              <pre><code>{`public class Developer {
  String name = "Mustak Khan";
  String role = "Software Developer";

  String[] skills = {
    "Java", "Spring Boot",
    "React", "MySQL",
    "REST APIs"
  };

  void build() {
    // Keep building 🚀
  }
}`}</code></pre>
              <div className="floating-card"><Terminal size={20}/><strong>Build Scalable<br/>Applications</strong></div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <span className="eyebrow">ABOUT ME</span>
            <h2>Who I Am</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a Software Developer focused on Java Full Stack development, with 2+ years
                of experience working with backend technologies, REST APIs, databases and modern
                frontend applications.
              </p>
              <p>
                My core strength is building clean, maintainable applications using Java,
                Spring Boot, Hibernate, MySQL and React. I enjoy solving practical problems,
                debugging applications and continuously improving my technical skills.
              </p>
              <div className="check-grid">
                {["Backend Development","Frontend Integration","REST API Development","Problem Solving","Database Development","Clean & Maintainable Code"].map(x =>
                  <div key={x}><CheckCircle2 size={18}/>{x}</div>
                )}
              </div>
            </div>
            <div className="about-card">
              <div className="avatar">MK</div>
              <div className="code-lines">
                <span>01</span><span>02</span><span>03</span><span>04</span>
              </div>
              <div className="about-code">
                <div><b>developer</b> = &#123;</div>
                <div>&nbsp;&nbsp;name: <em>"Mustak Khan"</em>,</div>
                <div>&nbsp;&nbsp;focus: <em>"Java Full Stack"</em>,</div>
                <div>&nbsp;&nbsp;goal: <em>"Build & Improve"</em></div>
                <div>&#125;;</div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="section-heading center">
            <span className="eyebrow">SKILLS</span>
            <h2>My Technical Skills</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, list]) => {
              const Icon = group === "Backend" ? Server : group === "Frontend" ? Code2 :
                group === "Database" ? Database : group === "Tools" ? Wrench : Layers;
              return <article className="skill-card" key={group}>
                <div className="skill-icon"><Icon size={23}/></div>
                <h3>{group}</h3>
                <div className="chips">{list.map(s => <span key={s}>{s}</span>)}</div>
              </article>
            })}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <span className="eyebrow">EXPERIENCE</span>
            <h2>Software Development</h2>
          </div>
          <div className="timeline">
            <div className="timeline-dot"/>
            <article className="experience-card">
              <div className="exp-top">
                <div>
                  <h3>Software Developer</h3>
                  <p className="muted">X-Ciencia Technologies • May 2023 - Present</p>
                </div>
                <span className="tag">2+ Years</span>
              </div>
              <ul>
                <li>Developing Java and Spring Boot applications.</li>
                <li>Building and integrating REST APIs.</li>
                <li>Working with MySQL databases and backend business logic.</li>
                <li>Integrating frontend applications with backend APIs.</li>
                <li>Debugging application issues and improving maintainability.</li>
                <li>Using Git/GitHub for version control and Postman for API testing.</li>
              </ul>
              {/* <p className="placeholder-note">Replace the company name, dates and responsibilities with your verified employment details.</p> */}
            </article>
          </div>
        </section>

        <section id="projects" className="section alt">
          <div className="section-heading center">
            <span className="eyebrow">PROJECTS</span>
            <h2>Things I've Built</h2>
          </div>
          <div className="projects-grid">
            {projects.map(p => <article className="project-card" key={p.title}>
              <div className="project-top"><span className="project-icon"><Braces/></span><ExternalLink size={19}/></div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="chips">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
              <h4>Key features</h4>
              <ul className="feature-list">{p.features.map(f => <li key={f}><CheckCircle2 size={15}/>{f}</li>)}</ul>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
                <a href={p.live}><ExternalLink size={17}/> Live Demo</a>
              </div>
            </article>)}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-heading">
            <span className="eyebrow">EDUCATION</span>
            <h2>My Background</h2>
          </div>
          <div className="education-card">
            <div className="edu-icon"><Code2/></div>
            <div><h3>B.Tech — Electrical & Electronics  Engineering</h3><p>RGPV • 2022</p><span>Transitioned into software development with a focus on Java Full Stack technologies.</span></div>
          </div>
        </section>

        <section id="resume" className="section resume-section">
          <div className="resume-box">
            <div><span className="eyebrow">RESUME</span><h2>Let's build something great.</h2><p>Download my resume to learn more about my experience, skills and projects.</p></div>
            <div className="hero-buttons"><a className="btn primary" href={profile.resume} download>Download Resume <Download size={18}/></a><a className="btn secondary" href={profile.resume} target="_blank" rel="noreferrer">View Resume <ExternalLink size={18}/></a></div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading center">
            <span className="eyebrow">CONTACT</span>
            <h2>Let's Connect</h2>
            <p>Have a project, opportunity or question? Send me a message.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <a href={`mailto:${profile.email}`}><Mail/><span><small>Email</small>{profile.email}</span></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/><span><small>LinkedIn</small>Profile</span></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github/><span><small>GitHub</small>Profile</span></a>
              <a
  href="https://www.google.com/maps/search/?api=1&query=Bangalore%2C%20Karnataka%2C%20India"
  target="_blank"
  rel="noreferrer"
>
  <MapPin />
  <span>
    <small>Location</small>
    Bengaluru, Karnataka, India
  </span>
</a>
              {/* <div><MapPin/><span><small>Location</small>{profile.location}Bangalore, Karnataka, India</span></div> */}
            </div>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks! Connect this form to Formspree, EmailJS, or your backend before production."); }}>
              <input required placeholder="Your name" aria-label="Your name"/>
              <input required type="email" placeholder="Your email" aria-label="Your email"/>
              <textarea required rows="6" placeholder="Your message" aria-label="Your message"></textarea>
              <button className="btn primary" type="submit">Send Message <Send size={17}/></button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div><span className="brand-mark small">MK</span> © 2026 Mustak Khan. All rights reserved.</div>
        <div className="socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/></a><a href={`mailto:${profile.email}`}><Mail/></a></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
