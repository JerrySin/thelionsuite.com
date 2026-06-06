import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation: { name: string; href: string; external?: boolean }[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Reservations', href: '/reservations' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Location', href: '/location' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-[#1a0d04] text-[#dbcbb0] border-t-2 border-[#59412f]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              <Image
                src="/logo.svg"
                alt="The Lion Inn & Suites"
                width={56}
                height={56}
              />
              <div className="leading-tight">
                <p className="brand-title text-[1.25rem] font-medium text-white mt-8">
                  The Lion Inn &amp; Suites
                </p>
              </div>
            </div>
            <p className="font-sans text-[0.82rem] text-[#dbcbb0]/60 leading-[1.65]">
              Inn &amp; Suites in Chetwynd, BC — your home away from home
              at the gateway to the Peace River Country.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-[#e8a020] text-[0.85rem] font-bold uppercase tracking-[0.1em] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#dbcbb0]/65 font-sans no-underline hover:text-white text-[0.8rem]"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[#dbcbb0]/65 font-sans no-underline hover:text-white text-[0.8rem]"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-[#e8a020] text-[0.85rem] font-bold uppercase tracking-[0.1em] mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:250-788-9990"
                  className="flex items-start gap-2 transition-colors text-[#dbcbb0]/65 text-[0.82rem] font-sans no-underline hover:text-white"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#e8a020]" />
                  <span>250-788-9990</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:thelionsuites@gmail.com"
                  className="flex items-start gap-2 transition-colors text-[#dbcbb0]/65 text-[0.82rem] font-sans no-underline hover:text-white"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#e8a020]" />
                  <span>thelionsuites@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=5132+46th+Ave,+Chetwynd,+BC+V0C+1J0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition-colors text-[#dbcbb0]/65 text-[0.82rem] font-sans no-underline hover:text-white"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#e8a020]" />
                  <span>5132 46th Ave<br />Chetwynd, BC V0C 1J0</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Book CTA */}
          <div>
            <h3 className="font-serif text-[#e8a020] text-[0.85rem] font-bold uppercase tracking-[0.1em] mb-4">
              Reservations
            </h3>
            <p className="font-sans text-[0.8rem] text-[#dbcbb0]/60 leading-[1.65] mb-4">
              24/7 staff on-site. Online booking available anytime.
            </p>
            <a
              href="https://direct-book.com/properties/theliontaverninnltd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full text-[0.78rem]"
            >
              Check Availability
            </a>
            <Button
              asChild
              variant="outline"
              className="w-full mt-2.5 hover:bg-white/10 hover:text-white! text-[#3d1f0a] border-[#dbcbb0]/30 h-9 text-[0.78rem]"
            >
              <a
                href="tel:250-788-9990"
                className="flex items-center justify-center gap-2"
              >
                <Phone className="h-3.5 w-3.5 text-[#e8a020]" />
                <span>Book via Call: 250-788-9990</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#dbcbb0]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="font-sans text-[0.72rem] text-[#dbcbb0]/40">
              &copy; {new Date().getFullYear()} &nbsp;The Lion Inn &amp; Suites. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="text-[#dbcbb0]/65 font-sans no-underline hover:text-white text-[0.72rem] border-none">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#dbcbb0]/65 font-sans no-underline hover:text-white text-[0.72rem] border-none">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
