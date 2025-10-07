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
  token: process.env.SANITY_API_TOKEN,
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

// Funzione per caricare PDF su Sanity
async function uploadPDF(fileName: string) {
  try {
    const filePath = join(process.cwd(), 'public', 'docs', fileName);
    console.log(`📤 Uploading PDF: ${fileName} from ${filePath}`);
    
    const asset = await client.assets.upload('file', createReadStream(filePath), {
      filename: fileName,
    });

    console.log(`✅ PDF uploaded successfully: ${asset._id}`);

    return {
      _type: 'file',
      asset: { _type: 'reference', _ref: asset._id },
    };
  } catch (error) {
    console.error(`❌ Error uploading PDF ${fileName}:`, error);
    return null;
  }
}

// Homepage data
async function createHomepageData() {
  console.log('🖼️ Uploading homepage images...');
  
  const chaosImage = await uploadImage('ai caos.avif', 'AI Chaos - Take Control');
  const orchestraImage = await uploadImage('agent_orchestra_home_page_enlarged.avif', 'Loop AI Agent Orchestra');
  
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
      ...(orchestraImage && { heroImage: orchestraImage }),
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
      title: 'AI Agents Management Made Simple',
      subtitle: 'Discover how leading enterprises are transforming their operations with AI Agents',
      youtubeVideoId: 'qbuutZhOxrc',
      videoTitle: 'Loop AI Group - The AI Agents Platform',
    },
    ctaSection: {
      title: 'Take Control of Your AI Agents Today',
      subtitle: 'Join leading enterprises already optimizing with Loop AI Agents Orchestra',
      primaryButton: {
        text: 'Get Started',
        link: '/cognitive-platforms/book-demo',
      },
      secondaryButton: {
        text: 'Explore Solutions',
        link: '/cognitive-platforms/loop-ai-agents-orchestra',
      },
    },
    footer: {
      companyName: 'Loop AI Group',
      copyrightText: '© 2024 Loop AI Group and its affiliates. All Rights Reserved.',
    },
  };
}

// About Us data
async function createAboutUsData() {
  console.log('🖼️ Uploading about us images...');
  
  const firstImage = await uploadImage('about/first.avif', 'Loop AI Group Pioneering AI Revolution');
  const secondImage = await uploadImage('about/second.avif', 'Loop AI Group Global Recognition');
  const team1Image = await uploadImage('about/team_1.avif', 'Loop AI Group Team');
  const patrickImage = await uploadImage('about/patrick ehlen conference.avif', 'Patrick Ehlen Conference');
  
  return {
    _type: 'aboutUs',
    title: 'About Us',
    seo: {
      metaTitle: 'About Loop AI Group - Pioneering Enterprise AI Since 2012',
      metaDescription: 'Learn about Loop AI Group, the world\'s first independent enterprise AI company, founded in 2012 and pioneering the AI revolution.',
    },
    heroSection: {
      title: 'About Us',
    },
    missionVision: {
      mission: {
        title: 'Our Mission',
        description: 'Revolutionize products and service with autonomous intelligence',
      },
      vision: {
        title: 'Our Vision',
        description: 'A world where technology automates the ordinary, unleashing human potential to achieve the extraordinary on an unprecedented scale',
      },
    },
    ourStory: {
      title: 'Our Story',
      sections: [
        {
          title: 'Pioneering the AI Revolution',
          content: 'Founded in 2012, Loop AI Group emerged as the world\'s first independent enterprise AI company, igniting a technological revolution long before artificial intelligence captured global attention a decade later. At the heart of this innovation stood its Loop Q Unsupervised Cognitive Platform—a groundbreaking fusion of hardware and software, the first enterprise-grade, multimodal deep learning system powered by unsupervised learning. This visionary platform shattered conventions, sculpting pinpoint-accurate language-independent multimodal models to run real world enterprise applications from raw client data without manual annotations or irrelevant clutter, setting an unrivaled benchmark for accuracy and innovation.',
          image: firstImage,
        },
        {
          title: 'A Legacy of Scientific Excellence',
          content: 'Loop AI Group stands on a bedrock of unparalleled AI expertise, its scientific and engineering team forged in the crucible of elite research institutions like the Artificial Intelligence Center at SRI International (formerly Stanford Research Institute) and Stanford\'s Computational Semantics Lab. This team was instrumental in the transformative $200M DARPA CALO project (Cognitive Assistant that Learns and Organizes) in 2006—the largest government-funded AI endeavor ever—laying the groundwork for cutting-edge cognitive systems.',
        },
        {
          title: 'Global Recognition and Technology Validation',
          content: 'In 2016, after four intense years of AI research and technology validation Loop AI Group blazed a trail in AI applied research, earning a historic distinction as IDC, the first industry analyst mapping the nascent AI landscape, spotlighted it in its market research as the world\'s first independent AI company. This recognition established its platforms as pioneers for enterprise multimodal AI, powered by unsupervised learning and validated through real-world deployments worldwide.',
          image: secondImage,
        },
        {
          title: 'Shaping the Future of enterprise AI',
          content: 'In an era when AI was merely a whisper on the horizon, Loop didn\'t just predict the future—it forged it, cementing its legacy as the trailblazing pioneer of enterprise AI and an unrelenting innovator in a revolution it helped ignite. Now, in a 2025 AI landscape buzzing with thousands of companies and algorithms, Loop AI Agents Orchestra emerges as a transformative force once more.',
        },
      ],
    },
    teamImages: {
      images: [
        { image: team1Image },
        { image: patrickImage },
      ],
    },
    ctaSection: {
      title: 'MEET THE TEAM',
      subtitle: 'The passion. The science. The drive. Our team.',
      button: {
        text: 'View Team',
        link: '/company/team',
      },
    },
  };
}

// Team data
async function createTeamData() {
  console.log('🖼️ Uploading team images...');
  
  const teamImages = [
    { name: 'GM Calafiore', image: 'Team/GM.avif' },
    { name: 'Patrick Ehlen, PhD', image: 'Team/Patrick_new.avif' },
    { name: 'Viqar Shariff', image: 'Team/viqar.avif' },
    { name: 'Andrea Pitrone', image: 'Team/andrea.avif' },
    { name: 'Daniele Preda', image: 'Team/daniele_preda.PNG' },
    { name: 'Luigi Manzi', image: 'Team/luigi.avif' },
    { name: 'Marco Torresi', image: 'Team/marco.avif' },
    { name: 'Jaana Heikkila', image: 'Team/jaana.avif' },
    { name: 'Ilaria Colleoni', image: 'Team/ilaria.avif' },
  ];

  const advisorImages = [
    { name: 'Tom Davenport', image: 'Team/tom_davenport.avif' },
    { name: 'Vinay Chaudhri', image: 'Team/vinay.avif' },
    { name: 'Raul Véjar', image: 'Team/raul.avif' },
    { name: 'Massimo Marchiori', image: 'Team/massimo.avif' },
    { name: 'Tony Trousset', image: 'Team/tony.avif' },
    { name: 'Doug Bewsher', image: 'Team/doug.avif' },
    { name: 'Claus Karthe', image: 'Team/claus.avif' },
  ];

  const uploadedTeamImages = await Promise.all(
    teamImages.map(async (member) => ({
      ...member,
      uploadedImage: await uploadImage(member.image, member.name),
    }))
  );

  const uploadedAdvisorImages = await Promise.all(
    advisorImages.map(async (advisor) => ({
      ...advisor,
      uploadedImage: await uploadImage(advisor.image, advisor.name),
    }))
  );

  const executiveTeam = [
    { name: 'GM Calafiore', role: 'PRESIDENT, FOUNDER' },
    { name: 'Patrick Ehlen, PhD', role: 'CHIEF AI ADVISOR' },
    { name: 'Viqar Shariff', role: 'CHIEF STRATEGY OFFICER' },
    { name: 'Andrea Pitrone', role: 'CHIEF OPERATING OFFICER' },
    { name: 'Daniele Preda', role: 'CUSTOMER SUCCESS DIRECTOR' },
    { name: 'Luigi Manzi', role: 'HEAD OF SOFTWARE ENGINEERING' },
    { name: 'Marco Torresi', role: 'HEAD OF GLOBAL PR' },
    { name: 'Jaana Heikkila', role: 'VP, MARKETING' },
    { name: 'Ilaria Colleoni', role: 'CHIEF EXECUTIVE OFFICER' },
  ];

  return {
    _type: 'team',
    title: 'Executive Team',
    seo: {
      metaTitle: 'Executive Team - Loop AI Group Leadership',
      metaDescription: 'Meet the executive team and board of advisors at Loop AI Group, pioneers in enterprise AI technology.',
    },
    heroSection: {
      title: 'Executive Team',
    },
    executiveTeam: {
      title: 'Executive Team',
      members: executiveTeam.map((member, index) => ({
        name: member.name,
        role: member.role,
        image: uploadedTeamImages[index]?.uploadedImage,
        linkedinUrl: member.name === 'Andrea Pitrone' ? 'https://www.linkedin.com/in/andrea-pitrone-a012712/' : undefined,
        slug: {
          current: member.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace('phd', '').replace('--', '-').replace(/-$/, ''),
        },
      })),
    },
    boardOfAdvisors: {
      title: 'Board of Advisors',
      members: uploadedAdvisorImages.map((advisor, index) => ({
        name: advisor.name,
        image: advisor.uploadedImage,
        linkedinUrl: advisor.name === 'Vinay Chaudhri' ? 'https://www.linkedin.com/in/vinay-k-chaudhri-849556/' : undefined,
        slug: {
          current: advisor.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace('--', '-').replace(/-$/, ''),
        },
      })),
    },
  };
}

// Success Cases data
async function createSuccessCasesData() {
  console.log('🖼️ Uploading success cases images and PDFs...');
  
  const successCasesImages = [
    'success-cases/01.avif',
    'success-cases/02.avif',
    'success-cases/3.avif',
    'success-cases/4.avif',
    'success-cases/5.avif',
    'success-cases/6.avif',
    'success-cases/7.avif',
    'success-cases/08.avif',
    'success-cases/9.avif',
    'success-cases/10.avif',
    'success-cases/11.avif',
    'success-cases/12.avif',
  ];

  const successCasesPDFs = [
    '103_AI AGENT FOR RETAIL CHAIN DEMAND FORECASTING_LOOP AI AGENTS ORCHESTRA.pdf',
    '18_AUTONOMOUS WIRE TRANSFER AI AGENT_18_LOOP AI AGENT ORCHESTRA.pdf',
    '22_AUTONOMOUS CREDIT UNDERWRITING AI AGENT_LOOP AI AGENT ORCHESTRA.pdf',
    '36_AI AGENT FOR BACK-OFFICE KNOWLEDGE ASSISTANCET_LOOP AI AGENT ORCHESTRA.pdf',
    '29_AI AGENT FOR BACK-OFFICE REQUEST MICRO-ROUTING_LOOP AI AGENT ORCHESTRA.pdf',
    '49_AI AGENT FOR JUNIOR DOCTOR DIAGNOSIS SUPPORT_LOOP AI AGENT ORCHESTRA.pdf',
    '51_AUTOMATED DISCOVERY OF DRUG REPOSITIONING_LOOP AI AGENT ORCHESTRA.pdf',
    '57_RREAL-TIME COMPETITOR MONITORING DASHBOARD_LOOP AI AGENT ORCHESTRA.pdf',
    '40_EARLY DEFECT DETECTION FROM REPAIR DATA_LOOP AI AGENT ORCHESTRA.pdf',
    '45_PREDICTIVE MAINTENANCE USING VEHICLE SOUND_LOOP AI AGENT ORCHESTRA.pdf',
    '61_AUTOMATED MOVIE TAGGING FROM PUBLIC REVIEWS_LOOP AI AGENT ORCHESTRA.pdf',
    '66_NEW STORE LOCATION SELECTOR BASED ON REVIEWS_LOOP AI AGENT ORCHESTRA.pdf',
  ];

  const uploadedImages = await Promise.all(
    successCasesImages.map(async (imagePath) => {
      const imageName = imagePath.split('/').pop()!;
      return await uploadImage(imagePath, `Success case: ${imageName}`);
    })
  );

  const uploadedPDFs = await Promise.all(
    successCasesPDFs.map(async (pdfPath) => {
      return await uploadPDF(pdfPath);
    })
  );

  const successCases = [
    {
      id: 'ai-agent-for-retail-chain-demand-forecasting',
      title: 'AI AGENT FOR RETAIL CHAIN DEMAND FORECASTING',
      industry: 'Retail',
      description: 'The retail chain previously relied on manual analysis and historical sales to forecast demand for non-food products, a task complicated by niche items with location-specific demand. This approach frequently led to overstocking or stockouts, driving customers to competitors or clogging valuable store space with excess inventory.',
      solution: 'The client developed an AI agent for product demand forecasting and ordering, blending historical and real-time sales data with geolocated factors. Tailored to each store, it predicts demand accurately and places orders autonomously, adapting to market changes. This cuts waste, optimizes stock, and keeps products available where and when customers want them, boosting efficiency and satisfaction.',
      icon: 'BarChart3',
    },
    {
      id: 'autonomous-wire-transfer-ai-agent',
      title: 'AUTONOMOUS WIRE TRANSFER AI AGENT',
      industry: 'Banking',
      description: 'The client still processes over 30% of wire transfer requests on paper forms delivered at branch locations, often handwritten. As labor costs for handling these requests continue to rise, the commission earned per transfer is decreasing.',
      solution: 'The client chose to develop an AI agent to automate the majority of wire transfer requests, reserving human intervention for special niche cases. The AI agent must accurately process handwriting recognition, signature validation, recipient bank account details, originator and beneficiary names, AML compliance, and transaction descriptions.',
      icon: 'Building',
    },
    {
      id: 'autonomous-credit-underwriting-ai-agent',
      title: 'AUTONOMOUS CREDIT UNDERWRITING AI AGENT',
      industry: 'Banking',
      description: 'Small credit underwriting is currently handled by the client\'s human workforce, who evaluates credit applications, attached documents, and credit records to assess the end-customer\'s creditworthiness based on the underwriting risk profile. This process is labor-intensive, often requiring the identification of potentially fraudulent documents and interactions with the client to request missing or incorrect information.',
      solution: 'The client developed a fully autonomous AI Agent to automate the credit application process. The system automatically analyzes all provided documents, evaluates them for fraud, and cross-references to public records. It also interacts with the end-customer via email to request additional documents when necessary and provide status.',
      icon: 'Building',
    },
    {
      id: 'ai-agent-for-back-office-knowledge-assistance',
      title: 'AI AGENT FOR BACK-OFFICE KNOWLEDGE ASSISTANCE',
      industry: 'Insurance',
      description: 'The client aimed to create an AI agent to standardize the expertise of all back-office agents, regardless of their experience. Trained on the knowledge of senior agents, the AI agent helps junior agents quickly find the right documents and responses. It extracts, ranks, and suggests solutions based on historical answers from the most knowledgeable agents.',
      solution: 'Previously, the client used an internal FAQ for each insurance product, but this method still required considerable time for agents to find the correct answer.',
      icon: 'Users',
    },
    {
      id: 'ai-agent-for-back-office-request-micro-routing',
      title: 'AI AGENT FOR BACK-OFFICE REQUEST MICRO-ROUTING',
      industry: 'Insurance',
      description: 'The client aimed to develop an AI Agent to optimize the performance of its 1,000-person back-office workforce by routing each inbound request to the most expert agent for the specific topic. The human agent\'s expertise was automatically assessed based on past performance in handling similar tasks, analyzing total handling time and the number of interactions required for successful resolution.',
      solution: 'In a previous approach, the client had used routing based on competence centers and manually updated skill-based routing within each center.',
      icon: 'Users',
    },
    {
      id: 'ai-agent-for-junior-doctor-diagnosis-support',
      title: 'AI AGENT FOR JUNIOR DOCTOR DIAGNOSIS SUPPORT',
      industry: 'Healthcare',
      description: 'The goal was to assist junior doctors in diagnosing new patients by analyzing and correlating medical records from previous cases, including diagnoses, vital signs, treatments, recovery speed, and outcomes, while ensuring patient privacy. The AI agent, with access to both current and historical patient data, helps doctors develop personalized treatment plans.',
      solution: 'By continuously analyzing a patient\'s vital signs, existing conditions, and the effectiveness of ongoing therapy, the AI supports the delivery of the most effective treatment options for each patient.',
      icon: 'Award',
    },
    {
      id: 'automated-discovery-of-drug-repositioning',
      title: 'AUTOMATED DISCOVERY OF DRUG REPOSITIONING',
      industry: 'Healthcare',
      description: 'The project aimed to identify existing therapeutic candidates with well-established risk and toxicity profiles that could be repurposed as treatments for COVID-19. By leveraging machine learning and computational transcriptomics, our research lab analyzed gene expression signatures of both COVID-19 and various drugs using publicly available gene expression datasets.',
      solution: 'This approach enabled a more efficient identification of promising therapeutic candidates. Unlike traditional drug development, which often requires extensive testing and long timelines, this method accelerated the repurposing process, providing a faster response to the rapidly evolving COVID-19 pandemic.',
      icon: 'Award',
    },
    {
      id: 'real-time-competitor-monitoring-dashboard',
      title: 'REAL-TIME COMPETITOR MONITORING DASHBOARD',
      industry: 'Telecommunications',
      description: 'The client\'s marketing team successfully implemented a real-time competitor dashboard that enabled them to gain actionable insights by continuously analyzing key aspects of their competitors\' strategies. The dashboard tracked competitor websites, social media discussions, customer issues, content strategies, and email marketing efforts, offering a comprehensive view of competitor activities.',
      solution: 'This innovative approach allowed for faster, more accurate actionable insights of competitors, replacing the previous method, which relied on slow and costly phone surveys. By adopting the real-time dashboard, the client stayed ahead of competitors, responding swiftly with targeted campaigns while also tracking their own customer base.',
      icon: 'TrendingUp',
    },
    {
      id: 'early-defect-detection-from-repair-data',
      title: 'EARLY DEFECT DETECTION FROM REPAIR DATA',
      industry: 'Automotive',
      description: 'The client aimed to gain real-time insights from multilingual dealer repair data to detect defects early, identify root causes, and provide timely warnings for design and manufacturing improvements. The data, coming from dealers across 53 countries, is in local languages with regional terminology and industry-specific jargon, creating challenges for analysis.',
      solution: 'Previous approaches using human analysis and traditional NLP struggled with unstructured text and linguistic variations, resulting in delays in issue detection and high operational costs. The client sought to leverage AI to transform repair data into a proactive tool for improving quality and reducing inefficiencies.',
      icon: 'Target',
    },
    {
      id: 'predictive-maintenance-using-vehicle-sound',
      title: 'PREDICTIVE MAINTENANCE USING VEHICLE SOUND',
      industry: 'Automotive',
      description: 'The client successfully enhanced their Condition-Based Maintenance system by integrating sound sensors to detect anomalies from the vehicle. While the previous CBM approach, relying on common sensors, was limited to specific devices, the new sound sensor technology provided a more comprehensive data set when combined with structured sensor data.',
      solution: 'Internal research had shown that changes in vehicle sounds could signal underlying issues before they escalated into major problems. With the implementation of this cognitive application, the client achieved a more holistic approach that enabled earlier detection of defects, allowing proactive intervention before issues became critical.',
      icon: 'Target',
    },
    {
      id: 'automated-movie-tagging-from-public-reviews',
      title: 'AUTOMATED MOVIE TAGGING FROM PUBLIC REVIEWS',
      industry: 'Media',
      description: 'The client aimed to boost revenues in its IPTV pay-per-view business by enhancing the performance of their recommendation system through automated movie tagging based on public audience reviews in multiple languages. Previously, the client relied on metadata such as genre, MPAA rating, and cast for categorizing movies.',
      solution: 'They then implemented a Netflix-inspired method that involved people watching and tagging movies, which resulted in a 100% revenue increase. However, this approach proved to be expensive, slow, and not scalable, particularly when enriching the full catalog of tens of thousands of movies.',
      icon: 'Globe',
    },
    {
      id: 'new-store-location-selector-based-on-reviews',
      title: 'NEW STORE LOCATION SELECTOR BASED ON REVIEWS',
      industry: 'Food and Beverage',
      description: 'The client adopted a more data-driven approach to scale store openings while minimizing risks related to location selection. They enriched location data by combining structured data (such as POS history) with dark data (such as business descriptions and reviews of potential store locations).',
      solution: 'This allowed them to predict and assess the value and risks associated with both new and existing restaurant locations, based on historical data from their most successful stores. Previously, the client relied on traditional demographic research data, which was typically updated only for the most popular locations every few years.',
      icon: 'Globe',
    },
  ];

  return {
    _type: 'successCases',
    title: 'Success Cases',
    seo: {
      metaTitle: 'Success Cases - Loop AI Group Real-World Applications',
      metaDescription: 'Explore real-world success cases powered by Loop AI Agents Orchestra and Loop Q Cognitive Platforms across various industries.',
    },
    heroSection: {
      title: 'Success Cases',
      subtitle: 'Welcome to our showcase of use cases powered by the Loop AI Agents Orchestra and Loop Q Cognitive Platforms. Below, you\'ll find a selection of real-world applications where these platforms have been successfully implemented to drive innovation, efficiency, and growth. For more tailored examples, we invite you to explore specific use cases during the Platform demo or upon request.',
    },
    cases: successCases.map((caseData, index) => ({
      ...caseData,
      id: { current: caseData.id },
      image: uploadedImages[index],
      pdf: uploadedPDFs[index],
    })),
    industriesSection: {
      title: 'Industries We Serve',
      subtitle: 'Our cognitive platforms deliver transformative results across diverse industries',
      industries: [
        { name: 'Banking', count: 2, icon: 'Building' },
        { name: 'Healthcare', count: 2, icon: 'Award' },
        { name: 'Insurance', count: 2, icon: 'Users' },
        { name: 'Retail', count: 1, icon: 'BarChart3' },
        { name: 'Automotive', count: 2, icon: 'Target' },
        { name: 'Media', count: 1, icon: 'Globe' },
        { name: 'Telecommunications', count: 1, icon: 'TrendingUp' },
        { name: 'Food & Beverage', count: 1, icon: 'Globe' },
      ],
    },
    ctaSection: {
      title: 'Your Next AI Agent Is Minutes Away. No Coding Required.',
      subtitle: 'Smart. Fast. Tireless. Build your competitive digital workforce today from prototype to production.',
      button: {
        text: 'Book a Demo',
        link: '/cognitive-platforms/book-demo',
      },
    },
  };
}

// Contact data
function createContactData() {
  return {
    _type: 'contact',
    title: 'Contact Us',
    seo: {
      metaTitle: 'Contact Loop AI Group - Get in Touch',
      metaDescription: 'Contact Loop AI Group for inquiries about our enterprise AI solutions and cognitive platforms.',
    },
    heroSection: {
      title: 'Contact Us',
      subtitle: 'Please fill out this form and a Loop AI Group representative will be in touch.',
    },
    contactForm: {
      title: 'Contact Form',
      fields: [
        {
          name: 'firstName',
          label: 'First name',
          type: 'text',
          required: true,
          placeholder: 'Enter your first name',
        },
        {
          name: 'lastName',
          label: 'Last name',
          type: 'text',
          required: true,
          placeholder: 'Enter your last name',
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true,
          placeholder: 'Enter your email address',
        },
        {
          name: 'role',
          label: 'Role',
          type: 'text',
          required: true,
          placeholder: 'e.g., CTO, AI Director, VP of Technology',
        },
        {
          name: 'organization',
          label: 'Organization',
          type: 'text',
          required: true,
          placeholder: 'Enter your organization name',
        },
        {
          name: 'country',
          label: 'Country',
          type: 'text',
          required: true,
          placeholder: 'Enter your country',
        },
        {
          name: 'organizationSize',
          label: 'Organization Size',
          type: 'select',
          required: true,
          options: [
            { value: '1-10', label: '1-10 employees' },
            { value: '11-50', label: '11-50 employees' },
            { value: '51-200', label: '51-200 employees' },
            { value: '201-500', label: '201-500 employees' },
            { value: '501-1000', label: '501-1000 employees' },
            { value: '1000+', label: '1000+ employees' },
          ],
        },
        {
          name: 'request',
          label: 'Please describe your request!',
          type: 'textarea',
          required: true,
          placeholder: 'Describe your request...',
        },
      ],
    },
    locations: {
      title: 'Locations',
      offices: [
        {
          region: 'AMERICAS',
          addresses: [
            {
              street: '524 Broadway',
              city: 'New York, NY 10012',
              country: 'USA',
            },
            {
              street: '535 Mission St',
              city: 'San Francisco, CA 94105',
              country: 'USA',
            },
          ],
        },
        {
          region: 'EUROPE',
          addresses: [
            {
              street: 'Via San Raffaele 1',
              city: '20121 Milano',
              country: 'Italy',
            },
          ],
        },
      ],
    },
  };
}

// Careers data
function createCareersData() {
  return {
    _type: 'careers',
    title: 'Careers',
    seo: {
      metaTitle: 'Careers at Loop AI Group - Join Our Team',
      metaDescription: 'Join Loop AI Group and be part of the AI revolution. We\'re hiring across all our offices in USA and Europe.',
    },
    heroSection: {
      title: 'Careers',
      subtitle: 'BE THE CHANGE',
    },
    mainContent: {
      title: 'Interested in working to radically change how machines can autonomously learn and understand the human world?',
      description: 'If you are passionate about cognitive computing, machine learning, and deep learning, and you\'re interested in joining the team at Loop AI Group, please submit the application below.\n\nWe are hiring across all our offices in USA and Europe with possibility to work remotely from any country in the world. Candidates are welcome to apply from anywhere.',
    },
    applicationForm: {
      title: 'Application Form',
      fields: [
        {
          name: 'lastName',
          label: 'Last name',
          type: 'text',
          required: true,
          placeholder: 'Enter your last name',
        },
        {
          name: 'firstName',
          label: 'First name',
          type: 'text',
          required: true,
          placeholder: 'Enter your first name',
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true,
          placeholder: 'Enter your email address',
        },
        {
          name: 'resumeLink',
          label: 'Link to your resume (optional)',
          type: 'text',
          required: false,
          placeholder: 'Enter link to your resume',
        },
        {
          name: 'challengeDescription',
          label: 'Please briefly describe one of the most challenging problems you\'ve encountered in your work and explain how you resolved it.',
          type: 'textarea',
          required: true,
          placeholder: 'Describe the challenge and your solution...',
        },
        {
          name: 'contributionDescription',
          label: 'Please share how you believe your skills and experience can contribute to advancing Loop AI Group\'s mission.',
          type: 'textarea',
          required: true,
          placeholder: 'Share how you can contribute to our mission...',
        },
        {
          name: 'joinType',
          label: 'How you want to join?',
          type: 'select',
          required: true,
          options: [
            { value: 'internship', label: 'Internship' },
            { value: 'full-time', label: 'Full Time' },
            { value: 'other', label: 'Other' },
          ],
        },
      ],
    },
  };
}

// Videos data
function createVideosData() {
  return {
    _type: 'videos',
    title: 'Videos',
    seo: {
      metaTitle: 'Videos - Loop AI Group Presentations and Talks',
      metaDescription: 'Watch videos showcasing Loop AI Group\'s presentations, talks, and demonstrations of our cognitive platforms.',
    },
    heroSection: {
      title: 'Videos',
    },
    introSection: {
      description: 'Below is a curated selection of videos showcasing our offerings. For access to the full catalog, please visit our YouTube channel at this link: https://www.youtube.com/@LoopAiLabs.',
      youtubeChannelUrl: 'https://www.youtube.com/@LoopAiLabs',
    },
    videoCollection: {
      title: 'Video Collection',
      videos: [
        {
          title: 'The Infinite Productivity Era',
          youtubeUrl: 'https://youtu.be/4cdvHwBaVj8?list=TLGGMiS1AxIYrPoyNTA5MjAyNQ',
          embedId: '4cdvHwBaVj8',
        },
        {
          title: 'The Proliferation of AI at VLAB Stanford University',
          youtubeUrl: 'https://youtu.be/zyJ-Ng6P5mw?list=TLGGeVE_Tj_W6T8yNTA5MjAyNQ',
          embedId: 'zyJ-Ng6P5mw',
        },
        {
          title: 'Patrick Ehlen: AI, The end of deep learning?',
          youtubeUrl: 'https://youtu.be/gdtHB-D-nWI?list=TLGGyVo_w-kgY9oyNTA5MjAyNQ',
          embedId: 'gdtHB-D-nWI',
        },
        {
          title: 'Can Cognitive Computing be the brain for an enterprise personal assistant?',
          youtubeUrl: 'https://youtu.be/Vwsy3O41o9A?list=TLGGToLMLFCYwCMyNTA5MjAyNQ',
          embedId: 'Vwsy3O41o9A',
        },
        {
          title: 'Patrick Ehlen: Human Capacity Cognitve Computing at Deloitte',
          youtubeUrl: 'https://youtu.be/tunu1RCILas?list=TLGGYVOdtgbIBZQyNTA5MjAyNQ',
          embedId: 'tunu1RCILas',
        },
        {
          title: 'Patrick Ehlen: Crossing the Event Horizon at Deloitte',
          youtubeUrl: 'https://youtu.be/K4GDP7EwqLg?list=TLGGxfzCMlzg6i4yNTA5MjAyNQ',
          embedId: 'K4GDP7EwqLg',
        },
        {
          title: 'Patrick Ehlen: Doing semantics with GPUs at Stanford Univeristy',
          youtubeUrl: 'https://youtu.be/bBsDT9RAyoU?list=TLGGA71OovW2L3AyNTA5MjAyNQ',
          embedId: 'bBsDT9RAyoU',
        },
        {
          title: 'Andrea Pitrone: Thinking Businesses, The New Cognitive Era',
          youtubeUrl: 'https://youtu.be/KGrsFCHcb4Q',
          embedId: 'KGrsFCHcb4Q',
        },
      ],
    },
  };
}

// Media & Analyst Relations data
function createMediaAnalystRelationsData() {
  return {
    _type: 'mediaAnalystRelations',
    title: 'Media & Analyst Relations',
    seo: {
      metaTitle: 'Media & Analyst Relations - Loop AI Group',
      metaDescription: 'Contact Loop AI Group for media inquiries and analyst relations. Reach out to our team for interviews and detailed information.',
    },
    heroSection: {
      title: 'Media & Analyst Relations',
    },
    mainContent: {
      description: 'If you are a journalist or an industry analyst and would like to schedule an interview or obtain more detailed information about Loop AI Group and our Cognitive Computing Platform, please contact us.',
      contactEmail: 'media@loop.ai',
      note: 'Please note that this contact information is listed for corporate media and analyst inquiries only. We will not be able to respond to other inquiries. For non-media inquiries please use this form.',
    },
  };
}

// Loop AI Research data
async function createLoopAIResearchData() {
  console.log('🖼️ Uploading Loop AI Research image...');
  
  const researchImage = await uploadImage('company/research.avif', 'Loop AI Research');
  
  return {
    _type: 'loopAiResearch',
    title: 'Loop AI Research',
    seo: {
      metaTitle: 'Loop AI Research (LAIR) - Join Our Research Team',
      metaDescription: 'Join LAIR (Loop AI Research) and shape the future of AI. We\'re hiring researchers, engineers, and students passionate about cognitive computing.',
    },
    heroSection: {
      title: 'LAIR',
      subtitle: 'LOOP AI RESEARCH',
      description: 'Connect with LAIR to create the future of AI progress. Smarter. Faster. Better.',
      backgroundImage: researchImage,
    },
    mainContent: {
      title: 'Join the Loop AI Research Lab: Shape a World-Changing Future',
      sections: [
        {
          title: 'Our Legacy',
          content: 'Since 2012, we\'ve been the vanguard of artificial intelligence at LAIR, igniting an industry we pioneered. The scientists and engineers with exceptional abilities who joined us then didn\'t just observe the revolution—they spearheaded it, delivering groundbreaking research and solutions that tackle humanity\'s toughest challenges. Today, their legacy powers a vision where technology automates the ordinary, unleashing human potential to achieve the extraordinary on an unprecedented scale.',
          highlighted: 'This is your shot to lead the charge.',
        },
        {
          title: 'The Opportunity',
          content: 'We\'re building the next generation of AI models and products—tools that redefine how the world works and make essentials accessible to all. Whether you\'re a seasoned innovator or an AI student hungry to shape the future, LAIR is where you turn bold ideas into reality.',
          highlighted: 'We\'re hiring now—join the global AI revolution.',
        },
      ],
      details: {
        where: {
          title: 'Where:',
          description: 'Our offices span the USA and Europe, with remote work and internship opportunities from anywhere in the world.',
        },
        who: {
          title: 'Who:',
          description: 'Visionaries at any stage—professionals, researchers, and students studying AI in any corner of the globe are welcome to apply.',
        },
      },
      ctaButton: {
        text: 'APPLY NOW',
        link: '/company/careers',
      },
    },
  };
}

// Team members data
async function createTeamMembers() {
  console.log('👥 Creating team members...');
  
  const teamMembersData = [
    {
      name: "GM Calafiore",
      role: "PRESIDENT, FOUNDER",
      imagePath: "Team/GM.avif",
      slug: "gm-calafiore",
      bio: "GM is the President and Founder of Loop AI Group. A lifelong serial entrepreneur, he first became a CEO at age 19. His career launched as an independent consultant, overseeing projects for Fortune 100 Italian firms to integrate their internal computing systems with Internet and mobile technologies.",
      detailedBio: `Subsequently, GM established GSMBOX, the pioneering pan-European mobile media group that seamlessly fused mobile, Internet, and television platforms. Headquartered in Italy, GSMBOX grew to include subsidiaries in Spain, France, Germany, the UK, and Portugal. In collaboration with Telecinco—Spain's top commercial broadcaster—and Endemol (now part of 21st Century Fox), a global leader in television entertainment, GSMBOX introduced the world's first interactive TV format, driving the Mobile Premium Services market. GM also co-founded Endemol-GSMBOX, a London-based joint venture with Endemol International, dedicated to embedding mobile media interactions into Endemol's globally distributed formats. GSMBOX was later acquired by a subsidiary of NTT DoCoMo.

Under GM's guidance, GSMBOX transformed from a vision into a powerhouse, gaining over 25 million customers and generating $33 million in revenue within three years of its inception. Remarkably, he navigated the company through the dot-com crash, forging a resilient and successful enterprise.`,
      isExecutive: true,
      isAdvisor: false
    },
    {
      name: "Patrick Ehlen, PhD",
      role: "CHIEF AI ADVISOR",
      imagePath: "Team/Patrick_new.avif",
      slug: "patrick-ehlen",
      bio: "Patrick's fascination with artificial intelligence began in third grade after reading Arthur C. Clarke's *2001: A Space Odyssey*. In 1992, inspired by the *Parallel Distributed Processing* volumes, he trained his first neural network to learn distributed representations of concepts.",
      detailedBio: `Patrick earned a PhD in Cognitive Psychology from the New School for Social Research, where he received the Dissertation Fellowship, the Alfred J. Marrow Memorial Award in Psychology, and became the inaugural recipient of the Charles Cannell Fund award from the University of Michigan for his innovative mathematical modeling of concept processing. During his doctoral studies, he interned at Dragon Systems—a speech recognition pioneer later acquired by Nuance—and at AT&T Labs-Research, where he spearheaded advancements in speech and multimodal understanding technologies. He then joined the Center for the Study of Language and Information (CSLI), an AI hub at Stanford University.

As a research scientist at Stanford's Computational Semantics Lab, Patrick contributed to the $200M DARPA CALO AI project, developing machine learning techniques to extract concepts and topics from natural, spontaneous conversations. In 2008, he returned to AT&T in San Francisco, joining the nascent R&D team at AT&T Interactive. There, he led the development of *AT&T Speak4it*, the first mobile app to leverage cloud-based speech recognition and, later, the first to integrate simultaneous speech and gesture for multimodal search. Patrick also played a key role in launching AT&T's Speech API, a cloud-based speech recognition service.

With ten U.S. patents to his name and over 70 research publications, Patrick has made significant contributions to computational semantics, cognitive linguistics, psycholinguistics, word sense disambiguation, human concept learning, and artificial intelligence. His work has been cited in more than 1,500 scientific papers. He currently serves on the Advisory Board for Digility, a conference and expo on Digital Reality, and The Flight Exchange, a charter aircraft booking platform.`,
      isExecutive: true,
      isAdvisor: false
    },
    {
      name: "Andrea Pitrone",
      role: "CHIEF OPERATING OFFICER",
      imagePath: "Team/andrea.avif",
      slug: "andrea-pitrone",
      linkedinUrl: "https://www.linkedin.com/in/andrea-pitrone-a012712/",
      bio: "Andrea Pitrone is a visionary leader in cognitive computing, serving as the Chief Customer Success Officer and Chief Product Officer at Loop AI Group. With a deep expertise in AI-driven digital transformation, Andrea is responsible for the global strategy, execution, and oversight of all client projects and pilot implementations.",
      detailedBio: `Andrea plays a pivotal role in shaping Loop AI Group's Cognitive Transformation Program, working closely with Strategy Partners to help enterprises adopt AI-powered solutions and re-engineer their core business processes. His expertise ensures that clients maximize value from their Cognitive Roadmaps, achieving tangible business outcomes.

He also leads the product development of Loop Q, the company's cutting-edge Unsupervised Cognitive Computing Platform, ensuring continuous innovation and excellence.

With over 20 years of experience in management consulting, IT systems integration, and digital transformation, Andrea has worked across global markets, including Italy, Kazakhstan, and Saudi Arabia. Before joining Loop AI Group, he spent 12 years at Accenture, driving large-scale projects for Telecommunications and Utilities clients.

Earlier in his career, he held leadership roles at companies spun off from Ericsson Telecomunicazioni and Alcatel Italia, specializing in quality assurance, pre-sales, project management, and business operations.

Andrea holds an M.Sc. in Electrical Engineering, cum laude, from the University of Catania, Italy.

In addition to his corporate leadership, he has been a member of the Permanent Scientific Committee of Bemycompany, an Italian Venture Incubator, since July 2018, supporting innovative startups and fostering technological advancements.`,
      isExecutive: true,
      isAdvisor: false
    },
    {
      name: "Viqar Shariff",
      role: "CHIEF STRATEGY OFFICER",
      imagePath: "Team/viqar.avif",
      slug: "viqar-shariff",
      bio: "Viqar Shariff serves as the Chief Strategy Officer of Loop AI Group, a position he assumed in July 2017 after acting as a Board Member and Advisor to the company. He oversees the company's strategic direction, with a primary focus on finance and investor relations.",
      detailedBio: `Before joining Loop AI Group, Viqar co-founded and served as managing partner of SAFA Partners LLC and was a managing partner at Rizvi Traverse, an opportunistic investment fund. He has spearheaded investments in prominent technology companies, including Lyft, Boxed Wholesale, Twitter, Pinterest, Facebook, and Square. Prior to his investment career, Viqar amassed over 11 years of expertise in mergers and acquisitions, notably as a partner at Clifford Chance. His professional journey began at the Department of Justice, Antitrust Division, before transitioning to the private sector.

Viqar's extensive deal experience spans all aspects of growth tech investing, from deal origination and structuring to due diligence, execution, and operational oversight. During his legal tenure, he navigated complex domestic and cross-border transactions, skillfully negotiating key terms for acquisitions and financings.

A graduate of The Johns Hopkins University, Viqar earned his JD, magna cum laude, from Tulane Law School. He resides in New York, New York, with his wife and two daughters.`,
      isExecutive: true,
      isAdvisor: false
    },
    {
      name: "Daniele Preda",
      role: "CUSTOMER SUCCESS DIRECTOR",
      imagePath: "Team/daniele_preda.PNG",
      slug: "daniele-preda",
      bio: "Daniele Preda serves as the Customer Success Director at Loop AI Group",
      detailedBio: ``,
      isExecutive: true,
      isAdvisor: false
    },
    {
      name: "Luigi Manzi",
      role: "HEAD OF SOFTWARE ENGINEERING",
      imagePath: "Team/luigi.avif",
      slug: "luigi-manzi",
      bio: "Luigi Manzi is the Head of Software Engineering at Loop AI Group, where his deep technical expertise drives the evolution of Loop Q cognitive technology. His leadership ensures that the platform continues to advance in alignment with the company's long-term vision, delivering the award-winning, world-class AI solutions that Loop AI Group is known for.",
      detailedBio: `With responsibility for platform cognitive software development, Luigi oversees the design, supervision, coordination, and execution of application management activities. His focus is on making machine learning and cognitive computing more efficient and user-friendly, ensuring seamless adoption for enterprise clients.

Bringing over 20 years of experience in building and leading high-performing technology teams, Luigi has worked across hardware and software engineering, product design, management, quality assurance, and enterprise client support.

Before joining Loop AI Group, he served as a Software Engineering Team Leader at Accenture, where he played a key role in developing cutting-edge software solutions.

Luigi holds an M.S. in Computer Science from Naples University.`,
      isExecutive: true,
      isAdvisor: false
    },
    {
      name: "Marco Torresi",
      role: "HEAD OF GLOBAL PR",
      imagePath: "Team/marco.avif",
      slug: "marco-torresi",
      bio: "Marco Torresi is the Head of Global PR & Analyst Relations at Loop AI Group, where he leads the planning, development, and execution of the company's public relations strategy. With over a decade of experience in technology PR and corporate communications, he has a proven track record of shaping brand narratives and strengthening industry presence.",
      detailedBio: `Marco has served as a PR Director, managing communications programs for major internet brands, including LinkedIn, Knewton, Message Systems, PartnerUp, and TrustedID. His expertise spans early-stage product launches, market analysis, media relations, corporate positioning, and executive profiling. He also played a key role as a Senior Account Executive, executing global PR initiatives for Compaq and Hewlett-Packard.

Beyond his PR career, Marco has been a successful entrepreneur, launching and selling a music venue in San Francisco and a restaurant in the Dominican Republic.

He holds a B.A. in Sociology from U.C. Irvine and an MBA from Santa Clara University.`,
      isExecutive: true,
      isAdvisor: false
    },
    {
      name: "Jaana Heikkila",
      role: "VP, MARKETING",
      imagePath: "Team/jaana.avif",
      slug: "jaana-heikkila",
      bio: "Jaana Heikkilä, VP of Marketing at Loop AI Group, brings over 20 years of experience in the global technology sector, having held leadership roles across multinational corporations and innovative startups. Originally from Finland, Jaana has played a pivotal role in marketing, global partnerships, and business development for leading technology companies.",
      detailedBio: `She began her career at Nokia and Microsoft, later contributing to the growth of three startup ventures in Stockholm and Helsinki. After relocating to Rome, she worked with Etnoteam (now NTT Italy) on M&A target scouting and international partnerships.

In 2004, Jaana co-founded the Rome and Milan chapters of Mobile Monday, a global networking movement that helped shape Italy's mobile industry ecosystem. Originating in Helsinki in 2000, Mobile Monday became the world's leading mobile innovation community, growing to 100,000+ members across 150+ cities worldwide.

For over a decade, Jaana collaborated with executive teams of international corporations, driving marketing strategies, partner management, and business development. She later moved to San Francisco, working with pioneering IoT companies before joining Loop AI Group in 2016. Since then, she has been instrumental in shaping the company's global brand, increasing visibility, and working closely with leading AI industry analysts.

Jaana holds an M.Sc. in Social Sciences from the University of Helsinki and a Business Administration degree from Helsinki Business College.`,
      isExecutive: true,
      isAdvisor: false
    },
    {
      name: "Ilaria Colleoni",
      role: "CHIEF EXECUTIVE OFFICER",
      imagePath: "Team/ilaria.avif",
      slug: "ilaria-colleoni",
      bio: "Ilaria brings over 20 years of experience in project management, product development, and corporate leadership. She began her career in Bologna, Italy, overseeing the development and roadmap of high-tech products, managing customer relations, and leading a 30-person team.",
      detailedBio: `At TAS Group, a multinational company with 400+ experts across 20 countries, Ilaria played a key role in industrial relations, leading negotiations with Italian trade unions. In her human resources role, she managed the selection process and executive recruitment, shaping the company's leadership talent.

With over 15 years in HR, Ilaria developed deep expertise in people development and organizational transformation. She designed and led training programs to foster positive work cultures, helping individuals and teams reach their full potential.

In 2016, she founded Peplo, a company specializing in event design, corporate communication, and team-building activities. Since 2019, she has served as the CEO of Loop AI Consulting, a subsidiary of Loop AI Group, where she continues to drive innovation and strategic growth.

Ilaria holds a degree in Computer Science from Alma Mater Studiorum – University of Bologna.`,
      isExecutive: true,
      isAdvisor: false
    },
    {
      name: "Tom Davenport",
      role: "BOARD OF ADVISORS",
      imagePath: "Team/tom_davenport.avif",
      slug: "tom-davenport",
      bio: "Tom Davenport is the President's Distinguished Professor of Information Technology and Management at Babson College, co-founder of the International Institute for Analytics, a Fellow of the MIT Initiative on the Digital Economy, and a Senior Advisor to Deloitte Analytics.",
      detailedBio: `He teaches analytics and big data in executive programs at Babson, Harvard Business School, MIT Sloan School, and Boston University.

A pioneer in analytics-driven business strategy, Tom introduced the concept of "competing on analytics" through his best-selling 2006 Harvard Business Review article, followed by his influential 2007 book of the same name.

Continuing to push the boundaries of management and technology, Tom has explored the impact of AI and automation on the workforce. His 2015 Harvard Business Review article, "Beyond Automation"—recognized as one of the year's best—led to the 2016 book, Only Humans Need Apply: Winners and Losers in the Age of Smart Machines, co-authored with Julia Kirby.

A prolific writer and thought leader, Tom has authored or edited 18 books and published over 100 articles in Harvard Business Review, Sloan Management Review, and the Financial Times. He contributes regularly to The Wall Street Journal, Fortune, and Harvard Business Review's online platforms. Recognized as one of the top three business/technology analysts in the world, he has also been named among the 100 most influential people in IT and one of Fortune magazine's top 50 business school professors.

Tom holds a Ph.D. in Social Science from Harvard University and has taught at Harvard Business School, the University of Chicago, Dartmouth's Tuck School of Business, Boston University, and the University of Texas at Austin.`,
      isExecutive: false,
      isAdvisor: true
    },
    {
      name: "Vinay Chaudhri",
      role: "BOARD OF ADVISORS",
      imagePath: "Team/vinay.avif",
      slug: "vinay-chaudhri",
      linkedinUrl: "https://www.linkedin.com/in/vinay-k-chaudhri-849556/",
      bio: "Vinay is the Program Director at the Artificial Intelligence Center of SRI International (formerly known as Stanford Research Institute), one of the world's leading independent research and development organizations.",
      detailedBio: `He leads research and development in knowledge representation, reasoning, and question-answering systems. His work focuses on creating intelligent systems that can understand, reason about, and answer questions using large-scale knowledge bases.

Vinay has been instrumental in developing advanced AI technologies that enable machines to process and understand complex information. His research contributions span multiple areas of artificial intelligence, including natural language processing, knowledge engineering, and automated reasoning.

He has published extensively in top-tier AI conferences and journals, contributing to the advancement of the field. His work has been recognized by the research community and has influenced the development of modern AI systems.

Vinay has received several prestigious awards and fellowships, including the University of Toronto Open Fellowship and the Connaught Fellowship.

He earned his Ph.D. in Computer Science from the University of Toronto and began his career in 1988 as an Analyst Programmer at Tata Consultancy Services.`,
      isExecutive: false,
      isAdvisor: true
    }
  ];

  const createdMembers = [];
  
  for (const memberData of teamMembersData) {
    console.log(`👤 Creating team member: ${memberData.name}`);
    
    // Upload image
    const image = await uploadImage(memberData.imagePath, `${memberData.name} - ${memberData.role}`);
    
    const memberDoc = {
      _type: 'teamMember',
      name: memberData.name,
      role: memberData.role,
      slug: { current: memberData.slug },
      bio: memberData.bio,
      detailedBio: memberData.detailedBio,
      isExecutive: memberData.isExecutive,
      isAdvisor: memberData.isAdvisor,
      ...(image && { image }),
      ...(memberData.linkedinUrl && { linkedinUrl: memberData.linkedinUrl }),
    };

    const existingMember = await client.fetch(
      `*[_type == "teamMember" && slug.current == $slug][0]`,
      { slug: memberData.slug }
    );

    let member;
    if (existingMember) {
      console.log(`🔄 Updating existing team member: ${memberData.name}`);
      member = await client
        .patch(existingMember._id)
        .set(memberDoc)
        .commit();
    } else {
      console.log(`➕ Creating new team member: ${memberData.name}`);
      member = await client.create(memberDoc);
    }
    
    createdMembers.push(member);
    console.log(`✅ Team member created/updated: ${memberData.name}`);
  }

  return createdMembers;
}

// Success cases data
async function createIndividualSuccessCases() {
  console.log('🎯 Creating individual success cases...');
  
  const successCasesData = [
    {
      id: "ai-agent-for-retail-chain-demand-forecasting",
      title: "AI AGENT FOR RETAIL CHAIN DEMAND FORECASTING",
      industry: "Retail",
      description: "The retail chain previously relied on manual analysis and historical sales to forecast demand for non-food products, a task complicated by niche items with location-specific demand. This approach frequently led to overstocking or stockouts, driving customers to competitors or clogging valuable store space with excess inventory.",
      solution: "The client developed an AI agent for product demand forecasting and ordering, blending historical and real-time sales data with geolocated factors. Tailored to each store, it predicts demand accurately and places orders autonomously, adapting to market changes. This cuts waste, optimizes stock, and keeps products available where and when customers want them, boosting efficiency and satisfaction.",
      imagePath: "success-cases/01.avif",
      pdfPath: "103_AI AGENT FOR RETAIL CHAIN DEMAND FORECASTING_LOOP AI AGENTS ORCHESTRA.pdf",
      icon: "BarChart3"
    },
    {
      id: "autonomous-wire-transfer-ai-agent",
      title: "AUTONOMOUS WIRE TRANSFER AI AGENT",
      industry: "Banking",
      description: "The client still processes over 30% of wire transfer requests on paper forms delivered at branch locations, often handwritten. As labor costs for handling these requests continue to rise, the commission earned per transfer is decreasing.",
      solution: "The client chose to develop an AI agent to automate the majority of wire transfer requests, reserving human intervention for special niche cases. The AI agent must accurately process handwriting recognition, signature validation, recipient bank account details, originator and beneficiary names, AML compliance, and transaction descriptions.",
      imagePath: "success-cases/02.avif",
      pdfPath: "18_AUTONOMOUS WIRE TRANSFER AI AGENT_18_LOOP AI AGENT ORCHESTRA.pdf",
      icon: "Building"
    },
    {
      id: "autonomous-credit-underwriting-ai-agent",
      title: "AUTONOMOUS CREDIT UNDERWRITING AI AGENT",
      industry: "Banking",
      description: "Small credit underwriting is currently handled by the client's human workforce, who evaluates credit applications, attached documents, and credit records to assess the end-customer's creditworthiness based on the underwriting risk profile. This process is labor-intensive, often requiring the identification of potentially fraudulent documents and interactions with the client to request missing or incorrect information.",
      solution: "The client developed a fully autonomous AI Agent to automate the credit application process. The system automatically analyzes all provided documents, evaluates them for fraud, and cross-references to public records. It also interacts with the end-customer via email to request additional documents when necessary and provide status.",
      imagePath: "success-cases/3.avif",
      pdfPath: "22_AUTONOMOUS CREDIT UNDERWRITING AI AGENT_LOOP AI AGENT ORCHESTRA.pdf",
      icon: "Building"
    },
    {
      id: "ai-agent-for-back-office-knowledge-assistance",
      title: "AI AGENT FOR BACK-OFFICE KNOWLEDGE ASSISTANCE",
      industry: "Insurance",
      description: "The client aimed to create an AI agent to standardize the expertise of all back-office agents, regardless of their experience. Trained on the knowledge of senior agents, the AI agent helps junior agents quickly find the right documents and responses. It extracts, ranks, and suggests solutions based on historical answers from the most knowledgeable agents.",
      solution: "Previously, the client used an internal FAQ for each insurance product, but this method still required considerable time for agents to find the correct answer.",
      imagePath: "success-cases/4.avif",
      pdfPath: "36_AI AGENT FOR BACK-OFFICE KNOWLEDGE ASSISTANCET_LOOP AI AGENT ORCHESTRA.pdf",
      icon: "Users"
    },
    {
      id: "ai-agent-for-back-office-request-micro-routing",
      title: "AI AGENT FOR BACK-OFFICE REQUEST MICRO-ROUTING",
      industry: "Insurance",
      description: "The client aimed to develop an AI Agent to optimize the performance of its 1,000-person back-office workforce by routing each inbound request to the most expert agent for the specific topic. The human agent's expertise was automatically assessed based on past performance in handling similar tasks, analyzing total handling time and the number of interactions required for successful resolution.",
      solution: "In a previous approach, the client had used routing based on competence centers and manually updated skill-based routing within each center.",
      imagePath: "success-cases/5.avif",
      pdfPath: "29_AI AGENT FOR BACK-OFFICE REQUEST MICRO-ROUTING_LOOP AI AGENT ORCHESTRA.pdf",
      icon: "Users"
    },
    {
      id: "ai-agent-for-junior-doctor-diagnosis-support",
      title: "AI AGENT FOR JUNIOR DOCTOR DIAGNOSIS SUPPORT",
      industry: "Healthcare",
      description: "The goal was to assist junior doctors in diagnosing new patients by analyzing and correlating medical records from previous cases, including diagnoses, vital signs, treatments, recovery speed, and outcomes, while ensuring patient privacy. The AI agent, with access to both current and historical patient data, helps doctors develop personalized treatment plans.",
      solution: "By continuously analyzing a patient's vital signs, existing conditions, and the effectiveness of ongoing therapy, the AI supports the delivery of the most effective treatment options for each patient.",
      imagePath: "success-cases/6.avif",
      pdfPath: "49_AI AGENT FOR JUNIOR DOCTOR DIAGNOSIS SUPPORT_LOOP AI AGENT ORCHESTRA.pdf",
      icon: "Award"
    },
    {
      id: "automated-discovery-of-drug-repositioning",
      title: "AUTOMATED DISCOVERY OF DRUG REPOSITIONING",
      industry: "Healthcare",
      description: "The project aimed to identify existing therapeutic candidates with well-established risk and toxicity profiles that could be repurposed as treatments for COVID-19. By leveraging machine learning and computational transcriptomics, our research lab analyzed gene expression signatures of both COVID-19 and various drugs using publicly available gene expression datasets.",
      solution: "This approach enabled a more efficient identification of promising therapeutic candidates. Unlike traditional drug development, which often requires extensive testing and long timelines, this method accelerated the repurposing process, providing a faster response to the rapidly evolving COVID-19 pandemic.",
      imagePath: "success-cases/7.avif",
      pdfPath: "51_AUTOMATED DISCOVERY OF DRUG REPOSITIONING_LOOP AI AGENT ORCHESTRA.pdf",
      icon: "Award"
    },
    {
      id: "real-time-competitor-monitoring-dashboard",
      title: "REAL-TIME COMPETITOR MONITORING DASHBOARD",
      industry: "Telecommunications",
      description: "The client's marketing team successfully implemented a real-time competitor dashboard that enabled them to gain actionable insights by continuously analyzing key aspects of their competitors' strategies. The dashboard tracked competitor websites, social media discussions, customer issues, content strategies, and email marketing efforts, offering a comprehensive view of competitor activities.",
      solution: "This innovative approach allowed for faster, more accurate actionable insights of competitors, replacing the previous method, which relied on slow and costly phone surveys. By adopting the real-time dashboard, the client stayed ahead of competitors, responding swiftly with targeted campaigns while also tracking their own customer base.",
      imagePath: "success-cases/08.avif",
      pdfPath: "57_RREAL-TIME COMPETITOR MONITORING DASHBOARD_LOOP AI AGENT ORCHESTRA.pdf",
      icon: "TrendingUp"
    },
    {
      id: "early-defect-detection-from-repair-data",
      title: "EARLY DEFECT DETECTION FROM REPAIR DATA",
      industry: "Automotive",
      description: "The client aimed to gain real-time insights from multilingual dealer repair data to detect defects early, identify root causes, and provide timely warnings for design and manufacturing improvements. The data, coming from dealers across 53 countries, is in local languages with regional terminology and industry-specific jargon, creating challenges for analysis.",
      solution: "Previous approaches using human analysis and traditional NLP struggled with unstructured text and linguistic variations, resulting in delays in issue detection and high operational costs. The client sought to leverage AI to transform repair data into a proactive tool for improving quality and reducing inefficiencies.",
      imagePath: "success-cases/9.avif",
      pdfPath: "40_EARLY DEFECT DETECTION FROM REPAIR DATA_LOOP AI AGENT ORCHESTRA.pdf",
      icon: "Target"
    },
    {
      id: "predictive-maintenance-using-vehicle-sound",
      title: "PREDICTIVE MAINTENANCE USING VEHICLE SOUND",
      industry: "Automotive",
      description: "The client successfully enhanced their Condition-Based Maintenance system by integrating sound sensors to detect anomalies from the vehicle. While the previous CBM approach, relying on common sensors, was limited to specific devices, the new sound sensor technology provided a more comprehensive data set when combined with structured sensor data.",
      solution: "Internal research had shown that changes in vehicle sounds could signal underlying issues before they escalated into major problems. With the implementation of this cognitive application, the client achieved a more holistic approach that enabled earlier detection of defects, allowing proactive intervention before issues became critical.",
      imagePath: "success-cases/10.avif",
      pdfPath: "45_PREDICTIVE MAINTENANCE USING VEHICLE SOUND_LOOP AI AGENT ORCHESTRA.pdf",
      icon: "Target"
    },
    {
      id: "automated-movie-tagging-from-public-reviews",
      title: "AUTOMATED MOVIE TAGGING FROM PUBLIC REVIEWS",
      industry: "Media",
      description: "The client aimed to boost revenues in its IPTV pay-per-view business by enhancing the performance of their recommendation system through automated movie tagging based on public audience reviews in multiple languages. Previously, the client relied on metadata such as genre, MPAA rating, and cast for categorizing movies.",
      solution: "They then implemented a Netflix-inspired method that involved people watching and tagging movies, which resulted in a 100% revenue increase. However, this approach proved to be expensive, slow, and not scalable, particularly when enriching the full catalog of tens of thousands of movies.",
      imagePath: "success-cases/11.avif",
      pdfPath: "61_AUTOMATED MOVIE TAGGING FROM PUBLIC REVIEWS_LOOP AI AGENT ORCHESTRA.pdf",
      icon: "Globe"
    },
    {
      id: "new-store-location-selector-based-on-reviews",
      title: "NEW STORE LOCATION SELECTOR BASED ON REVIEWS",
      industry: "Food and Beverage",
      description: "The client adopted a more data-driven approach to scale store openings while minimizing risks related to location selection. They enriched location data by combining structured data (such as POS history) with dark data (such as business descriptions and reviews of potential store locations).",
      solution: "This allowed them to predict and assess the value and risks associated with both new and existing restaurant locations, based on historical data from their most successful stores. Previously, the client relied on traditional demographic research data, which was typically updated only for the most popular locations every few years.",
      imagePath: "success-cases/12.avif",
      pdfPath: "66_NEW STORE LOCATION SELECTOR BASED ON REVIEWS_LOOP AI AGENT ORCHESTRA.pdf",
      icon: "Globe"
    }
  ];

  const createdCases = [];
  
  for (const caseData of successCasesData) {
    console.log(`🎯 Creating success case: ${caseData.title}`);
    
    // Upload image
    const image = await uploadImage(caseData.imagePath, `${caseData.title} - ${caseData.industry}`);
    
    // Upload PDF
    const pdf = await uploadPDF(caseData.pdfPath);
    
    const caseDoc = {
      _type: 'successCase',
      id: { current: caseData.id },
      title: caseData.title,
      industry: caseData.industry,
      description: caseData.description,
      solution: caseData.solution,
      icon: caseData.icon,
      ...(image && { image }),
      ...(pdf && { pdf }),
    };

    const existingCase = await client.fetch(
      `*[_type == "successCase" && id.current == $id][0]`,
      { id: caseData.id }
    );

    let successCase;
    if (existingCase) {
      console.log(`🔄 Updating existing success case: ${caseData.title}`);
      successCase = await client
        .patch(existingCase._id)
        .set(caseDoc)
        .commit();
    } else {
      console.log(`➕ Creating new success case: ${caseData.title}`);
      successCase = await client.create(caseDoc);
    }
    
    createdCases.push(successCase);
    console.log(`✅ Success case created/updated: ${caseData.title}`);
  }

  return createdCases;
}

// Loop AI Agents Orchestra data
async function createLoopAiAgentsOrchestraData() {
  const orchestraImage = await uploadImage('agent_orchestra_home_page_enlarged.avif', 'Loop AI Agent Orchestra');
  const trainingImage1 = await uploadImage('Loop AI Agent Orchestra - Training Models.avif', 'Loop AI Agent Orchestra - Training Models');
  const trainingImage2 = await uploadImage('loopai_orchestra-training_model_2.avif', 'Loop AI Agent Orchestra - Training Models 2');
  const llmMlBuildingImage = await uploadImage('Loop AI Agents Orchestra - LLM-ML building with no coding.avif', 'Loop AI Agents Orchestra - LLM-ML building with no coding');
  const llmMlComparisonImage = await uploadImage('Loop AI Agents Orchestra - LLM-ML comparison.avif', 'Loop AI Agents Orchestra - LLM-ML comparison');
  const responsibleAiImage = await uploadImage('loop ai agent orchestra - responsible ai.avif', 'Loop AI Agent Orchestra - Responsible AI');

  return {
    _type: 'loopAiAgentsOrchestra',
    title: 'Loop AI Agents Orchestra',
    seo: {
      metaTitle: 'Loop AI Agents Orchestra - The Leading AI Agents Platform',
      metaDescription: 'Loop Agent Orchestra serves as an enterprise AI single agent or multi-agent development and orchestration hub, integrating four foundational layers.',
    },
    heroSection: {
      title: 'The AI Agents Platform',
      subtitle: 'Loop Agent Orchestra serves as an enterprise AI single agent or multi-agent development and orchestration hub, integrating four foundational layers',
      ...(orchestraImage && { heroImage: orchestraImage }),
    },
    architecturalPillars: {
      title: 'Architectural Pillars',
      subtitle: 'Four foundational layers that power enterprise AI orchestration',
      pillars: [
        {
          title: 'Full Integration with your Legacy Systems and Data',
          icon: 'Database',
          features: [
            {
              title: 'APIs, Connectors and Virtual Agents',
              description: 'Easily integrates with your enterprise systems via APIs, ready-made connectors, or virtual agents that interact with your visual interfaces.',
            },
            {
              title: 'Data Pipeline',
              description: 'ETL (Extract, Transform, Load) workflows to normalize heterogeneous data inputs for agent consumption.',
            },
            {
              title: 'Protocol Support',
              description: 'Compatibility with SOAP, Kafka, and MQTT for real-time event streaming.',
            },
          ],
        },
        {
          title: 'Compute Infrastructure Orchestration',
          icon: 'Cloud',
          features: [
            {
              title: 'Cloud Agnosticism',
              description: 'Deploy Loop Agent Orchestra and Agents on your preferred cloud service or on-premise for full control and security.',
            },
            {
              title: 'Resource Management',
              description: 'GPU/TPU scheduling, containerized inference endpoints, distributed training, load balancing and agent orchestration.',
            },
            {
              title: 'Latency Optimization',
              description: 'Load balancing and edge caching for low-latency inference in hybrid environments.',
            },
          ],
        },
        {
          title: 'Algorithmic Integration & Optimization',
          icon: 'Brain',
          features: [
            {
              title: 'LLM/ML Agnosticism',
              description: 'Besides the free, natively integrated Loop Q, it supports TensorFlow, PyTorch, ONNX, Hugging Face Transf., and any native ML/LLM.',
            },
            {
              title: 'Automated Benchmarking',
              description: 'CAPE engine evaluates latency, accuracy, KPI and cost-per-inference metrics across LLM/ML providers or locally run open source models.',
            },
            {
              title: 'LLM/ML Hot Swap',
              description: 'Visually compare any new LLM/ML in ghost mode against your production data and models, then seamlessly hot-swap with zero downtime.',
            },
          ],
        },
        {
          title: 'Low-Code AI Control Center for Teams',
          icon: 'Settings',
          features: [
            {
              title: 'Simple Conversational UI',
              description: 'Conversational UI for training, model comparison, AI agent dev., deployment and monitoring with complete feedback and control.',
            },
            {
              title: 'Built for Teams',
              description: 'Build > Iterate > Deploy > Monitor with project management and granular permissions for internal teams and external consultants.',
            },
            {
              title: 'Observability and Analytics',
              description: 'Detailed insights into the quality, efficiency, drift, and ROI of your AI agents through technical and business dashboards and alerts.',
            },
          ],
        },
      ],
    },
    vendorAgnosticSection: {
      title: 'Vendor Agnostic AI Control Center for AI Agent Lifecycle Management',
      description: 'Loop AI Agents Orchestra is a powerful and scalable framework designed to simplify the development, deployment, optimization, and monitoring of AI agents. Since 2019, the platform has been validated in mission-critical production environments with Fortune 100 organizations.',
      futureProofTitle: 'Future Proof AI Control Center',
      futureProofDescription: 'Loop AI Agents Orchestra is a robust, scalable framework engineered to streamline the development, deployment, runtime optimization and monitoring of your AI agents. Leveraging a vendor-agnostic architecture, it integrates heterogeneous AI technologies—spanning commercial APIs, open-source libraries, and proprietary algorithms—to deliver a lifecycle management solution that ensures maximum computational efficiency, algorithmic performance, and cost optimization across all AI agent components.',
      technicalDefinitionTitle: 'AI Agents: Technical Definition',
      technicalDefinitionDescription: 'AI agents are autonomous computational entities engineered to fulfill defined job roles by executing end-to-end workflows within one or more enterprise legacy systems, mirroring the capabilities of human employees. These agents handle tasks ranging from discrete automation to complex, multi-step processes through modular, interoperable components.',
    },
    algorithmSelectionSection: {
      title: 'Tackling Algorithm Selection Complexity',
      description: 'This means that your company gains actual control over its suppliers and adopt not just a single vendor, but the best vendor for each block of its application. The proliferation of paid and open-source ML/LLM providers creates a combinatorial explosion of choices.',
      features: [
        {
          title: 'Performance Telemetry',
          description: 'Real-time monitoring of accuracy, scores, perplexity, inference time, resource utilization and actual KPIs.',
        },
        {
          title: 'Cost Analysis',
          description: 'Normalized cost-per-operation metrics across API providers, self-hosted models and AI Agents.',
        },
        {
          title: 'Lifecycle Automation',
          description: 'Continuous retraining, provider A/B testing, and deployment of superior algorithms without manual intervention.',
        },
      ],
      trainingImages: [
        ...(trainingImage1 ? [{ image: trainingImage1 }] : []),
        ...(trainingImage2 ? [{ image: trainingImage2 }] : []),
      ],
    },
    technicalHeritageSection: {
      title: 'Technical Heritage Since 2012',
      description: 'Validated in mission-critical production environments with Fortune 100 organizations since 2019, Loop AI Agents Orchestra is built by Loop AI Group—a pioneer in enterprise AI since 2012.',
      features: [
        {
          title: 'Algorithmic Efficiency',
          description: 'Reduce inference costs by up to 40% through automated provider selection.',
          icon: 'TrendingUp',
        },
        {
          title: 'Deployment Velocity',
          description: 'Prototype-to-production in under 72 hours with pre-integrated connectors.',
          icon: 'Clock',
        },
        {
          title: 'Vendor Neutrality',
          description: 'Avoid lock-in with a pluggable, multi-vendor runtime environment.',
          icon: 'Shield',
        },
        {
          title: 'Real-Time Adaptability',
          description: 'Sub-millisecond algorithm swaps via service orchestration.',
          icon: 'Zap',
        },
        {
          title: 'Observability',
          description: 'Integrated dashboards for latency, throughput, and model drift monitoring.',
          icon: 'BarChart3',
        },
      ],
      llmMlImages: [
        ...(llmMlBuildingImage ? [{ image: llmMlBuildingImage }] : []),
        ...(llmMlComparisonImage ? [{ image: llmMlComparisonImage }] : []),
      ],
    },
    responsibleAiSection: {
      title: 'Responsible AI and Explainability with Loop Orchestra',
      features: [
        {
          title: 'EU AI Act Compliance Simplified',
          description: 'Loop Orchestra aligns seamlessly with the EU AI Act by integrating robust security features such as end-to-end encryption (TLS 1.3) and role-based access control (RBAC).',
        },
        {
          title: 'Streamlined Development with Ethical Integration',
          description: 'The platform enhances efficiency by embedding responsible AI practices into the development process.',
        },
        {
          title: 'Building Trust through Explainability',
          description: 'Loop Orchestra fosters trust with explainable AI features, including methods like LIME and SHAP, which clarify how models make predictions.',
        },
        {
          title: 'A Unified Solution for 2025 and Beyond',
          description: 'By combining compliance, streamlined development, and trust-building features, Loop Orchestra empowers enterprises to create cognitive applications.',
        },
      ],
      ...(responsibleAiImage && { responsibleAiImage }),
    },
    technicalSpecificationsSection: {
      title: 'Technical Specifications Summary',
      specifications: [
        {
          title: 'Visual Low-Code Workflows',
          description: 'AI agents are created using visual blocks, each exposing its own API for potential reuse in other AI agents.',
        },
        {
          title: 'Data Connectors',
          description: 'Available for most systems including major databases, Storage systems, cloud repositories',
        },
        {
          title: 'Model and Vector Library',
          description: 'A library for managing model versions, tracking status, team permission and ensuring smooth deployment in production.',
        },
        {
          title: 'Algorithm and Code Library',
          description: 'A library for managing algorithms, code, and AI agents, including versioning, metrics, parameters, and artifacts.',
        },
        {
          title: 'Model Drift and Monitoring',
          description: 'Tracks the performance and accuracy of deployed models over time, detecting shifts in data distribution or model behavior.',
        },
        {
          title: 'Explainable ML',
          description: 'Attention mechanisms to highlight important input features, post-hoc methods like LIME and SHAP.',
        },
        {
          title: 'LLM Deployments',
          description: 'Designed to simplify access to both SaaS and open-source LLM models, this platform provides a unified interface.',
        },
        {
          title: 'Evaluation Module',
          description: 'Built for comprehensive analysis of ML/LLM model and AI agent performance, this toolkit enables objective comparisons.',
        },
        {
          title: 'Projects',
          description: 'Standardize the packaging of ML models and AI agent code, visual workflows, and artifacts.',
        },
        {
          title: 'Computing Infrastructure',
          description: 'The computing resources are configured once by system engineers and can then be used across any project.',
        },
        {
          title: 'Deployment Modes',
          description: 'Dockerized microservices, serverless functions, or bare-metal clusters.',
        },
        {
          title: 'Scalability',
          description: 'Horizontal scaling with Kubernetes; up to 10,000 concurrent agents per cluster (tested).',
        },
        {
          title: 'Security',
          description: 'End-to-end encryption (TLS 1.3), RBAC, and audit logging for compliance (GDPR, CCPA).',
        },
      ],
    },
    ctaSection: {
      title: 'Engineer Your AI Future',
      description: 'Loop AI Agents Orchestra is a battle-tested platform, developed since 2012, for organizations building and scaling a digital workforce of AI agents.',
      primaryButton: {
        text: 'SUCCESS CASES',
        link: '/success-cases',
      },
      secondaryButton: {
        text: 'BOOK A DEMO',
        link: '/cognitive-platforms/book-demo',
      },
    },
    videoSection: {
      title: 'AI Agent Management Made Simple',
      youtubeVideoId: 'qbuutZhOxrc',
      videoTitle: 'Loop AI Group - The AI Agents Platform',
    },
    finalCtaSection: {
      title: 'Your Next AI Agent is Minutes Away. No Coding Required.',
      description: 'Smart. Fast. Tireless. Build your competitive digital workforce today from prototype to production.',
      primaryButton: {
        text: 'BOOK A DEMO',
        link: '/cognitive-platforms/book-demo',
      },
    },
  };
}

// Loop Q data
async function createLoopQData() {
  const logo = await uploadImage('logos/loopQ_Logo_2022 - Large.png', 'Loop Q Cognitive Platform');
  const unsupervisedLearningImage1 = await uploadImage('loopQ/Loop Q Unsupervised Learning.avif', 'Loop Q Unsupervised Learning');
  const unsupervisedLearningImage2 = await uploadImage('loopQ/loop Q unsupervised learning_2.avif', 'Loop Q Unsupervised Learning 2');
  const stackImage = await uploadImage('loopQ/Loop Q stack.avif', 'Loop Q Stack Architecture');
  const processImage = await uploadImage('loopQ/process.gif', 'Loop Q Process');

  return {
    _type: 'loopQ',
    title: 'Loop Q Cognitive Platform',
    seo: {
      metaTitle: 'Loop Q Cognitive Platform - Unsupervised Learning Technology',
      metaDescription: 'Loop Q Cognitive Platform, integrated into Loop Agent Orchestra, features a unique unsupervised learning technology powered by a dedicated hardware and software appliance.',
    },
    heroSection: {
      ...(logo && { logo }),
      title: 'The Loop Q Cognitive Platform',
      description: 'Loop Q Cognitive Platform, integrated into Loop Agent Orchestra, features a unique unsupervised learning technology powered by a dedicated hardware and software appliance. Deployed on-premise within your firewall or in a secure cloud environment, it autonomously learns and reasons across 100% of structured and unstructured data—without human programming, labeling, guidance, or supervision.',
      subDescription: 'Designed using principles of neuroscience and cognitive science, Loop Q has human-capacity abilities to autonomously connect content and context, unlocking the transformative power of your enterprise data. These insights power cognitive robotic process automation, cognitive software robots, and other cognitively-enabled applications.',
      images: [
        ...(unsupervisedLearningImage1 ? [{ image: unsupervisedLearningImage1 }] : []),
        ...(unsupervisedLearningImage2 ? [{ image: unsupervisedLearningImage2 }] : []),
      ],
    },
    keyDifferentiatorsSection: {
      title: 'Key Differentiators',
      subtitle: 'FAST TO DEPLOY. EASY TO MAINTAIN. FULLY UNSUPERVISED. CLOUD or ON PREMISE.',
      description: 'Seeing is believing. Get technical with Loop Q, see the dramatic improvement that a tireless digital workforce can make with an unsupervised approach.',
      features: [
        {
          title: 'UNSUPERVISED LEARNING',
          description: 'Loop Q learns in any language from unlabeled data without human guidance. Our proprietary algorithm uses deep learning and classical symbolic reasoning to allow Loop Q to learn in any human or machine language without requiring expensive and time-intensive, human-generated labels, dictionaries or grammar.',
          icon: 'Brain',
        },
        {
          title: 'HIGH ACCURACY',
          description: 'High accuracy: Loop Cortex is automatically built from scratch using client data in any language, independent of human involvement. Loop Q arrives on the job as a blank slate, with no prior knowledge of word meanings, grammar, or specific industrial processes.',
          icon: 'Target',
        },
        {
          title: 'NATURAL LANGUAGE PROCESSING',
          description: 'Loop Q learns any language in a matter of minutes. Already fluent in 15+ languages, Loop Q learns human language directly from data, just like native human speakers.',
          icon: 'Languages',
        },
        {
          title: 'CONTINUOUS + AUTOMATIC LEARNING',
          description: 'Loop Q achieves deep understanding of data across any specific data domain. As new data becomes available, the model is automatically updated without human supervision to provide the highest level of accuracy.',
          icon: 'RefreshCw',
        },
      ],
      ...(stackImage && { stackImage }),
    },
    howItWorksSection: {
      title: 'How It Works',
      description: 'Our proprietary, unsupervised algorithms allow our robots to learn language, workflows and concepts directly from your source data—without being explicitly told what to look for, or where.',
      subDescription: 'Your enterprise has produced data for years, but only a small percent of it (the "structured" part) could be understood by computers without human guidance. Now, Loop Q can take you beyond that tip of the iceberg and understand 100% of your data.',
      ...(processImage && { processImage }),
      howItWorksTitle: 'How the Loop Q Cognitive Computing Platform Works',
    },
    ctaSection: {
      title: 'Let Q Work For You',
      description: 'Smart. Fast. Tireless. Build your competitive digital workforce today.',
      primaryButton: {
        text: 'Book a Demo',
        link: '/cognitive-platforms/book-demo',
      },
    },
  };
}

// Platform Facts data
async function createPlatformFactsData() {
  const worldImage = await uploadImage('facts/world.avif', 'World map showing global validation');
  const humansImage = await uploadImage('facts/humans.avif', 'Traditional workforce');
  const robotsImage = await uploadImage('facts/robots.avif', 'Loop AI platform');
  const workforce1Image = await uploadImage('facts/workforce_1.avif', 'Traditional Workforce');
  const workforce2Image = await uploadImage('facts/workforce_2.avif', 'Training Required');
  const workforce3Image = await uploadImage('facts/workforce_3.avif', 'Paid Time Off');
  const workforce4Image = await uploadImage('facts/workforce_4.avif', 'Human Error');
  const loop1Image = await uploadImage('facts/loop_1.avif', 'Loop AI Agent');
  const loop2Image = await uploadImage('facts/loop_2.avif', 'Unsupervised Learning');
  const loop3Image = await uploadImage('facts/loop_3.avif', '24/7 Work');
  const loop4Image = await uploadImage('facts/loop_4.avif', 'Accuracy');

  return {
    _type: 'platformFacts',
    title: 'Platform Facts',
    seo: {
      metaTitle: 'Platform Facts - Loop AI Agents Orchestra and Loop Q Capabilities',
      metaDescription: 'See how can you transform your business and workforce with Loop AI Agents Orchestra and Loop Q Cognitive Platform.',
    },
    heroSection: {
      title: 'What Can Loop AI Agents Orchestra and Loop Q Do For Your Organization?',
      subtitle: 'See how can you transform your business and workforce',
    },
    learningSpeedSection: {
      title: 'Loop AI Agent Learning Speed',
      description: 'An AI Agent typically learns two years of knowledge work from the best human employees in less than 15 minutes',
      humanYears: '2',
      loopMinutes: '15',
      badgeText: 'Unsupervised learning',
    },
    industryValidationSection: {
      title: 'Loop AI Agents: Industry Validation',
      description: 'AI agents built with Loop Q and Loop AI Agents Orchestra have been successfully validated by large enterprises across multiple industries.',
      industries: [
        { name: 'Insurance', color: 'blue-500' },
        { name: 'Banking & Financial Services', color: 'green-500' },
        { name: 'Government & Defense', color: 'purple-500' },
        { name: 'Telecommunications & Media', color: 'orange-500' },
        { name: 'Manufacturing & Logistics', color: 'red-500' },
        { name: 'Automotive & Transportation', color: 'indigo-500' },
        { name: 'Healthcare', color: 'pink-500' },
      ],
      badgeText: 'Validated with Large Enterprise in the Following Industries',
    },
    marketValidationSection: {
      title: 'Loop AI Agent Market Validation',
      description: 'AI agents built with Loop Q and Loop AI Agents Orchestra have been deployed across continents and languages since 2015, starting in Asia and expanding to Europe and the USA—years ahead of mainstream AI adoption.',
      markets: [
        { name: 'Asia', year: 'Since 2015', status: 'Pioneer', color: 'primary' },
        { name: 'Europe', year: 'Since 2018', status: 'Expansion', color: 'accent' },
        { name: 'USA', year: 'Since 2020', status: 'Growth', color: 'primary' },
      ],
      badgeText: 'Validated in the Following Markets',
      ...(worldImage && { worldImage }),
    },
    costSavingsSection: {
      title: 'Cost Savings with Loop AI Agents Orchestra',
      traditionalWorkforceLabel: 'TRADITIONAL WORKFORCE',
      traditionalWorkforceDescription: 'Traditional human knowledge workforce',
      loopPlatformLabel: 'LOOP Q PLATFORM',
      loopPlatformDescription: 'Intelligent augmented digital workforce',
      comparisons: [
        {
          title: 'COST PER HOUR',
          traditionalValue: '$17',
          traditionalLabel: 'Traditional Workforce',
          traditionalDescription: 'Avg Hourly Cost of Human Knowledge Workers',
          loopValue: '$0.6',
          loopLabel: 'Loop AI Agent',
          loopDescription: 'Loop AI Agent Hourly Cost',
          improvement: '28x Cost Reduction',
          ...(workforce1Image && { traditionalIconImage: workforce1Image }),
          ...(loop1Image && { loopIconImage: loop1Image }),
        },
        {
          title: 'COST OF SUPERVISION',
          traditionalValue: 'Training',
          traditionalLabel: 'Training Required',
          traditionalDescription: 'Requires education + management',
          loopValue: 'Unsupervised',
          loopLabel: 'Unsupervised Learning',
          loopDescription: 'Continuous and autonomous self-learning',
          improvement: 'Zero Supervision Cost',
          ...(workforce2Image && { traditionalIconImage: workforce2Image }),
          ...(loop2Image && { loopIconImage: loop2Image }),
        },
        {
          title: 'COST OF TIME OFF',
          traditionalValue: 'Paid time off',
          traditionalLabel: 'Paid Time Off',
          traditionalDescription: 'Paid vacation, sick days, holidays, events',
          loopValue: '24/7 Work',
          loopLabel: '24/7 Work',
          loopDescription: 'Tireless workforce always productive',
          improvement: '100% Uptime',
          ...(workforce3Image && { traditionalIconImage: workforce3Image }),
          ...(loop3Image && { loopIconImage: loop3Image }),
        },
        {
          title: 'HUMAN ERROR RATE',
          traditionalValue: '20%',
          traditionalLabel: 'Human Error',
          traditionalDescription: '20% human error rate',
          loopValue: '80%',
          loopLabel: 'Accuracy',
          loopDescription: 'Increased accuracy by 80%',
          improvement: '4x More Accurate',
          ...(workforce4Image && { traditionalIconImage: workforce4Image }),
          ...(loop4Image && { loopIconImage: loop4Image }),
        },
      ],
    },
    ctaSection: {
      title: 'Learn The Possibilities',
      description: 'Discover How Loop AI Agents Orchestra and Loop Q Cognitive Platform Solve Your Business Challenges',
      primaryButton: {
        text: 'Implemented Solutions',
        link: '/',
      },
    },
  };
}

// Book Demo data
function createBookDemoData() {
  return {
    _type: 'bookDemo',
    title: 'Book a Demo',
    seo: {
      metaTitle: 'Book a Demo - Loop AI Group',
      metaDescription: 'Please fill out this form and a Loop AI Group representative will be in touch.',
    },
    heroSection: {
      title: 'Book a Demo',
      description: 'Please fill out this form and a Loop AI Group representative will be in touch.',
    },
    formSection: {
      title: 'Request a Demo',
      description: 'Fill out the form below to schedule your personalized demo of Loop AI Agents Orchestra.',
      fields: [
        {
          name: 'firstName',
          label: 'First name',
          type: 'text',
          placeholder: 'Enter your first name',
          required: true,
        },
        {
          name: 'lastName',
          label: 'Last name',
          type: 'text',
          placeholder: 'Enter your last name',
          required: true,
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email address',
          required: true,
        },
        {
          name: 'role',
          label: 'Role',
          type: 'text',
          placeholder: 'e.g., CTO, AI Director, VP of Technology',
          required: true,
        },
        {
          name: 'organization',
          label: 'Organization',
          type: 'text',
          placeholder: 'Enter your organization name',
          required: true,
        },
        {
          name: 'country',
          label: 'Country',
          type: 'text',
          placeholder: 'Enter your country',
          required: true,
        },
        {
          name: 'organizationSize',
          label: 'Organization Size',
          type: 'select',
          placeholder: 'Select Size',
          required: true,
          options: [
            { value: '1-10', label: '1-10 employees' },
            { value: '11-50', label: '11-50 employees' },
            { value: '51-200', label: '51-200 employees' },
            { value: '201-500', label: '201-500 employees' },
            { value: '501-1000', label: '501-1000 employees' },
            { value: '1000+', label: '1000+ employees' },
          ],
        },
        {
          name: 'challenges',
          label: 'What challenges or goals are you hoping to address with our Enterprise AI platform? We\'d love to tailor your demo to showcase how we can best support your needs!',
          type: 'textarea',
          placeholder: 'Describe your AI initiatives, current challenges, and what you\'d like to see in the demo...',
          required: true,
        },
      ],
      submitButtonText: 'Request a Demo',
    },
  };
}

// Main seeding function
async function seedAllContent() {
  try {
    console.log('🚀 Starting comprehensive Sanity seeding...');
    
    // Check for existing documents first
    const existingDocs = await client.fetch('*[_type in ["homepage", "aboutUs", "team", "teamMember", "successCases", "successCase", "loopAiAgentsOrchestra", "loopQ", "platformFacts", "bookDemo", "contact", "careers", "videos", "mediaAnalystRelations", "loopAiResearch"]]');
    
    if (existingDocs.length > 0) {
      console.log('⚠️  Found existing documents in Sanity. Deleting them first...');
      
      // Delete existing documents
      for (const doc of existingDocs) {
        await client.delete(doc._id);
        console.log(`🗑️  Deleted: ${doc._type} - ${doc.title || doc._id}`);
      }
      
      // Also delete individual team members and success cases
      const teamMembersToDelete = await client.fetch('*[_type == "teamMember"]');
      const successCasesToDelete = await client.fetch('*[_type == "successCase"]');
      
      for (const doc of teamMembersToDelete) {
        await client.delete(doc._id);
        console.log(`🗑️  Deleted team member: ${doc.name}`);
      }
      
      for (const doc of successCasesToDelete) {
        await client.delete(doc._id);
        console.log(`🗑️  Deleted success case: ${doc.title}`);
      }
    }

    // Create individual team members and success cases after cleanup
    console.log('👥 Creating individual team members...');
    const teamMembers = await createTeamMembers();
    console.log('🎯 Creating individual success cases...');
    const successCases = await createIndividualSuccessCases();

    // Create all documents
    const documents = [
      { name: 'Homepage', data: await createHomepageData() },
      { name: 'About Us', data: await createAboutUsData() },
      { name: 'Team', data: await createTeamData() },
      { name: 'Success Cases', data: await createSuccessCasesData() },
      { name: 'Loop AI Agents Orchestra', data: await createLoopAiAgentsOrchestraData() },
      { name: 'Loop Q', data: await createLoopQData() },
      { name: 'Platform Facts', data: await createPlatformFactsData() },
      { name: 'Book Demo', data: createBookDemoData() },
      { name: 'Contact', data: createContactData() },
      { name: 'Careers', data: createCareersData() },
      { name: 'Videos', data: createVideosData() },
      { name: 'Media & Analyst Relations', data: createMediaAnalystRelationsData() },
      { name: 'Loop AI Research', data: await createLoopAIResearchData() },
    ];

    for (const doc of documents) {
      console.log(`📝 Creating ${doc.name} document...`);
      const created = await client.create(doc.data);
      console.log(`✅ ${doc.name} created successfully! ID: ${created._id}`);
    }
    
    console.log('🎉 Comprehensive Sanity seeding completed successfully!');
    console.log('🔗 You can now view all content in Sanity Studio at: http://localhost:3000/studio');
    
  } catch (error) {
    console.error('❌ Error during comprehensive seeding:', error);
    
    if (error instanceof Error && error.message.includes('unauthorized')) {
      console.log('💡 Tip: Make sure your Sanity project is properly configured and you have the right permissions.');
    }
    
    throw error;
  }
}

// Run the comprehensive seed function
seedAllContent()
  .then(() => {
    console.log('🎉 All content seeded successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Seeding failed:', error);
    process.exit(1);
  });
