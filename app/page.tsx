import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { RoomsPreview } from '@/components/home/rooms-preview'
import { AmenitiesSection } from '@/components/home/amenities-section'
import { LocationPreview } from '@/components/home/location-preview'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <RoomsPreview />
        <AmenitiesSection />
        <LocationPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
