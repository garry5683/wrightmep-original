# SEO Implementation Guide for Wright MEP

This document provides comprehensive information about the SEO implementation for the Wright MEP Engineering Solutions website.

## Overview

The website now includes comprehensive SEO features including:

- Enhanced meta tags (Open Graph, Twitter Cards)
- JSON-LD structured data (Organization, LocalBusiness, WebSite schemas)
- Technical SEO files (sitemap.xml, robots.txt, manifest.json)
- Dynamic page-level SEO components
- Performance optimizations

## File Structure

### Core SEO Files

#### `src/lib/seo.ts`

Contains all SEO configuration and utility functions:

- `siteConfig`: Central configuration for site metadata
- Schema generators: `generateOrganizationSchema()`, `generateLocalBusinessSchema()`, `generateWebSiteSchema()`, `generateBreadcrumbSchema()`, `generateServiceSchema()`
- Helper functions: `injectJsonLd()`, `updateMetaTags()`, `updateTitle()`

#### `src/hooks/useSEO.ts`

Custom React hook for managing page-specific SEO:

- Dynamically updates meta tags, Open Graph tags, Twitter Cards
- Manages canonical URLs
- Injects JSON-LD structured data
- Cleans up on component unmount

#### `src/components/SEO.tsx`

Reusable SEO component that wraps the `useSEO` hook for easy integration.

### Technical SEO Files

#### `public/sitemap.xml`

XML sitemap listing all pages with:

- Priority levels
- Change frequency
- Last modification dates

**Important**: Update this file when adding new pages to the site.

#### `public/robots.txt`

Directives for search engine crawlers:

- Allows all pages except `/api/` and `/_redirects`
- References sitemap location
- Sets crawl delay

#### `public/manifest.json`

Web app manifest for PWA support with app metadata and icons.

## Usage

### Adding SEO to a New Page

```tsx
import SEO from "@/components/SEO";
import { generateBreadcrumbSchema } from "@/lib/seo";

export default function MyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.wrightmep.com/" },
    { name: "My Page", url: "https://www.wrightmep.com/my-page" },
  ]);

  return (
    <div>
      <SEO
        title="My Page Title"
        description="Description of my page"
        keywords={["keyword1", "keyword2", "keyword3"]}
        jsonLd={breadcrumbSchema}
      />
      {/* Page content */}
    </div>
  );
}
```

### SEO Component Props

- `title`: Page title (will be appended with site name)
- `description`: Meta description
- `keywords`: Array of keywords
- `image`: Open Graph image URL (defaults to site logo)
- `url`: Canonical URL (auto-generated if not provided)
- `type`: Open Graph type (default: 'website')
- `noindex`: Set to `true` for pages that shouldn't be indexed (e.g., 404 pages)
- `jsonLd`: JSON-LD structured data object or array

## Configuration

### Updating Site Information

Edit `src/lib/seo.ts` to update:

1. **Basic Information**:

   ```typescript
   export const siteConfig = {
     name: "Wright MEP Engineering Solutions",
     url: "https://www.wrightmep.com",
     // ... other fields
   };
   ```

2. **Business Details**:

   ```typescript
   business: {
     address: {
       streetAddress: "Your Street Address",
       addressLocality: "City",
       addressRegion: "State",
       postalCode: "Postal Code",
       addressCountry: "IN"
     },
     phone: "+91-XXXXX-XXXXX",
     // ... other fields
   }
   ```

3. **Social Media**:
   ```typescript
   social: {
     twitter: "@yourhandle",
     facebook: "yourpage",
     linkedin: "company/yourcompany"
   }
   ```

### Adding Google Analytics

Uncomment and update the Google Analytics code in `index.html`:

```html
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX"); <!-- Replace with your GA4 ID -->
</script>
```

### Adding Google Search Console Verification

Uncomment and add your verification code in `index.html`:

```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

## Validation & Testing

### Meta Tags Validation

1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### Structured Data Validation

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Google Search Console**: Monitor structured data in Search Console

### Sitemap Validation

1. **XML Sitemap Validator**: https://www.xml-sitemaps.com/validate-xml-sitemap.html
2. **Google Search Console**: Submit sitemap at `https://www.wrightmep.com/sitemap.xml`

### Performance & SEO Audit

1. Run Lighthouse audit in Chrome DevTools
2. Target scores:
   - SEO: 90+
   - Performance: 90+
   - Accessibility: 90+
   - Best Practices: 90+

## Best Practices

### When Adding New Pages

1. Add the page to `public/sitemap.xml`
2. Add SEO component with appropriate metadata
3. Include breadcrumb schema for navigation
4. Use descriptive, keyword-rich titles and descriptions
5. Ensure proper heading hierarchy (h1 → h2 → h3)

### Image Optimization

1. Always include `alt` attributes on images
2. Use descriptive alt text that includes relevant keywords
3. Optimize image file sizes for faster loading

### Content Guidelines

1. **Title Tags**: 50-60 characters
2. **Meta Descriptions**: 150-160 characters
3. **Keywords**: 5-10 relevant keywords per page
4. **Headings**: Use only one h1 per page

### URL Structure

- Use clean, descriptive URLs
- Include keywords where appropriate
- Use hyphens to separate words
- Keep URLs short and readable

## Monitoring & Maintenance

### Regular Tasks

1. **Weekly**:

   - Monitor Google Search Console for errors
   - Check for broken links

2. **Monthly**:

   - Update sitemap if new pages added
   - Review and update meta descriptions
   - Check structured data validity

3. **Quarterly**:
   - Run full Lighthouse audit
   - Review and update keywords
   - Analyze search performance data

### Tools to Use

- **Google Search Console**: Monitor search performance
- **Google Analytics**: Track user behavior
- **Bing Webmaster Tools**: Additional search engine coverage
- **Screaming Frog**: Technical SEO audit tool

## Troubleshooting

### Common Issues

**Issue**: Pages not appearing in search results

- **Solution**: Check robots.txt, ensure pages are in sitemap, verify no `noindex` tags

**Issue**: Structured data errors in Search Console

- **Solution**: Validate JSON-LD with Schema.org validator, check for syntax errors

**Issue**: Low SEO score in Lighthouse

- **Solution**: Check meta tags, ensure proper heading hierarchy, optimize images

**Issue**: Slow page load times

- **Solution**: Optimize images, enable caching, minify CSS/JS, use CDN

## Additional Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/docs/documents.html)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Web.dev SEO Audits](https://web.dev/lighthouse-seo/)

## Support

For questions or issues related to SEO implementation, refer to this guide or consult with an SEO specialist.
