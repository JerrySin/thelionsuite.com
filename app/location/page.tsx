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
  '/images/the-lion-inn-suites-double-queen-room-chetwynd.jpg',
  '/images/the-lion-inn-suites-kitchen-stove-chetwynd.jpg',
  '/images/the-lion-inn-suites-kitchen-facility-chetwynd.jpg',
  '/images/the-lion-inn-suites-queen-room-chetwynd.jpg',
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

        {/* Address & Quick Info */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 -mt-24 relative z-20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl text-navy mb-2">
                          Address
                        </h2>
                        <p className="text-charcoal/80 leading-relaxed">
                          5132 46th Ave
                          <br />
                          Chetwynd, BC V0C 1J0
                          <br />
                          Canada
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-navy mb-2">
                          Contact
                        </h3>
                        <p className="text-charcoal/80">
                          <a
                            href="tel:250-788-9990"
                            className="hover:text-gold transition-colors"
                          >
                            250-788-9990
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-navy mb-2">
                          Front Desk
                        </h3>
                        <p className="text-charcoal/80">24/7 Staff Available</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${hotelCoordinates.lat},${hotelCoordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold py-6 text-lg">
                        <Navigation className="w-5 h-5 mr-2" />
                        Get Directions
                      </Button>
                    </a>
                    <p className="text-center text-charcoal/60 text-sm mt-4">
                      Opens in Google Maps
                    </p>
                  </div>
                </div>
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
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-gold font-medium tracking-wider uppercase text-sm">
                Explore the Area
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mt-2 mb-4">
                Nearby Attractions
              </h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Chetwynd and the surrounding Peace River region offer incredible
                natural beauty and unique experiences
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {nearbyAttractions.map((attraction) => (
                <div
                  key={attraction.name}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-charcoal/5"
                >
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                    <attraction.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-serif text-lg text-navy mb-1">
                    {attraction.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-3">
                    {attraction.distance}
                  </p>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl text-navy mb-4">
              Ready to Visit?
            </h2>
            <p className="text-charcoal/70 mb-8 max-w-xl mx-auto">
              Book your stay at The Lion Inn & Suites and experience Northern
              BC&apos;s warm hospitality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://direct-book.com/properties/theliontaverninnltd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-6 text-lg">
                  Book Your Stay
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy hover:text-cream px-8 py-6 text-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
