export const personal = {
  name: 'Kartikeyan Sundaresan',
  title: 'Backend Engineer',
  tagline: 'Distributed Systems · Java · Event-Driven Architecture',
  email: 'skartikeyan121999@gmail.com',
  github: 'https://github.com/Kartik199',
  linkedin: 'https://linkedin.com/in/kartikeyan-sundaresan',
  location: 'Chennai, India',
}

export const about = `I'm a backend engineer based in Chennai, India, with 5+ years building distributed, event-driven commerce systems at scale at Tata Consultancy Services.

I've owned the full architecture lifecycle, from CIAM identity migrations serving 15+ downstream services to Kafka-backed order fulfillment pipelines handling 100,000+ peak users at 99.9%+ availability through Christmas peaks and flash sales.

What I find most interesting about backend work is the gap between code that passes tests and systems that hold up in production. Most of that gap lives in the failure modes you anticipate upfront rather than discover later.`


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
          'Led design and delivery of the Split Shipment Delivery service with stateless, horizontally scalable OMS handlers, driving a 10% increase in delivery revenue. Also engineered the same-day Click and Collect checkout flow that generated £1.2M in incremental revenue.',
          'Designed the Kafka async event pipeline from Checkout Basket to Order Fulfillment, using idempotent consumers and dead-letter queues to absorb traffic spikes without cascading failures. Led root cause analysis and permanent remediation for critical production incidents.',
          'Conducted technical sessions for junior engineers on secure coding, design patterns and checkout performance optimisation, translating production incident learnings into team-wide engineering standards.',
          'Owned CI/CD pipelines via GitHub Actions and containerised deployments using Docker. Monitored customer-facing order services via Dynatrace, triaging alerts on order failures and exception spikes.',
          'Extended WCS backend controllers to integrate the UK Deposit Return Scheme, covering deposit collection, customer returns and automated refunds, with Oracle SQL persistence and downstream payment integrations.',
          'Resolved XSS, CSRF and IDOR production vulnerabilities, and brought unit test coverage to 97% on legacy modules using JUnit and Mockito.',
        ],
      },
      {
        title: 'Accounts & Identity Systems',
        period: '2020 – 2022',
        bullets: [
          'Drove end-to-end CIAM migration by designing versioned, backward-compatible session establishment APIs consumed across 15+ downstream domain services. The migration moved identity management from monolithic WCS to microservices with zero rollback events.',
          'Implemented OAuth 2.0 and JWT authentication using stateless tokens instead of server-side sessions, enabling free load-balancer routing across personalisation, payments and fulfilment services.',
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
      'Load-tested with k6 at 100 concurrent VUs. P95 latency was 14ms and average 7ms at 449 req/s, with the rate-limiting overhead tracing to a single Redis Lua round-trip against a 9ms no-Redis baseline.',
      'Enforces independent budgets across GLOBAL, USER, IP and API_KEY dimensions. Each dimension evaluates atomically in one Lua script, and the first denial short-circuits the chain so remaining buckets are never charged.',
      'Policies live in YAML for version-controlled defaults, with the Admin API allowing live overrides without a restart. If Redis becomes unreachable, requests are allowed through rather than blocked.',
    ],
  },
  {
    name: 'Selvora',
    subtitle: 'Personal Finance Tracker',
    github: 'https://github.com/Kartik199/selvora-api',
    tech: ['Spring Boot', 'PostgreSQL', 'Flyway', 'JWT', 'Testcontainers'],
    bullets: [
      'Built on double-entry bookkeeping, where every transaction must post balanced debit and credit entries and balances are always derived from those entries rather than stored. This makes the ledger tamper-evident by design.',
      'Notifications follow the transactional outbox pattern. EMI reminders and goal events are recorded in the same database transaction as the triggering write, then dispatched by a scheduled poller every 60 seconds to guarantee at-least-once delivery without blocking the write path.',
      'Loan amortization schedules are generated in full at creation time using the reducing-balance formula and persisted, so queries never recompute them. Mutual fund NAVs are fetched daily from mfapi.in and skipped for any date already present in price history.',
    ],
  },
  {
    name: 'Mind The Lines',
    subtitle: 'Minimalist Editorial Platform',
    github: 'https://github.com/Kartik199/mind-the-lines',
    tech: ['Hugo', 'Sanity.io', 'TailwindCSS v4', 'Pagefind', 'Netlify'],
    bullets: [
      'Built on Hugo SSG and Sanity.io as a headless CMS. Content is baked at build time via GROQ queries, and a Sanity webhook triggers an automatic Netlify rebuild whenever an article is published with no code push required.',
      'Scores 99 on Lighthouse at the home page and 98 on article pages. FCP is 1.3s and LCP 2.1s on 4G mobile, achieved by self-hosting the Lora typeface in woff2 and removing the render-blocking two-origin Google Fonts chain.',
      'Full-text search runs on Pagefind, a 40KB index that loads only on first interaction with the search bar. Theming uses CSS custom properties for a paper-and-ink palette with zero-flash dark mode and no JavaScript framework.',
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
