import { defineType, defineField } from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Footer Title',
      type: 'string',
      initialValue: 'Footer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for the logo',
        }),
      ],
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'legalInfo',
      title: 'Legal Information',
      type: 'object',
      fields: [
        defineField({
          name: 'legalAddress',
          title: 'Legal Address',
          type: 'string',
        }),
        defineField({
          name: 'vatNumber',
          title: 'VAT Number',
          type: 'string',
        }),
        defineField({
          name: 'registrationNumber',
          title: 'Registration Number',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'GitHub', value: 'github' },
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Icon name from Lucide React',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
      subtitle: 'copyrightText',
    },
    prepare(selection) {
      const { title, subtitle } = selection as { title?: string; subtitle?: string }
      return {
        title: title ?? 'Footer',
        subtitle: subtitle ?? 'Footer configuration',
      }
    },
  },
})
