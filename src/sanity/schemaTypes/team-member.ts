import { type SchemaTypeDefinition } from 'sanity'

export const teamMember: SchemaTypeDefinition = {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
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
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      rows: 3
    },
    {
      name: 'detailedBio',
      title: 'Detailed Bio',
      type: 'text',
      rows: 10
    },
    {
      name: 'isExecutive',
      title: 'Is Executive Team Member',
      type: 'boolean',
      description: 'Check if this member is part of the executive team'
    },
    {
      name: 'isAdvisor',
      title: 'Is Board Advisor',
      type: 'boolean',
      description: 'Check if this member is part of the board of advisors'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image'
    }
  }
}
