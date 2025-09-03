export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KFZ Zulassungsstelle München",
    "image": "https://kfz-zulassung-muenchen.de/hero-image.jpg",
    "description": "Professionelle KFZ-Zulassung in München. Schnelle Termine für Fahrzeug anmelden, Ummeldung & Abmeldung. Kompetenter Service in zentraler Lage.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Musterstraße 123",
      "addressLocality": "München",
      "postalCode": "80331",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.1371079,
      "longitude": 11.5753822
    },
    "telephone": "+4989123456789",
    "email": "info@zulassung-muenchen.de",
    "url": "https://kfz-zulassung-muenchen.de",
    "openingHours": [
      "Mo-Fr 08:00-17:00",
      "Sa 09:00-13:00"
    ],
    "priceRange": "€€",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 48.1371079,
        "longitude": 11.5753822
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "KFZ Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fahrzeug Anmeldung",
            "description": "Neuzulassung von PKW, Motorrädern und Nutzfahrzeugen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fahrzeug Ummeldung",
            "description": "Halterwechsel und Adressänderungen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fahrzeug Abmeldung",
            "description": "Stilllegung und Außerbetriebsetzung von Fahrzeugen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kennzeichen Service",
            "description": "Wunschkennzeichen und Kennzeichen-Reservierung"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "247"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}