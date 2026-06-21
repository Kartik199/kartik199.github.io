import useScrollReveal from '../hooks/useScrollReveal'
import SectionTitle from './SectionTitle'
import { skills } from '../data/resume'

export default function Skills() {
  const { ref, revealed } = useScrollReveal()

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 transition-all duration-700"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(2rem)',
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>
        <div className="space-y-6">
          {skills.map(group => (
            <div key={group.category} className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
              <span
                className="text-xs font-mono uppercase tracking-widest pt-1 sm:w-44 flex-shrink-0"
                style={{ color: 'var(--text-muted)' }}
              >
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-lg font-medium transition-all duration-200 cursor-default"
                    style={{
                      background: 'var(--surface)',
                      color: 'var(--text)',
                      border: '1px solid var(--border)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.color = 'var(--accent)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.color = 'var(--text)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
