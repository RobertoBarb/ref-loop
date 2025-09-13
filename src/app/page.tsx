"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Brain, Cloud, Database, Globe, Play, Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
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
                  The Leading{" "}
                  <span className="gradient-text">AI Agents</span>{" "}
                  Platform
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Boost your workforce building your own enterprise AI Agents that deliver real work using any ML/LLM, your legacy systems and your infrastructure.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="pulse-glow">
                  <Play className="mr-2 h-5 w-5" />
                  Book a Demo
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Link href="/cognitive-platforms/loop-ai-agents-orchestra">
                <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/images/orchestra.avif" 
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

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Take Control and Cut Through the{" "}
              <span className="gradient-text">AI Chaos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With Loop AI Agent Orchestra, regain control and cut through the chaos of AI!
            </p>
            
            {/* AI Chaos Visual */}
            <div className="flex justify-center mt-8">
              <div className="glass-effect rounded-2xl p-6 max-w-2xl">
                <Image
                  src="/images/ai caos.avif"
                  alt="AI Chaos - Take Control"
                  width={600}
                  height={450}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "ANY ML or LLM",
                description: "Leverage any LLM/ML or Loop Q's integrated models, tailored to your AI agent's use case, accuracy needs, and budget—via APIs or local open-source solutions."
              },
              {
                icon: Database,
                title: "ANY LEGACY SYSTEM",
                description: "Your AI agents learn from human peers using historical data, seamlessly executing both simple and complex tasks within your existing enterprise systems."
              },
              {
                icon: Cloud,
                title: "ANY INFRASTRUCTURE",
                description: "Run and scale training, inference, and your enterprise AI agents seamlessly across your infrastructure—whether on-premises, in private or public clouds, hybrid environments."
              },
              {
                icon: Sparkles,
                title: "LOW-CODE TOOLS FOR TEAMS",
                description: "No-code and low-code visual tools built for teams, featuring granular permissions for development, testing, and deployment."
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">
                See Loop AI Agents Orchestra in Action
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover how leading enterprises are transforming their operations with AI Agents
              </p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qbuutZhOxrc"
                  title="Loop AI Group - The AI Agents Platform"
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
              AI Agents Management Made Simple
            </h2>
            <p className="text-xl text-white/90">
              Seamlessly deploy, scale, and manage all your AI solutions and AI Agents across multiple vendors from one unified platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Zap className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Globe className="mr-2 h-5 w-5" />
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <Image
                src="/loopai_Group_Logo_2022.avif"
                alt="Loop AI Group"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              <span className="text-xl font-bold">Loop AI Group</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Loop AI Group and its affiliates. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
