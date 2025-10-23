import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'

// Optimized query for just the images
const homepageImagesQuery = `
  *[_type == "homepage"][0] {
    heroSection {
      heroImage {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    },
    aiChaosSection {
      chaosImage {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    },
    footer {
      logo {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    }
  }
`

export interface HomepageImages {
  heroSection: {
    heroImage?: {
      asset: {
        _id: string
        url: string
        metadata: {
          dimensions: {
            width: number
            height: number
          }
        }
      }
      alt: string
    }
  }
  aiChaosSection: {
    chaosImage?: {
      asset: {
        _id: string
        url: string
        metadata: {
          dimensions: {
            width: number
            height: number
          }
        }
      }
      alt: string
    }
  }
  footer: {
    logo?: {
      asset: {
        _id: string
        url: string
        metadata: {
          dimensions: {
            width: number
            height: number
          }
        }
      }
      alt: string
    }
  }
}

export function useHomepageImages() {
  return useQuery({
    queryKey: ['homepage-images'],
    queryFn: async (): Promise<HomepageImages> => {
      const data = await client.fetch(homepageImagesQuery)
      return data
    },
    staleTime: 30 * 60 * 1000, // 30 minutes - images don't change often
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 1, // Minimal retry for images
    gcTime: 60 * 60 * 1000, // Keep in cache for 1 hour
    networkMode: 'online',
  })
}
