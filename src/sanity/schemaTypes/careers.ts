import { defineType, defineField } from 'sanity'

export const careers = defineType({
  name: 'careers',
  title: 'Careers',
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
          name: 'title',
          title: 'Content Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Content Description',
          type: 'text',
          rows: 6,
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'applicationForm',
      title: 'Application Form',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Form Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'fields',
          title: 'Form Fields',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Field Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'label',
                  title: 'Field Label',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'type',
                  title: 'Field Type',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Text', value: 'text' },
                      { title: 'Email', value: 'email' },
                      { title: 'Select', value: 'select' },
                      { title: 'Textarea', value: 'textarea' },
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'required',
                  title: 'Required',
                  type: 'boolean',
                  initialValue: false,
                }),
                defineField({
                  name: 'placeholder',
                  title: 'Placeholder',
                  type: 'string',
                }),
                defineField({
                  name: 'options',
                  title: 'Select Options',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'value',
                          title: 'Option Value',
                          type: 'string',
                          validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                          name: 'label',
                          title: 'Option Label',
                          type: 'string',
                          validation: (Rule) => Rule.required(),
                        }),
                      ],
                    },
                  ],
                  hidden: ({ parent }) => parent?.type !== 'select',
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
        title: title ?? 'Careers',
      }
    },
  },
})
