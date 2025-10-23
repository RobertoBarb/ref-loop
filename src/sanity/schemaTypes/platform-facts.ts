import { defineType, defineField } from 'sanity'

export const platformFacts = defineType({
  name: 'platformFacts',
  title: 'Platform Facts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Main Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          rows: 2,
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'learningSpeedSection',
      title: 'Learning Speed Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'humanYears',
          title: 'Human Years Value',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'loopMinutes',
          title: 'Loop Minutes Value',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'badgeText',
          title: 'Badge Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'industryValidationSection',
      title: 'Industry Validation Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'industries',
          title: 'Industries',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Industry Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'color',
                  title: 'Color',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'badgeText',
          title: 'Badge Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'marketValidationSection',
      title: 'Market Validation Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'markets',
          title: 'Markets',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Market Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'year',
                  title: 'Since Year',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'status',
                  title: 'Status',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'color',
                  title: 'Color',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'badgeText',
          title: 'Badge Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'worldImage',
          title: 'World Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'costSavingsSection',
      title: 'Cost Savings Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'traditionalWorkforceLabel',
          title: 'Traditional Workforce Label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'traditionalWorkforceDescription',
          title: 'Traditional Workforce Description',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'loopPlatformLabel',
          title: 'Loop Platform Label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'loopPlatformDescription',
          title: 'Loop Platform Description',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'comparisons',
          title: 'Comparisons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Comparison Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'traditionalValue',
                  title: 'Traditional Value',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'traditionalLabel',
                  title: 'Traditional Label',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'traditionalDescription',
                  title: 'Traditional Description',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'loopValue',
                  title: 'Loop Value',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'loopLabel',
                  title: 'Loop Label',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'loopDescription',
                  title: 'Loop Description',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'improvement',
                  title: 'Improvement Text',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'traditionalImage',
                  title: 'Traditional Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
                defineField({
                  name: 'loopImage',
                  title: 'Loop Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
                defineField({
                  name: 'traditionalIconImage',
                  title: 'Traditional Icon Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
                defineField({
                  name: 'loopIconImage',
                  title: 'Loop Icon Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'Call to Action',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'primaryButton',
          title: 'Primary Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
