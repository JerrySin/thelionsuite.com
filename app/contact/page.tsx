"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setFormState("idle");
    }, 3000);
  };

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
        <section className="relative py-20 md:py-28 bg-navy overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-pattern-plus-gold" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
                Contact Us
              </h1>
              <p className="text-cream/80 text-lg md:text-xl leading-relaxed">
                Have questions about your stay? Our friendly team is here to
                help make your visit to Chetwynd memorable.
              </p>
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

        {/* Contact Form Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Info */}
                <div>
                  <span className="text-gold font-medium tracking-wider uppercase text-sm">
                    Get in Touch
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-navy mt-2 mb-6">
                    We&apos;d Love to Hear From You
                  </h2>
                  <p className="text-charcoal/70 leading-relaxed mb-8">
                    Whether you have questions about our rooms, need help
                    planning your stay, or want to inquire about group bookings,
                    our team is ready to assist you.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-navy mb-1">
                          Quick Response
                        </h3>
                        <p className="text-charcoal/70 text-sm">
                          We typically respond to all inquiries within 24 hours
                          during business days.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-navy mb-1">
                          Need Immediate Help?
                        </h3>
                        <p className="text-charcoal/70 text-sm">
                          For urgent matters, please call us directly at{" "}
                          <a
                            href="tel:250-788-9990"
                            className="text-gold hover:underline"
                          >
                            250-788-9990
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Book Direct CTA */}
                  <div className="mt-10 p-6 bg-navy rounded-xl text-center">
                    <h3 className="font-serif text-xl text-cream mb-2">
                      Ready to Book?
                    </h3>
                    <p className="text-cream/70 text-sm mb-4">
                      Skip the form and book your stay directly online
                    </p>
                    <Link
                      href="https://direct-book.com/properties/theliontaverninnltd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                  {formState === "success" ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="font-serif text-2xl text-navy mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-charcoal/70">
                        Thank you for reaching out. We&apos;ll get back to you
                        shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-navy">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            required
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="border-charcoal/20 focus:border-gold focus:ring-gold"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-navy">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="border-charcoal/20 focus:border-gold focus:ring-gold"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-navy">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(123) 456-7890"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="border-charcoal/20 focus:border-gold focus:ring-gold"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-navy">
                            Subject *
                          </Label>
                          <Select
                            value={formData.subject}
                            onValueChange={(value) =>
                              setFormData({ ...formData, subject: value })
                            }
                            required
                          >
                            <SelectTrigger className="border-charcoal/20 focus:ring-gold">
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="reservation">
                                Reservation Inquiry
                              </SelectItem>
                              <SelectItem value="group">
                                Group Booking
                              </SelectItem>
                              <SelectItem value="amenities">
                                Amenities Question
                              </SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-navy">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          required
                          placeholder="How can we help you?"
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="border-charcoal/20 focus:border-gold focus:ring-gold resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold py-6 text-lg disabled:opacity-70"
                      >
                        {formState === "submitting" ? (
                          <span className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </span>
                        )}
                      </Button>

                      <p className="text-center text-charcoal/50 text-sm">
                        By submitting this form, you agree to our privacy
                        policy.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
