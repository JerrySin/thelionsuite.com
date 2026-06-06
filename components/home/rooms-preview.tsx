import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Bed } from 'lucide-react'

// SEO-friendly local room images
const rooms = [
  {
    name: 'Double Queen Suite',
    description: 'Perfect for families — two queen beds, full kitchenette, and ample space to spread out.',
    image: '/images/double-queen-suite-chetwynd.jpg',
    capacity: '4 Guests',
    beds: '2 Queen Beds',
  },
  {
    name: 'King Suite',
    description: 'Spacious suite with a comfortable king-size bed, full kitchenette, and seating area.',
    image: '/images/king-suite-chetwynd.jpg',
    capacity: '2 Guests',
    beds: '1 King Bed',
  },
  {
    name: 'Queen Suite',
    description: 'Contemporary suite featuring a queen-size bed with modern amenities and a fully-equipped kitchenette.',
    image: '/images/queen-suite-chetwynd.jpg',
    capacity: '2 Guests',
    beds: '1 Queen Bed',
  },
  {
    name: 'Bachelor Studio Suite',
    description: 'Efficient studio ideal for extended stays with full kitchen facilities and tasteful design.',
    image: '/images/bachelor-studio-suite-chetwynd.jpg',
    capacity: '2 Guests',
    beds: '1 Full Bed',
  },
]

export function RoomsPreview() {
  return (
    <section className="bg-[#59412f] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#a4c3dc] mb-3">
            Accommodations
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold text-white uppercase tracking-[0.04em] mb-4 text-balance">
            Contemporary Suites for Every Stay
          </h2>
          <p className="font-sans text-[0.9rem] text-[#dbcbb0] max-w-[520px] mx-auto leading-[1.65]">
            All 19 suites feature fully-equipped kitchenettes, high-end appliances,
            and thoughtful design that feels like home.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="group room-card bg-[#3d1f0a] rounded-[6px] overflow-hidden border border-[#dbcbb0]/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gallery overlay on hover — DS style */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-[#1a0d04]/65">
                  <span className="font-serif text-[0.85rem] font-bold text-white uppercase tracking-[0.06em] text-center p-2">
                    View Details
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-base font-bold text-white uppercase tracking-[0.04em] mb-2">
                  {room.name}
                </h3>
                <p className="font-sans text-[0.78rem] text-[#dbcbb0]/70 leading-[1.6] mb-3.5">
                  {room.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4 font-sans text-[0.72rem] text-[#b09880]">
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {room.capacity}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bed className="h-3.5 w-3.5" />
                    {room.beds}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href="https://direct-book.com/properties/theliontaverninnltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-[0.75rem] py-[0.55rem] px-4"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Link
            href="/reservations"
            className="inline-flex items-center gap-2 transition-colors font-sans text-[#a4c3dc] text-[0.82rem] no-underline border-b border-dotted border-[#a4c3dc] pb-[2px] hover:text-white hover:border-white"
          >
            View All Rooms &amp; Suites
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
