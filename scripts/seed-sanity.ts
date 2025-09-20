import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { createReadStream } from 'fs';
import { join } from 'path';

// Load environment variables
config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Aggiungi questo token se hai configurato l'autenticazione
});

// Funzione per caricare immagini su Sanity
async function uploadImage(fileName: string, alt: string) {
  try {
    const filePath = join(process.cwd(), 'public', 'images', fileName);
    console.log(`📤 Uploading image: ${fileName} from ${filePath}`);
    
    const asset = await client.assets.upload('image', createReadStream(filePath), {
      filename: fileName,
    });

    console.log(`✅ Image uploaded successfully: ${asset._id}`);

    return {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
      alt,
    };
  } catch (error) {
    console.error(`❌ Error uploading image ${fileName}:`, error);
    return null;
  }
}

// Funzione per creare i dati della homepage con immagini
async function createHomepageData() {
  console.log('🖼️ Uploading images...');
  
  // Carica l'immagine AI Chaos
  const chaosImage = await uploadImage('ai caos.avif', 'AI Chaos - Take Control');
  
  return {
    _type: 'homepage',
    title: 'Homepage',
    seo: {
      metaTitle: 'Loop AI Group - The Leading AI Agents Platform',
      metaDescription: 'Boost your workforce building your own enterprise AI Agents that deliver real work using any ML/LLM, your legacy systems and your infrastructure.',
    },
    heroSection: {
      title: 'The Leading AI Agents Platform',
      subtitle: 'Boost your workforce building your own enterprise AI Agents that deliver real work using any ML/LLM, your legacy systems and your infrastructure.',
      primaryButton: {
        text: 'Book a Demo',
        link: '/cognitive-platforms/book-demo',
      },
      secondaryButton: {
        text: 'Learn More',
        link: '/cognitive-platforms/loop-ai-agents-orchestra',
      },
    },
    aiChaosSection: {
      title: 'Take Control and Cut Through the AI Chaos',
      subtitle: 'With Loop AI Agent Orchestra, regain control and cut through the chaos of AI!',
      ...(chaosImage && { chaosImage }),
    },
    enterpriseControlCenter: {
      title: 'Your Enterprise AI Control Center',
      subtitle: 'Seamlessly deploy, scale, and manage all your AI solutions and AI Agents across multiple vendors from one unified platform.',
      features: [
        {
          title: 'ANY ML or LLM',
          description: "Leverage any LLM/ML or Loop Q's integrated models, tailored to your AI agent's use case, accuracy needs, and budget—via APIs or local open-source solutions. Combine models within the same AI agent and seamlessly hot-swap as better options arise.",
          icon: 'Brain',
        },
        {
          title: 'ANY LEGACY SYSTEM',
          description: 'Your AI agents learn from human peers using historical data, seamlessly executing both simple and complex tasks within your existing enterprise systems—whether through APIs or the same interfaces used by your workforce.',
          icon: 'Database',
        },
        {
          title: 'ANY INFRASTRUCTURE',
          description: 'Run and scale training, inference, and your enterprise AI agents seamlessly across your infrastructure—whether on-premises, in private or public clouds, hybrid environments, or any load distribution setup—for development, testing, and production.',
          icon: 'Cloud',
        },
        {
          title: 'LOW-CODE TOOLS FOR TEAMS',
          description: 'No-code and low-code visual tools built for teams, featuring granular permissions for development, testing, and deployment. Leverage a template library of AI agent blocks to quickly prototype, test, deploy, and monitor key metrics for each AI Agent at scale.',
          icon: 'Sparkles',
        },
      ],
    },
    videoSection: {
      title: 'See Loop AI Agents Orchestra in Action',
      subtitle: 'Discover how leading enterprises are transforming their operations with AI Agents',
      youtubeVideoId: 'qbuutZhOxrc',
      videoTitle: 'Loop AI Group - The AI Agents Platform',
    },
    ctaSection: {
      title: 'AI Agents Management Made Simple',
      subtitle: 'Seamlessly deploy, scale, and manage all your AI solutions and AI Agents across multiple vendors from one unified platform.',
      primaryButton: {
        text: 'Get Started',
        link: '/cognitive-platforms/book-demo',
      },
      secondaryButton: {
        text: 'Explore Solutions',
        link: '/cognitive-platforms',
      },
    },
    footer: {
      companyName: 'Loop AI Group',
      copyrightText: '© 2024 Loop AI Group and its affiliates. All Rights Reserved.',
    },
  };
}

async function seedHomepage() {
  try {
    console.log('🔍 Checking for existing homepage...');
    
    // Check if homepage already exists
    const existingHomepage = await client.fetch('*[_type == "homepage"][0]');
    
    if (existingHomepage) {
      console.log('✅ Homepage already exists in Sanity. Skipping seed.');
      console.log('📄 Homepage ID:', existingHomepage._id);
      return existingHomepage;
    }

    console.log('🌱 Creating homepage document with images...');
    
    // Create homepage data with uploaded images
    const homepageData = await createHomepageData();
    
    // Create the homepage document
    const homepage = await client.create(homepageData);
    
    console.log('✅ Homepage created successfully!');
    console.log('📄 Homepage ID:', homepage._id);
    console.log('🔗 You can now view it in Sanity Studio at: http://localhost:3000/studio');
    
    return homepage;
  } catch (error) {
    console.error('❌ Error seeding homepage:', error);
    
    if (error instanceof Error && error.message.includes('unauthorized')) {
      console.log('💡 Tip: Make sure your Sanity project is properly configured and you have the right permissions.');
    }
    
    throw error;
  }
}

// Run the seed function
seedHomepage()
  .then(() => {
    console.log('🎉 Homepage seeding completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Homepage seeding failed:', error);
    process.exit(1);
  });

