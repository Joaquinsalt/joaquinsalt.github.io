import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/research', label: 'Research' },
  { to: '/hunch', label: 'HUNCH' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/activities', label: 'Activities' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <span className="logo">JB</span>
        Joaquin Barrera
      </Link>

      <button
        className="menu-btn"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? 'X' : '☰'}
      </button>

      <nav className={open ? 'links open' : 'links'}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}