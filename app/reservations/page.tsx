import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { RoomsHero } from '@/components/rooms-hero'
import { BookingWidget } from '@/components/booking-widget'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Users,
  Bed,
  Utensils,
  Wifi,
  Tv,
  Snowflake,
  Bath,
  Check,
  CigaretteOff,
  Wind,
  Microwave,
  Refrigerator,
  Flame,
  ShowerHead,
  UserCheck,
  Shield,
  Mountain
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reservations',
  description: 'Explore our contemporary suites at The Lion Inn & Suites in Chetwynd, BC. Each suite features full kitchenettes, modern amenities, and comfortable furnishings. Choose from King, Queen, Double Queen, and Bachelor Studio suites.',
  openGraph: {
    title: 'Reservations | The Lion Inn & Suites',
    description: 'Explore our 19 contemporary suites with full kitchenettes in Chetwynd, BC.',
  },
}

const rooms = [
  {
    id: 'double-queen-suite',
    name: 'Double Queen Suite',
    description: 'Perfect for families or groups, our Double Queen Suite features two queen-size beds and a full kitchenette. Enjoy ample space for everyone with all the comforts of home during your stay.',
    image: '/images/double-queen-suite-chetwynd.jpg',
    capacity: '4 Guests',
    beds: '2 Queen Beds',
    rating: '4.7',
    popular: true,
    features: [
      'Two queen-size beds',
      'Full kitchenette with cooking essentials',
      'Spacious living area',
      'Flat screen TV with cable',
      'Private bathroom with shower',
      'Independent climate control',
      'Free high-speed Wi-Fi',
      'Perfect for families',
    ],
  },
  {
    id: 'king-suite',
    name: 'King Suite',
    description: 'Our spacious King Suite offers the ultimate in comfort with a luxurious king-size bed, full kitchenette, and elegant furnishings. Perfect for couples or business travelers seeking extra space and amenities.',
    image: '/images/king-suite-chetwynd.jpg',
    capacity: '2 Guests',
    beds: '1 King Bed',
    rating: '4.8',
    popular: false,
    features: [
      'King-size bed with premium mattress',
      'Full kitchenette with refrigerator & stove',
      'Separate seating area with desk',
      'Flat screen TV with cable',
      'Private bathroom with shower',
      'Independent climate control',
      'Free high-speed Wi-Fi',
      'Hardwood flooring throughout',
    ],
  },
  {
    id: 'queen-suite',
    name: 'Queen Suite',
    description: 'The Queen Suite combines comfort and functionality with a queen-size bed and fully-equipped kitchenette. Ideal for solo travelers or couples who appreciate modern amenities and a home-like atmosphere.',
    image: '/images/queen-suite-chetwynd.jpg',
    capacity: '2 Guests',
    beds: '1 Queen Bed',
    rating: '4.7',
    popular: true,
    features: [
      'Queen-size bed with quality linens',
      'Full kitchenette with cooking essentials',
      'Comfortable seating area',
      'Flat screen TV with cable',
      'Private bathroom with shower',
      'Independent climate control',
      'Free high-speed Wi-Fi',
      'Hardwood flooring',
    ],
  },
  {
    id: 'bachelor-studio',
    name: 'Bachelor Studio Suite',
    description: 'Our efficient Bachelor Studio is ideal for extended stays, featuring a comfortable bed and full kitchen facilities. Experience home-like living with all the conveniences you need for longer visits.',
    image: '/images/bachelor-studio-suite-chetwynd.jpg',
    capacity: '2 Guests',
    beds: '1 Full Bed',
    rating: '4.6',
    popular: false,
    features: [
      'Comfortable full bed',
      'Full kitchenette with cooking essentials',
      'Dining/work area',
      'Flat screen TV with cable',
      'Private bathroom with shower',
      'Independent climate control',
      'Free high-speed Wi-Fi',
      'Ideal for extended stays',
    ],
  },
]

const amenityIcons: Record<string, React.ComponentType<any>> = {
  'Hairdryer': Wind,
  'Heating': Flame,
  'BBQ Area': Flame,
  'Smoke detectors': Shield,
  variousviews: Mountain,
  'Full kitchenette with cooking essentials': Utensils,
  'Free high-speed Wi-Fi': Wifi,
  'Flat screen TV with cable': Tv,
  'Independent climate control': Snowflake,
  'Private bathroom with shower': Bath,
  'Full kitchenette with refrigerator & stove': Refrigerator,
  nonsmoking: CigaretteOff,
  microwave: Microwave,
}

export default function ReservationsPage() {
  return (
    <>
      <Header />
      <main>
        <RoomsHero />

        {/* Quick Amenities Bar */}
        <section className="py-6 bg-muted border-y border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
              {[
                { icon: Utensils, label: 'Full Kitchenette' },
                { icon: Wifi, label: 'Free Wi-Fi' },
                { icon: Tv, label: 'Cable TV' },
                { icon: Snowflake, label: 'Climate Control' },
                { icon: Bath, label: 'Private Bath' },
                { icon: Microwave, label: 'Microwave' },
                { icon: Refrigerator, label: 'Refrigerator' },
                { icon: CigaretteOff, label: 'Nonsmoking' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms List */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16 lg:space-y-24">
              {rooms.map((room, index) => (
                <div
                  key={room.id}
                  id={room.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                    }`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {room.popular && (
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                          Popular Choice
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>

                    <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                      {room.name}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Room Meta */}
                    <div className="flex flex-wrap items-center gap-6 mb-8">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-foreground">{room.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed className="h-5 w-5 text-primary" />
                        <span className="text-foreground">{room.beds}</span>
                      </div>
                      <div className="text-muted-foreground">
                        <span className="text-primary font-medium">
                          {room.rating} ★
                        </span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {room.features.map((feature) => {
                        const Icon = amenityIcons[feature] || Check
                        return (
                          <div key={feature} className="flex items-start gap-2">
                            <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </div>
                        )
                      })}
                    </div>

                    {/* CTA */}
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
                        Book {room.name}
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Widget Section */}
        <section className="py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl text-foreground mb-4">
                Ready to Book Your Stay?
              </h2>
              <p className="text-muted-foreground">
                Check availability and secure the best rates by booking direct.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <BookingWidget />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
