import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Melody Saari',
    location: 'Calgary, AB',
    rating: 5,
    text: "My room was large and spacious. The front desk associate was kind, professional, and accommodating. The bed, bed linens and pillows were great. Kitchen is great. Recommendations: Invest a bit into the front entrance to make it look a bit more bright and inviting, and provide more coffee in the rooms.",
    date: 'November 2025',
  },
  {
    name: 'Heather S',
    location: 'Regina, Canada',
    rating: 5,
    title: 'BEAUTIFUL MOTEL',
    text: 'We are currently staying at this motel. It is a beautiful motel and is spotlessly clean!! The staff are very accommodating and friendly. The area and motel itself is very quiet. We are very happy with this motel and would most certainly stay here in the future!',
    date: 'March 2018',
  },
  {
    name: 'LovesNeon',
    location: 'Washington State',
    rating: 5,
    title: 'A lot of room for the money',
    text: "This room had a kitchenette and a full-sized fridge! Even a little 2-burner elect4ric cooktop. Good wifi. It's a bit off the main road, so it was quiet. We would have preferred outside doors, simply because that makes it easier to unload/load for us. Worked well for us on our recent road trip.",
    date: 'July 2018',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Guest Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground text-lg">
            Rated 4.5 out of 5 based on guest reviews
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 lg:p-8 border border-border relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="h-12 w-12" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-card-foreground mb-6 leading-relaxed relative z-10">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-card-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                </div>
                <p className="text-muted-foreground text-sm">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Review Badges */}
        <div className="mt-12 flex justify-center items-center gap-4">
          Read more reviews on <a
            href="https://maps.google.com/?q=The+Lion+Inn+%26+Suites+Chetwynd+BC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium"> Google Maps</span>
            <img height="20" width="20" alt="" src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" />
          </a>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g660772-d9797928-Reviews-The_Lion_Inn_Suites-Chetwynd_British_Columbia.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium"> TripAdvisor</span>
            <img height="28" width="28" alt="" src="https://www.gstatic.com/travel-hotels/branding/icon_100532569.png" />
          </a>
        </div>
      </div>
    </section>
  )
}
