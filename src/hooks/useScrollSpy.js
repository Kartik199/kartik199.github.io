import { useState, useEffect } from 'react'

export default function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      )

      observer.observe(el)
      return observer
    })

    return () => observers.forEach(obs => obs?.disconnect())
  }, [ids])

  return activeId
}
