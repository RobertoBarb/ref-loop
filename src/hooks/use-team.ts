import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'
import { teamQuery } from '@/sanity/lib/queries'

export interface TeamMember {
  name: string
  role: string
  image?: {
    asset: {
      _id: string
      url: string
    }
    alt: string
  }
  linkedinUrl?: string
  slug: {
    current: string
  }
}

export interface AdvisorMember {
  name: string
  image?: {
    asset: {
      _id: string
      url: string
    }
    alt: string
  }
  linkedinUrl?: string
  slug: {
    current: string
  }
}

export interface TeamData {
  title: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
  heroSection: {
    title: string
  }
  executiveTeam: {
    title: string
    members: TeamMember[]
  }
  boardOfAdvisors: {
    title: string
    members: AdvisorMember[]
  }
}

export function useTeam() {
  return useQuery({
    queryKey: ['team'],
    queryFn: async (): Promise<TeamData> => {
      const data = await client.fetch(teamQuery)
      return data
    },
    staleTime: process.env.NODE_ENV === 'development' ? 30 * 1000 : 5 * 60 * 1000,
    refetchOnWindowFocus: process.env.NODE_ENV === 'development',
  })
}
