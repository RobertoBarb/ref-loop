import { defineType, defineField } from 'sanity'

export const successCases = defineType({
  name: 'successCases',
  title: 'Success Cases',
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
      title: 'SEO Settings',
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
          rows: 4,
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'cases',
      title: 'Success Cases',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'Case ID',
              type: 'slug',
              options: {
                source: 'title',
                maxLength: 96,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Case Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'industry',
              title: 'Industry',
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
              name: 'solution',
              title: 'Solution',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Case Image',
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
              name: 'pdf',
              title: 'PDF Document',
              type: 'file',
              options: {
                accept: '.pdf',
              },
            }),
            defineField({
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Name of the Lucide icon',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'industriesSection',
      title: 'Industries Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          rows: 2,
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
                  name: 'count',
                  title: 'Success Cases Count',
                  type: 'number',
                  validation: (Rule) => Rule.required().min(0),
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Name of the Lucide icon',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'Call to Action Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          rows: 2,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'button',
          title: 'CTA Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection as { title?: string }
      return {
        title: title ?? 'Success Cases',
      }
    },
  },
})
