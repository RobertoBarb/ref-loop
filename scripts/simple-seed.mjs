import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { join } from 'path';

// Load environment variables from .env.local
const envPath = join(process.cwd(), '.env.local');
let envContent = '';
try {
  envContent = readFileSync(envPath, 'utf8');
} catch (error) {
  console.log('⚠️  .env.local not found, using process.env');
}

// Parse environment variables
const envVars = {};
envContent.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) {
    envVars[key.trim()] = value.trim();
  }
});

// Merge with process.env
const env = { ...process.env, ...envVars };

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const homepageData = {
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
  featuresSection: {
    title: 'Take Control and Cut Through the AI Chaos',
    subtitle: 'With Loop AI Agent Orchestra, regain control and cut through the chaos of AI!',
    features: [
      {
        title: 'ANY ML or LLM',
        description: "Leverage any LLM/ML or Loop Q's integrated models, tailored to your AI agent's use case, accuracy needs, and budget—via APIs or local open-source solutions.",
        icon: 'Brain',
      },
      {
        title: 'ANY LEGACY SYSTEM',
        description: 'Your AI agents learn from human peers using historical data, seamlessly executing both simple and complex tasks within your existing enterprise systems.',
        icon: 'Database',
      },
      {
        title: 'ANY INFRASTRUCTURE',
        description: 'Run and scale training, inference, and your enterprise AI agents seamlessly across your infrastructure—whether on-premises, in private or public clouds, hybrid environments.',
        icon: 'Cloud',
      },
      {
        title: 'LOW-CODE TOOLS FOR TEAMS',
        description: 'No-code and low-code visual tools built for teams, featuring granular permissions for development, testing, and deployment.',
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

async function seedHomepage() {
  try {
    console.log('🔍 Checking for existing homepage...');
    console.log('📊 Project ID:', env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    console.log('📊 Dataset:', env.NEXT_PUBLIC_SANITY_DATASET);
    
    // Check if homepage already exists
    const existingHomepage = await client.fetch('*[_type == "homepage"][0]');
    
    if (existingHomepage) {
      console.log('✅ Homepage already exists in Sanity. Skipping seed.');
      console.log('📄 Homepage ID:', existingHomepage._id);
      return existingHomepage;
    }

    console.log('🌱 Creating homepage document...');
    
    // Create the homepage document
    const homepage = await client.create(homepageData);
    
    console.log('✅ Homepage created successfully!');
    console.log('📄 Homepage ID:', homepage._id);
    console.log('🔗 You can now view it in Sanity Studio at: http://localhost:3000/studio');
    
    return homepage;
  } catch (error) {
    console.error('❌ Error seeding homepage:', error);
    
    if (error.message?.includes('unauthorized')) {
      console.log('💡 Tip: Make sure your Sanity project is properly configured and you have the right permissions.');
    }
    
    if (error.message?.includes('Project not found')) {
      console.log('💡 Tip: Check your NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local');
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



