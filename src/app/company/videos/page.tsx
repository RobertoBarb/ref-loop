"use client";

import Link from "next/link";
import { ArrowRight, Play, Globe, Sparkles, Zap, CheckCircle, Award, Brain, Building, Users, Clock, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Videos() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Videos &{" "}
                <span className="gradient-text">Media</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our video library featuring product demos, customer stories, thought leadership, and insights from the world of enterprise AI.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="pulse-glow">
                <Play className="mr-2 h-5 w-5" />
                Watch Latest Videos
              </Button>
              <Button variant="outline" size="lg">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Featured Videos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the latest insights and demonstrations from Loop AI Group
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Featured Video */}
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Play className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Loop AI Agents Orchestra Demo</h3>
                    <p className="text-white/80">See our platform in action</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">Platform Overview & Demo</h3>
                  <p className="text-muted-foreground">
                    Get an in-depth look at Loop AI Agents Orchestra and see how it can transform your enterprise AI initiatives.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>15 min</span>
                    </span>
                    <span>•</span>
                    <span>Product Demo</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secondary Featured Video */}
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <Play className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Customer Success Story</h3>
                    <p className="text-white/80">Real results from real customers</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">Global Bank Transformation</h3>
                  <p className="text-muted-foreground">
                    Learn how a major financial institution reduced risk assessment time by 85% using our AI platform.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>8 min</span>
                    </span>
                    <span>•</span>
                    <span>Customer Story</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Video Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our content organized by topic and type
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Product Demos",
                description: "In-depth demonstrations of our AI platforms and features",
                videoCount: "12 videos",
                icon: Play
              },
              {
                title: "Customer Stories",
                description: "Real-world success stories from our enterprise customers",
                videoCount: "8 videos",
                icon: Users
              },
              {
                title: "Thought Leadership",
                description: "Insights and perspectives on the future of enterprise AI",
                videoCount: "15 videos",
                icon: Brain
              },
              {
                title: "Technical Deep Dives",
                description: "Technical explanations and implementation guides",
                videoCount: "10 videos",
                icon: Building
              },
              {
                title: "Webinars",
                description: "Educational webinars and training sessions",
                videoCount: "6 videos",
                icon: MessageSquare
              },
              {
                title: "Company Updates",
                description: "Latest news and updates from Loop AI Group",
                videoCount: "4 videos",
                icon: Award
              }
            ].map((category, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-primary font-medium">{category.videoCount}</span>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Videos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Recent Videos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Latest content from our team and partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Ethics in Enterprise",
                description: "Exploring responsible AI practices and compliance requirements",
                duration: "12 min",
                category: "Thought Leadership",
                thumbnail: "ai-ethics-thumb.jpg"
              },
              {
                title: "Loop Q Platform Walkthrough",
                description: "Comprehensive overview of our cognitive computing platform",
                duration: "18 min",
                category: "Product Demo",
                thumbnail: "loop-q-thumb.jpg"
              },
              {
                title: "Healthcare AI Implementation",
                description: "Case study from a major healthcare network",
                duration: "10 min",
                category: "Customer Story",
                thumbnail: "healthcare-thumb.jpg"
              },
              {
                title: "Model Deployment Best Practices",
                description: "Technical guide for deploying AI models in production",
                duration: "25 min",
                category: "Technical Deep Dive",
                thumbnail: "deployment-thumb.jpg"
              },
              {
                title: "Future of Enterprise AI",
                description: "Panel discussion with industry experts",
                duration: "45 min",
                category: "Webinar",
                thumbnail: "future-ai-thumb.jpg"
              },
              {
                title: "Q4 2024 Company Update",
                description: "Latest news and achievements from Loop AI Group",
                duration: "8 min",
                category: "Company Update",
                thumbnail: "q4-update-thumb.jpg"
              }
            ].map((video, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <Play className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Click to play</p>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary font-medium">{video.category}</span>
                      <span className="text-xs text-muted-foreground">{video.duration}</span>
                    </div>
                    <h3 className="font-semibold">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect">
              <CardContent className="p-8 text-center space-y-6">
                <h2 className="text-3xl font-bold">Stay Updated</h2>
                <p className="text-xl text-muted-foreground">
                  Subscribe to our YouTube channel and newsletter to never miss the latest videos and insights
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    <Play className="mr-2 h-5 w-5" />
                    Subscribe on YouTube
                  </Button>
                  <Button size="lg" variant="outline">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Newsletter Signup
                  </Button>
                </div>
                
                <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>10K+ Subscribers</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Play className="h-4 w-4" />
                    <span>50+ Videos</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span>Weekly Updates</span>
                  </span>
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
              Ready to See More?
            </h2>
            <p className="text-xl text-white/90">
              Explore our full video library and discover how AI can transform your enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Zap className="mr-2 h-5 w-5" />
                Browse All Videos
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
              <Play className="h-6 w-6 text-primary" />
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
