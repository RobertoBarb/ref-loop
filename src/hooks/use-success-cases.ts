import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'
import { successCasesQuery } from '@/sanity/lib/queries'

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

export interface Industry {
  name: string
  count: number
  icon: string
}

export interface SuccessCasesData {
  title: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
  heroSection: {
    title: string
    subtitle: string
  }
  cases: SuccessCase[]
  industriesSection: {
    title: string
    subtitle: string
    industries: Industry[]
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

export function useSuccessCases() {
  return useQuery({
    queryKey: ['successCases'],
    queryFn: async (): Promise<SuccessCasesData> => {
      const data = await client.fetch(successCasesQuery)
      return data
    },
    staleTime: process.env.NODE_ENV === 'development' ? 30 * 1000 : 5 * 60 * 1000,
    refetchOnWindowFocus: process.env.NODE_ENV === 'development',
  })
}
