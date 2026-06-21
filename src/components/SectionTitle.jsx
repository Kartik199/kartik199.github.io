export default function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-2xl font-bold whitespace-nowrap" style={{ color: 'var(--text)' }}>
        {children}
      </h2>
      <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
    </div>
  )
}
