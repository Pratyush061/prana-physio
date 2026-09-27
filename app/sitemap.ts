import { MetadataRoute } from 'next';
import { serviceDetails } from '@/lib/services';
import { blogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pranaphysio.in';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/bookings',
    '/reviews',
    '/faq',
    '/blog',
    '/insured-patients',
    '/transform-your-body',
    '/access-your-full-capacity',
    '/new-patients-offer',
    '/contact',
    '/accreditations',
    '/announcements',
    '/join-our-team',
    '/privacy',
    '/terms',
    '/cancellation-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const dynamicServiceRoutes = serviceDetails.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const dynamicBlogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicServiceRoutes, ...dynamicBlogRoutes];
}
