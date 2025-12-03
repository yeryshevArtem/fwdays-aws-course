import './Page.css'

function Contacts() {
  return (
    <section className="page">
      <header className="page-header">
        <h1 className="page-title">Contacts</h1>
        <p className="page-subtitle">
          Let&apos;s stay in touch. These are the channels I use the most.
        </p>
      </header>
      <div className="page-content">
        <div className="card contact-card">
          <div className="contact-item">
            <span className="icon icon-mail" aria-hidden="true" />
            <div>
              <h2>Email</h2>
              <p>your.name@example.com</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon icon-github" aria-hidden="true" />
            <div>
              <h2>GitHub</h2>
              <p>@your-github-handle</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon icon-location" aria-hidden="true" />
            <div>
              <h2>Location</h2>
              <p>Remote · Central Europe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts

