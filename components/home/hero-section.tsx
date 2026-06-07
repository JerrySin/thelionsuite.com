'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { BookingWidget } from '@/components/booking-widget'

// SEO-friendly local SlideShow images
const SLIDES = [
  '/images/the-lion-inn-suites-exterior-chetwynd.jpg',
  '/images/the-lion-inn-suites-night-chetwynd.jpg',
  '/images/the-lion-inn-suites-surroundings-chetwynd.jpg',
  '/images/the-lion-inn-suites-lobby-entrance-chetwynd.jpg',
  '/images/the-lion-inn-suites-kitchen-facility-chetwynd.jpg',
  '/images/the-lion-inn-suites-queen-room-chetwynd.jpg',
  '/images/the-lion-inn-suites-double-queen-room-chetwynd.jpg',
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20">
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

      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">
            {/* Left Column (Text Content) */}
            <div className="lg:col-span-7">
              {/* Eyebrow — DS hero-eyebrow style */}
              <div className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#a4c3dc] mb-5">
                Chetwynd, British Columbia · Gateway to Peace River Country
              </div>

              {/* Headline — DS hero-title */}
              <h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] font-bold text-white leading-[1.05] uppercase tracking-[0.02em] mb-6 text-balance">
                The Lion Inn<br />
                <span className="text-primary">&amp; Suites</span>
              </h1>

              {/* Sub */}
              <p className="font-sans text-[0.95rem] text-[#dbcbb0] leading-[1.7] max-w-[480px] mb-8 text-pretty">
                Contemporary suites fully equipped with high-end appliances and tasteful
                design — a home away from home at the foothills of the Rocky Mountains.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-8 mb-10">
                {[
                  { value: '19', label: 'Contemporary Suites' },
                  { value: '24/7', label: 'Staff On-Site' },
                  { value: '4.6/5.0★', label: 'Guest Rating' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-primary leading-none">
                      {value}
                    </p>
                    <p className="font-sans text-[0.72rem] text-[#dbcbb0]/70 uppercase tracking-[0.08em] mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column (Booking Widget) */}
            <div className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto">
              <BookingWidget />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-[#dbcbb0]/45 text-[0.62rem] uppercase tracking-[0.15em] font-sans">
          Scroll to explore
        </span>
        <div className="w-5 h-9 rounded-full flex items-start justify-center p-1.5 border border-[#dbcbb0]/30">
          <div className="w-0.5 h-2 rounded-full animate-bounce bg-[#dbcbb0]/50" />
        </div>
      </div>
    </section>
  )
}
