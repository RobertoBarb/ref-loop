"use client";

import Link from "next/link";
import { ArrowRight, Users, Globe, Play, Sparkles, Zap, CheckCircle, Award, Brain, Building, Mail, MapPin, Clock, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Join Our{" "}
                <span className="gradient-text">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Be part of the future of enterprise AI. Join Loop AI Group and help us transform how organizations work with artificial intelligence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="pulse-glow">
                <Play className="mr-2 h-5 w-5" />
                View Open Positions
              </Button>
              <Button variant="outline" size="lg">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Why Work at Loop AI Group?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a team of passionate innovators working on cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Cutting-Edge Technology",
                description: "Work with the latest AI technologies and contribute to groundbreaking research and development."
              },
              {
                icon: Users,
                title: "Collaborative Culture",
                description: "Join a diverse team of experts who value collaboration, creativity, and continuous learning."
              },
              {
                icon: Award,
                title: "Career Growth",
                description: "Advance your career with opportunities for professional development and leadership roles."
              },
              {
                icon: Heart,
                title: "Work-Life Balance",
                description: "Flexible work arrangements and comprehensive benefits to support your personal and professional life."
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Make a difference by helping enterprises worldwide transform their operations with AI."
              },
              {
                icon: Building,
                title: "Innovation Hub",
                description: "Work in a dynamic environment that encourages experimentation and breakthrough thinking."
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

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore current opportunities to join our team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Senior AI Research Scientist",
                department: "Research & Development",
                location: "San Francisco, CA",
                type: "Full-time",
                description: "Lead cutting-edge AI research projects and contribute to our cognitive computing platforms.",
                requirements: ["PhD in AI/ML", "5+ years research experience", "Publications in top-tier conferences"]
              },
              {
                title: "Machine Learning Engineer",
                department: "Engineering",
                location: "Remote / San Francisco, CA",
                type: "Full-time",
                description: "Build and optimize machine learning models for enterprise AI applications.",
                requirements: ["MS in CS/AI", "3+ years ML experience", "Python, TensorFlow, PyTorch"]
              },
              {
                title: "Full-Stack Developer",
                department: "Engineering",
                location: "San Francisco, CA",
                type: "Full-time",
                description: "Develop user interfaces and backend services for our AI platforms.",
                requirements: ["BS in CS", "2+ years experience", "React, Node.js, TypeScript"]
              },
              {
                title: "DevOps Engineer",
                department: "Engineering",
                location: "San Francisco, CA",
                type: "Full-time",
                description: "Manage cloud infrastructure and deployment pipelines for our AI platforms.",
                requirements: ["BS in CS", "3+ years DevOps experience", "AWS, Kubernetes, Docker"]
              },
              {
                title: "Product Manager",
                department: "Product",
                location: "San Francisco, CA",
                type: "Full-time",
                description: "Define product strategy and roadmap for our cognitive computing platforms.",
                requirements: ["MBA or equivalent", "5+ years PM experience", "AI/ML domain knowledge"]
              },
              {
                title: "Sales Engineer",
                department: "Sales",
                location: "New York, NY",
                type: "Full-time",
                description: "Help enterprise customers understand and implement our AI solutions.",
                requirements: ["BS in Engineering", "3+ years sales experience", "Technical background"]
              }
            ].map((position, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span>{position.department}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{position.type}</span>
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">{position.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Benefits & Perks
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive benefits package designed to support our team members
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Health & Wellness",
                benefits: ["Medical, Dental, Vision", "Mental Health Support", "Gym Membership", "Wellness Programs"]
              },
              {
                title: "Financial",
                benefits: ["Competitive Salary", "Equity Participation", "401(k) Matching", "Performance Bonuses"]
              },
              {
                title: "Work-Life Balance",
                benefits: ["Flexible Hours", "Remote Work Options", "Unlimited PTO", "Sabbatical Program"]
              },
              {
                title: "Professional Development",
                benefits: ["Learning Budget", "Conference Attendance", "Training Programs", "Mentorship"]
              }
            ].map((category, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our Culture
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What it's like to work at Loop AI Group
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Innovation First</h3>
                  <p className="text-muted-foreground">
                    We encourage experimentation and bold thinking. Our team members are empowered to explore new ideas and push the boundaries of what's possible with AI.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Collaborative Environment</h3>
                  <p className="text-muted-foreground">
                    We believe the best solutions come from diverse perspectives working together. Our open culture encourages knowledge sharing and cross-functional collaboration.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    The AI field evolves rapidly, and so do we. We invest heavily in our team's growth through training, conferences, and hands-on learning opportunities.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Impact-Driven</h3>
                  <p className="text-muted-foreground">
                    We're motivated by the real-world impact of our work. Every project contributes to transforming how enterprises operate and succeed in the AI era.
                  </p>
                </div>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-white/90">
              Start your journey with Loop AI Group and help shape the future of enterprise AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Zap className="mr-2 h-5 w-5" />
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Globe className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
