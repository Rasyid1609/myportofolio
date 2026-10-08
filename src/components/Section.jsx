import { useEffect, useRef } from 'react'

export default function Section({ children, id }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || !('IntersectionObserver' in window)) {
      section?.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.12 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id={id} className='section-reveal py-12 md:pt-24 md:pb-16'>
      {children}
    </section>
  )
}
