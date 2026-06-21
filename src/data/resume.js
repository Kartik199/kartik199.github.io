export const personal = {
  name: 'Kartikeyan Sundaresan',
  title: 'Backend Engineer',
  tagline: 'Distributed Systems · Java · Event-Driven Architecture',
  email: 'skartikeyan121999@gmail.com',
  github: 'https://github.com/Kartik199',
  linkedin: 'https://linkedin.com/in/kartikeyan-sundaresan',
  location: 'Chennai, India',
}

export const about = `I'm a backend engineer based in Chennai, India, with 5+ years building distributed,
event-driven commerce systems at scale at Tata Consultancy Services.

I've owned the full architecture lifecycle, from CIAM identity migrations serving 15+ downstream
services to Kafka-backed order fulfillment pipelines handling 100,000+ peak users at 99.9%+
availability through Christmas peaks and flash sales.

My focus is on systems that fail gracefully: idempotent consumers, dead-letter queues, fail-open
strategies. The interesting engineering is always in the edge cases.`


export const experience = [
  {
    company: 'Tata Consultancy Services',
    location: 'Chennai, India',
    period: 'Aug 2020 – Present',
    roles: [
      {
        title: 'Order & Delivery Systems',
        period: '2022 – Present',
        bullets: [
          'Designed and owned Order subsystems for a UK retail e-commerce platform on HCL Commerce (WCS), maintaining 99.9%+ availability at 50,000 daily users and 100,000+ peak users during high-traffic events.',
          'Led design and delivery of Split Shipment Delivery service with stateless, horizontally scalable OMS handlers, driving a 10% increase in delivery revenue; engineered same-day Click & Collect checkout generating £1.2M incremental revenue.',
          'Designed Kafka async event pipeline (Checkout Basket → Order Fulfillment) with idempotent consumers and dead-letter queues; led RCA and permanent remediation for critical production incidents.',
          'Conducted technical sessions for junior engineers on secure coding, design patterns, and checkout performance optimisation, translating production incident learnings into team-wide standards.',
          'Owned CI/CD pipelines via GitHub Actions and containerised deployments using Docker; monitored customer-facing order services via Dynatrace, triaging alerts on order failures and exception spikes.',
          'Extended WCS backend controllers to integrate the UK Deposit Return Scheme: deposit collection, customer returns, and automated refunds, with Oracle SQL persistence and downstream payment integrations.',
          'Resolved XSS, CSRF, and IDOR production vulnerabilities; achieved 97% unit test coverage on legacy modules with JUnit and Mockito.',
        ],
      },
      {
        title: 'Accounts & Identity Systems',
        period: '2020 – 2022',
        bullets: [
          'Drove end-to-end CIAM migration: designed versioned, backward-compatible session establishment APIs consumed across 15+ downstream domain services, migrating identity from monolithic WCS to microservices with zero rollback events.',
          'Implemented OAuth 2.0 + JWT authentication: stateless tokens over server-side sessions, enabling free load-balancer routing across personalisation, payments, and fulfilment services.',
        ],
      },
    ],
  },
]

export const projects = [
  {
    name: 'GondorGates',
    subtitle: 'Distributed Rate-Limiting Sidecar Gateway',
    github: 'https://github.com/Kartik199/GondorGates',
    tech: ['Spring WebFlux', 'Redis', 'Lua', 'Docker', 'Prometheus', 'Grafana', 'Micrometer'],
    bullets: [
      'Validated via k6 at 100 concurrent VUs: P95 ~14ms, avg ~7ms, ~449 req/s; overhead isolated to ~5ms (one Redis Lua round-trip) against a ~9ms no-Redis baseline.',
      'Atomic multi-dimensional enforcement across GLOBAL, USER, IP, and API_KEY; each dimension runs one Lua script (read to refill to decide to write) atomically, first denial short-circuits and remaining buckets are uncharged.',
      'Two-tier policy config: YAML baseline for version-controlled defaults, Redis runtime overrides via Admin API for live changes without restart; fail-open so a Redis outage never blocks traffic.',
    ],
  },
  {
    name: 'Selvora',
    subtitle: 'Personal Finance Tracker',
    github: 'https://github.com/Kartik199/selvora-api',
    tech: ['Spring Boot', 'PostgreSQL', 'Flyway', 'JWT', 'Testcontainers'],
    bullets: [
      'Double-entry bookkeeping foundation: every transaction requires balanced debit/credit entries; balances are always derived from entries, never stored, making the ledger tamper-evident and audit-ready.',
      'Transactional outbox for notifications: EMI reminders and goal events written to outbox_events in the same DB transaction as the triggering write; a 60s @Scheduled poller guarantees at-least-once email delivery without blocking writes.',
      'Full EMI amortization schedule generated and persisted at loan creation (reducing-balance formula, final installment absorbs rounding for exact zero close); daily NAV fetch from mfapi.in, idempotent by skipping dates already in price_history.',
    ],
  },
  {
    name: 'Mind The Lines',
    subtitle: 'Minimalist Editorial Platform',
    github: 'https://github.com/Kartik199/mind-the-lines',
    tech: ['Hugo', 'Sanity.io', 'TailwindCSS v4', 'Pagefind', 'Netlify'],
    bullets: [
      'Jamstack architecture: Hugo SSG + Sanity.io headless CMS, all content baked at build time via GROQ queries; Sanity publish webhook triggers automatic Netlify rebuilds on content change with no code push.',
      'Lighthouse score 99 (home) / 98 (article) on production CDN: FCP 1.3s, LCP 2.1s on 4G mobile; achieved by self-hosting Lora woff2 and eliminating the render-blocking two-origin Google Fonts chain.',
      'Pagefind full-text search (~40KB index) lazy-loaded on first interaction; paper-ink token-based theming with zero-flash dark mode and no JavaScript framework.',
    ],
  },
]

export const skills = [
  {
    category: 'Backend Architecture',
    items: ['Java', 'Spring Boot', 'Spring WebFlux', 'Reactive Streams'],
  },
  {
    category: 'Systems Design',
    items: ['Apache Kafka', 'Redis', 'Microservices', 'REST APIs', 'Lua Scripting'],
  },
  {
    category: 'Commerce & Domain',
    items: ['HCL Commerce (WCS) v9', 'OMS', 'Checkout Systems', 'Domain-Driven Design'],
  },
  {
    category: 'Data Stores',
    items: ['PostgreSQL', 'Oracle SQL', 'MongoDB'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, IAM)', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'Dynatrace'],
  },
  {
    category: 'Security',
    items: ['OAuth 2.0', 'JWT', 'CIAM', 'XSS / CSRF / IDOR Remediation'],
  },
  {
    category: 'Testing',
    items: ['JUnit', 'Mockito', 'k6 Load Testing'],
  },
]

export const education = {
  institution: 'Amrita Vishwa Vidyapeetham University',
  degree: 'B.Tech in Computer Science and Engineering',
  period: '2016 – 2020',
  gpa: '7.92 / 10.0',
}
