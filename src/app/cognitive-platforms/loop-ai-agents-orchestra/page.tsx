"use client";

import Link from "next/link";
import { ArrowRight, Bot, Brain, Cloud, Database, Globe, Play, Sparkles, Zap, Shield, BarChart3, Settings, Users, CheckCircle, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LoopAIAgentsOrchestra() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  Loop AI{" "}
                  <span className="gradient-text">Agents Orchestra</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Your Enterprise AI Control Center. Seamlessly deploy, scale, and manage all your AI solutions and AI Agents across multiple vendors from one unified platform.
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
              <div className="glass-effect rounded-2xl p-8 floating-animation">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/orchestra.avif" 
                    alt="Loop AI Agent Orchestra" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Key Technical Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced capabilities that set Loop AI Agents Orchestra apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Algorithmic Efficiency",
                description: "Reduce inference costs by up to 40% through automated vendor selection and optimization."
              },
              {
                icon: Clock,
                title: "Implementation Speed",
                description: "From prototype to production in less than 72 hours with pre-integrated connectors."
              },
              {
                icon: Shield,
                title: "Vendor Neutrality",
                description: "Avoid vendor lock-in with a pluggable, multi-vendor runtime environment."
              },
              {
                icon: Settings,
                title: "Real-time Adaptability",
                description: "Sub-millisecond algorithm swaps through service orchestration and dynamic routing."
              },
              {
                icon: BarChart3,
                title: "Observability",
                description: "Integrated dashboards for latency, throughput, and model drift monitoring."
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Granular permissions and collaborative tools for development, testing, and deployment."
              }
            ].map((benefit, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible AI Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Responsible AI & Explainability with Loop Orchestra
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built-in compliance, transparency, and trust features for enterprise AI deployment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">EU AI Act Compliance Simplified</h3>
                <p className="text-muted-foreground">
                  Loop Orchestra aligns perfectly with the EU AI Act by integrating robust security features like end-to-end encryption (TLS 1.3) and role-based access control (RBAC). These ensure data protection and accountability, key requirements for high-risk AI systems.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Simplified Development with Ethical Integration</h3>
                <p className="text-muted-foreground">
                  The platform enhances efficiency by incorporating responsible AI practices into the development process. Its vendor-agnostic architecture supports any large language model (LLM) or machine learning (ML) model, paired with low-code workflows and observability tools.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Complete Activity Logging</h4>
                  <p className="text-sm text-muted-foreground">Transparent record of all operations for compliance and auditing</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Model Drift Monitoring</h4>
                  <p className="text-sm text-muted-foreground">Automated detection and alerting for model performance changes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Explainable AI Tools</h4>
                  <p className="text-sm text-muted-foreground">LIME and SHAP methods for model interpretability and transparency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Technical Specifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools and capabilities for enterprise AI development and deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Low-Code Visual Workflows",
                description: "AI agents are created using visual blocks, each exposing its own API for potential reuse in other AI agents."
              },
              {
                title: "Data Connectors",
                description: "Available for most systems, including major databases, storage systems, and cloud repositories."
              },
              {
                title: "Model & Vector Library",
                description: "A library for model versioning, state tracking, team permissions, and ensuring smooth production implementation."
              },
              {
                title: "Algorithm & Code Library",
                description: "A library for managing algorithms, code, and AI agents, including versioning, metrics, parameters, and artifacts."
              },
              {
                title: "Model Drift Monitoring",
                description: "Tracks performance and accuracy of deployed models over time, detecting changes in data distribution or model behavior."
              },
              {
                title: "Explainable ML",
                description: "Attention mechanisms to highlight important input features, post-hoc methods like LIME and SHAP for generating understandable explanations."
              }
            ].map((spec, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{spec.title}</h3>
                  <p className="text-muted-foreground">{spec.description}</p>
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
              Take Control of Your AI Agents Today
            </h2>
            <p className="text-xl text-white/90">
              Join leading enterprises already optimizing with Loop AI Agents Orchestra
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
              <Bot className="h-6 w-6 text-primary" />
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
