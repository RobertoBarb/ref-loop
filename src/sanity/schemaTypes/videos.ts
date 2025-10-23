import { defineType, defineField } from 'sanity'

export const videos = defineType({
  name: 'videos',
  title: 'Videos',
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
      ],
    }),
    defineField({
      name: 'introSection',
      title: 'Introduction Section',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'youtubeChannelUrl',
          title: 'YouTube Channel URL',
          type: 'url',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'videoCollection',
      title: 'Video Collection',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'videos',
          title: 'Videos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Video Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'youtubeUrl',
                  title: 'YouTube URL',
                  type: 'url',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'embedId',
                  title: 'YouTube Embed ID',
                  type: 'string',
                  description: 'The video ID from YouTube URL (e.g., 4cdvHwBaVj8)',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Video Description',
                  type: 'text',
                  rows: 2,
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
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
        title: title ?? 'Videos',
      }
    },
  },
})
