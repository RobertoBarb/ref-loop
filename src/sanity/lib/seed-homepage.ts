import { client } from './client'
import { homepageSeedData } from './seed-data'

export async function seedHomepage() {
  try {
    // Check if homepage already exists
    const existingHomepage = await client.fetch('*[_type == "homepage"][0]')
    
    if (existingHomepage) {
      console.log('Homepage already exists in Sanity. Skipping seed.')
      return existingHomepage
    }

    // Create the homepage document
    const homepage = await client.create(homepageSeedData)
    console.log('Homepage created successfully:', homepage._id)
    return homepage
  } catch (error) {
    console.error('Error seeding homepage:', error)
    throw error
  }
}

// Run the seed function if this file is executed directly
if (require.main === module) {
  seedHomepage()
    .then(() => {
      console.log('Homepage seeding completed')
      process.exit(0)
    })
    .catch((error) => {
      console.error('Homepage seeding failed:', error)
      process.exit(1)
    })
}

