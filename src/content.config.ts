import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    productName: z.string(),
    brand: z.string(),
    category: z.enum(['standing-desk', 'ergonomic-chair', 'monitor-arm', 'accessories']),
    price: z.number(),
    rating: z.number().min(1).max(5),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('FindPoise Editorial Team'),
    heroImage: z.string(),
    affiliateUrl: z.string(),
    retailer: z.string(),
    couponCode: z.string().optional(),
    discount: z.string().optional(),
    verdict: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    specs: z.record(z.string(), z.string()).optional(),
    benchmarks: z.object({
      wobbleScoreAt45: z.number().min(1).max(10).optional(),
      noiseDecibels: z.number().optional(),
      realWorldPayloadLbs: z.number().optional(),
      assemblyTimeMinutes: z.number().optional(),
    }).optional(),
    redditSentiment: z.object({
      consensus: z.string(),
      topComplaint: z.string(),
      communityThreadUrl: z.string().optional(),
      threadCountAnalyzed: z.number().optional(),
    }).optional(),
    featured: z.boolean().default(false),
  }),
});

const comparisons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/comparisons' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    publishDate: z.coerce.date(),
    productA: z.object({
      name: z.string(),
      brand: z.string(),
      image: z.string(),
      price: z.number(),
      rating: z.number(),
      affiliateUrl: z.string(),
      pros: z.array(z.string()),
      badge: z.string().optional(),
    }),
    productB: z.object({
      name: z.string(),
      brand: z.string(),
      image: z.string(),
      price: z.number(),
      rating: z.number(),
      affiliateUrl: z.string(),
      pros: z.array(z.string()),
      badge: z.string().optional(),
    }),
    winner: z.string(),
    verdict: z.string(),
    featured: z.boolean().default(false),
  }),
});

const coupons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/coupons' }),
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    description: z.string(),
    code: z.string(),
    discount: z.string(),
    affiliateUrl: z.string(),
    expiryDate: z.string().optional(),
    verified: z.boolean().default(true),
    category: z.string(),
    logo: z.string().optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    category: z.string(),
    author: z.string().default('FindPoise Editorial Team'),
    heroImage: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { reviews, comparisons, coupons, guides };
