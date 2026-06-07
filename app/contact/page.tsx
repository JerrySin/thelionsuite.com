"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Slideshow } from "@/components/slideshow";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
} from "lucide-react";

const slides = [
  '/images/the-lion-inn-suites-exterior-chetwynd.jpg',
  '/images/the-lion-inn-suites-night-chetwynd.jpg',
  '/images/the-lion-inn-suites-surroundings-chetwynd.jpg',
];

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "250-788-9990",
      href: "tel:250-788-9990",
      description: "Call us anytime",
    },
    {
      icon: Mail,
      title: "Email",
      value: "thelionsuites@gmail.com",
      href: "mailto:thelionsuites@gmail.com",
      description: "We reply within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "5132 46th Ave, Chetwynd, BC",
      href: "https://maps.google.com/?q=5132+46th+Ave+Chetwynd+BC",
      description: "V0C 1J0, Canada",
    },
    {
      icon: Clock,
      title: "Front Desk",
      value: "24/7 Available",
      href: null,
      description: "Staff always on-site",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center pt-28 pb-20 overflow-hidden">
          {/* Background Slideshow */}
          <Slideshow slides={slides} className="absolute inset-0 z-0" />

          <div className="absolute inset-0 z-10 hero-overlay" />

          <div className="relative z-20 w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-secondary-foreground mb-6 text-balance tracking-[0.04em] uppercase">
                  Contact Us
                </h1>
                <p className="text-[#dbcbb0] text-lg md:text-xl max-w-2xl mx-auto text-pretty">
                  Have questions about your stay? Our friendly team is here to help make your visit to Chetwynd memorable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto -mt-16 relative z-20">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                    <item.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg text-navy mb-2">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-charcoal hover:text-gold transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-charcoal font-medium">{item.value}</p>
                  )}
                  <p className="text-charcoal/60 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Details Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <span className="text-gold font-medium tracking-wider uppercase text-sm block text-center">
                Get in Touch
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mt-2 mb-6 text-center">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-12 text-center max-w-2xl mx-auto">
                Whether you have questions about our rooms, need help
                planning your stay, or want to inquire about group bookings,
                our team is ready to assist you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-charcoal/5">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-navy mb-1">
                      Quick Response
                    </h3>
                    <p className="text-charcoal/70 text-sm">
                      We typically respond to all email inquiries within 24 hours
                      during business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-charcoal/5">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-navy mb-1">
                      Need Immediate Help?
                    </h3>
                    <p className="text-charcoal/70 text-sm">
                      For urgent matters or immediate room availability, please call us directly at{" "}
                      <a
                        href="tel:250-788-9990"
                        className="text-gold hover:underline font-semibold"
                      >
                        250-788-9990
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Direct CTA */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6 text-balance">
                Ready to Book?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-pretty">
                Skip the emails and reserve your suite directly online.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a
                    href="https://direct-book.com/properties/theliontaverninnltd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Your Stay
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:250-788-9990">
                    <Phone className="mr-2 h-5 w-5 text-primary" />
                    Book via Call
                  </a>
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
