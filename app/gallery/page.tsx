'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'

const galleryImages = [
  {
    src: 'https://img.youtube.com/vi/ty-oCw56Egc/maxresdefault.jpg',
    alt: 'The Lion Inn & Suites Video Tour',
    category: 'Video',
    videoUrl: 'https://www.youtube.com/embed/ty-oCw56Egc',
    isVideo: true,
  },
  {
    src: '/images/welcome-to-chetwynd.jpg',
    alt: 'Welcome to Chetwynd',
    category: 'Location',
  },
  {
    src: '/images/the-lion-inn-suites-surroundings-chetwynd.jpg',
    alt: 'Beautiful Chetwynd BC scenery',
    category: 'Location',
  },
  {
    src: '/images/the-lion-inn-suites-exterior-chetwynd.jpg',
    alt: 'The Lion Inn & Suites exterior view',
    category: 'Property',
  },
  {
    src: '/images/the-lion-inn-suites-night-chetwynd.jpg',
    alt: 'Hotel exterior at dusk',
    category: 'Property',
  },
  {
    src: '/images/the-lion-inn-suites-lobby-chetwynd.jpg',
    alt: 'Hotel reception and lobby area',
    category: 'Property',
  },
  {
    src: '/images/king-suite-1-chetwynd.jpg',
    alt: 'King Suite bedroom',
    category: 'Rooms',
    badge: 'King Suite',
  },
  {
    src: '/images/king-suite-2-chetwynd.jpg',
    alt: 'King Suite bedroom',
    category: 'Rooms',
    badge: 'King Suite',
  },
  {
    src: '/images/king-suite-3-chetwynd.jpg',
    alt: 'King Suite bedroom',
    category: 'Rooms',
    badge: 'King Suite',
  },
  {
    src: '/images/queen-suite-chetwynd.jpg',
    alt: 'Queen Suite bedroom',
    category: 'Rooms',
    badge: 'Queen Suite',
  },
  {
    src: '/images/double-queen-suite-chetwynd.jpg',
    alt: 'Double Queen Suite',
    category: 'Rooms',
    badge: 'Double Queen Suite',
  },
  {
    src: '/images/bachelor-studio-suite-1-chetwynd.jpg',
    alt: 'Bachelor Studio Suite',
    category: 'Rooms',
    badge: 'Bachelor Studio',
  },
  {
    src: '/images/bachelor-studio-suite-2-chetwynd.jpg',
    alt: 'Bachelor Studio Suite',
    category: 'Rooms',
    badge: 'Bachelor Studio',
  },
  {
    src: '/images/bachelor-studio-suite-3-chetwynd.jpg',
    alt: 'Bachelor Studio Suite',
    category: 'Rooms',
    badge: 'Bachelor Studio',
  },
  {
    src: '/images/the-lion-inn-suites-kitchen-facility-chetwynd.jpg',
    alt: 'Full kitchenette with appliances',
    category: 'Amenities',
  },
  {
    src: '/images/the-lion-inn-suites-kitchen-stove-chetwynd.jpg',
    alt: 'Suite cooking stove',
    category: 'Amenities',
  },
  {
    src: '/images/the-lion-inn-suites-ceramic-shower-chetwynd.jpg',
    alt: 'Suite ceramic shower',
    category: 'Amenities',
  },

]

const categories = ['All', 'Video', 'Property', 'Rooms', 'Amenities', 'Location']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
  }

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1
      )
    }
  }

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1
      )
    }
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                Photo Gallery
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-secondary-foreground mb-6 text-balance">
                Browse Our Gallery
              </h1>
              <p className="text-secondary-foreground/70 text-lg leading-relaxed text-pretty">
                Located right in the heart of Chetwynd, The Lion Inn & Suites offers 19 contemporary
                suites fully equipped with high-end appliances and tasteful trendy design rooms that
                will make you feel like a home away home.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 bg-muted border-y border-border sticky top-20 z-30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : ''
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filteredImages.map((image, index) => (
                <button
                  key={image.src}
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {image.badge && (
                    <span className="absolute top-4 left-4 z-20 bg-accent/95 backdrop-blur-xs text-accent-foreground border border-accent-foreground/10 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase shadow-md">
                      {image.badge}
                    </span>
                  )}
                  {image.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 fill-current ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-left">
                      <span className="text-primary text-xs font-medium uppercase tracking-wider">
                        {image.category}
                      </span>
                      <p className="text-white text-sm mt-1">{image.alt}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Dialog open={selectedImageIndex !== null} onOpenChange={() => closeLightbox()}>
          <DialogContent className="max-w-5xl bg-secondary/95 backdrop-blur-md border-secondary-foreground/10 p-0">
            <DialogTitle className="sr-only">
              {selectedImageIndex !== null ? filteredImages[selectedImageIndex]?.alt : 'Gallery Image'}
            </DialogTitle>
            {selectedImageIndex !== null && (
              <div className="relative">
                <div className="relative aspect-video">
                  {filteredImages[selectedImageIndex].isVideo ? (
                    <iframe
                      src={`${filteredImages[selectedImageIndex].videoUrl}?autoplay=1`}
                      title={filteredImages[selectedImageIndex].alt}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  ) : (
                    <Image
                      src={filteredImages[selectedImageIndex].src}
                      alt={filteredImages[selectedImageIndex].alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 80vw"
                    />
                  )}
                </div>

                {/* Navigation */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/80 text-secondary-foreground flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/80 text-secondary-foreground flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Caption */}
                <div className="p-4 text-center">
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">
                    {filteredImages[selectedImageIndex].category}
                  </span>
                  <p className="text-secondary-foreground mt-1">
                    {filteredImages[selectedImageIndex].alt}
                  </p>
                  <p className="text-secondary-foreground/50 text-sm mt-2">
                    {selectedImageIndex + 1} of {filteredImages.length}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">
                Ready to Experience It In Person?
              </h2>
              <p className="text-muted-foreground mb-6">
                Browse photos of our hotel, then start planning your stay today.
              </p>
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
                  Check Availability & Book Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
