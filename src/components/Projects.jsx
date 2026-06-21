import { ExternalLink, Github, Clock } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import SectionTitle from './SectionTitle'
import { projects } from '../data/resume'

function ProjectCard({ project }) {
  const { ref, revealed } = useScrollReveal()

  if (project.comingSoon) {
    return (
      <div
        ref={ref}
        className="rounded-xl p-6 flex flex-col transition-all duration-700"
        style={{
          background: 'var(--surface)',
          border: '1px dashed var(--border)',
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(1.5rem)',
        }}
      >
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-semibold" style={{ color: 'var(--text-muted)' }}>
            {project.name}
          </h3>
          <Clock size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
        </div>
        <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
          {project.subtitle}
        </p>
        <p className="text-sm mt-auto" style={{ color: 'var(--text-muted)' }}>
          Details coming soon.
        </p>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className="rounded-xl p-6 flex flex-col group transition-all duration-300"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(1.5rem)',
        transition: 'opacity 0.7s ease, transform 0.7s ease, border-color 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent)'
        e.currentTarget.style.boxShadow = '0 4px 24px color-mix(in srgb, var(--accent) 10%, transparent)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-semibold" style={{ color: 'var(--text)' }}>
          {project.name}
        </h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              aria-label={`${project.name} on GitHub`}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
        {project.subtitle}
      </p>

      {/* Bullets */}
      <ul className="space-y-2 mb-5 flex-1">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            <span className="mt-1 flex-shrink-0 text-xs" style={{ color: 'var(--accent)' }}>▸</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map(t => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-md font-mono"
            style={{
              background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
              color: 'var(--accent)',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, revealed } = useScrollReveal()

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 transition-all duration-700"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(2rem)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
