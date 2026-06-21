import { useEffect, lazy, Suspense } from 'react'
import useTheme from './hooks/useTheme'
import useScrollSpy from './hooks/useScrollSpy'
import CursorSpotlight from './components/CursorSpotlight'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Education = lazy(() => import('./components/Education'))
const Footer = lazy(() => import('./components/Footer'))

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
        <Suspense fallback={null}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}
