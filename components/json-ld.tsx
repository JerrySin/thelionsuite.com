export function HotelJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "The Lion Inn & Suites",
    description:
      "Contemporary suite hotel in Chetwynd, British Columbia featuring 19 fully-equipped suites with full kitchenettes, separate bathrooms, and modern amenities. Gateway to the Rocky Mountain Foothills.",
    url: "https://thelionsuite.com",
    telephone: "+1-250-788-9990",
    email: "thelionsuites@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5132 46th Ave",
      addressLocality: "Chetwynd",
      addressRegion: "BC",
      postalCode: "V0C 1J0",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.6977,
      longitude: -121.6336,
    },
    image: [
      "https://thelionsuite.com/images/hero-hotel.jpg",
      "https://thelionsuite.com/images/room-king.jpg",
      "https://thelionsuite.com/images/room-queen.jpg",
    ],
    priceRange: "$$",
    starRating: {
      "@type": "Rating",
      ratingValue: "3",
    },
    numberOfRooms: 19,
    petsAllowed: false,
    checkinTime: "15:00",
    checkoutTime: "11:00",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Full Kitchenette",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free WiFi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Air Conditioning",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Flat Screen TV",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24-Hour Front Desk",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Coin Laundry",
        value: true,
      },
    ],
    availableLanguage: ["English"],
    paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
    currenciesAccepted: "CAD",
    sameAs: [],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://direct-book.com/properties/theliontaverninnltd",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "LodgingReservation",
        name: "Book a Room",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://thelionsuite.com/#localbusiness",
    name: "The Lion Inn & Suites",
    image: "https://thelionsuite.com/images/hero-hotel.jpg",
    telephone: "+1-250-788-9990",
    email: "thelionsuites@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5132 46th Ave",
      addressLocality: "Chetwynd",
      addressRegion: "BC",
      postalCode: "V0C 1J0",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.6977,
      longitude: -121.6336,
    },
    url: "https://thelionsuite.com",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
