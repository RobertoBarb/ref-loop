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
    primaryButton?: {
      text: string
      link: string
    }
    secondaryButton?: {
      text: string
      link: string
    }
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
    staleTime: process.env.NODE_ENV === 'development' ? 30 * 1000 : 5 * 60 * 1000, // 30 seconds in dev, 5 minutes in production
    refetchOnWindowFocus: process.env.NODE_ENV === 'development', // Refetch on focus in development
  })
}

