"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, Cloud, Database, Globe, Play, Sparkles, Zap, Shield, Settings, Users, CheckCircle, TrendingUp, Clock, Award } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PlatformFacts() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Loop Platform{" "}
                <span className="gradient-text">Facts</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Key statistics, performance metrics, and capabilities that demonstrate the power and reliability of Loop AI Group's cognitive platforms.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Platform Performance Metrics
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven results and performance indicators that showcase our platform's capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "40% Cost Reduction",
                description: "Average inference cost reduction through automated vendor selection and optimization"
              },
              {
                icon: Clock,
                title: "72 Hours",
                description: "From prototype to production deployment with pre-integrated connectors"
              },
              {
                icon: Shield,
                title: "99.9% Uptime",
                description: "Enterprise-grade reliability with comprehensive monitoring and failover"
              },
              {
                icon: Users,
                title: "500+ Enterprises",
                description: "Trusted by leading organizations across various industries worldwide"
              }
            ].map((stat, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{stat.title}</h3>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Technical Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technical specifications and supported technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Supported Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">ML Frameworks</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• TensorFlow</li>
                      <li>• PyTorch</li>
                      <li>• Scikit-learn</li>
                      <li>• XGBoost</li>
                      <li>• Custom Models</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Cloud Providers</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AWS</li>
                      <li>• Azure</li>
                      <li>• Google Cloud</li>
                      <li>• On-Premises</li>
                      <li>• Hybrid</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Performance Benchmarks</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Inference Latency</span>
                    <span className="font-semibold text-primary">&lt; 100ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Throughput</span>
                    <span className="font-semibold text-primary">10,000+ RPS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Model Accuracy</span>
                    <span className="font-semibold text-primary">95%+ Average</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Security & Compliance</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">SOC 2 Type II Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">GDPR Compliant</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">ISO 27001 Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">EU AI Act Ready</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Scalability</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Concurrent Users</span>
                    <span className="font-semibold text-primary">1M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Data Processing</span>
                    <span className="font-semibold text-primary">1TB+/hour</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Model Storage</span>
                    <span className="font-semibold text-primary">Unlimited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Industry Recognition
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Awards and recognition from leading industry organizations and analysts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "AI Platform Leader",
                description: "Recognized as a leader in AI platforms by Gartner Magic Quadrant 2024"
              },
              {
                icon: Award,
                title: "Innovation Award",
                description: "Best AI Platform Innovation at Enterprise AI Summit 2024"
              },
              {
                icon: Award,
                title: "Customer Choice",
                description: "Highest customer satisfaction rating in AI platform category"
              }
            ].map((award, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <award.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{award.title}</h3>
                  <p className="text-muted-foreground">{award.description}</p>
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
              Experience the Platform Difference
            </h2>
            <p className="text-xl text-white/90">
              See how Loop AI Group's platforms can transform your enterprise AI initiatives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Zap className="mr-2 h-5 w-5" />
                Book a Demo
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
              <BarChart3 className="h-6 w-6 text-primary" />
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
