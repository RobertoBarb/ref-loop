"use client";

import Link from "next/link";
import Image from "next/image";
import { Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[30vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-0">
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
                About{" "}
                <span className="gradient-text">Us</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="glass-effect">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold">Our Mission</h2>
                  <h3 className="text-2xl font-semibold text-primary">Revolutionize products and service with autonomous intelligence</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold">Our Vision</h2>
                  <h3 className="text-2xl font-semibold text-primary">A world where technology automates the ordinary, unleashing human potential to achieve the extraordinary on an unprecedented scale</h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">Our Story</h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Pioneering the AI Revolution */}
            <Card className="glass-effect">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary">Pioneering the AI Revolution</h3>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Founded in 2012, Loop AI Group emerged as{" "}
                        <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-md">
                          the world's first independent enterprise AI company
                        </span>
                        {", "}igniting a technological revolution long before artificial intelligence captured global attention a decade later. At the heart of this innovation stood its{" "}
                        <Link href="/cognitive-platforms/loop-q" className="text-primary hover:text-primary/80 underline font-semibold transition-colors duration-300">
                          Loop Q Unsupervised Cognitive Platform
                        </Link>
                        {" "}—a groundbreaking fusion of hardware and software, the first enterprise-grade, multimodal deep learning system powered by unsupervised learning. This visionary platform shattered conventions, sculpting pinpoint-accurate language-independent multimodal models to run real world enterprise applications from raw client data without manual annotations or irrelevant clutter, setting an unrivaled benchmark for accuracy and innovation.
                      </p>
                    </div>
                    <div className="glass-effect rounded-2xl p-4 flex justify-center">
                      <Image
                        src="/images/about/first.avif"
                        alt="Loop AI Group Pioneering AI Revolution"
                        width={350}
                        height={150}
                        className="rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* A Legacy of Scientific Excellence */}
            <Card className="glass-effect">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary">A Legacy of Scientific Excellence</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Loop AI Group stands on a bedrock of unparalleled AI expertise,{" "}
                    <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-md">
                      its scientific and engineering team forged in the crucible of elite research institutions
                    </span>
                    {" "}like the Artificial Intelligence Center at SRI International (formerly Stanford Research Institute) and Stanford's Computational Semantics Lab. This team was instrumental in the transformative $200M DARPA CALO project (Cognitive Assistant that Learns and Organizes) in 2006—the largest government-funded AI endeavor ever—laying the groundwork for cutting-edge cognitive systems. SRI, a military tech titan since 1946, has driven innovations like the Internet's first connection, AI-powered defense solutions, and CIA remote viewing, partnering with DARPA and the U.S. Armed Forces. Its legacy fuels standout companies—Intuitive Surgical, Nuance Communications (acquired by Microsoft for $19.7 billion), Siri (Apple's assistant), Tempo AI (now Salesforce)—and, most notably, Loop AI Group, a trailblazer in enterprise AI deeply rooted in these world-class research powerhouses. Explore our{" "}
                    <Link href="/success-cases" className="text-primary hover:text-primary/80 underline font-semibold transition-colors duration-300">
                      Success Cases
                    </Link>
                    {" "}to see our technology in action.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Global Recognition and Technology Validation */}
            <Card className="glass-effect">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary">Global Recognition and Technology Validation</h3>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        In 2016, after four intense years of AI research and technology validation Loop AI Group blazed a trail in AI applied research, earning a historic distinction as IDC, the first industry analyst mapping the nascent AI landscape, spotlighted it in its market research as{" "}
                        <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-md">
                          the world's first independent AI company
                        </span>
                        {". "}This recognition established its platforms as pioneers for enterprise multimodal AI, powered by unsupervised learning and validated through real-world deployments worldwide.
                      </p>
                      <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                        Since that pivotal moment,{" "}
                        <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-md">
                          Loop has brought its bold vision to life, deploying real-world cutting-edge AI agents that master complex knowledge-based tasks previously reserved for humans
                        </span>
                        {". "}Its innovation took flight through rigorous technology validation with Fortune 100 organizations, first in Asia—where its language-agnostic framework demolished linguistic barriers—before seamlessly validating its technology into Europe and the USA, proving its unmatched scalability and transformative edge.{" "}
                        <Link href="/cognitive-platforms/book-demo" className="text-primary hover:text-primary/80 underline font-semibold transition-colors duration-300">
                          Book a Demo
                        </Link>
                        {" "}to see our technology in action.
                      </p>
                    </div>
                    <div className="glass-effect rounded-2xl p-4">
                      <Image
                        src="/images/about/second.avif"
                        alt="Loop AI Group Global Recognition"
                        width={400}
                        height={300}
                        className="rounded-xl w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shaping the Future of enterprise AI */}
            <Card className="glass-effect">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary">Shaping the Future of enterprise AI</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    In an era when AI was merely a whisper on the horizon, Loop didn't just predict the future—it forged it, cementing its legacy as the trailblazing pioneer of enterprise AI and an unrelenting innovator in a revolution it helped ignite. Now, in a 2025 AI landscape buzzing with thousands of companies and algorithms,{" "}
                    <Link href="/cognitive-platforms/loop-ai-agents-orchestra" className="text-primary hover:text-primary/80 underline font-semibold transition-colors duration-300">
                      Loop AI Agents Orchestra
                    </Link>
                    {" "}emerges as a transformative force once more.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    This platform delivers clients the keys to a next-generation AI command center, transforming complexity into opportunity by enabling swift testing of state-of-the-art AI, machine learning, and large language model (ML/LLM) technologies against production data, while seamlessly integrating and swapping components within deployed AI agent frameworks—equipping businesses to gain full control and thrive in a dynamic, ever-shifting domain. As a{" "}
                    <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-md">
                      foundational leader in an industry valued at $638 billion in 2025 and projected to soar to $3.6 trillion by 2034, Loop AI Group continues to steer the cutting edge of applied artificial intelligence research
                    </span>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Images Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Team Images - Same Row */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-effect rounded-2xl p-6">
                <Image
                  src="/images/about/team_1.avif"
                  alt="Loop AI Group Team"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div className="glass-effect rounded-2xl p-6">
                <Image
                  src="/images/about/patrick ehlen conference.avif"
                  alt="Patrick Ehlen Conference"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              MEET THE TEAM
            </h2>
            <p className="text-xl text-white/90">
              The passion. The science. The drive. Our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/company/team">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Users className="mr-2 h-5 w-5" />
                  View Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
