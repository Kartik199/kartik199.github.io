import { useState, useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { personal } from '../data/resume'

/* ── Terminal sequence ───────────────────────────────────────────── */
const SEQUENCE = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Kartikeyan Sundaresan, Backend Engineer @ TCS' },
  { type: 'cmd', text: 'git log --oneline -2' },
  { type: 'out', text: 'a3f9d12 feat: kafka dlq + idempotency' },
  { type: 'out', text: 'd8c3e01 fix: oauth2 jwt, stateless auth' },
  { type: 'cmd', text: './GondorGates --benchmark' },
  { type: 'out', text: 'http_req_duration: avg=7ms  p(95)=14ms  max=31ms' },
  { type: 'out', text: 'http_reqs: ~449/s  VUs: 100  checks: 100% ✓' },
  { type: 'cmd', text: 'ls ./projects' },
  { type: 'out', text: 'GondorGates/   Selvora/   mind-the-lines/' },
]

/* ── Interactive command responses ───────────────────────────────── */
const RESPONSES = {
  help: [
    '  whoami     who is this person',
    '  skills     tech stack',
    '  contact    get in touch',
    '  ping       ...',
    '  clear      clear the terminal',
    '  reload     replay the intro',
    '  exit       ...',
  ],
  whoami: [
    'Kartikeyan Sundaresan',
    'Backend Engineer @ TCS, Chennai',
    'Java · Spring · Kafka · Redis · 5+ years',
  ],
  skills: [
    'Languages    Java, SQL',
    'Frameworks   Spring Boot, Spring WebFlux',
    'Messaging    Apache Kafka',
    'Caching      Redis',
    'Databases    PostgreSQL, Oracle SQL',
    'DevOps       Docker, GitHub Actions',
    'Monitoring   Prometheus, Grafana, Dynatrace',
  ],
  contact: [
    'Email      skartikeyan121999@gmail.com',
    'GitHub     github.com/Kartik199',
    'LinkedIn   linkedin.com/in/kartikeyan-sundaresan',
  ],
  ls:            ['GondorGates/   Selvora/   mind-the-lines/'],
  'ls ./projects': ['GondorGates/   Selvora/   mind-the-lines/'],
  ping:          ['pong'],
  exit:          ['Nice try.'],
  'rm -rf /':    ['Running on a distroless container. Nothing to delete.'],
  'rm -rf':      ['Running on a distroless container. Nothing to delete.'],
}

/* ── Terminal window ─────────────────────────────────────────────── */
function TerminalWindow() {
  const [lines, setLines] = useState([])
  const [cursorOn, setCursorOn] = useState(true)
  const [done, setDone] = useState(false)
  const [input, setInput] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [replay, setReplay] = useState(0)
  const bodyRef = useRef(null)
  const inputRef = useRef('')

  useEffect(() => {
    const id = setInterval(() => setCursorOn(v => !v), 530)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [lines, input])

  // Show hint 2.5s after animation ends
  useEffect(() => {
    if (!done) return
    const t = setTimeout(() => setShowHint(true), 2500)
    return () => clearTimeout(t)
  }, [done])

  // Animation sequence — re-runs on reload
  useEffect(() => {
    setLines([])
    setDone(false)
    setInput('')
    setShowHint(false)
    inputRef.current = ''

    let cancelled = false
    const sleep = ms => new Promise(r => setTimeout(r, ms))

    async function run() {
      await sleep(600)
      for (const item of SEQUENCE) {
        if (cancelled) return
        if (item.type === 'cmd') {
          setLines(prev => [...prev, { type: 'cmd', text: '' }])
          await sleep(80)
          for (let i = 0; i < item.text.length; i++) {
            if (cancelled) return
            const char = i
            setLines(prev => {
              const next = [...prev]
              next[next.length - 1] = { ...next[next.length - 1], text: item.text.slice(0, char + 1) }
              return next
            })
            await sleep(42 + Math.random() * 38)
          }
          await sleep(220)
        } else {
          setLines(prev => [...prev, { type: 'out', text: item.text }])
          await sleep(480)
        }
      }
      if (!cancelled) setDone(true)
    }

    run()
    return () => { cancelled = true }
  }, [replay])

  // Interactive keydown — active only after animation ends
  useEffect(() => {
    if (!done) return

    const addOut = (texts, baseDelay = 0) => {
      texts.forEach((text, i) => {
        setTimeout(() => {
          setLines(prev => [...prev, { type: 'out', text }])
        }, baseDelay + i * 80)
      })
    }

    const respond = (cmd) => {
      setShowHint(false)
      if (cmd === '') return

      setLines(prev => [...prev, { type: 'cmd', text: cmd }])

      if (cmd === 'clear') {
        setTimeout(() => setLines([]), 60)
        return
      }

      if (cmd === 'reload') {
        setReplay(prev => prev + 1)
        return
      }

      if (cmd === 'vim') {
        addOut(['You are in vim now.', 'Good luck getting out.'])
        setTimeout(() => {
          setLines(prev => [...prev, { type: 'cmd', text: ':q' }])
          setTimeout(() => {
            addOut(['E37: No write since last change. Add ! to override.'])
            setTimeout(() => {
              setLines(prev => [...prev, { type: 'cmd', text: ':q!' }])
              setTimeout(() => addOut(['Goodbye.']), 500)
            }, 700)
          }, 500)
        }, 1200)
        return
      }

      const resp = RESPONSES[cmd]
      if (resp) {
        addOut(resp)
      } else {
        addOut([`bash: ${cmd}: command not found`])
      }
    }

    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (e.metaKey || e.ctrlKey || e.altKey) return

      if (e.key === 'Enter') {
        const cmd = inputRef.current.trim().toLowerCase()
        respond(cmd)
        inputRef.current = ''
        setInput('')
      } else if (e.key === 'Backspace') {
        e.preventDefault()
        inputRef.current = inputRef.current.slice(0, -1)
        setInput(inputRef.current)
        setShowHint(false)
      } else if (e.key.length === 1) {
        inputRef.current += e.key
        setInput(inputRef.current)
        setShowHint(false)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [done])

  return (
    <div
      className="rounded-xl overflow-hidden shadow-2xl"
      style={{ border: '1px solid var(--terminal-border)', background: 'var(--terminal-bg)' }}
    >
      {/* Chrome */}
      <div
        className="flex items-center gap-1.5 px-4 py-3"
        style={{ background: 'var(--terminal-header)', borderBottom: '1px solid var(--terminal-border)' }}
      >
        <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
        <span className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
        <span
          className="ml-auto text-xs font-mono"
          style={{ color: 'var(--terminal-muted)' }}
        >
          bash: kartik199
        </span>
      </div>

      {/* Body */}
      <div
        ref={bodyRef}
        className="p-5 font-mono text-sm space-y-1.5 overflow-y-auto"
        style={{ fontFamily: "'JetBrains Mono', monospace", minHeight: '220px', maxHeight: '320px' }}
      >
        {lines.map((line, i) => {
          const isLast = i === lines.length - 1
          return (
            <div key={i} className="leading-relaxed">
              {line.type === 'cmd' ? (
                <span>
                  <span style={{ color: 'var(--terminal-accent)' }}>❯ </span>
                  <span style={{ color: 'var(--terminal-text)' }}>{line.text}</span>
                  {isLast && !done && (
                    <span
                      style={{
                        display: 'inline-block',
                        width: '2px',
                        height: '1em',
                        background: 'var(--terminal-accent)',
                        marginLeft: '1px',
                        verticalAlign: 'middle',
                        opacity: cursorOn ? 1 : 0,
                        transition: 'opacity 0.1s',
                      }}
                    />
                  )}
                </span>
              ) : (
                <span className="pl-4" style={{ color: 'var(--terminal-muted)', whiteSpace: 'pre' }}>
                  {/^[0-9a-f]{7} /.test(line.text) ? (
                    <>
                      <span style={{ color: 'var(--terminal-accent)', opacity: 0.8 }}>
                        {line.text.slice(0, 7)}
                      </span>
                      {line.text.slice(7)}
                    </>
                  ) : line.text}
                </span>
              )}
            </div>
          )
        })}

        {/* Interactive prompt after animation */}
        {done && (
          <>
            <div className="leading-relaxed">
              <span style={{ color: 'var(--terminal-accent)' }}>❯ </span>
              <span style={{ color: 'var(--terminal-text)' }}>{input}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1em',
                  background: 'var(--terminal-accent)',
                  marginLeft: '1px',
                  verticalAlign: 'middle',
                  opacity: cursorOn ? 1 : 0,
                  transition: 'opacity 0.1s',
                }}
              />
            </div>
            {showHint && (
              <div style={{ color: 'var(--terminal-muted)', opacity: 0.4, fontSize: '0.8em' }}>
                # try: help
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

/* ── Hero section ────────────────────────────────────────────────── */
const socialLinks = [
  { icon: Github, href: personal.github, label: 'GitHub' },
  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
]

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-14 lg:py-20">

          {/* Terminal — left on desktop, second on mobile */}
          <div className="order-2 lg:order-1">
            <TerminalWindow />
          </div>

          {/* Text — right on desktop, first on mobile */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <p
                className="font-mono text-sm mb-3"
                style={{ color: 'var(--accent)' }}
              >
                Hi, I'm
              </p>
              <h1
                className="text-4xl sm:text-5xl font-bold leading-tight"
                style={{ color: 'var(--text)' }}
              >
                Kartikeyan<br />Sundaresan
              </h1>
            </div>

            <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Backend Engineer specializing in{' '}
              <span style={{ color: 'var(--text)' }}>distributed systems</span> and{' '}
              <span style={{ color: 'var(--text)' }}>event-driven architecture</span>.
              5+ years building high-availability e-commerce platforms at scale.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="/resume.pdf"
                download="Kartikeyan_Sundaresan_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-opacity duration-200 hover:opacity-85"
                style={{ background: 'var(--accent)' }}
              >
                <Download size={15} />
                Resume
              </a>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
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
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
