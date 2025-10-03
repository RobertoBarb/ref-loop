import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'
import { careersQuery } from '@/sanity/lib/queries'

export interface FormField {
  name: string
  label: string
  type: string
  required: boolean
  placeholder?: string
  options?: Array<{
    value: string
    label: string
  }>
}

export interface CareersData {
  title: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
  heroSection: {
    title: string
    subtitle: string
  }
  mainContent: {
    title: string
    description: string
  }
  applicationForm: {
    title: string
    fields: FormField[]
  }
}

export function useCareers() {
  return useQuery({
    queryKey: ['careers'],
    queryFn: async (): Promise<CareersData> => {
      const data = await client.fetch(careersQuery)
      return data
    },
    staleTime: process.env.NODE_ENV === 'development' ? 30 * 1000 : 5 * 60 * 1000,
    refetchOnWindowFocus: process.env.NODE_ENV === 'development',
  })
}
