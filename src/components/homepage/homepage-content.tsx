"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Brain, Cloud, Database, Globe, Play, Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { type HomepageData } from "@/hooks/use-homepage";

// Icon mapping per le icone Lucide
const iconMap = {
  Brain,
  Database,
  Cloud,
  Sparkles,
  Bot,
  Globe,
  Play,
  ArrowRight,
  Zap,
} as const;

interface HomepageContentProps {
  data: HomepageData;
}

export function HomepageContent({ data }: HomepageContentProps) {
  const { heroSection, aiChaosSection, enterpriseControlCenter, videoSection, ctaSection, footer } = data;

  // Funzione per applicare il gradiente a "AI Agents" e "AI Chaos" nei titoli
  const formatTitleWithGradient = (title: string) => {
    return title.split(' ').map((word, index) => {
      if (word === 'AI' && title.split(' ')[index + 1] === 'Agents') {
        return (
          <span key={index} className="gradient-text">
            AI Agents{' '}
          </span>
        );
      } else if (word === 'Agents' && title.split(' ')[index - 1] === 'AI') {
        return null; // Skip perché già incluso nel span precedente
      } else if (word === 'AI' && title.split(' ')[index + 1] === 'Chaos') {
        return (
          <span key={index} className="gradient-text">
            AI Chaos{' '}
          </span>
        );
      } else if (word === 'Chaos' && title.split(' ')[index - 1] === 'AI') {
        return null; // Skip perché già incluso nel span precedente
      } else {
        return <span key={index}>{word} </span>;
      }
    }).filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
                  {formatTitleWithGradient(heroSection.title)}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  {heroSection.subtitle}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {(heroSection.primaryButton ?? {
                  text: 'Book a Demo',
                  link: '/cognitive-platforms/book-demo',
                }) && (
                  <Button size="lg" className="pulse-glow" asChild>
                    <Link href={heroSection.primaryButton?.link ?? '/cognitive-platforms/book-demo'}>
                      <Play className="mr-2 h-5 w-5" />
                      {heroSection.primaryButton?.text ?? 'Book a Demo'}
                    </Link>
                  </Button>
                )}
                {(heroSection.secondaryButton ?? {
                  text: 'Learn More',
                  link: '/cognitive-platforms/loop-ai-agents-orchestra',
                }) && (
                  <Button variant="outline" size="lg" asChild>
                    <Link href={heroSection.secondaryButton?.link ?? '/cognitive-platforms/loop-ai-agents-orchestra'}>
                      {heroSection.secondaryButton?.text ?? 'Learn More'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            
            <div className="relative">
              <Link href="/cognitive-platforms/loop-ai-agents-orchestra">
                <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center overflow-hidden">
                    {heroSection.heroImage ? (
                      <Image 
                        src={heroSection.heroImage.asset.url} 
                        alt={heroSection.heroImage.alt} 
                        fill
                        className="object-cover rounded-xl"
                      />
                    ) : (
                      <Image 
                        src="/images/agent_orchestra_home_page_enlarged.avif" 
                        alt="Loop AI Agent Orchestra" 
                        fill
                        className="object-cover rounded-xl"
                      />
                    )}
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

      {/* AI Chaos Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              {formatTitleWithGradient(aiChaosSection?.title || 'Take Control and Cut Through the AI Chaos')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {aiChaosSection?.subtitle || 'With Loop AI Agent Orchestra, regain control and cut through the chaos of AI!'}
            </p>
            
            {/* AI Chaos Visual */}
            {aiChaosSection?.chaosImage ? (
              <div className="flex justify-center mt-8">
                <div className="glass-effect rounded-2xl p-6 max-w-4xl">
                  <Image
                    src={aiChaosSection.chaosImage.asset.url}
                    alt={aiChaosSection.chaosImage.alt}
                    width={800}
                    height={600}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-center mt-8">
                <div className="glass-effect rounded-2xl p-6 max-w-4xl">
                  <Image
                    src="/images/ai caos.avif"
                    alt="AI Chaos - Take Control"
                    width={800}
                    height={600}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enterprise AI Control Center Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              {enterpriseControlCenter?.title || 'Your Enterprise AI Control Center'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              {enterpriseControlCenter?.subtitle || 'Seamlessly deploy, scale, and manage all your AI solutions and AI Agents across multiple vendors from one unified platform.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(enterpriseControlCenter?.features || [
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
            ]).map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Brain;
              
              return (
                <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold">
                {videoSection.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {videoSection.subtitle}
              </p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoSection.youtubeVideoId}`}
                  title={videoSection.videoTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {ctaSection.title}
            </h2>
            <p className="text-xl text-white/90">
              {ctaSection.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctaSection.primaryButton && (
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link href={ctaSection.primaryButton.link}>
                    <Zap className="mr-2 h-5 w-5" />
                    {ctaSection.primaryButton.text}
                  </Link>
                </Button>
              )}
              {ctaSection.secondaryButton && (
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href={ctaSection.secondaryButton.link}>
                    <Globe className="mr-2 h-5 w-5" />
                    {ctaSection.secondaryButton.text}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

