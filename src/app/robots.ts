import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      crawlDelay: 10000, // em segundos
    },
    sitemap: 'https://www.leticiamartins.com.br/sitemap.xml',
  }
}