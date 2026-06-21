import useScrollReveal from '../hooks/useScrollReveal'
import SectionTitle from './SectionTitle'

const PARAGRAPHS = [
  "I'm a backend engineer based in Chennai, India, with 5+ years building distributed, event-driven commerce systems at scale at Tata Consultancy Services.",
  "I've owned the full architecture lifecycle, from CIAM identity migrations serving 15+ downstream services to Kafka-backed order fulfillment pipelines handling 100,000+ peak users at 99.9%+ availability through Christmas peaks and flash sales.",
  "What I find most interesting about backend work is the gap between code that passes tests and systems that hold up in production. Most of that gap lives in the failure modes you anticipate upfront rather than discover later.",
]

export default function About() {
  const { ref, revealed } = useScrollReveal()

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 transition-all duration-700"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(2rem)',
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle>About</SectionTitle>
        <div className="max-w-2xl space-y-4">
          {PARAGRAPHS.map((p, i) => (
            <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
