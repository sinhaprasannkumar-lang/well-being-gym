import { useEffect } from 'react';
import { GYM_INFO } from '../data/gymData';

export default function SeoHead() {
  useEffect(() => {
    // Set page title and meta tags
    document.title = `${GYM_INFO.name} | Best Gym in NIT Faridabad (4.9★ Rated)`;

    // Inject JSON-LD Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "GymOrHealthClub",
      "name": GYM_INFO.name,
      "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
      "@id": "https://wellnessclubxpress-nit.com",
      "url": "https://wellnessclubxpress-nit.com",
      "telephone": GYM_INFO.phonePrimary,
      "email": GYM_INFO.email,
      "priceRange": "₹1499 - ₹3999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Block K, New Industrial Township (NIT-1)",
        "addressLocality": "Faridabad",
        "addressRegion": "Haryana",
        "postalCode": "121001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.3888,
        "longitude": 77.2950
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "05:30",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "06:00",
          "closes": "12:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": GYM_INFO.googleRating,
        "reviewCount": GYM_INFO.googleReviewsCount
      }
    };

    const scriptId = 'gym-schema-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(schemaData);

    return () => {
      // clean up if unmounted
    };
  }, []);

  return null;
}
