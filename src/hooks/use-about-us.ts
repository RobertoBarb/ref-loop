import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'
import { aboutUsQuery } from '@/sanity/lib/queries'

export interface AboutUsData {
  title: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
  heroSection: {
    title: string
  }
  missionVision: {
    mission: {
      title: string
      description: string
    }
    vision: {
      title: string
      description: string
    }
  }
  ourStory: {
    title: string
    sections: Array<{
      title: string
      content: string
      image?: {
        asset: {
          _id: string
          url: string
        }
        alt: string
      }
    }>
  }
  teamImages: {
    images: Array<{
      image: {
        asset: {
          _id: string
          url: string
        }
        alt: string
      }
    }>
  }
  ctaSection: {
    title: string
    subtitle: string
    button: {
      text: string
      link: string
    }
  }
}

export function useAboutUs() {
  return useQuery({
    queryKey: ['aboutUs'],
    queryFn: async (): Promise<AboutUsData> => {
      const data = await client.fetch(aboutUsQuery)
      return data
    },
    staleTime: process.env.NODE_ENV === 'development' ? 30 * 1000 : 5 * 60 * 1000,
    refetchOnWindowFocus: process.env.NODE_ENV === 'development',
  })
}
