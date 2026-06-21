import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../data/resume'

const links = [
  { icon: Github, href: personal.github, label: 'GitHub' },
  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>

      {/* Get in touch strip */}
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col items-center text-center gap-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
            Get in Touch
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Open to backend and platform engineering roles. Always up for a good conversation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text)'
              }}
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div
        className="max-w-6xl mx-auto px-6 py-5"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Kartikeyan Sundaresan
        </p>
      </div>

    </footer>
  )
}
