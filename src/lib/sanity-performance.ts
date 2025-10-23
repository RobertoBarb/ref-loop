// Sanity Performance Configuration
export const SANITY_PERFORMANCE_CONFIG = {
  // Image optimization settings
  imageOptimization: {
    // Enable WebP conversion for better performance
    auto: 'format',
    // Set quality for different environments
    quality: process.env.NODE_ENV === 'production' ? 85 : 75,
    // Enable responsive images
    responsive: true,
  },
  
  // Query optimization
  queryOptimization: {
    // Use projection to limit fields
    useProjection: true,
    // Enable query caching
    enableCaching: true,
    // Cache duration in milliseconds
    cacheDuration: 5 * 60 * 1000, // 5 minutes
  },
  
  // Client configuration
  clientConfig: {
    // Use CDN in production
    useCdn: process.env.NODE_ENV === 'production',
    // Enable stega only in development
    stega: process.env.NODE_ENV === 'development',
    // Set perspective to published
    perspective: 'published' as const,
  },
  
  // React Query configuration
  reactQueryConfig: {
    // Stale time for different data types
    staleTime: {
      content: 5 * 60 * 1000, // 5 minutes for content
      images: 30 * 60 * 1000, // 30 minutes for images
      metadata: 60 * 60 * 1000, // 1 hour for metadata
    },
    // Garbage collection time
    gcTime: 10 * 60 * 1000, // 10 minutes
    // Retry configuration
    retry: {
      attempts: 2,
      delay: 500,
      maxDelay: 5000,
    },
  },
}

// Helper function to get optimized image URL
export function getOptimizedImageUrl(url: string, width?: number, height?: number): string {
  if (!url) return ''
  
  const params = new URLSearchParams()
  
  if (width) params.set('w', width.toString())
  if (height) params.set('h', height.toString())
  
  // Add quality parameter
  params.set('q', SANITY_PERFORMANCE_CONFIG.imageOptimization.quality.toString())
  
  // Add format parameter
  params.set('auto', SANITY_PERFORMANCE_CONFIG.imageOptimization.auto)
  
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}${params.toString()}`
}

// Helper function to get responsive image URLs
export function getResponsiveImageUrls(baseUrl: string, sizes: number[]): Record<string, string> {
  const urls: Record<string, string> = {}
  
  sizes.forEach(size => {
    urls[`${size}w`] = getOptimizedImageUrl(baseUrl, size)
  })
  
  return urls
}
