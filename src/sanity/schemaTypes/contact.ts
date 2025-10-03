import { defineType, defineField } from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Contact',
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
      ],
    }),
    defineField({
      name: 'contactForm',
      title: 'Contact Form',
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
    defineField({
      name: 'locations',
      title: 'Office Locations',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'offices',
          title: 'Office Locations',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'region',
                  title: 'Region Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'addresses',
                  title: 'Addresses',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'street',
                          title: 'Street Address',
                          type: 'string',
                          validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                          name: 'city',
                          title: 'City',
                          type: 'string',
                          validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                          name: 'state',
                          title: 'State/Province',
                          type: 'string',
                        }),
                        defineField({
                          name: 'country',
                          title: 'Country',
                          type: 'string',
                          validation: (Rule) => Rule.required(),
                        }),
                      ],
                    },
                  ],
                  validation: (Rule) => Rule.required().min(1),
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
        title: title ?? 'Contact',
      }
    },
  },
})
