import { company } from "@/lib/company";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lunox.services";

/** JSON-LD for Google local / service search */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: company.name,
    url: siteUrl,
    email: company.email,
    telephone: company.phoneTel,
    description:
      "UPVC windows and doors, home solar systems with 3D visualisation, flooring, tiling, cladding, conservatories, and house extensions fitted across Scotland.",
    areaServed: [
      { "@type": "Country", name: "Scotland" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    priceRange: "££",
    image: `${siteUrl}/media/hero-red-brick.jpg`,
    sameAs: [company.whatsapp],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.phoneTel,
      contactType: "sales",
      areaServed: "GB",
      availableLanguage: ["English"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home improvements",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "UPVC windows" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "UPVC doors" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home solar systems" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar 3D visualisation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tiling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cladding" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conservatories" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House extensions" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
