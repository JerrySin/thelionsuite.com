import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-pattern-plus-white" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.svg"
              alt="The Lion Inn & Suites"
              width={80}
              height={80}
              className="logo-glow-white"
            />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-secondary-foreground mb-6 text-balance">
            Ready to Experience The Lion Inn & Suites?
          </h2>
          <p className="text-secondary-foreground/70 text-lg mb-10 text-pretty">
            Whether you&apos;re working or visiting Chetwynd, come stay with us and enjoy our hospitality.
            You will find your home away from home at The Lion Inn & Suites.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              <a
                className="btn-gold"
                href="https://direct-book.com/properties/theliontaverninnltd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Stay
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:bg-white/10 hover:text-white! px-8 text-[#3d1f0a] border-[#dbcbb0]/30"
            >
              <a href="tel:250-788-9990">
                <Phone className="mr-2 h-5 w-5 text-[#e8a020]" />
                Book via Call: 250-788-9990
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-secondary-foreground/50">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Free Cancellation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Best Rate Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Secure Booking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
