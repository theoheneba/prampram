import { useEffect } from 'react';

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
};

export default function SEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDescription = document.querySelector(
        'meta[name="description"]'
      ) as HTMLMetaElement | null;
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }

    if (keywords) {
      let metaKeywords = document.querySelector(
        'meta[name="keywords"]'
      ) as HTMLMetaElement | null;
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }
  }, [title, description, keywords]);

  return null;
}


