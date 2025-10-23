import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'
import { videosQuery } from '@/sanity/lib/queries'

export interface Video {
  title: string
  youtubeUrl: string
  embedId: string
  description?: string
}

export interface VideosData {
  title: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
  heroSection: {
    title: string
  }
  introSection: {
    description: string
    youtubeChannelUrl: string
  }
  videoCollection: {
    title: string
    videos: Video[]
  }
}

export function useVideos() {
  return useQuery({
    queryKey: ['videos'],
    queryFn: async (): Promise<VideosData> => {
      const data = await client.fetch(videosQuery)
      return data
    },
    staleTime: process.env.NODE_ENV === 'development' ? 30 * 1000 : 5 * 60 * 1000,
    refetchOnWindowFocus: process.env.NODE_ENV === 'development',
  })
}
