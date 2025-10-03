import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'

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
  bio?: string
  detailedBio?: string
}

export function useTeamMember(slug: string) {
  return useQuery({
    queryKey: ['teamMember', slug],
    queryFn: async (): Promise<TeamMember | null> => {
      const data = await client.fetch(`
        *[_type == "teamMember" && slug.current == $slug][0] {
          name,
          role,
          image {
            asset->{
              _id,
              url
            },
            alt
          },
          linkedinUrl,
          slug,
          bio,
          detailedBio
        }
      `, { slug })
      return data || null
    },
    staleTime: process.env.NODE_ENV === 'development' ? 30 * 1000 : 5 * 60 * 1000,
    refetchOnWindowFocus: process.env.NODE_ENV === 'development',
  })
}
