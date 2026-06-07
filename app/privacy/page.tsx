import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Shield, Eye, Cookie, Database, UserCheck, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for The Lion Inn & Suites in Chetwynd, BC. Learn how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | The Lion Inn & Suites',
    description: 'How we collect, use, and protect your personal information.',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-secondary pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-secondary-foreground mb-6 text-balance">
              Privacy Policy
            </h1>
            <p className="text-secondary-foreground/60 text-lg max-w-2xl mx-auto text-pretty">
              Your privacy is important to us. This policy explains how The Lion Inn &amp; Suites
              collects, uses, and protects your personal information.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">

            {/* Information We Collect */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-serif text-2xl text-foreground">Information We Collect</h2>
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-xl border border-border">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  When you make a reservation or stay at The Lion Inn &amp; Suites, we may collect the following information:
                </p>
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-2 list-disc list-inside">
                  <li>Full name and contact information (phone number, email address, mailing address)</li>
                  <li>Government-issued photo ID (presented at check-in for verification)</li>
                  <li>Credit card or payment information for reservations and security deposits</li>
                  <li>Vehicle information (license plate, make/model) when parked on property</li>
                  <li>Booking details including dates of stay, room preferences, and special requests</li>
                  <li>Security camera footage in common areas, hallways, and parking lots</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-serif text-2xl text-foreground">How We Use Your Information</h2>
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-xl border border-border">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Your personal information is used solely for the following purposes:
                </p>
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-2 list-disc list-inside">
                  <li>Processing and managing your reservation and stay</li>
                  <li>Processing payments, security deposits, and pre-authorizations</li>
                  <li>Communicating with you regarding your booking, check-in/check-out, and any issues</li>
                  <li>Ensuring the safety and security of our guests and property</li>
                  <li>Complying with legal obligations, including tax reporting and law enforcement requests</li>
                  <li>Resolving disputes related to damages, lost items, or policy violations</li>
                </ul>
              </div>
            </div>

            {/* Payment & Credit Card Security */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-serif text-2xl text-foreground">Payment &amp; Credit Card Security</h2>
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-xl border border-border">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  A $400 security deposit pre-authorization is required at check-in. This is NOT a charge — it
                  temporarily holds the amount and typically drops off within 14 days, depending on your bank.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All payment information is processed securely. We do not store full credit card numbers on our
                  premises. Online reservations made through third-party platforms (e.g., Booking.com, Expedia)
                  are subject to those platforms&apos; respective privacy policies and payment processing terms.
                </p>
              </div>
            </div>

            {/* Data Sharing */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <UserCheck className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-serif text-2xl text-foreground">Data Sharing &amp; Third Parties</h2>
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-xl border border-border">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                  Your information may be shared only in the following limited circumstances:
                </p>
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-2 list-disc list-inside">
                  <li>With payment processors to complete transactions</li>
                  <li>With law enforcement or government agencies when required by law</li>
                  <li>With insurance providers in the event of a claim or dispute</li>
                </ul>
              </div>
            </div>

            {/* Cookies & Website */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-serif text-2xl text-foreground">Cookies &amp; Website Usage</h2>
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-xl border border-border">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Our website may use cookies and similar technologies to improve your browsing experience.
                  These may include:
                </p>
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-2 list-disc list-inside">
                  <li>Essential cookies required for site functionality</li>
                  <li>Analytics cookies to understand how visitors use our site</li>
                </ul>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  You can control cookie settings through your browser preferences. Disabling cookies may
                  affect certain website features.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-serif text-2xl text-foreground">Contact Us</h2>
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-xl border border-border">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  If you have questions about this privacy policy or wish to request access to, correction of,
                  or deletion of your personal data, please contact us:
                </p>
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                  <li>
                    <strong className="text-foreground">Phone:</strong>{' '}
                    <a href="tel:250-788-9990" className="text-primary hover:underline">250-788-9990</a>
                  </li>
                  <li>
                    <strong className="text-foreground">Email:</strong>{' '}
                    <a href="mailto:thelionsuites@gmail.com" className="text-primary hover:underline">thelionsuites@gmail.com</a>
                  </li>
                  <li>
                    <strong className="text-foreground">Address:</strong>{' '}
                    5132 46th Ave, Chetwynd, BC V0C 1J0
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl text-secondary-foreground mb-4 text-balance">
              Related Policies
            </h2>
            <p className="text-secondary-foreground/60 text-lg mb-8 text-pretty">
              Please also review our terms and conditions for property rules, payment, and cancellation policies.
            </p>
            <Link href="/terms" className="btn-gold">
              View Terms &amp; Conditions
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
