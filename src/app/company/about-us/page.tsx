"use client";

import Link from "next/link";
import { ArrowRight, Building, Globe, Play, Sparkles, Zap, CheckCircle, Users, Award, Target, Brain, Heart, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                About{" "}
                <span className="gradient-text">Loop AI Group</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The First Enterprise AI Company. We're transforming organizations into cognitive enterprises with cutting-edge AI platforms and solutions.
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

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driving the future of enterprise AI with purpose and innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  To transform any organization into a cognitive enterprise by providing the tools necessary to meet the future demand for knowledge workers and increase the capacity of current ones. This radically improves productivity and cost efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  We envision a world where cognitive services and products will transform our workplaces and personal lives, automating daily activities, anticipating relevant information and connections, and allowing more time for leisure and creativity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded in 2012, Loop AI Group has been at the forefront of enterprise AI innovation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">2012 - The Beginning</h3>
                  <p className="text-muted-foreground">
                    Founded with a vision to democratize AI for enterprises. Our team of scientists and engineers began developing the foundational technologies that would become Loop AI Group's cognitive platforms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">2015-2018 - Research & Development</h3>
                  <p className="text-muted-foreground">
                    Deep research and development phase, working with organizations like the Artificial Intelligence Center at SRI International and Stanford's Computational Semantics Lab to advance AI technologies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">2019-2022 - Enterprise Focus</h3>
                  <p className="text-muted-foreground">
                    Shifted focus to enterprise applications, developing Loop AI Agents Orchestra and Loop Q Cognitive Platform to address real-world business challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">2023-Present - Global Expansion</h3>
                  <p className="text-muted-foreground">
                    Rapid growth and global expansion, serving 500+ enterprises worldwide and establishing Loop AI Group as the leading enterprise AI company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Innovation",
                description: "We continuously push the boundaries of what's possible in AI and cognitive computing, always seeking better solutions for our customers."
              },
              {
                icon: Users,
                title: "Customer Success",
                description: "Our customers' success is our success. We're committed to delivering value and exceeding expectations in every interaction."
              },
              {
                icon: Shield,
                title: "Trust & Security",
                description: "We prioritize security, privacy, and ethical AI practices, ensuring our solutions are safe, reliable, and compliant."
              },
              {
                icon: Target,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from product development to customer service and support."
              },
              {
                icon: Globe,
                title: "Accessibility",
                description: "We believe AI should be accessible to all organizations, regardless of size or technical expertise."
              },
              {
                icon: Heart,
                title: "Impact",
                description: "We're driven by the positive impact our technology can have on businesses, employees, and society as a whole."
              }
            ].map((value, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the visionaries behind Loop AI Group's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Chief Executive Officer",
                description: "Former AI researcher at Stanford with 15+ years in enterprise AI applications."
              },
              {
                name: "Michael Rodriguez",
                role: "Chief Technology Officer",
                description: "Expert in cognitive computing and distributed systems with extensive enterprise experience."
              },
              {
                name: "Dr. Lisa Wang",
                role: "Chief AI Officer",
                description: "Leading AI researcher and former head of AI at major tech companies."
              }
            ].map((leader, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{leader.name}</h3>
                  <p className="text-primary font-medium">{leader.role}</p>
                  <p className="text-muted-foreground text-sm">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Users className="mr-2 h-5 w-5" />
              Meet the Full Team
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Join the Cognitive Revolution
            </h2>
            <p className="text-xl text-white/90">
              Discover how Loop AI Group can transform your organization into a cognitive enterprise
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

    </div>
  );
}
