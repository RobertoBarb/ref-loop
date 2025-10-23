import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'

const footerQuery = `
  *[_type == "footer"][0] {
    title,
    logo {
      asset->{
        _id,
        url
      },
      alt
    },
    companyName,
    copyrightText,
    legalInfo {
      legalAddress,
      vatNumber,
      registrationNumber
    },
    socialLinks[] {
      platform,
      url,
      icon
    },
    quickLinks[] {
      label,
      url
    }
  }
`

export interface FooterData {
  title: string
  logo?: {
    asset: {
      _id: string
      url: string
    }
    alt: string
  }
  companyName: string
  copyrightText: string
  legalInfo?: {
    legalAddress: string
    vatNumber: string
    registrationNumber: string
  }
  socialLinks?: Array<{
    platform: string
    url: string
    icon: string
  }>
  quickLinks?: Array<{
    label: string
    url: string
  }>
}

export function useFooterStandalone() {
  return useQuery({
    queryKey: ['footer-standalone'],
    queryFn: async (): Promise<FooterData> => {
      const data = await client.fetch(footerQuery)
      return data
    },
    staleTime: 30 * 60 * 1000, // 30 minutes - footer doesn't change often
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
    gcTime: 60 * 60 * 1000, // Keep in cache for 1 hour
    networkMode: 'online',
  })
}
