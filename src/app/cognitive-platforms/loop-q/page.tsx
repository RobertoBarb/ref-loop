"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, Cloud, Database, Globe, Play, Sparkles, Zap, Shield, BarChart3, Settings, Users, CheckCircle, Cpu, Eye, Languages, RefreshCw, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LoopQ() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-0">
          <div className="text-center space-y-8">
            {/* Loop Q Logo */}
            <div className="flex justify-center mb-8">
              <Image 
                src="/images/logos/loopQ_Logo_2022 - Large.png" 
                alt="Loop Q Cognitive Platform" 
                width={300}
                height={120}
                className="object-contain"
              />
            </div>
            
            <div className="space-y-8">
              <div className="space-y-8 pb-12">
                <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-tight pb-12">
                  The <span className="gradient-text">Loop Q</span>{" "}
                  <span className="gradient-text">Cognitive Platform</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                  Loop Q Cognitive Platform, integrated into Loop Agent Orchestra, features a unique unsupervised learning technology powered by a dedicated hardware and software appliance. Deployed on-premise within your firewall or in a secure cloud environment, it autonomously learns and reasons across 100% of structured and unstructured data—without human programming, labeling, guidance, or supervision.
                </p>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                  Designed using principles of neuroscience and cognitive science, Loop Q has human-capacity abilities to autonomously connect content and context, unlocking the transformative power of your enterprise data. These insights power cognitive robotic process automation, cognitive software robots, and other cognitively-enabled applications.
                </p>
              </div>
              
              {/* Loop Q Unsupervised Learning Images */}
              <div className="flex justify-center gap-8 flex-wrap">
                <div className="glass-effect rounded-2xl p-6 max-w-2xl">
                  <Image
                    src="/images/loopQ/Loop Q Unsupervised Learning.avif"
                    alt="Loop Q Unsupervised Learning"
                    width={600}
                    height={450}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
                <div className="glass-effect rounded-2xl p-6 max-w-2xl">
                  <Image
                    src="/images/loopQ/loop Q unsupervised learning_2.avif"
                    alt="Loop Q Unsupervised Learning 2"
                    width={600}
                    height={450}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Key Differentiators
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              <span className="font-semibold text-primary">FAST TO DEPLOY. EASY TO MAINTAIN. FULLY UNSUPERVISED. CLOUD or ON PREMISE.</span>
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Seeing is believing. Get technical with Loop Q, see the dramatic improvement that a tireless digital workforce can make with an unsupervised approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "UNSUPERVISED LEARNING",
                description: "Loop Q learns in any language from unlabeled data without human guidance. Our proprietary algorithm uses deep learning and classical symbolic reasoning to allow Loop Q to learn in any human or machine language without requiring expensive and time-intensive, human-generated labels, dictionaries or grammar."
              },
              {
                icon: Target,
                title: "HIGH ACCURACY",
                description: "High accuracy: Loop Cortex is automatically built from scratch using client data in any language, independent of human involvement. Loop Q arrives on the job as a blank slate, with no prior knowledge of word meanings, grammar, or specific industrial processes."
              },
              {
                icon: Languages,
                title: "NATURAL LANGUAGE PROCESSING",
                description: "Loop Q learns any language in a matter of minutes. Already fluent in 15+ languages, Loop Q learns human language directly from data, just like native human speakers. An immediate advantage of the dictionary-free technology is its intrinsic understanding of slang, industry jargon, and abbreviations."
              },
              {
                icon: RefreshCw,
                title: "CONTINUOUS + AUTOMATIC LEARNING",
                description: "Loop Q achieves deep understanding of data across any specific data domain. As new data becomes available, the model is automatically updated without human supervision to provide the highest level of accuracy."
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Loop Q Stack Image */}
          <div className="flex justify-center mt-16">
            <div className="glass-effect rounded-2xl p-6 max-w-4xl">
              <Image
                src="/images/loopQ/Loop Q stack.avif"
                alt="Loop Q Stack Architecture"
                width={800}
                height={600}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our proprietary, unsupervised algorithms allow our robots to learn language, workflows and concepts directly from your source data—without being explicitly told what to look for, or where.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Your enterprise has produced data for years, but only a small percent of it (the "structured" part) could be understood by computers without human guidance. Now, Loop Q can take you beyond that tip of the iceberg and understand 100% of your data.
            </p>
          </div>

          {/* Process GIF */}
          <div className="flex justify-center mb-8">
            <div className="glass-effect rounded-2xl p-6 max-w-4xl">
              <Image
                src="/images/loopQ/process.gif"
                alt="Loop Q Process"
                width={800}
                height={600}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">How the Loop Q Cognitive Computing Platform Works</h3>
          </div>
        </div>
      </section>


      {/* Let Q Work For You Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Let Q Work For You
            </h2>
            <p className="text-xl text-white/90">
              <span className="font-semibold">Smart. Fast. Tireless.</span> Build your competitive digital workforce today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/cognitive-platforms/book-demo">
                  <Zap className="mr-2 h-5 w-5" />
                  Book a Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
