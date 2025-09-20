import { groq } from 'next-sanity'

export const homepageQuery = groq`
  *[_type == "homepage"][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      title,
      subtitle,
      primaryButton {
        text,
        link
      },
      secondaryButton {
        text,
        link
      },
      heroImage {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    aiChaosSection {
      title,
      subtitle,
      chaosImage {
        asset->{
          _id,
          url
        },
        alt
      }
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
      logo {
        asset->{
          _id,
          url
        },
        alt
      },
      companyName,
      copyrightText
    }
  }
`

export const homepageBySlugQuery = groq`
  *[_type == "homepage" && slug.current == $slug][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      title,
      subtitle,
      primaryButton {
        text,
        link
      },
      secondaryButton {
        text,
        link
      },
      heroImage {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    aiChaosSection {
      title,
      subtitle,
      chaosImage {
        asset->{
          _id,
          url
        },
        alt
      }
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
      logo {
        asset->{
          _id,
          url
        },
        alt
      },
      companyName,
      copyrightText
    }
  }
`

