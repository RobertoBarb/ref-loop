import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'
import { homepageOptimizedQuery } from '@/sanity/lib/queries'

export interface HomepageData {
  title: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
  heroSection: {
    title: string
    subtitle: string
    heroImage?: {
      asset: {
        _id: string
        url: string
        metadata?: {
          dimensions: {
            width: number
            height: number
          }
        }
      }
      alt: string
    } | null
  }
  aiChaosSection: {
    title: string
    subtitle: string
    chaosImage?: {
      asset: {
        _id: string
        url: string
        metadata?: {
          dimensions: {
            width: number
            height: number
          }
        }
      }
      alt: string
    } | null
  }
  enterpriseControlCenter: {
    title: string
    subtitle: string
    features: Array<{
      title: string
      description: string
      icon: string
    }>
  }
  videoSection: {
    title: string
    subtitle: string
    youtubeVideoId: string
    videoTitle: string
  }
  ctaSection: {
    title: string
    subtitle: string
    primaryButton?: {
      text: string
      link: string
    }
    secondaryButton?: {
      text: string
      link: string
    }
  }
  footer: {
    logo?: {
      asset: {
        _id: string
        url: string
        metadata?: {
          dimensions: {
            width: number
            height: number
          }
        }
      }
      alt: string
    } | null
    companyName: string
    copyrightText: string
  }
}

export function useHomepage() {
  return useQuery({
    queryKey: ['homepage'],
    queryFn: async (): Promise<HomepageData> => {
      // Use optimized query for better performance
      return await client.fetch(homepageOptimizedQuery)
    },
    staleTime: process.env.NODE_ENV === 'development' ? 5 * 60 * 1000 : 30 * 60 * 1000, // 5 minutes in dev, 30 minutes in production
    refetchOnWindowFocus: false, // Disable refetch on focus to improve performance
    refetchOnMount: false, // Don't refetch if data is already cached
    retry: 2, // Reduce retry attempts for faster failure
    retryDelay: (attemptIndex) => Math.min(500 * 2 ** attemptIndex, 5000), // Faster retry with shorter delays
    // Add performance optimizations
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
    networkMode: 'online', // Only fetch when online
  })
}

