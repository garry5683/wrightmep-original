import { useSEO } from '@/hooks/useSEO';

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

/**
 * SEO Component
 * 
 * A component wrapper for the useSEO hook that handles all SEO-related meta tags,
 * Open Graph tags, Twitter Cards, and JSON-LD structured data.
 * 
 * @example
 * ```tsx
 * <SEO 
 *   title="Services"
 *   description="Our fire safety services"
 *   jsonLd={serviceSchema}
 * />
 * ```
 */
export const SEO: React.FC<SEOProps> = (props) => {
  useSEO(props);
  return null;
};

export default SEO;
