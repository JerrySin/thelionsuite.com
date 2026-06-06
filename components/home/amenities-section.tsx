import { 
  Utensils, 
  Wifi, 
  Tv, 
  Snowflake, 
  ShieldCheck, 
  Clock, 
  WashingMachine,
  Car
} from 'lucide-react'

const amenities = [
  {
    icon: Utensils,
    title: 'Full Kitchenette',
    description: 'Full-sized refrigerator, flat stove, microwave, and all cooking essentials.',
  },
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'Complimentary high-speed internet access throughout the property.',
  },
  {
    icon: Tv,
    title: 'Cable Television',
    description: 'Flat screen TVs with cable channels and remote controls in every room.',
  },
  {
    icon: Snowflake,
    title: 'Climate Control',
    description: 'Independent heating and cooling systems in each unit for your comfort.',
  },
  {
    icon: ShieldCheck,
    title: '24/7 Security',
    description: 'Well-lit entrances, security cameras, and staff available around the clock.',
  },
  {
    icon: Clock,
    title: '24-Hour Reception',
    description: 'Front desk staff available day and night to assist with your needs.',
  },
  {
    icon: WashingMachine,
    title: 'On-Site Laundry',
    description: 'Coin-operated laundry machines available for guest convenience.',
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Ample, well-lit parking available at no additional charge.',
  },
]

export function AmenitiesSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Amenities
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-secondary-foreground mb-6 text-balance">
            Everything You Need for a Comfortable Stay
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto text-pretty">
            Our suites are designed with your comfort in mind, featuring modern amenities 
            and thoughtful touches throughout.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="group p-6 rounded-xl bg-secondary-foreground/5 hover:bg-secondary-foreground/10 border border-secondary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <amenity.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-secondary-foreground mb-2">
                {amenity.title}
              </h3>
              <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 p-8 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl text-secondary-foreground mb-4">
                Premium Suite Features
              </h3>
              <ul className="space-y-3">
                {[
                  'Custom ceramic tile showers with water-efficient fixtures',
                  'Armoires perfect for hanging your clothing wrinkle-free',
                  'Brand name mattresses - double, queen, or king sized',
                  'Seating area with table, lamp, and comfortable chairs',
                  'Exotic hardwood flooring and custom inset lighting',
                  'Heavy keyless locking doors for enhanced security',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-secondary-foreground/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                <div className="text-center">
                  <p className="text-primary font-serif text-5xl mb-2">19</p>
                  <p className="text-secondary-foreground/70 text-sm uppercase tracking-wider">
                    Contemporary Suites
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
