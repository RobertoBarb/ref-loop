import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'
import { loopAiResearchQuery } from '@/sanity/lib/queries'

export interface ContentSection {
  title: string
  content: string
  highlighted?: string
}

export interface DetailSection {
  title: string
  description: string
}

export interface LoopAIResearchData {
  title: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
  heroSection: {
    title: string
    subtitle: string
    description: string
    backgroundImage?: {
      asset: {
        _id: string
        url: string
      }
      alt: string
    }
  }
  mainContent: {
    title: string
    sections: ContentSection[]
    details: {
      where: DetailSection
      who: DetailSection
    }
    ctaButton: {
      text: string
      link: string
    }
  }
}

export function useLoopAIResearch() {
  return useQuery({
    queryKey: ['loopAiResearch'],
    queryFn: async (): Promise<LoopAIResearchData> => {
      const data = await client.fetch(loopAiResearchQuery)
      return data
    },
    staleTime: process.env.NODE_ENV === 'development' ? 30 * 1000 : 5 * 60 * 1000,
    refetchOnWindowFocus: process.env.NODE_ENV === 'development',
  })
}
