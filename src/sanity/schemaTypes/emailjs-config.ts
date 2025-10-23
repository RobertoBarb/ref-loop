import { defineType, defineField } from 'sanity'

export const emailjsConfig = defineType({
  name: 'emailjsConfig',
  title: 'EmailJS Configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Configuration Title',
      type: 'string',
      initialValue: 'EmailJS Configuration',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'serviceId',
      title: 'EmailJS Service ID',
      type: 'string',
      description: 'The EmailJS service ID for sending emails',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'templateId',
      title: 'EmailJS Template ID',
      type: 'string',
      description: 'Single template ID for all form types with conditional rendering',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publicKey',
      title: 'EmailJS Public Key',
      type: 'string',
      description: 'The EmailJS public key for authentication',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection as { title?: string }
      return {
        title: title ?? 'EmailJS Configuration',
      }
    },
  },
})
