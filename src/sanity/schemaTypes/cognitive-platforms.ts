import { defineType, defineField } from 'sanity'

export const cognitivePlatforms = defineType({
  name: 'cognitivePlatforms',
  title: 'Cognitive Platforms',
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
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'heroImage',
          title: 'Hero Image',
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
      name: 'platforms',
      title: 'Platforms',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Platform Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'slug',
              title: 'Platform Slug',
              type: 'slug',
              options: {
                source: 'name',
                maxLength: 96,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Platform Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'subtitle',
              title: 'Platform Subtitle',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Platform Description',
              type: 'text',
              rows: 6,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Platform Image',
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
              name: 'features',
              title: 'Platform Features',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Feature Title',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'description',
                      title: 'Feature Description',
                      type: 'text',
                      rows: 3,
                      validation: (Rule) => Rule.required(),
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
            defineField({
              name: 'ctaButton',
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
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection as { title?: string }
      return {
        title: title ?? 'Cognitive Platforms',
      }
    },
  },
})
