'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type SlideshowProps = {
  slides: string[]
  className?: string
}

export function Slideshow({ slides, className = '' }: SlideshowProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className={`absolute min-h-[60vh] overflow-hidden ${className}`}>
      {slides.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt={`Slide ${idx + 1}`}
            fill
            className="object-cover"
            priority={idx === 0}
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  )
}
