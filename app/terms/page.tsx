import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FileText, CreditCard, XCircle, Camera, Ban, Package, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms, conditions and policies for The Lion Inn & Suites in Chetwynd, BC. Review our property rules, payment policy, cancellation policy, and more.',
  openGraph: {
    title: 'Terms & Conditions | The Lion Inn & Suites',
    description: 'Review our property rules, payment policy, and cancellation policy.',
  },
}

export default function TermsPage() {
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
              Terms &amp; Conditions
            </h1>
            <p className="text-secondary-foreground/60 text-lg max-w-2xl mx-auto text-pretty">
              Please review the following policies before making your reservation.
              By booking a stay with us, you agree to these terms.
            </p>
          </div>
        </section>

        {/* Property Rules */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">
                Property Rules
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-start gap-3">
                  <Ban className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg text-card-foreground mb-2">Non-Smoking Policy</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We are a non-smoking hotel for reasons of health, safety and comfort for all of our guests.
                      Guests who violate the policy and smoke in premises are subject to a minimum $400.00 charge
                      for returning the room to smoke-free status and agree to being charged by accepting this policy.
                      We appreciate your understanding.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg text-card-foreground mb-2">General Policies</h3>
                    <ul className="text-muted-foreground text-sm leading-relaxed space-y-3">
                      <li>All guest rooms are located on first floor, and there is no bellhop. Please pack accordingly.</li>
                      <li>We reserve the right to charge for any damage to or removal of items from the premises and/or unusual cleaning.</li>
                      <li>No hourly rates available. No cash accepted onsite.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-start gap-3">
                  <Camera className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg text-card-foreground mb-2">Photo Shoots &amp; Filming</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      All photo shoots and filming are subject to advance approval by the owners. At least seven days
                      advance written notice required prior to any personal or professional photo shoots. No closed door
                      filming allowed. Additional fees apply. In other words, you may not simply reserve a room for a
                      photo shoot or filming. This also applies to day of events such as weddings. A liaison designated
                      by the Lion Inn &amp; Suites will be assigned to monitor all photo shoots and filming. Please call us
                      at <a href="tel:250-788-9990" className="text-primary hover:underline">250-788-9990</a> for
                      further details. A separate contract is required.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-start gap-3">
                  <Package className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg text-card-foreground mb-2">Lost &amp; Found / Damaged Items</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Items left behind and requested to be mailed will incur a minimum charge of $10 and may take up
                      to 30 days to receive. We apologize for any inconvenience. To avoid this, please be sure to
                      thoroughly check your room for items that are of value to you prior to your departure.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Damaged or missing items from rooms post check out will be charged to your security deposit on
                      file. These include but are not limited to remote controls, bathrobes, linens, pillows, mugs,
                      room key, books, etc. Please inquire if you have any questions or concerns about this policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Policy */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">
                Payment Policy
              </h2>
            </div>

            <div className="bg-card p-6 sm:p-8 rounded-xl border border-border space-y-5">
              <p className="text-muted-foreground text-sm leading-relaxed">
                There are GST and PST on top of room rent, no additional taxes, fees or hidden surcharges.
                Direct reservations are confirmed by payment of your 1st night in the case of a one or two night
                stay OR 50% of your total stay for three or more nights. This may appear as two separate charges
                on your statement in the case of three or more days. All other channels (e.g. booking.com, etc.)
                require full payment in advance.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A $400 security deposit authorization is required at check in. A valid photo ID must be presented
                at time of check in along with the credit card used to reserve online.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To adhere to proper card acceptance and validation norms defined by credit card associations, all
                hotels are required to pre-authorize — or separately, charge — all provided credit cards. A
                pre-authorization will place the pre-authorized amount in a holding-state and temporarily reduce
                one&apos;s credit card limit, but it is NOT a transaction charge and will not be reflected in
                one&apos;s credit card statement. Depending on one&apos;s credit card bank&apos;s set up, the
                pre-authorized amount will drop off typically after 14 days.
              </p>

              <div className="bg-muted/50 p-5 rounded-lg border border-border">
                <p className="text-foreground text-sm font-medium mb-3">
                  For assurance, Guests whose credit cards have been pre-authorized are encouraged to check
                  with their respective credit card bank to:
                </p>
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-2 list-disc list-inside">
                  <li>Confirm the above understanding of pre-authorization;</li>
                  <li>Confirm that a pre-authorization — and NOT a charge — has been performed; and</li>
                  <li>Affirm the pre-authorized amount and when it will drop off as scheduled.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cancellation Policy */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <XCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">
                Cancellation Policy
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-serif text-lg text-card-foreground mb-3">Daily Stay Guests</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Free cancellation for daily guests when notification is confirmed 24 hours prior to check-in.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-serif text-lg text-card-foreground mb-3">Long Term Stay Guests</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If the guest ends their stay before the end of the booking period after check-in, we deduct one
                  day room cost for the administration fee and refund the remaining time costs.
                </p>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-xl border border-border mt-6">
              <h3 className="font-serif text-lg text-foreground mb-3">Third-Party Bookings</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                If you booked your room through a third-party agent, please contact them directly for cancellation:
              </p>
              <ul className="text-muted-foreground text-sm leading-relaxed mt-3 space-y-1">
                <li>
                  <strong className="text-foreground">Expedia:</strong>{' '}
                  <a href="tel:1-800-319-4724" className="text-primary hover:underline">1-800-319-4724</a>
                </li>
                <li>
                  <strong className="text-foreground">Booking.com:</strong>{' '}
                  <a href="tel:1-866-492-3246" className="text-primary hover:underline">1-866-492-3246</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl text-secondary-foreground mb-4 text-balance">
              Questions About Our Policies?
            </h2>
            <p className="text-secondary-foreground/60 text-lg mb-8 text-pretty">
              Feel free to reach out — our team is happy to clarify any of the above.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-gold"
              >
                Contact Us
              </Link>
              <a
                href="tel:250-788-9990"
                className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-colors"
              >
                or call 250-788-9990
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
