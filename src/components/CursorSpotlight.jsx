import { useState, useEffect } from 'react'

export default function CursorSpotlight({ theme }) {
  const [pos, setPos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const onMove = e => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  if (theme !== 'dark') return null

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(56,189,248,0.055), transparent 80%)`,
      }}
    />
  )
}
