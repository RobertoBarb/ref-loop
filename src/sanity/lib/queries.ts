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

// About Us Query
export const aboutUsQuery = groq`
  *[_type == "aboutUs"][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      title
    },
    missionVision {
      mission {
        title,
        description
      },
      vision {
        title,
        description
      }
    },
    ourStory {
      title,
      sections[] {
        title,
        content,
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    },
    teamImages {
      images[] {
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    },
    ctaSection {
      title,
      subtitle,
      button {
        text,
        link
      }
    }
  }
`

// Team Query
export const teamQuery = groq`
  *[_type == "team"][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      title
    },
    executiveTeam {
      title,
      members[] {
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
        slug
      }
    },
    boardOfAdvisors {
      title,
      members[] {
        name,
        image {
          asset->{
            _id,
            url
          },
          alt
        },
        linkedinUrl,
        slug
      }
    }
  }
`

// Success Cases Query
export const successCasesQuery = groq`
  *[_type == "successCases"][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      title,
      subtitle
    },
    cases[] {
      id,
      title,
      industry,
      description,
      solution,
      image {
        asset->{
          _id,
          url
        },
        alt
      },
      pdf {
        asset->{
          _id,
          url
        }
      },
      icon
    },
    industriesSection {
      title,
      subtitle,
      industries[] {
        name,
        count,
        icon
      }
    },
    ctaSection {
      title,
      subtitle,
      button {
        text,
        link
      }
    }
  }
`

// Contact Query
export const contactQuery = groq`
  *[_type == "contact"][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      title,
      subtitle
    },
    contactForm {
      title,
      fields[] {
        name,
        label,
        type,
        required,
        placeholder,
        options[] {
          value,
          label
        }
      }
    },
    locations {
      title,
      offices[] {
        region,
        addresses[] {
          street,
          city,
          state,
          country
        }
      }
    }
  }
`

// Careers Query
export const careersQuery = groq`
  *[_type == "careers"][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      title,
      subtitle
    },
    mainContent {
      title,
      description
    },
    applicationForm {
      title,
      fields[] {
        name,
        label,
        type,
        required,
        placeholder,
        options[] {
          value,
          label
        }
      }
    }
  }
`

// Videos Query
export const videosQuery = groq`
  *[_type == "videos"][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      title
    },
    introSection {
      description,
      youtubeChannelUrl
    },
    videoCollection {
      title,
      videos[] {
        title,
        youtubeUrl,
        embedId,
        description
      }
    }
  }
`

// Media & Analyst Relations Query
export const mediaAnalystRelationsQuery = groq`
  *[_type == "mediaAnalystRelations"][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      title
    },
    mainContent {
      description,
      contactEmail,
      note
    }
  }
`

// Loop AI Research Query
export const loopAiResearchQuery = groq`
  *[_type == "loopAiResearch"][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      title,
      subtitle,
      description,
      backgroundImage {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    mainContent {
      title,
      sections[] {
        title,
        content,
        highlighted
      },
      details {
        where {
          title,
          description
        },
        who {
          title,
          description
        }
      },
      ctaButton {
        text,
        link
      }
    }
  }
`

