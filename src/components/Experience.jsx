import useScrollReveal from '../hooks/useScrollReveal'
import SectionTitle from './SectionTitle'
import { experience } from '../data/resume'

function RoleBullets({ bullets }) {
  return (
    <ul className="space-y-2.5 mt-3">
      {bullets.map((bullet, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          <span className="mt-1 flex-shrink-0 text-xs" style={{ color: 'var(--accent)' }}>▸</span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Experience() {
  const { ref, revealed } = useScrollReveal()

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 transition-all duration-700"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(2rem)',
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle>Experience</SectionTitle>

        {experience.map(job => (
          <div key={job.company} className="relative pl-6">
            {/* Vertical timeline line */}
            <div
              className="absolute left-0 top-2 bottom-0 w-px"
              style={{ background: 'var(--border)' }}
            />
            {/* Top dot */}
            <div
              className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full"
              style={{ background: 'var(--accent)' }}
            />

            {/* Company header */}
            <div className="mb-10">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-0.5">
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
                  {job.company}
                </h3>
                <span
                  className="text-xs font-mono"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {job.period}
                </span>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {job.location}
              </p>
            </div>

            {/* Sub-roles */}
            <div className="space-y-10 mb-4">
              {job.roles.map(role => (
                <div key={role.title} className="relative pl-5">
                  {/* Sub-role hollow dot */}
                  <div
                    className="absolute left-[-4px] top-[5px] w-2 h-2 rounded-full border-2"
                    style={{ borderColor: 'var(--accent)', background: 'var(--bg)' }}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h4 className="font-medium text-sm" style={{ color: 'var(--text)' }}>
                      {role.title}
                    </h4>
                    <span
                      className="text-xs font-mono"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {role.period}
                    </span>
                  </div>

                  <RoleBullets bullets={role.bullets} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
