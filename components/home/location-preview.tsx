import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const highlights = [
  {
    title: 'Peace River Country',
    description: 'Gateway to British Columbia\'s mighty Peace River region',
  },
  {
    title: 'Rocky Mountain Foothills',
    description: 'Stunning mountain backdrop and natural beauty',
  },
  {
    title: 'Chainsaw Carvings',
    description: 'Internationally known for artistic chainsaw sculptures',
  },
  {
    title: 'Recreation Complex',
    description: 'Wave pool, hot tub, sauna, curling rink, and ice arena',
  },
]

export function LocationPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/chetwynd-scenery.jpg"
                alt="Chetwynd, British Columbia scenery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-xl p-6 border border-border max-w-xs hidden md:block">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-serif text-card-foreground">5132 46th Ave</p>
                  <p className="text-muted-foreground text-sm">Chetwynd, BC V0C 1J0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              Location
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Discover Chetwynd, BC
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              Located in the foothills of the eastern slope of the Rocky Mountains, Chetwynd is 
              British Columbia&apos;s entrance to the mighty Peace River Country. At the junction of 
              Highways 97 and 29 and the CN Rail mainline, our hotel puts you at the heart of 
              this natural transportation hub.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.title}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground mb-8 text-pretty">
              Known as a &quot;Community Carved by Success,&quot; Chetwynd offers an excellent recreation 
              complex, multiple restaurants featuring western and international cuisine, and 
              paved walkways connecting you to everything in town.
            </p>

            <Button asChild variant="outline" className="group">
              <Link href="/location">
                Get Directions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
