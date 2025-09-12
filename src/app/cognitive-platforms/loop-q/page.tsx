"use client";

import Link from "next/link";
import { ArrowRight, Brain, Cloud, Database, Globe, Play, Sparkles, Zap, Shield, BarChart3, Settings, Users, CheckCircle, Cpu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LoopQ() {
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
                  Loop Q{" "}
                  <span className="gradient-text">Cognitive Platform</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Advanced cognitive computing platform that enables organizations to build, deploy, and scale intelligent applications with unprecedented efficiency and accuracy.
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
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Brain className="h-24 w-24 mx-auto text-primary" />
                    <h3 className="text-2xl font-semibold">Loop Q Platform</h3>
                    <p className="text-muted-foreground">Advanced cognitive computing</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Core Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cognitive computing capabilities designed for enterprise-scale AI applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Advanced ML Models",
                description: "State-of-the-art machine learning models optimized for various cognitive tasks and enterprise use cases."
              },
              {
                icon: Cpu,
                title: "High-Performance Computing",
                description: "Scalable compute infrastructure designed for intensive cognitive processing and real-time inference."
              },
              {
                icon: Database,
                title: "Intelligent Data Processing",
                description: "Advanced data processing capabilities with automated feature engineering and data quality management."
              },
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description: "Comprehensive analytics and monitoring tools for cognitive application performance and insights."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Built-in security features including encryption, access control, and compliance management."
              },
              {
                icon: Settings,
                title: "Flexible Integration",
                description: "Seamless integration with existing enterprise systems and third-party applications."
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

      {/* Platform Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Platform Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools and services for building sophisticated cognitive applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Model Management & Deployment</h3>
                <p className="text-muted-foreground">
                  Complete lifecycle management for machine learning models, from training and validation to deployment and monitoring. Includes automated model versioning, A/B testing, and performance optimization.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Cognitive Services</h3>
                <p className="text-muted-foreground">
                  Pre-built cognitive services for common AI tasks including natural language processing, computer vision, speech recognition, and predictive analytics. Easily integrate these services into your applications.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Automated Model Training</h4>
                  <p className="text-sm text-muted-foreground">Streamlined model development with automated hyperparameter tuning</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Scalable Inference</h4>
                  <p className="text-sm text-muted-foreground">High-performance inference serving with automatic scaling</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Data Pipeline Management</h4>
                  <p className="text-sm text-muted-foreground">Automated data processing and feature engineering workflows</p>
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
              Enterprise-grade infrastructure and capabilities for cognitive computing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Model Support",
                description: "Support for various ML frameworks including TensorFlow, PyTorch, Scikit-learn, and custom models."
              },
              {
                title: "GPU Acceleration",
                description: "Optimized GPU computing for deep learning workloads with automatic resource allocation."
              },
              {
                title: "API Management",
                description: "Comprehensive API management with rate limiting, authentication, and monitoring capabilities."
              },
              {
                title: "Data Security",
                description: "End-to-end encryption, secure data storage, and compliance with enterprise security standards."
              },
              {
                title: "Monitoring & Logging",
                description: "Advanced monitoring tools for model performance, system health, and usage analytics."
              },
              {
                title: "Custom Development",
                description: "Flexible SDK and development tools for building custom cognitive applications and integrations."
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
              Start Building with Loop Q Today
            </h2>
            <p className="text-xl text-white/90">
              Experience the power of advanced cognitive computing for your enterprise
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
              <Brain className="h-6 w-6 text-primary" />
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
