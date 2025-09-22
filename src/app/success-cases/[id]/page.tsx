"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight, Download, Eye, Building, BarChart3, Users, Award, Target, TrendingUp, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// URL mapping for legacy URLs
const urlMapping: Record<string, string> = {
  "loop-ai-agent-orchestra-use-case-01": "autonomous-wire-transfer-ai-agent",
  "this-is-a-title-02": "autonomous-credit-underwriting-ai-agent", 
  "this-is-a-title-03": "ai-agent-for-back-office-request-micro-routing"
};

// Success cases data - same as main page
const successCases = [
  {
    id: "ai-agent-for-retail-chain-demand-forecasting",
    title: "AI AGENT FOR RETAIL CHAIN DEMAND FORECASTING",
    industry: "Retail",
    description: "The retail chain previously relied on manual analysis and historical sales to forecast demand for non-food products, a task complicated by niche items with location-specific demand. This approach frequently led to overstocking or stockouts, driving customers to competitors or clogging valuable store space with excess inventory.",
    solution: "The client developed an AI agent for product demand forecasting and ordering, blending historical and real-time sales data with geolocated factors. Tailored to each store, it predicts demand accurately and places orders autonomously, adapting to market changes. This cuts waste, optimizes stock, and keeps products available where and when customers want them, boosting efficiency and satisfaction.",
    image: "/images/success-cases/01.avif",
    pdf: "/docs/103_AI AGENT FOR RETAIL CHAIN DEMAND FORECASTING_LOOP AI AGENTS ORCHESTRA.pdf",
    icon: BarChart3
  },
  {
    id: "autonomous-wire-transfer-ai-agent",
    title: "AUTONOMOUS WIRE TRANSFER AI AGENT",
    industry: "Banking",
    description: "The client still processes over 30% of wire transfer requests on paper forms delivered at branch locations, often handwritten. As labor costs for handling these requests continue to rise, the commission earned per transfer is decreasing.",
    solution: "The client chose to develop an AI agent to automate the majority of wire transfer requests, reserving human intervention for special niche cases. The AI agent must accurately process handwriting recognition, signature validation, recipient bank account details, originator and beneficiary names, AML compliance, and transaction descriptions.",
    image: "/images/success-cases/02.avif",
    pdf: "/docs/18_AUTONOMOUS WIRE TRANSFER AI AGENT_18_LOOP AI AGENT ORCHESTRA.pdf",
    icon: Building
  },
  {
    id: "autonomous-credit-underwriting-ai-agent",
    title: "AUTONOMOUS CREDIT UNDERWRITING AI AGENT",
    industry: "Banking",
    description: "Small credit underwriting is currently handled by the client's human workforce, who evaluates credit applications, attached documents, and credit records to assess the end-customer's creditworthiness based on the underwriting risk profile. This process is labor-intensive, often requiring the identification of potentially fraudulent documents and interactions with the client to request missing or incorrect information.",
    solution: "The client developed a fully autonomous AI Agent to automate the credit application process. The system automatically analyzes all provided documents, evaluates them for fraud, and cross-references to public records. It also interacts with the end-customer via email to request additional documents when necessary and provide status.",
    image: "/images/success-cases/3.avif",
    pdf: "/docs/22_AUTONOMOUS CREDIT UNDERWRITING AI AGENT_LOOP AI AGENT ORCHESTRA.pdf",
    icon: Building
  },
  {
    id: "ai-agent-for-back-office-knowledge-assistance",
    title: "AI AGENT FOR BACK-OFFICE KNOWLEDGE ASSISTANCE",
    industry: "Insurance",
    description: "The client aimed to create an AI agent to standardize the expertise of all back-office agents, regardless of their experience. Trained on the knowledge of senior agents, the AI agent helps junior agents quickly find the right documents and responses. It extracts, ranks, and suggests solutions based on historical answers from the most knowledgeable agents.",
    solution: "Previously, the client used an internal FAQ for each insurance product, but this method still required considerable time for agents to find the correct answer.",
    image: "/images/success-cases/4.avif",
    pdf: "/docs/36_AI AGENT FOR BACK-OFFICE KNOWLEDGE ASSISTANCET_LOOP AI AGENT ORCHESTRA.pdf",
    icon: Users
  },
  {
    id: "ai-agent-for-back-office-request-micro-routing",
    title: "AI AGENT FOR BACK-OFFICE REQUEST MICRO-ROUTING",
    industry: "Insurance",
    description: "The client aimed to develop an AI Agent to optimize the performance of its 1,000-person back-office workforce by routing each inbound request to the most expert agent for the specific topic. The human agent's expertise was automatically assessed based on past performance in handling similar tasks, analyzing total handling time and the number of interactions required for successful resolution.",
    solution: "In a previous approach, the client had used routing based on competence centers and manually updated skill-based routing within each center.",
    image: "/images/success-cases/5.avif",
    pdf: "/docs/29_AI AGENT FOR BACK-OFFICE REQUEST MICRO-ROUTING_LOOP AI AGENT ORCHESTRA.pdf",
    icon: Users
  },
  {
    id: "ai-agent-for-junior-doctor-diagnosis-support",
    title: "AI AGENT FOR JUNIOR DOCTOR DIAGNOSIS SUPPORT",
    industry: "Healthcare",
    description: "The goal was to assist junior doctors in diagnosing new patients by analyzing and correlating medical records from previous cases, including diagnoses, vital signs, treatments, recovery speed, and outcomes, while ensuring patient privacy. The AI agent, with access to both current and historical patient data, helps doctors develop personalized treatment plans.",
    solution: "By continuously analyzing a patient's vital signs, existing conditions, and the effectiveness of ongoing therapy, the AI supports the delivery of the most effective treatment options for each patient.",
    image: "/images/success-cases/6.avif",
    pdf: "/docs/49_AI AGENT FOR JUNIOR DOCTOR DIAGNOSIS SUPPORT_LOOP AI AGENT ORCHESTRA.pdf",
    icon: Award
  },
  {
    id: "automated-discovery-of-drug-repositioning",
    title: "AUTOMATED DISCOVERY OF DRUG REPOSITIONING",
    industry: "Healthcare",
    description: "The project aimed to identify existing therapeutic candidates with well-established risk and toxicity profiles that could be repurposed as treatments for COVID-19. By leveraging machine learning and computational transcriptomics, our research lab analyzed gene expression signatures of both COVID-19 and various drugs using publicly available gene expression datasets.",
    solution: "This approach enabled a more efficient identification of promising therapeutic candidates. Unlike traditional drug development, which often requires extensive testing and long timelines, this method accelerated the repurposing process, providing a faster response to the rapidly evolving COVID-19 pandemic.",
    image: "/images/success-cases/7.avif",
    pdf: "/docs/51_AUTOMATED DISCOVERY OF DRUG REPOSITIONING_LOOP AI AGENT ORCHESTRA.pdf",
    icon: Award
  },
  {
    id: "real-time-competitor-monitoring-dashboard",
    title: "REAL-TIME COMPETITOR MONITORING DASHBOARD",
    industry: "Telecommunications",
    description: "The client's marketing team successfully implemented a real-time competitor dashboard that enabled them to gain actionable insights by continuously analyzing key aspects of their competitors' strategies. The dashboard tracked competitor websites, social media discussions, customer issues, content strategies, and email marketing efforts, offering a comprehensive view of competitor activities.",
    solution: "This innovative approach allowed for faster, more accurate actionable insights of competitors, replacing the previous method, which relied on slow and costly phone surveys. By adopting the real-time dashboard, the client stayed ahead of competitors, responding swiftly with targeted campaigns while also tracking their own customer base.",
    image: "/images/success-cases/08.avif",
    pdf: "/docs/57_RREAL-TIME COMPETITOR MONITORING DASHBOARD_LOOP AI AGENT ORCHESTRA.pdf",
    icon: TrendingUp
  },
  {
    id: "early-defect-detection-from-repair-data",
    title: "EARLY DEFECT DETECTION FROM REPAIR DATA",
    industry: "Automotive",
    description: "The client aimed to gain real-time insights from multilingual dealer repair data to detect defects early, identify root causes, and provide timely warnings for design and manufacturing improvements. The data, coming from dealers across 53 countries, is in local languages with regional terminology and industry-specific jargon, creating challenges for analysis.",
    solution: "Previous approaches using human analysis and traditional NLP struggled with unstructured text and linguistic variations, resulting in delays in issue detection and high operational costs. The client sought to leverage AI to transform repair data into a proactive tool for improving quality and reducing inefficiencies.",
    image: "/images/success-cases/9.avif",
    pdf: "/docs/40_EARLY DEFECT DETECTION FROM REPAIR DATA_LOOP AI AGENT ORCHESTRA.pdf",
    icon: Target
  },
  {
    id: "predictive-maintenance-using-vehicle-sound",
    title: "PREDICTIVE MAINTENANCE USING VEHICLE SOUND",
    industry: "Automotive",
    description: "The client successfully enhanced their Condition-Based Maintenance system by integrating sound sensors to detect anomalies from the vehicle. While the previous CBM approach, relying on common sensors, was limited to specific devices, the new sound sensor technology provided a more comprehensive data set when combined with structured sensor data.",
    solution: "Internal research had shown that changes in vehicle sounds could signal underlying issues before they escalated into major problems. With the implementation of this cognitive application, the client achieved a more holistic approach that enabled earlier detection of defects, allowing proactive intervention before issues became critical.",
    image: "/images/success-cases/10.avif",
    pdf: "/docs/45_PREDICTIVE MAINTENANCE USING VEHICLE SOUND_LOOP AI AGENT ORCHESTRA.pdf",
    icon: Target
  },
  {
    id: "automated-movie-tagging-from-public-reviews",
    title: "AUTOMATED MOVIE TAGGING FROM PUBLIC REVIEWS",
    industry: "Media",
    description: "The client aimed to boost revenues in its IPTV pay-per-view business by enhancing the performance of their recommendation system through automated movie tagging based on public audience reviews in multiple languages. Previously, the client relied on metadata such as genre, MPAA rating, and cast for categorizing movies.",
    solution: "They then implemented a Netflix-inspired method that involved people watching and tagging movies, which resulted in a 100% revenue increase. However, this approach proved to be expensive, slow, and not scalable, particularly when enriching the full catalog of tens of thousands of movies.",
    image: "/images/success-cases/11.avif",
    pdf: "/docs/61_AUTOMATED MOVIE TAGGING FROM PUBLIC REVIEWS_LOOP AI AGENT ORCHESTRA.pdf",
    icon: Globe
  },
  {
    id: "new-store-location-selector-based-on-reviews",
    title: "NEW STORE LOCATION SELECTOR BASED ON REVIEWS",
    industry: "Food and Beverage",
    description: "The client adopted a more data-driven approach to scale store openings while minimizing risks related to location selection. They enriched location data by combining structured data (such as POS history) with dark data (such as business descriptions and reviews of potential store locations).",
    solution: "This allowed them to predict and assess the value and risks associated with both new and existing restaurant locations, based on historical data from their most successful stores. Previously, the client relied on traditional demographic research data, which was typically updated only for the most popular locations every few years.",
    image: "/images/success-cases/12.avif",
    pdf: "/docs/66_NEW STORE LOCATION SELECTOR BASED ON REVIEWS_LOOP AI AGENT ORCHESTRA.pdf",
    icon: Globe
  }
];

interface SuccessCasePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function SuccessCasePage({ params }: SuccessCasePageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const [isImageLoading, setIsImageLoading] = useState(true);
  
  // Handle URL mapping for legacy URLs
  const actualId = urlMapping[resolvedParams.id] ?? resolvedParams.id;
  
  // If it's a legacy URL, redirect to the new URL
  if (urlMapping[resolvedParams.id]) {
    router.replace(`/success-cases/${actualId}`);
    return null; // Prevent rendering while redirecting
  }
  
  const currentIndex = successCases.findIndex(case_ => case_.id === actualId);
  const currentCase = successCases[currentIndex];

  if (!currentCase) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Success Case Not Found</h1>
          <Button asChild>
            <Link href="/success-cases">Back to Success Cases</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handlePrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : successCases.length - 1;
    const prevCase = successCases[prevIndex];
    if (prevCase) {
      router.push(`/success-cases/${prevCase.id}`);
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex < successCases.length - 1 ? currentIndex + 1 : 0;
    const nextCase = successCases[nextIndex];
    if (nextCase) {
      router.push(`/success-cases/${nextCase.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <section className="relative bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
              <Button variant="ghost" asChild className="btn-gradient-outline">
                <Link href="/success-cases" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Success Cases</span>
                </Link>
              </Button>
              
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" asChild className="btn-gradient-hover text-sm">
                  <a href={currentCase.pdf} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </div>
          </div>
        </div>
      </section>

      {/* Success Case Content */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div className="space-y-4">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <currentCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">{currentCase.industry}</div>
                    <div className="text-xs text-muted-foreground">Success Case</div>
                  </div>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold">
                  {currentCase.title}
                </h2>
              </div>

              {/* Challenge Section */}
              <Card className="glass-effect">
                <CardContent className="space-y-4">
                  <h2 className="text-2xl font-semibold">Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentCase.description}
                  </p>
                </CardContent>
              </Card>

              {/* Solution Section */}
              <Card className="glass-effect">
                <CardContent className="space-y-4">
                  <h2 className="text-2xl font-semibold">Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentCase.solution}
                  </p>
                </CardContent>
              </Card>
            </div>

              {/* Image Carousel */}
              <div className="relative">
                <Card className="glass-effect overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[3/2] relative">
                      {isImageLoading && (
                        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
                          <div className="text-muted-foreground">Loading image...</div>
                        </div>
                      )}
                      <Image 
                        src={currentCase.image} 
                        alt={currentCase.title}
                        fill
                        className="object-cover transition-opacity duration-300"
                        onLoad={() => setIsImageLoading(false)}
                        priority
                      />
                    </div>
                  </CardContent>
                </Card>
              
                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-6">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handlePrevious}
                    className="btn-gradient-outline flex items-center space-x-2 text-base"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </Button>
                  
                  <div className="text-sm text-muted-foreground">
                    {currentIndex + 1} of {successCases.length}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleNext}
                    className="btn-gradient-outline flex items-center space-x-2 text-base"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cases Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Explore More Success Cases</h2>
            <p className="text-muted-foreground">Discover other implementations across different industries</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {successCases
              .filter((_, index) => index !== currentIndex)
              .slice(0, 3)
              .map((successCase) => (
                <Card key={successCase.id} className="glass-effect hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <successCase.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">{successCase.industry}</div>
                        <div className="text-xs text-muted-foreground">Success Case</div>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold line-clamp-2">{successCase.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{successCase.description}</p>
                    
                    <Button variant="outline" size="sm" asChild className="w-full btn-gradient-outline">
                      <Link href={`/success-cases/${successCase.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Case
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-white/90">
              Join the growing number of enterprises transforming their operations with Loop AI Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 btn-gradient-hover" asChild>
                <Link href="/cognitive-platforms/book-demo">
                  Book a Demo
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 btn-gradient-outline" asChild>
                <Link href="/success-cases">
                  View All Cases
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
