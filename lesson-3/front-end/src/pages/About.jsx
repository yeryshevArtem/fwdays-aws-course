import './Page.css'

function About() {
  return (
    <section className="page">
      <header className="page-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">
          A short story about who I am and what I do.
        </p>
      </header>
      <div className="page-content">
        <div className="page-hero">
          <div className="avatar">
            <div>
              <img src="/batman.jpg" alt="Profile" />
            </div>
          </div>
          <div className="avatar-text">
            <p>
              I am a software engineer who enjoys building clean, simple
              experiences on the web. This little single-page blog is a space
              to experiment with ideas, projects, and new technologies.
            </p>
            <p>
              The stack behind this demo is React, Vite, React Router and some
              handcrafted styling. Everything is deliberately minimal so it is
              easy to understand and extend.
            </p>
          </div>
        </div>
        <div className="page-grid">
          <article className="card">
            <h2>What I enjoy</h2>
            <p>
              Working with modern JavaScript, cloud platforms, and developer
              tooling. I like turning complex requirements into approachable
              interfaces and learning something new with each project.
            </p>
          </article>
          <article className="card">
            <h2>What this blog is for</h2>
            <p>
              Sharing small experiments, documenting learning progress, and
              keeping notes around topics like React, AWS, and frontend
              architecture.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
