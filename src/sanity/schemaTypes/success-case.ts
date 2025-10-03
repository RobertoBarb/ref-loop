import { type SchemaTypeDefinition } from 'sanity'

export const successCase: SchemaTypeDefinition = {
  name: 'successCase',
  title: 'Success Case',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required(),
      description: 'Unique identifier for the URL (e.g., "ai-agent-for-retail-chain-demand-forecasting")'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Challenge Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required()
    },
    {
      name: 'solution',
      title: 'Solution Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for SEO and accessibility.'
        }
      ]
    },
    {
      name: 'pdf',
      title: 'PDF Document',
      type: 'file',
      options: {
        accept: '.pdf'
      }
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Building', value: 'Building' },
          { title: 'BarChart3', value: 'BarChart3' },
          { title: 'Users', value: 'Users' },
          { title: 'Award', value: 'Award' },
          { title: 'Target', value: 'Target' },
          { title: 'TrendingUp', value: 'TrendingUp' },
          { title: 'Globe', value: 'Globe' }
        ]
      },
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'industry',
      media: 'image'
    }
  }
}
