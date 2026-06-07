'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const SLIDES = [
  '/images/the-lion-inn-suites-exterior-chetwynd.jpg',
  '/images/the-lion-inn-suites-night-chetwynd.jpg',
  '/images/the-lion-inn-suites-surroundings-chetwynd.jpg',
  '/images/the-lion-inn-suites-lobby-entrance-chetwynd.jpg',
  '/images/the-lion-inn-suites-kitchen-facility-chetwynd.jpg',
  '/images/the-lion-inn-suites-queen-room-chetwynd.jpg',
  '/images/the-lion-inn-suites-double-queen-room-chetwynd.jpg',
]

export function RoomsHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {SLIDES.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={slide}
              alt={`The Lion Inn & Suites background slide ${index + 1}`}
              fill
              className="object-cover object-[center_40%]"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
        {/* DS v2 overlay: rgba(26,13,4,0.3) → rgba(26,13,4,0.88) */}
        <div className="absolute inset-0 z-10 hero-overlay" />
        {/* Left vignette — DS slide-hero-overlay */}
        <div className="absolute inset-0 z-10 hero-vignette" />
      </div>

      <div className="relative z-20 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#a4c3dc] mb-4">
              Accommodations
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 text-balance tracking-[0.04em] uppercase">
              Our Rooms & Suites
            </h1>
            <p className="font-sans text-[0.95rem] text-[#dbcbb0] leading-[1.7] max-w-[520px] mx-auto text-pretty">
              Choose from 19 contemporary suites, each featuring a fully-equipped kitchenette,
              modern amenities, and thoughtful design for your comfort. Whether you&apos;re here for
              business or pleasure, we have the perfect accommodation for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
