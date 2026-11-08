import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
}

const DEFAULT_TITLE = 'Amani Ishimwe | Product Designer & Software Engineer';
const DEFAULT_DESCRIPTION =
  'I am Amani Ishimwe, a product designer and software engineer based in Kigali, Rwanda. I design digital experiences, build software products, and help turn ideas into functional digital systems.';

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = 'https://www.amanisamuel.online/ACC.png',
}) => {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | Amani Ishimwe` : DEFAULT_TITLE;
    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute(attr, value);
      }
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[property="og:url"]', 'content', `https://www.amanisamuel.online${location.pathname}`);
    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);
    setMeta('link[rel="canonical"]', 'href', `https://www.amanisamuel.online${location.pathname}`);
  }, [title, description, image, location.pathname]);

  return null;
};

export default SEOHead;
