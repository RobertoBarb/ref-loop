import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'
import { homepageQuery } from '@/sanity/lib/queries'

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
      }
      alt: string
    }
  }
  aiChaosSection: {
    title: string
    subtitle: string
    chaosImage?: {
      asset: {
        _id: string
        url: string
      }
      alt: string
    }
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
      }
      alt: string
    }
    companyName: string
    copyrightText: string
  }
}

export function useHomepage() {
  return useQuery({
    queryKey: ['homepage'],
    queryFn: async (): Promise<HomepageData> => {
      const data = await client.fetch(homepageQuery)
      return data
    },
    staleTime: process.env.NODE_ENV === 'development' ? 60 * 1000 : 10 * 60 * 1000, // 1 minute in dev, 10 minutes in production
    refetchOnWindowFocus: false, // Disable refetch on focus to improve performance
    refetchOnMount: false, // Don't refetch if data is already cached
    retry: 3, // Retry failed requests
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  })
}

