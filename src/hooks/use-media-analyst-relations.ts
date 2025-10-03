import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'
import { mediaAnalystRelationsQuery } from '@/sanity/lib/queries'

export interface MediaAnalystRelationsData {
  title: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
  heroSection: {
    title: string
  }
  mainContent: {
    description: string
    contactEmail: string
    note: string
  }
}

export function useMediaAnalystRelations() {
  return useQuery({
    queryKey: ['mediaAnalystRelations'],
    queryFn: async (): Promise<MediaAnalystRelationsData> => {
      const data = await client.fetch(mediaAnalystRelationsQuery)
      return data
    },
    staleTime: process.env.NODE_ENV === 'development' ? 30 * 1000 : 5 * 60 * 1000,
    refetchOnWindowFocus: process.env.NODE_ENV === 'development',
  })
}
