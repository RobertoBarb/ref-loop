import { useQuery } from '@tanstack/react-query'
import { client } from '@/sanity/lib/client'

// Optimized query for just the content (no images)
const homepageContentQuery = `
  *[_type == "homepage"][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      title,
      subtitle
    },
    aiChaosSection {
      title,
      subtitle
    },
    enterpriseControlCenter {
      title,
      subtitle,
      features[] {
        title,
        description,
        icon
      }
    },
    videoSection {
      title,
      subtitle,
      youtubeVideoId,
      videoTitle
    },
    ctaSection {
      title,
      subtitle,
      primaryButton {
        text,
        link
      },
      secondaryButton {
        text,
        link
      }
    },
    footer {
      companyName,
      copyrightText
    }
  }
`

export interface HomepageContent {
  title: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
  heroSection: {
    title: string
    subtitle: string
  }
  aiChaosSection: {
    title: string
    subtitle: string
  }
  enterpriseControlCenter: {
    title: string
    subtitle: string
    features: Array<{
      title: string
      description: string
      icon: string
    }>
  }
  videoSection: {
    title: string
    subtitle: string
    youtubeVideoId: string
    videoTitle: string
  }
  ctaSection: {
    title: string
    subtitle: string
    primaryButton?: {
      text: string
      link: string
    }
    secondaryButton?: {
      text: string
      link: string
    }
  }
  footer: {
    companyName: string
    copyrightText: string
  }
}

export function useHomepageContent() {
  return useQuery({
    queryKey: ['homepage-content'],
    queryFn: async (): Promise<HomepageContent> => {
      const data = await client.fetch(homepageContentQuery)
      return data
    },
    staleTime: 10 * 60 * 1000, // 10 minutes - content changes more often than images
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
    gcTime: 30 * 60 * 1000, // Keep in cache for 30 minutes
    networkMode: 'online',
  })
}
