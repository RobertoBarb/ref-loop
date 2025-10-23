import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production', // Only use CDN in production
  // Add performance optimizations
  perspective: 'published', // Only fetch published content
  stega: {
    enabled: process.env.NODE_ENV === 'development', // Enable visual editing in dev
    studioUrl: process.env.NODE_ENV === 'development' ? '/studio' : undefined,
  },
})
