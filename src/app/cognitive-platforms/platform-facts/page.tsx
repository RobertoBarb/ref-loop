"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, Globe, Play, Sparkles, Zap, Shield, Settings, Users, CheckCircle, Brain, Target, Timer, Building2, Car, Heart, Phone, Factory, Briefcase, Gavel } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PlatformFacts() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-0">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
                What Can Loop AI Agents Orchestra and Loop Q Do For Your Organization?
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                See how can you transform your business and workforce
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="pulse-glow" asChild>
                <Link href="/cognitive-platforms/book-demo">
                <Play className="mr-2 h-5 w-5" />
                  BOOK A DEMO
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Loop AI Agent Learning Speed Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Loop AI Agent Learning Speed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              An AI Agent typically learns two years of knowledge work from the best human employees in less than 15 minutes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* 2 Years Section */}
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-4xl font-bold text-white">2</span>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Brain className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">YEARS</h3>
                <p className="text-lg text-muted-foreground">of human work</p>
              </div>
              {/* Human Image */}
              <div className="mt-4">
                <Image 
                  src="/images/facts/human.avif" 
                  alt="Human worker" 
                  width={120}
                  height={120}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Arrow with Greater Than Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <Image 
                    src="/images/facts/greater_than.avif" 
                    alt="Greater than symbol" 
                    width={40}
                    height={40}
                    className="opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* 15 Minutes Section */}
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-4xl font-bold text-white">15</span>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Timer className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-accent">MINUTES</h3>
                <p className="text-lg text-muted-foreground">for Loop Q</p>
              </div>
              {/* Robot Image */}
              <div className="mt-4">
                <Image 
                  src="/images/facts/robot.avif" 
                  alt="AI Robot" 
                  width={120}
                  height={120}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-primary">Unsupervised learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Loop AI Agents Industry Validation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Loop AI Agents: Industry Validation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI agents built with Loop Q and Loop AI Agents Orchestra have been successfully validated by large enterprises across multiple industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, name: "Insurance", color: "from-blue-500 to-blue-600" },
              { icon: Briefcase, name: "Banking and Financial Services", color: "from-green-500 to-green-600" },
              { icon: Gavel, name: "Government and Defense", color: "from-purple-500 to-purple-600" },
              { icon: Phone, name: "Telecommunications and Media", color: "from-orange-500 to-orange-600" },
              { icon: Factory, name: "Manufacturing and logistics", color: "from-red-500 to-red-600" },
              { icon: Car, name: "Automotive and Transportation", color: "from-indigo-500 to-indigo-600" },
              { icon: Heart, name: "Healthcare", color: "from-pink-500 to-pink-600" }
            ].map((industry, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${industry.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {industry.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-6 py-3 rounded-full">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-lg font-semibold text-accent">Validated with Large Enterprise in the Following Industries</span>
            </div>
            
            {/* World Image */}
            <div className="flex justify-center">
              <Image 
                src="/images/facts/world.avif" 
                alt="World map showing global validation" 
                width={400}
                height={200}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Loop AI Agent Market Validation Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Loop AI Agent Market Validation
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              AI agents built with Loop Q and Loop AI Agents Orchestra have been deployed across continents and languages since 2015, starting in Asia and expanding to Europe and the USA—years ahead of mainstream AI adoption.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { region: "Asia", year: "2015", status: "Pioneer" },
              { region: "Europe", year: "2018", status: "Expansion" },
              { region: "USA", year: "2020", status: "Growth" }
            ].map((market, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-8 space-y-4 text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{market.region}</h3>
                  <p className="text-lg text-muted-foreground">Since {market.year}</p>
                  <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-primary">{market.status}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-primary">Validated in the Following Markets</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Savings with Loop AI Agents Orchestra Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Cost Savings with Loop AI Agents Orchestra
            </h2>
          </div>

          <div className="space-y-12">
            {/* Headers */}
            <div className="grid grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-500 mb-2">TRADITIONAL WORKFORCE</h3>
                <p className="text-lg text-muted-foreground">Traditional human knowledge workforce</p>
              </div>
              <div></div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">LOOP Q PLATFORM</h3>
                <p className="text-lg text-muted-foreground">Intelligent augmented digital workforce</p>
              </div>
            </div>

            {/* Main Icons */}
            <div className="grid grid-cols-3 gap-8 items-center">
              <div className="flex justify-center">
                <Image 
                  src="/images/facts/humans.avif" 
                  alt="Traditional workforce" 
                  width={120}
                  height={120}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div></div>
              <div className="flex justify-center">
                <Image 
                  src="/images/facts/robots.avif" 
                  alt="Loop AI platform" 
                  width={120}
                  height={120}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Comparison Metrics */}
            <div className="space-y-8">
              {/* COST PER HOUR */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-muted-foreground">COST PER HOUR</h3>
              </div>
              <div className="grid grid-cols-3 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image 
                      src="/images/facts/workforce_1.avif" 
                      alt="Traditional Workforce" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="flex-1 bg-gray-700 rounded-lg h-20 relative overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                      <span className="text-white text-base font-bold">$17</span>
                      <span className="text-white text-xs text-center leading-tight">Avg Hourly Cost of Human Knowledge Workers</span>
                    </div>
                    <div className="absolute inset-0 bg-orange-500 rounded-lg progress-bar-left" style={{ 
                      '--left-width': '85%'
                    } as React.CSSProperties}>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-700 rounded-lg h-20 relative overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                      <span className="text-white text-base font-bold">$0.6</span>
                      <span className="text-white text-xs text-center leading-tight">Loop AI Agent Hourly Cost</span>
                    </div>
                    <div className="absolute inset-0 rounded-lg progress-bar-right" style={{ 
                      '--right-width': '3%'
                    } as React.CSSProperties}>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image 
                      src="/images/facts/loop_1.avif" 
                      alt="Loop AI Agent" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* COST OF SUPERVISION */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-muted-foreground">COST OF SUPERVISION</h3>
              </div>
              <div className="grid grid-cols-3 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image 
                      src="/images/facts/workforce_2.avif" 
                      alt="Training Required" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="flex-1 bg-gray-700 rounded-lg h-20 relative overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                      <span className="text-white text-base font-bold">Training</span>
                      <span className="text-white text-xs text-center leading-tight">Requires education + management</span>
                    </div>
                    <div className="absolute inset-0 bg-orange-500 rounded-lg progress-bar-left" style={{ '--left-width': '100%' } as React.CSSProperties}>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-700 rounded-lg h-20 relative overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                      <span className="text-white text-base font-bold">Unsupervised</span>
                      <span className="text-white text-xs text-center leading-tight">Continuous and autonomous self-learning</span>
                    </div>
                    <div className="absolute inset-0 rounded-lg progress-bar-right" style={{ '--right-width': '0%' } as React.CSSProperties}>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image 
                      src="/images/facts/loop_2.avif" 
                      alt="Unsupervised Learning" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* COST OF TIME OFF */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-muted-foreground">COST OF TIME OFF</h3>
            </div>
              <div className="grid grid-cols-3 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image 
                      src="/images/facts/workforce_3.avif" 
                      alt="Paid Time Off" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="flex-1 bg-gray-700 rounded-lg h-20 relative overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                      <span className="text-white text-base font-bold">Paid time off</span>
                      <span className="text-white text-xs text-center leading-tight">Paid vacation, sick days, holidays, events</span>
                    </div>
                    <div className="absolute inset-0 bg-orange-500 rounded-lg progress-bar-left" style={{ '--left-width': '100%' } as React.CSSProperties}>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-700 rounded-lg h-20 relative overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                      <span className="text-white text-base font-bold">24/7 Work</span>
                      <span className="text-white text-xs text-center leading-tight">Tireless workforce always productive</span>
                    </div>
                    <div className="absolute inset-0 rounded-lg progress-bar-right" style={{ '--right-width': '0%' } as React.CSSProperties}>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image 
                      src="/images/facts/loop_3.avif" 
                      alt="24/7 Work" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* HUMAN ERROR RATE */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-muted-foreground">HUMAN ERROR RATE</h3>
              </div>
              <div className="grid grid-cols-3 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image 
                      src="/images/facts/workforce_4.avif" 
                      alt="Human Error" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="flex-1 bg-gray-700 rounded-lg h-20 relative overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                      <span className="text-white text-base font-bold">Human error</span>
                      <span className="text-white text-xs text-center leading-tight">20% human error rate</span>
                    </div>
                    <div className="absolute inset-0 bg-orange-500 rounded-lg progress-bar-left" style={{ '--left-width': '20%' } as React.CSSProperties}>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-700 rounded-lg h-20 relative overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                      <span className="text-white text-base font-bold">Accuracy</span>
                      <span className="text-white text-xs text-center leading-tight">Increased accuracy by 80%</span>
                    </div>
                    <div className="absolute inset-0 rounded-lg progress-bar-right" style={{ '--right-width': '3%' } as React.CSSProperties}>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image 
                      src="/images/facts/loop_4.avif" 
                      alt="Accuracy" 
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn The Possibilities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Learn The Possibilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover How Loop AI Agents Orchestra and Loop Q Cognitive Platform Solve Your Business Challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* COGNITIVE PLATFORMS */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-6">COGNITIVE PLATFORMS</h3>
              <div className="space-y-3">
                <Link href="/cognitive-platforms/loop-q" className="block p-4 glass-effect rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <Brain className="h-5 w-5 text-primary" />
                    <span className="font-medium">Loop Q</span>
                  </div>
                </Link>
                <Link href="/cognitive-platforms/loop-ai-agents-orchestra" className="block p-4 glass-effect rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-primary" />
                    <span className="font-medium">Loop AI Agents Orchestra</span>
                  </div>
                </Link>
                <Link href="/cognitive-platforms/platform-facts" className="block p-4 glass-effect rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span className="font-medium">Loop Platforms Facts</span>
                  </div>
                </Link>
                <Link href="/cognitive-platforms/book-demo" className="block p-4 glass-effect rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <Play className="h-5 w-5 text-primary" />
                    <span className="font-medium">Book A Demo</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* SOLUTIONS */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-6">SOLUTIONS</h3>
              <div className="space-y-3">
                <Link href="/success-cases" className="block p-4 glass-effect rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-primary" />
                    <span className="font-medium">Success Cases</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* COMPANY */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-6">COMPANY</h3>
              <div className="space-y-3">
                <Link href="/company/about-us" className="block p-4 glass-effect rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">About Us</span>
                  </div>
                </Link>
                <Link href="/company/team" className="block p-4 glass-effect rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">Team</span>
                  </div>
                </Link>
                <Link href="/company/media-analyst-relations" className="block p-4 glass-effect rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="font-medium">Media & Analyst Rel.</span>
                  </div>
                </Link>
                <Link href="/company/loop-ai-research" className="block p-4 glass-effect rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <Brain className="h-5 w-5 text-primary" />
                    <span className="font-medium">Loop AI Research</span>
                  </div>
                </Link>
                <Link href="/company/careers" className="block p-4 glass-effect rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="font-medium">Careers</span>
                  </div>
                </Link>
                <Link href="/company/videos" className="block p-4 glass-effect rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <Play className="h-5 w-5 text-primary" />
                    <span className="font-medium">Videos</span>
                  </div>
                </Link>
                <Link href="/company/contact" className="block p-4 glass-effect rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="font-medium">Contact</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
              <ArrowRight className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-primary">STAY UP TO DATE</span>
            </div>
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
              See how Loop AI Group&apos;s platforms can transform your enterprise AI initiatives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/cognitive-platforms/book-demo">
                <Zap className="mr-2 h-5 w-5" />
                Book a Demo
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/cognitive-platforms/loop-ai-agents-orchestra">
                <Globe className="mr-2 h-5 w-5" />
                Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
