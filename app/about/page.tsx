import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Slideshow } from '@/components/slideshow'
import { ArrowRight, Award, Users, Clock, Shield, Coffee, ShowerHead, BedSingle, Tv, Paintbrush, Thermometer } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about The Lion Inn & Suites in Chetwynd, BC. We offer 19 contemporary suites with full kitchenettes, providing exceptional hospitality at the gateway to Peace River Country since our establishment.',
  openGraph: {
    title: 'About Us | The Lion Inn & Suites',
    description: 'Learn about our commitment to hospitality excellence in Chetwynd, BC.',
  },
}

const slides = [
  '/images/the-lion-inn-suites-exterior-chetwynd.jpg',
  '/images/the-lion-inn-suites-night-chetwynd.jpg',
  '/images/the-lion-inn-suites-surroundings-chetwynd.jpg',
]

const values = [
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'Brand name mattresses, premium linens, and high-end appliances in every suite.',
  },
  {
    icon: Users,
    title: 'Guest-Focused Service',
    description: '24/7 staff on-site to ensure your comfort and address any needs.',
  },
  {
    icon: Clock,
    title: 'Flexibility',
    description: 'Perfect for business trips, family vacations, or extended stays.',
  },
  {
    icon: Shield,
    title: 'Safety & Security',
    description: 'Well-lit entrances, security cameras, and keyless entry systems.',
  },
]

const features = [
  {
    icon: Coffee,
    title: 'Full Kitchenettes',
    description: 'Every suite includes a full-sized refrigerator, flat stove cook top, range hood, microwave, sink, pots, plates, cups, utensils, and coffee pots.',
  },
  {
    icon: ShowerHead,
    title: 'Premium Bathrooms',
    description: 'Separate bathrooms with custom ceramic tile showers, water efficient green toilets, and vanity sinks.',
  },
  {
    icon: BedSingle,
    title: 'Modern Bedrooms',
    description: 'Armoires for hanging clothing wrinkle-free, brand name mattresses in double, queen, or king sizes with luxurious fabric and foam supported by durable pocket coils.',
  },
  {
    icon: Tv,
    title: 'Entertainment & Work',
    description: 'Seating areas with table, lamp, and desk. Giant flat screen televisions with remote controls, complimentary cable television, and Wi-Fi internet access.',
  },
  {
    icon: Paintbrush,
    title: 'Quality Finishes',
    description: 'Exotic hardwood flooring, custom ceramic tile, custom inset lighting, and heavy keyless locking doors in each unit.',
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    description: 'Independent heating and cooling systems in each suite for your personal comfort.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20">
          <Slideshow slides={slides} className="absolute inset-0 z-0" />
          <div className="absolute inset-0 z-10 hero-overlay" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                  About Us
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-secondary-foreground mb-6 text-balance">
                  The Lion Inn & Suites
                </h1>
                <p className="text-secondary-foreground/70 text-lg leading-relaxed mb-8 text-pretty">
                  We feature 19 independent suites which all include kitchenettes, with full sized
                  refrigerator, flat stove cook top, ranges hoods, and sinks. The kitchens are fully
                  equipped with pots, plates, cups, utensils, and coffee pots.
                </p>
                <p className="text-secondary-foreground/70 text-lg leading-relaxed text-pretty">
                  A casually elegant inn set against the backdrop of the Rockies, The Lion Inn & Suites
                  offers fine details and more that make you feel at home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                Our Commitment
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6 text-balance">
                What Sets Us Apart
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                  Suite Features
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6 text-balance">
                  Everything You Need for a Comfortable Stay
                </h2>
                <p className="text-muted-foreground text-lg mb-8 text-pretty">
                  Our suites all have separate bathrooms with custom ceramic tile showers, water
                  efficient green toilets and vanity sink. These fine details and more await you
                  at The Lion Inn & Suites.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/reservations">
                    Explore Our Rooms
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center">
                    <feature.icon className="h-6 w-6 text-primary mb-2" />
                    <h3 className="font-serif text-lg text-card-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Property Features */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                On-Site Services
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-secondary-foreground mb-6 text-balance">
                Property Amenities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-secondary-foreground/5 p-8 rounded-xl border border-secondary-foreground/10 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-secondary-foreground mb-2">24/7 Staff</h3>
                <p className="text-secondary-foreground/60 text-sm">
                  Reception desk staffed around the clock for your convenience and security.
                </p>
              </div>

              <div className="bg-secondary-foreground/5 p-8 rounded-xl border border-secondary-foreground/10 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-secondary-foreground mb-2">Laundry Services</h3>
                <p className="text-secondary-foreground/60 text-sm">
                  Coin-operated laundry machines available for extended stay guests.
                </p>
              </div>

              <div className="bg-secondary-foreground/5 p-8 rounded-xl border border-secondary-foreground/10 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-secondary-foreground mb-2">Secure Property</h3>
                <p className="text-secondary-foreground/60 text-sm">
                  Hallways and parking monitored by multiple cameras, well lit and secure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6 text-balance">
                Whether You&apos;re Working or Visiting Chetwynd
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-pretty">
                Come stay with us and enjoy our hospitality. You will find your home away from
                home at The Lion Inn & Suites!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a
                    href="https://direct-book.com/properties/theliontaverninnltd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Your Stay
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
