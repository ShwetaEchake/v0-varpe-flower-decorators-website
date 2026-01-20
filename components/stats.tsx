"use client"

import { useEffect, useRef, useState } from "react"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: 500, suffix: "+", label: "Happy Customers" },
    { value: 1000, suffix: "+", label: "Events Decorated" },
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 15, suffix: "+", label: "Services Offered" },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-forest mb-2">
                {isVisible ? <Counter target={stat.value} suffix={stat.suffix} /> : "0"}
              </div>
              <p className="text-sm md:text-base text-forest/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}
