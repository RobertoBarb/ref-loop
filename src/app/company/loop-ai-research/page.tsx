"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LoopAIResearch() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/company/research.avif"
            alt="Loop AI Research"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-0 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">LAIR</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-muted-foreground">
                LOOP AI RESEARCH
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Connect with LAIR to create the future of AI progress. Smarter. Faster. Better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="glass-effect">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold">
                    Join the Loop AI Research Lab: Shape a World-Changing Future
            </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Since 2012, we've been the vanguard of artificial intelligence at LAIR, igniting an industry we pioneered. The scientists and engineers with exceptional abilities who joined us then didn't just observe the revolution—they spearheaded it, delivering groundbreaking research and solutions that tackle humanity's toughest challenges. Today, their legacy powers a vision where technology automates the ordinary, unleashing human potential to achieve the extraordinary on an unprecedented scale.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-primary">
                    This is your shot to lead the charge.
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We're building the next generation of AI models and products—tools that redefine how the world works and make essentials accessible to all. Whether you're a seasoned innovator or an AI student hungry to shape the future, LAIR is where you turn bold ideas into reality.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-primary">
                    We're hiring now—join the global AI revolution.
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Where:</h4>
                      <p className="text-muted-foreground">
                        Our offices span the USA and Europe, with remote work and internship opportunities from anywhere in the world.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Who:</h4>
                      <p className="text-muted-foreground">
                        Visionaries at any stage—professionals, researchers, and students studying AI in any corner of the globe are welcome to apply.
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary">
                    Submit your application today.
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our team is eager to see your drive and ingenuity—whether it's for a role or a remote internship. At LAIR, the future isn't predicted—it's forged by those bold enough to seize it.
                  </p>
                  
                  <div className="pt-4">
                    <Button size="lg" className="pulse-glow" asChild>
                      <Link href="/company/careers">
                        APPLY NOW
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  </div>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
