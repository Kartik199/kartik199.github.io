import { useEffect } from 'react'
import useTheme from './hooks/useTheme'
import useScrollSpy from './hooks/useScrollSpy'
import CursorSpotlight from './components/CursorSpotlight'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'

const NAV_SECTIONS = ['about', 'experience', 'projects', 'skills', 'education']

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useScrollSpy(NAV_SECTIONS)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
      <CursorSpotlight theme={theme} />
      <Navbar
        sections={NAV_SECTIONS}
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  )
}
