"use client";

import Link from "next/link";
import { ArrowRight, FileText, Globe, Play, Sparkles, Zap, CheckCircle, Award, Brain, Building, Users, Clock, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function MediaAnalystRelations() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Media &{" "}
                <span className="gradient-text">Analyst Relations</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Resources for media professionals, industry analysts, and thought leaders covering enterprise AI and cognitive computing.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="pulse-glow">
                <Play className="mr-2 h-5 w-5" />
                Contact Media Team
              </Button>
              <Button variant="outline" size="lg">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Press Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Press Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to cover Loop AI Group and our impact on enterprise AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Press Kit",
                description: "Company overview, executive bios, high-resolution images, and key facts",
                downloadCount: "500+ downloads"
              },
              {
                icon: Award,
                title: "Awards & Recognition",
                description: "Recent awards, industry recognition, and analyst reports",
                downloadCount: "200+ downloads"
              },
              {
                icon: Building,
                title: "Company Fact Sheet",
                description: "Key statistics, milestones, and company information",
                downloadCount: "300+ downloads"
              },
              {
                icon: Users,
                title: "Executive Bios",
                description: "Detailed biographies of our leadership team",
                downloadCount: "150+ downloads"
              },
              {
                icon: Brain,
                title: "Technology Overview",
                description: "Technical details about our AI platforms and capabilities",
                downloadCount: "400+ downloads"
              },
              {
                icon: Globe,
                title: "Media Coverage",
                description: "Recent press coverage and media mentions",
                downloadCount: "100+ articles"
              }
            ].map((resource, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                  <p className="text-muted-foreground">{resource.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-primary font-medium">{resource.downloadCount}</span>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Press Coverage */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Recent Press Coverage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Latest news and coverage about Loop AI Group
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Loop AI Group Named Leader in AI Platforms by Gartner",
                source: "Gartner Magic Quadrant",
                date: "December 2024",
                description: "Loop AI Group has been recognized as a Leader in the 2024 Gartner Magic Quadrant for AI Platforms, marking a significant milestone in our company's growth.",
                category: "Industry Recognition"
              },
              {
                title: "Enterprise AI Adoption Accelerates with Loop's Cognitive Platforms",
                source: "TechCrunch",
                date: "November 2024",
                description: "Major enterprises are seeing 40% cost reductions and 85% faster processing times using Loop AI Group's cognitive computing platforms.",
                category: "Product News"
              },
              {
                title: "Loop AI Group Raises $50M Series B for Global Expansion",
                source: "VentureBeat",
                date: "October 2024",
                description: "The funding round will accelerate product development and expand Loop AI Group's presence in European and Asian markets.",
                category: "Company News"
              },
              {
                title: "AI Ethics in Enterprise: Loop AI Group's Approach",
                source: "MIT Technology Review",
                date: "September 2024",
                description: "An in-depth look at how Loop AI Group is addressing AI ethics and responsible AI practices in enterprise applications.",
                category: "Thought Leadership"
              }
            ].map((article, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold">{article.title}</h3>
                  <p className="text-sm text-primary font-medium">{article.source}</p>
                  <p className="text-muted-foreground">{article.description}</p>
                  
                  <Button variant="outline" size="sm">
                    Read Full Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analyst Relations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Analyst Relations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Resources and information for industry analysts and research firms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Analyst Briefings</h3>
                <p className="text-muted-foreground">
                  Schedule briefings with our executive team to learn about our latest developments, market strategy, and technology roadmap.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Quarterly strategy updates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Product roadmap discussions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Market trend analysis</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Research Access</h3>
                <p className="text-muted-foreground">
                  Access to our latest research, case studies, and technical documentation for your analysis and reports.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Technical documentation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Customer case studies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Market research data</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <Card className="glass-effect">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Contact Our Analyst Relations Team</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Director of Analyst Relations</p>
                        <p className="text-sm text-primary">sarah.johnson@loop.ai</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">Senior Analyst Relations Manager</p>
                        <p className="text-sm text-primary">michael.chen@loop.ai</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Request Briefing
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Media Contact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our media team for interviews, quotes, and press inquiries
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Press Inquiries</h3>
                  <p className="text-muted-foreground">
                    For all media inquiries, interview requests, and press-related questions, please contact our media team.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold">General Press Inquiries</h4>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-primary">press@loop.ai</p>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-primary">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Urgent Press Inquiries</h4>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-primary">urgent@loop.ai</p>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-primary">+1 (555) 123-4568</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <Button size="lg">
                    <FileText className="mr-2 h-5 w-5" />
                    Send Press Inquiry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Stay Connected
            </h2>
            <p className="text-xl text-white/90">
              Follow us for the latest news, insights, and updates from Loop AI Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Zap className="mr-2 h-5 w-5" />
                Contact Media Team
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Globe className="mr-2 h-5 w-5" />
                Learn More
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
              <FileText className="h-6 w-6 text-primary" />
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
