import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'
import { contactQuery } from '@/sanity/lib/queries'

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

export interface Address {
  street: string
  city: string
  state?: string
  country: string
}

export interface Office {
  region: string
  addresses: Address[]
}

export interface ContactData {
  title: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
  heroSection: {
    title: string
    subtitle: string
  }
  contactForm: {
    title: string
    fields: FormField[]
  }
  locations: {
    title: string
    offices: Office[]
  }
}

export function useContact() {
  return useQuery({
    queryKey: ['contact'],
    queryFn: async (): Promise<ContactData> => {
      const data = await client.fetch(contactQuery)
      return data
    },
    staleTime: process.env.NODE_ENV === 'development' ? 30 * 1000 : 5 * 60 * 1000,
    refetchOnWindowFocus: process.env.NODE_ENV === 'development',
  })
}
