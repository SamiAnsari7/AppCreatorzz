import type { MetadataRoute } from 'next'
import { MOCK_CATEGORIES, MOCK_LESSONS } from '@/lib/data';
 
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/profile`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const categoryRoutes = MOCK_CATEGORIES.map((category) => ({
    url: `${BASE_URL}/categories/${category.id}`,
    lastModified: new Date(), // In a real app, use actual modification date
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const lessonRoutes = MOCK_LESSONS.map((lesson) => ({
    url: `${BASE_URL}/lessons/${lesson.id}`,
    lastModified: new Date(), // In a real app, use actual modification date
    changeFrequency: 'weekly',
    priority: 0.7,
  }));
 
  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...lessonRoutes,
  ]
}
