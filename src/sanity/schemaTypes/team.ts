import { defineType, defineField } from 'sanity'

export const team = defineType({
  name: 'team',
  title: 'Team',
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
      name: 'executiveTeam',
      title: 'Executive Team',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'members',
          title: 'Team Members',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'role',
                  title: 'Role',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'image',
                  title: 'Profile Image',
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
                  name: 'linkedinUrl',
                  title: 'LinkedIn URL',
                  type: 'url',
                }),
                defineField({
                  name: 'slug',
                  title: 'Profile Slug',
                  type: 'slug',
                  options: {
                    source: 'name',
                    maxLength: 96,
                  },
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'boardOfAdvisors',
      title: 'Board of Advisors',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'members',
          title: 'Advisors',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'image',
                  title: 'Profile Image',
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
                  name: 'linkedinUrl',
                  title: 'LinkedIn URL',
                  type: 'url',
                }),
                defineField({
                  name: 'slug',
                  title: 'Profile Slug',
                  type: 'slug',
                  options: {
                    source: 'name',
                    maxLength: 96,
                  },
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
        title: title ?? 'Team',
      }
    },
  },
})
