# Environment Variables

This project requires the following environment variables to be set:

## Required Variables

### Sanity Configuration
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Your Sanity dataset (usually "production")
- `NEXT_PUBLIC_SANITY_API_VERSION` - Sanity API version (optional, defaults to "2024-01-01")

### Sanity API Token (for seed scripts)
- `SANITY_API_TOKEN` - Your Sanity API token for write operations

## Setting up for Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add the following variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_sanity_api_token
```

4. Make sure to set them for all environments (Production, Preview, Development)

## Local Development

Create a `.env.local` file in the project root with:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_sanity_api_token
```

## Getting Sanity Credentials

1. Go to [sanity.io](https://sanity.io)
2. Select your project
3. Go to Settings > API
4. Copy your Project ID and Dataset
5. For the API token, create a new token with write permissions
