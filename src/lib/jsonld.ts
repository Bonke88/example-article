const BASE_URL = 'https://example-article.vercel.app';

interface ArticleParams {
  title: string;
  description: string;
  slug: string;
  author: string;
  publishDate: string;
  lastUpdated?: string;
  heroImage?: string;
}

export function generateArticleJsonLd(params: ArticleParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    image: params.heroImage ? `${BASE_URL}${params.heroImage}` : undefined,
    datePublished: params.publishDate,
    dateModified: params.lastUpdated || params.publishDate,
    author: {
      '@type': 'Organization',
      name: params.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'RainMaker Ad Ventures',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${params.slug}`,
    },
  };
}

export function generateBreadcrumbJsonLd(title: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${BASE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `${BASE_URL}/blog/${slug}`,
      },
    ],
  };
}

interface FaqItem {
  question: string;
  answer: string;
}

export function generateFaqJsonLd(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
