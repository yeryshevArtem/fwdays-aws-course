import { NavLink, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contacts from './pages/Contacts.jsx'
import './App.css'

function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true" />
          <div className="brand-text">
            <span className="brand-title">My Blog</span>
            <span className="brand-subtitle">React · Vite · Router</span>
          </div>
        </div>
        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Contacts
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>Built with React, Vite and React Router.</p>
      </footer>
    </div>
  )
}

export default App
