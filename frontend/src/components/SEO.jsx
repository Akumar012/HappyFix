import { useEffect } from "react";

// SEO Configuration
const SEOConfig = {
  baseUrl: "https://happyfix.me",
  siteName: "HappyFix",

  defaultTitle:
    "AC Repair, Refrigerator Repair & Home Appliance Services in Jaipur | HappyFix",

  defaultDescription:
    "Expert repair services for AC, Refrigerator, Washing Machine, TV, Microwave & Geyser in Jaipur. HappyFix provides professional, affordable home appliance maintenance at your doorstep.",

  defaultImage: "https://happyfix.me/og-image.png",

  phone: "+91-8764064696",
  email: "info@happyfix.me",

  address: {
    locality: "Jaipur",
    region: "Rajasthan",
    postalCode: "302015",
    country: "IN",
  },
};

// Generate LocalBusiness Schema
const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  name: SEOConfig.siteName,

  image: "https://happyfix.me/logo.png",
  logo: "https://happyfix.me/logo.png",

  url: SEOConfig.baseUrl,

  description: SEOConfig.defaultDescription,

  telephone: SEOConfig.phone,

  email: SEOConfig.email,

  address: {
    "@type": "PostalAddress",
    addressLocality: SEOConfig.address.locality,
    addressRegion: "RJ",
    postalCode: SEOConfig.address.postalCode,
    addressCountry: SEOConfig.address.country,
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.9124",
    longitude: "75.7873",
  },

  areaServed: {
    "@type": "City",
    name: "Jaipur",
  },

  priceRange: "₹₹",
});

// Generate Service Schema
const generateServiceSchema = (
  serviceName,
  description,
  price = null
) => {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Service",

    name: serviceName,

    description,

    provider: {
      "@type": "LocalBusiness",

      name: SEOConfig.siteName,

      url: SEOConfig.baseUrl,
    },

    areaServed: {
      "@type": "City",
      name: "Jaipur",
    },
  };

  if (price) {
    schema.offers = {
      "@type": "Offer",
      price,
      priceCurrency: "INR",
    };
  }

  return schema;
};

// Update/Create Meta Tag
const updateMetaTag = (
  name,
  content,
  attribute = "name"
) => {
  let tag = document.querySelector(
    `meta[${attribute}="${name}"]`
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

// Canonical URL
const setCanonical = (url) => {
  let canonical =
    document.querySelector(
      "link[rel='canonical']"
    );

  if (!canonical) {
    canonical =
      document.createElement("link");

    canonical.rel = "canonical";

    document.head.appendChild(
      canonical
    );
  }

  canonical.href = url;
};

// JSON-LD Schema
const setJsonLdSchema = (schema) => {
  let script =
    document.getElementById(
      "seo-jsonld"
    );

  if (!script) {
    script =
      document.createElement("script");

    script.id = "seo-jsonld";

    script.type =
      "application/ld+json";

    document.head.appendChild(
      script
    );
  }

  script.textContent =
    JSON.stringify(schema);
};

// SEO Component
export const SEO = ({
  title,
  description,
  url = "/",
  image,
  schema,
}) => {
  useEffect(() => {
    const fullTitle =
      title
        ? `${title} | HappyFix`
        : SEOConfig.defaultTitle;

    const fullDescription =
      description ||
      SEOConfig.defaultDescription;

    const fullUrl =
      `${SEOConfig.baseUrl}${url}`;

    const fullImage =
      image ||
      SEOConfig.defaultImage;

    // Title
    document.title = fullTitle;

    // Basic SEO
    updateMetaTag(
      "description",
      fullDescription
    );

    updateMetaTag(
      "robots",
      "index,follow"
    );

    // Open Graph
    updateMetaTag(
      "og:type",
      "website",
      "property"
    );

    updateMetaTag(
      "og:title",
      fullTitle,
      "property"
    );

    updateMetaTag(
      "og:description",
      fullDescription,
      "property"
    );

    updateMetaTag(
      "og:image",
      fullImage,
      "property"
    );

    updateMetaTag(
      "og:url",
      fullUrl,
      "property"
    );

    updateMetaTag(
      "og:site_name",
      SEOConfig.siteName,
      "property"
    );

    // Twitter
    updateMetaTag(
      "twitter:card",
      "summary_large_image"
    );

    updateMetaTag(
      "twitter:title",
      fullTitle
    );

    updateMetaTag(
      "twitter:description",
      fullDescription
    );

    updateMetaTag(
      "twitter:image",
      fullImage
    );

    // Canonical
    setCanonical(fullUrl);

    // Schema
    if (schema) {
      setJsonLdSchema(schema);
    }

  }, [
    title,
    description,
    url,
    image,
    schema,
  ]);

  return null;
};

export {
  SEOConfig,
  generateLocalBusinessSchema,
  generateServiceSchema,
};