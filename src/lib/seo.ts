// SEO Configuration and Utilities for Wright MEP

export const siteConfig = {
  name: "Wright MEP Engineering Solutions",
  title: "Wright MEP Engineering Solutions - Fire Safety Systems & Consulting",
  description:
    "Leading fire safety engineering company in India. Expert fire alarm systems, wet riser systems, PA systems, Fire NOC compliance, and consulting services across Kerala, Mumbai, Delhi, Bangalore, Chennai.",
  url: "https://www.wrightmep.com",
  ogImage: "https://www.wrightmep.com/assets/logo.jpg",
  author: "Wright MEP Engineering Solutions",
  keywords: [
    "fire safety engineering",
    "fire alarm systems",
    "wet riser systems",
    "PA systems",
    "Fire NOC",
    "fire safety consulting",
    "MEP engineering",
    "fire protection systems",
    "building safety",
    "fire safety compliance",
  ],
  social: {
    twitter: "@wrightmep", // Update with actual handle
    facebook: "https://www.facebook.com/share/1CPyHrjMdM/", // Update with actual page
    linkedin: "https://www.linkedin.com/company/wright-mep/", // Update with actual company page
  },
  business: {
    name: "Wright MEP Engineering Solutions",
    legalName: "Wright MEP Engineering Solutions Pvt. Ltd.",
    address: {
      streetAddress:
        "First floor, Marigold rose residency,near Metro Health Care,", // Add actual address
      addressLocality: "Thrissur", // Add city
      addressRegion: "Kerala", // Add state/region
      postalCode: "680121", // Add postal code
      addressCountry: "IN",
    },
    phone: "9895277526", // Add phone number
    email: "wrightmep@gmail.com",
    foundingDate: "2018", // Update with actual date
  },
};

// Generate Organization Schema
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.business.name,
  legalName: siteConfig.business.legalName,
  url: siteConfig.url,
  logo: siteConfig.ogImage,
  foundingDate: siteConfig.business.foundingDate,
  email: siteConfig.business.email,
  telephone: siteConfig.business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.business.address.streetAddress,
    addressLocality: siteConfig.business.address.addressLocality,
    addressRegion: siteConfig.business.address.addressRegion,
    postalCode: siteConfig.business.address.postalCode,
    addressCountry: siteConfig.business.address.addressCountry,
  },
  sameAs: [
    `https://twitter.com/${siteConfig.social.twitter}`,
    `https://facebook.com/${siteConfig.social.facebook}`,
    `https://linkedin.com/company/${siteConfig.social.linkedin}`,
  ],
});

// Generate LocalBusiness Schema
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.business.name,
  image: siteConfig.ogImage,
  url: siteConfig.url,
  telephone: siteConfig.business.phone,
  email: siteConfig.business.email,
  priceRange: "",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.business.address.streetAddress,
    addressLocality: siteConfig.business.address.addressLocality,
    addressRegion: siteConfig.business.address.addressRegion,
    postalCode: siteConfig.business.address.postalCode,
    addressCountry: siteConfig.business.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "", // Add actual coordinates
    longitude: "",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
});

// Generate WebSite Schema
export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

// Generate BreadcrumbList Schema
export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Generate Service Schema
export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: service.name,
  provider: {
    "@id": `${siteConfig.url}/#organization`,
  },
  name: service.name,
  description: service.description,
  url: service.url,
  image: service.image || siteConfig.ogImage,
  areaServed: {
    "@type": "Country",
    name: "India",
  },
});

// Helper to inject JSON-LD script
export const injectJsonLd = (data: object) => {
  if (typeof window === "undefined") return;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
};

// Helper to update meta tags
export const updateMetaTags = (tags: { [key: string]: string }) => {
  if (typeof window === "undefined") return;

  Object.entries(tags).forEach(([key, value]) => {
    let element =
      document.querySelector(`meta[name="${key}"]`) ||
      document.querySelector(`meta[property="${key}"]`);

    if (element) {
      element.setAttribute("content", value);
    } else {
      element = document.createElement("meta");
      if (key.startsWith("og:") || key.startsWith("twitter:")) {
        element.setAttribute("property", key);
      } else {
        element.setAttribute("name", key);
      }
      element.setAttribute("content", value);
      document.head.appendChild(element);
    }
  });
};

// Helper to update page title
export const updateTitle = (title: string) => {
  if (typeof window === "undefined") return;
  document.title = title;
};
