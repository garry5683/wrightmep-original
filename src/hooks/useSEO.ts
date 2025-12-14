import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  updateMetaTags,
  updateTitle,
  injectJsonLd,
  siteConfig,
} from "@/lib/seo";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
}

export const useSEO = ({
  title,
  description = siteConfig.description,
  keywords = siteConfig.keywords,
  image = siteConfig.ogImage,
  url,
  type = "website",
  noindex = false,
  jsonLd,
}: SEOProps = {}) => {
  const location = useLocation();

  useEffect(() => {
    // Update page title
    const pageTitle = title
      ? `${title} | ${siteConfig.name}`
      : siteConfig.title;
    updateTitle(pageTitle);

    // Construct full URL
    const fullUrl = url || `${siteConfig.url}${location.pathname}`;

    // Update meta tags
    const metaTags: { [key: string]: string } = {
      description: description,
      keywords: keywords.join(", "),

      // Open Graph
      "og:title": title || siteConfig.title,
      "og:description": description,
      "og:type": type,
      "og:url": fullUrl,
      "og:image": image,
      "og:site_name": siteConfig.name,
      "og:locale": "en_US",

      // Twitter Card
      "twitter:card": "summary_large_image",
      "twitter:title": title || siteConfig.title,
      "twitter:description": description,
      "twitter:image": image,
      "twitter:site": siteConfig.social.twitter,
      "twitter:creator": siteConfig.social.twitter,
    };

    // Add noindex if specified
    if (noindex) {
      metaTags["robots"] = "noindex, nofollow";
    }

    updateMetaTags(metaTags);

    // Update canonical URL
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = fullUrl;

    // Inject JSON-LD if provided
    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema) => injectJsonLd(schema));
    }

    // Cleanup function to remove dynamically added JSON-LD scripts
    return () => {
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach((script) => {
        if (script.parentNode === document.head) {
          // Only remove scripts we added (not the ones in index.html)
          const scriptContent = script.textContent || "";
          if (
            scriptContent.includes('"@context"') &&
            !script.hasAttribute("data-static")
          ) {
            script.remove();
          }
        }
      });
    };
  }, [
    title,
    description,
    keywords,
    image,
    url,
    type,
    noindex,
    jsonLd,
    location.pathname,
  ]);
};

export default useSEO;
