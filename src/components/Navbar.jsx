import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Navbar({ sections, activeSection, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMobileOpen(false)
    scrollTo(id)
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    scrollToTop()
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        background: scrolled ? 'color-mix(in srgb, var(--bg) 85%, transparent)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="font-mono font-bold text-base tracking-tight"
          style={{ color: 'var(--text)' }}
        >
          ks<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {sections.map(s => (
            <a
              key={s}
              href={`#${s}`}
              onClick={e => handleNavClick(e, s)}
              className="text-sm capitalize font-medium transition-colors duration-200"
              style={{
                color: activeSection === s ? 'var(--accent)' : 'var(--text-muted)',
              }}
              onMouseEnter={e => { if (activeSection !== s) e.target.style.color = 'var(--text)' }}
              onMouseLeave={e => { if (activeSection !== s) e.target.style.color = 'var(--text-muted)' }}
            >
              {s}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-lg transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setMobileOpen(p => !p)}
            className="p-2 rounded-lg"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 py-5 flex flex-col gap-5"
          style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
        >
          {sections.map(s => (
            <a
              key={s}
              href={`#${s}`}
              onClick={e => handleNavClick(e, s)}
              className="text-sm capitalize font-medium"
              style={{ color: activeSection === s ? 'var(--accent)' : 'var(--text-muted)' }}
            >
              {s}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
