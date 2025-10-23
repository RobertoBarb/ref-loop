'use client'

import { useHomepageContent } from '@/hooks/use-homepage-content'
import { useHomepageImages } from '@/hooks/use-homepage-images'
import { HomepageContent } from './homepage-content'

export function HomepageOptimized() {
  const { data: content, isLoading: contentLoading, error: contentError } = useHomepageContent()
  const { data: images, isLoading: imagesLoading, error: imagesError } = useHomepageImages()

  if (contentLoading || imagesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (contentError || imagesError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Homepage</h2>
          <p className="text-gray-600">
            {contentError?.message || imagesError?.message || 'Unknown error occurred'}
          </p>
        </div>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">No Content Available</h2>
          <p className="text-gray-500">Homepage content could not be loaded</p>
        </div>
      </div>
    )
  }

  // Combine content and images with safe access
  const combinedData = {
    ...content,
    heroSection: {
      ...content.heroSection,
      heroImage: images?.heroSection?.heroImage || null,
    },
    aiChaosSection: {
      ...content.aiChaosSection,
      chaosImage: images?.aiChaosSection?.chaosImage || null,
    },
    footer: {
      ...content.footer,
      logo: images?.footer?.logo || null,
    },
  }

  return <HomepageContent data={combinedData} />
}
