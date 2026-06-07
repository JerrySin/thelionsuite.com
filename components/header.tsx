'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const navigation: { name: string; href: string; external?: boolean }[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Reservations', href: '/reservations' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Location', href: '/location' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 py-2 z-50 backdrop-blur-sm bg-[#3d1f0a]/80 border-b border-[#dbcbb0]/30">

      {/* Main nav */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0 gap-[0.1rem]">
            <Image
              src="/logo.svg"
              alt="The Lion Inn & Suites"
              width={52}
              height={52}
              className="transition-transform duration-300 group-hover:scale-105 logo-glow-white"
              priority
            />
            <div className="hidden sm:block leading-tight">
              <p className="brand-title text-2xl font-extrabold logo-glow-white mt-8">
                The Lion Inn &amp; Suites
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href

              return (
                <div key={item.name} className="flex items-center gap-3">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`nav-menu-link ${isActive ? 'active' : ''}`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`nav-menu-link ${isActive ? 'active' : ''}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="block">
            <a
              href="https://direct-book.com/properties/theliontaverninnltd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <span>Book Now</span>
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-white flex-shrink-0 text-primary">
                <svg className="w-1.5 h-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button
                className="text-[#dbcbb0] bg-transparent border-none cursor-pointer p-2"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] border-l text-white bg-[#3d1f0a] border-[#dbcbb0]/12"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full px-3">
                {/* Mobile logo */}
                <div className="flex items-center py-2 border-b border-[#dbcbb0]/12 gap-[0.1rem]">
                  <Image src="/logo.svg" alt="The Lion Inn & Suites" width={44} height={44} className="logo-glow-white" />
                  <div>
                    <p className="brand-title text-xl font-extrabold logo-glow-white mt-8">
                      The Lion Inn &amp; Suites
                    </p>
                  </div>
                </div>

                <nav className="flex flex-col gap-2 mt-6 flex-1">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </nav>

                <div className="pb-8 space-y-3 border-t pt-6 border-[#dbcbb0]/12">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full hover:bg-white/10 hover:text-white! text-[#3d1f0a] border-[#dbcbb0]/30"
                  >
                    <a
                      href="tel:250-788-9990"
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4 text-[#e8a020]" />
                      <span>Book via Call: 250-788-9990</span>
                    </a>
                  </Button>
                  <a
                    href="https://direct-book.com/properties/theliontaverninnltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full"
                  >
                    <span>Check Availability</span>
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-white flex-shrink-0 text-primary">
                      <svg className="w-1.5 h-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
