import { defineType, defineField } from 'sanity'

export const mediaAnalystRelations = defineType({
  name: 'mediaAnalystRelations',
  title: 'Media & Analyst Relations',
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
      name: 'mainContent',
      title: 'Main Content',
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
          name: 'contactEmail',
          title: 'Contact Email',
          type: 'string',
          validation: (Rule) => Rule.required().email(),
        }),
        defineField({
          name: 'note',
          title: 'Contact Note',
          type: 'text',
          rows: 2,
          validation: (Rule) => Rule.required(),
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
        title: title ?? 'Media & Analyst Relations',
      }
    },
  },
})
