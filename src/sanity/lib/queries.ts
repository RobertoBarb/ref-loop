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

// Loop AI Agents Orchestra Query
export const loopAiAgentsOrchestraQuery = groq`
  *[_type == "loopAiAgentsOrchestra"][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      title,
      subtitle,
      heroImage {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    architecturalPillars {
      title,
      subtitle,
      pillars[] {
        title,
        icon,
        features[] {
          title,
          description
        }
      }
    },
    vendorAgnosticSection {
      title,
      description,
      futureProofTitle,
      futureProofDescription,
      technicalDefinitionTitle,
      technicalDefinitionDescription
    },
    algorithmSelectionSection {
      title,
      description,
      features[] {
        title,
        description
      },
      trainingImages[] {
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    },
    technicalHeritageSection {
      title,
      description,
      features[] {
        title,
        description,
        icon
      },
      llmMlImages[] {
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    },
    responsibleAiSection {
      title,
      features[] {
        title,
        description
      },
      responsibleAiImage {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    technicalSpecificationsSection {
      title,
      specifications[] {
        title,
        description
      }
    },
    ctaSection {
      title,
      description,
      primaryButton {
        text,
        link
      },
      secondaryButton {
        text,
        link
      }
    },
    videoSection {
      title,
      youtubeVideoId,
      videoTitle
    },
    finalCtaSection {
      title,
      description,
      primaryButton {
        text,
        link
      }
    }
  }
`

// Loop Q Query
export const loopQQuery = groq`
  *[_type == "loopQ"][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      logo {
        asset->{
          _id,
          url
        },
        alt
      },
      title,
      description,
      subDescription,
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
    keyDifferentiatorsSection {
      title,
      subtitle,
      description,
      features[] {
        title,
        description,
        icon
      },
      stackImage {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    howItWorksSection {
      title,
      description,
      subDescription,
      processImage {
        asset->{
          _id,
          url
        },
        alt
      },
      howItWorksTitle
    },
    ctaSection {
      title,
      description,
      primaryButton {
        text,
        link
      }
    }
  }
`

// Platform Facts Query
export const platformFactsQuery = groq`
  *[_type == "platformFacts"][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      title,
      subtitle
    },
    learningSpeedSection {
      title,
      description,
      humanYears,
      loopMinutes,
      badgeText
    },
    industryValidationSection {
      title,
      description,
      industries[] {
        name,
        color
      },
      badgeText
    },
    marketValidationSection {
      title,
      description,
      markets[] {
        name,
        year,
        status,
        color
      },
      badgeText,
      worldImage {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    costSavingsSection {
      title,
      traditionalWorkforceLabel,
      traditionalWorkforceDescription,
      loopPlatformLabel,
      loopPlatformDescription,
      comparisons[] {
        title,
        traditionalValue,
        traditionalLabel,
        traditionalDescription,
        loopValue,
        loopLabel,
        loopDescription,
        improvement,
        traditionalImage {
          asset->{
            _id,
            url
          },
          alt
        },
        loopImage {
          asset->{
            _id,
            url
          },
          alt
        },
        traditionalIconImage {
          asset->{
            _id,
            url
          },
          alt
        },
        loopIconImage {
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
      description,
      primaryButton {
        text,
        link
      }
    }
  }
`

// Book Demo Query
export const bookDemoQuery = groq`
  *[_type == "bookDemo"][0] {
    title,
    seo {
      metaTitle,
      metaDescription
    },
    heroSection {
      title,
      description
    },
    formSection {
      title,
      description,
      fields[] {
        name,
        label,
        type,
        placeholder,
        required,
        options[] {
          value,
          label
        }
      },
      submitButtonText
    }
  }
`

