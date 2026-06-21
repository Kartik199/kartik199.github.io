import useScrollReveal from '../hooks/useScrollReveal'
import SectionTitle from './SectionTitle'
import { education } from '../data/resume'

export default function Education() {
  const { ref, revealed } = useScrollReveal()

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 transition-all duration-700"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(2rem)',
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle>Education</SectionTitle>
        <div
          className="rounded-xl p-6 sm:p-8 max-w-2xl"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="font-semibold text-base" style={{ color: 'var(--text)' }}>
                {education.institution}
              </h3>
              <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                {education.degree}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                {education.period}
              </span>
              <p
                className="text-sm font-medium mt-1"
                style={{ color: 'var(--accent)' }}
              >
                GPA {education.gpa}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
