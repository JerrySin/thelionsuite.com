"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Slideshow } from '@/components/slideshow'
import {
  MapPin,
  Car,
  Plane,
  Mountain,
  Trees,
  Fish,
  Compass,
  Clock,
  Phone,
  Navigation,
  ArrowRight,
} from "lucide-react";

const nearbyAttractions = [
  {
    name: "Chetwynd Chainsaw Sculptures",
    distance: "Downtown",
    description:
      "World-famous collection of over 150 chainsaw carvings throughout town",
    icon: Trees,
  },
  {
    name: "Moberly Lake Provincial Park",
    distance: "24 km",
    description:
      "Beautiful lake for swimming, fishing, and camping in summer months",
    icon: Fish,
  },
  {
    name: "Pine Le Moray Provincial Park",
    distance: "30 km",
    description: "Scenic hiking trails through pristine boreal forest",
    icon: Mountain,
  },
  {
    name: "Tumbler Ridge UNESCO Global Geopark",
    distance: "95 km",
    description:
      "Dinosaur fossils, waterfalls, and stunning geological formations",
    icon: Compass,
  },
];

const travelInfo = [
  {
    title: "By Car",
    icon: Car,
    details: [
      "Located on Highway 97 (John Hart Highway)",
      "4 hours from Prince George",
      "3 hours from Dawson Creek",
      "Easy access from Alaska Highway",
    ],
  },
  {
    title: "By Air",
    icon: Plane,
    details: [
      "Chetwynd Airport (YCQ) - 5 min drive",
      "Dawson Creek Airport - 1.5 hour drive",
      "Prince George Airport - 4 hour drive",
      "Charter flights available",
    ],
  },
];

const slides = [
  '/images/welcome-to-chetwynd.jpg',
  '/images/the-lion-inn-suites-surroundings-chetwynd.jpg',
  '/images/the-lion-inn-suites-night-chetwynd.jpg',
  '/images/the-lion-inn-suites-exterior-chetwynd.jpg',
];

export default function LocationPage() {
  const [mapLoaded, setMapLoaded] = useState(false);

  const hotelCoordinates = {
    lat: 55.6977,
    lng: -121.6336,
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center pt-28 pb-20 overflow-hidden">
          {/* Background Slideshow */}
          <Slideshow slides={slides} className="absolute inset-0 z-0" />

          <div className="absolute inset-0 z-10 hero-overlay" />

          <div className="relative z-20 w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-secondary-foreground mb-6 text-balance tracking-[0.04em] uppercase">
                  Our Location
                </h1>
                <p className="text-[#dbcbb0] text-lg md:text-xl max-w-2xl mx-auto text-pretty">
                  Gateway to Northern British Columbia&apos;s Natural Wonders
                </p>
              </div>
            </div>
          </div>

        </section>


        {/* Interactive Map */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">
                Find Us
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Conveniently located in the heart of Chetwynd with easy access
                to Highway 97
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border-4 border-cream">
                {!mapLoaded && (
                  <div className="absolute inset-0 bg-cream/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-charcoal/70">Loading map...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2298.5!2d${hotelCoordinates.lng}!3d${hotelCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x538e0f5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s5132%2046th%20Ave%2C%20Chetwynd%2C%20BC%20V0C%201J0!5e0!3m2!1sen!2sca!4v1234567890`}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 border-0"
                  onLoad={() => setMapLoaded(true)}
                  title="The Lion Inn & Suites Location Map"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Travel Information */}
        <section className="py-20 bg-navy">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
                Getting Here
              </h2>
              <p className="text-cream/70 max-w-2xl mx-auto">
                Multiple convenient options to reach The Lion Inn & Suites
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {travelInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                      <info.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="font-serif text-2xl text-cream">
                      {info.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {info.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-cream/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                  Explore the Area
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6 text-balance">
                  Nearby Attractions
                </h2>
                <p className="text-muted-foreground text-lg mb-8 text-pretty">
                  Chetwynd and the surrounding Peace River region offer incredible
                  natural beauty and unique experiences. Discover the famous chainsaw carvings,
                  scenic provincial parks, and local outdoor adventures right at our doorstep.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${hotelCoordinates.lat},${hotelCoordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Map Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {nearbyAttractions.map((attraction) => (
                  <div
                    key={attraction.name}
                    className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center"
                  >
                    <attraction.icon className="h-6 w-6 text-primary mb-2" />
                    <h3 className="font-serif text-lg text-card-foreground mb-1">
                      {attraction.name}
                    </h3>
                    <p className="text-primary text-xs font-semibold mb-2">
                      {attraction.distance}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {attraction.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6 text-balance">
                Ready to Visit Chetwynd?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-pretty">
                Book your stay at The Lion Inn &amp; Suites and experience Northern
                BC&apos;s warm hospitality.
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
  );
}
