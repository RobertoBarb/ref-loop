"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Space_Grotesk, Poppins, Exo_2, Source_Sans_3, Nunito_Sans } from "next/font/google";

import { Button } from "@/components/ui/button";

// Configurazione dei font per la pagina di test
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans-3",
});

export default function TestPage() {
  const heroSections = [
    {
      id: 1,
      fontClass: "font-sans", // Inter (default)
      fontName: "Inter (Default)",
      description: "Clean, modern sans-serif - perfect for tech companies"
    },
    {
      id: 2,
      fontClass: "font-nunito-sans",
      fontName: "Nunito Sans",
      description: "Friendly and rounded sans-serif - great for modern web interfaces"
    },
    {
      id: 3,
      fontClass: "font-space-grotesk",
      fontName: "Space Grotesk",
      description: "Geometric sans-serif with futuristic feel - perfect for AI"
    },
    {
      id: 4,
      fontClass: "font-poppins",
      fontName: "Poppins",
      description: "Friendly and approachable sans-serif - great for modern interfaces"
    },
    {
      id: 5,
      fontClass: "font-exo2",
      fontName: "Exo 2",
      description: "Contemporary sans-serif with sci-fi inspiration - perfect for AI"
    },
    {
      id: 6,
      fontClass: "font-source-sans-3",
      fontName: "Source Sans 3",
      description: "Professional and versatile sans-serif - ideal for enterprise applications"
    }
  ];

  return (
    <div className={`min-h-screen bg-background ${nunitoSans.variable} ${spaceGrotesk.variable} ${poppins.variable} ${exo2.variable} ${sourceSans3.variable}`}>
      {heroSections.map((section, index) => (
        <div key={section.id}>
          <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[80vh] flex items-center py-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 py-16 md:py-24 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                        <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                          <h3 className={`text-sm font-semibold text-primary mb-1 ${section.fontClass}`}>Font #{section.id}: {section.fontName}</h3>
                          <p className={`text-xs text-muted-foreground ${section.fontClass}`}>{section.description}</p>
                        </div>
                  
                  <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight px-2 ${section.fontClass}`}>
                    The Leading <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI Agents</span> Platform
                  </h1>
                  
                        <p className={`text-xl text-muted-foreground max-w-2xl ${section.fontClass}`}>
                          Boost your workforce building your own enterprise AI Agents that deliver real work using any ML/LLM, your legacy systems and your infrastructure.
                        </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className={`pulse-glow ${section.fontClass}`} asChild>
                    <Link href="/cognitive-platforms/book-demo">
                      <Play className="mr-2 h-5 w-5" />
                      Book a Demo
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className={section.fontClass} asChild>
                    <Link href="/cognitive-platforms/loop-ai-agents-orchestra">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Link href="/cognitive-platforms/loop-ai-agents-orchestra">
                  <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center overflow-hidden">
                      <Image 
                        src="/images/agent_orchestra_home_page_enlarged.avif" 
                        alt="Loop AI Agent Orchestra" 
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </Link>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Separator between sections */}
        {index < heroSections.length - 1 && (
          <div className="h-16 bg-gradient-to-r from-transparent via-muted/30 to-transparent flex items-center justify-center">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          </div>
        )}
        </div>
      ))}
      
      {/* Navigation back to home */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Font Comparison Complete</h2>
            <p className="text-lg text-muted-foreground">
              You&apos;ve seen all 6 different fonts applied to the hero section. Each font brings a unique personality to the AI platform.
            </p>
            <Button size="lg" asChild>
              <Link href="/">
                <ArrowRight className="mr-2 h-5 w-5" />
                Back to Homepage
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
