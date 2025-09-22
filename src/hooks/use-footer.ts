import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'
import { homepageQuery } from '@/sanity/lib/queries'

export interface FooterData {
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

export function useFooter() {
  return useQuery({
    queryKey: ['footer'],
    queryFn: async (): Promise<FooterData> => {
      const data = await client.fetch(homepageQuery)
      return data.footer
    },
    staleTime: process.env.NODE_ENV === 'development' ? 30 * 1000 : 5 * 60 * 1000, // 30 seconds in dev, 5 minutes in production
    refetchOnWindowFocus: process.env.NODE_ENV === 'development', // Refetch on focus in development
  })
}
