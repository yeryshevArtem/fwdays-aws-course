import './Page.css'

const projects = [
  {
    title: 'Personal Blog SPA',
    description:
      'This very page: a small React single page application that demonstrates routing, layout and styling.',
    tags: ['React', 'Vite', 'React Router'],
  },
  {
    title: 'Cloud Notes',
    description:
      'A simple note-taking idea designed to be deployed on AWS with serverless APIs and static hosting.',
    tags: ['AWS', 'Serverless', 'Design'],
  },
  {
    title: 'UI Components Playground',
    description:
      'A curated collection of reusable UI components built while exploring design systems.',
    tags: ['Components', 'Design System'],
  },
]

function Projects() {
  return (
    <section className="page">
      <header className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          A small selection of things I&apos;ve been working on.
        </p>
      </header>
      <div className="page-content">
        <div className="page-grid">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

