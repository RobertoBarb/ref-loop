import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'

export interface SuccessCase {
  id: {
    current: string
  }
  title: string
  industry: string
  description: string
  solution: string
  image?: {
    asset: {
      _id: string
      url: string
    }
    alt: string
  }
  pdf?: {
    asset: {
      _id: string
      url: string
    }
  }
  icon: string
}

export function useSuccessCase(id: string) {
  return useQuery({
    queryKey: ['successCase', id],
    queryFn: async (): Promise<SuccessCase | null> => {
      const data = await client.fetch(`
        *[_type == "successCase" && id.current == $id][0] {
          id,
          title,
          industry,
          description,
          solution,
          image {
            asset->{
              _id,
              url
            },
            alt
          },
          pdf {
            asset->{
              _id,
              url
            }
          },
          icon
        }
      `, { id })
      return data || null
    },
    staleTime: process.env.NODE_ENV === 'development' ? 30 * 1000 : 5 * 60 * 1000,
    refetchOnWindowFocus: process.env.NODE_ENV === 'development',
  })
}
