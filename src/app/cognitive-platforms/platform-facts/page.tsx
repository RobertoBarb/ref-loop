"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Play, Sparkles, Zap, Shield, CheckCircle, Brain, Target } from "lucide-react";

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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight px-2">
                What Can Loop AI Agents <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Orchestra</span> and <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Loop Q</span> Do For Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Organization</span>?
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                See how can you transform your business and workforce
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Loop AI Agent Learning Speed Section */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-primary">Loop AI Agent Learning Speed</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    An AI Agent typically learns two years of knowledge work from the best human employees in less than 15 minutes
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-3 shadow-2xl">
                      <span className="text-3xl font-bold text-white">2</span>
                    </div>
                    <div className="text-lg font-semibold text-orange-500">YEARS</div>
                    <div className="text-sm text-muted-foreground">of human work</div>
                  </div>
                  <div className="text-3xl text-muted-foreground">→</div>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mb-3 shadow-2xl">
                      <span className="text-3xl font-bold text-white">15</span>
                    </div>
                    <div className="text-lg font-semibold text-primary">MINUTES</div>
                    <div className="text-sm text-muted-foreground">for Loop Q</div>
                  </div>
                </div>
                <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold text-primary">Unsupervised learning</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Loop AI Agents Industry Validation Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-accent">Loop AI Agents: Industry Validation</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    AI agents built with Loop Q and Loop AI Agents Orchestra have been successfully validated by large enterprises across multiple industries.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Insurance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Banking & Financial Services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Government & Defense</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>Telecommunications & Media</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Manufacturing & Logistics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <span>Automotive & Transportation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <span>Healthcare</span>
                  </div>
                </div>
                <div className="inline-flex items-center space-x-2 bg-accent/10 px-6 py-3 rounded-full">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-lg font-semibold text-accent">Validated with Large Enterprise in the Following Industries</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Loop AI Agent Market Validation Section */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-primary">Loop AI Agent Market Validation</h2>
                  <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                    AI agents built with Loop Q and Loop AI Agents Orchestra have been deployed across continents and languages since 2015, starting in Asia and expanding to Europe and the USA—years ahead of mainstream AI adoption.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                    <span className="text-xl font-semibold text-primary">Asia</span>
                    <span className="text-sm text-muted-foreground">Since 2015</span>
                    <div className="px-3 py-1 bg-primary/20 rounded-full text-sm font-semibold text-primary">Pioneer</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                    <span className="text-xl font-semibold text-accent">Europe</span>
                    <span className="text-sm text-muted-foreground">Since 2018</span>
                    <div className="px-3 py-1 bg-accent/20 rounded-full text-sm font-semibold text-accent">Expansion</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                    <span className="text-xl font-semibold text-primary">USA</span>
                    <span className="text-sm text-muted-foreground">Since 2020</span>
                    <div className="px-3 py-1 bg-primary/20 rounded-full text-sm font-semibold text-primary">Growth</div>
                  </div>
                </div>
                <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold text-primary">Validated in the Following Markets</span>
                </div>
                
                {/* World Image */}
                <div className="flex justify-center">
                  <Image 
                    src="/images/facts/world.avif" 
                    alt="World map showing global validation" 
                    width={600}
                    height={300}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>
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
              
              {/* Desktop Layout - Progress Bars */}
              <div className="hidden lg:grid grid-cols-3 gap-8 items-center">
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

              {/* Mobile/Tablet Layout - Cards */}
              <div className="lg:hidden space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-orange-500/10 border-orange-500/20">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full overflow-hidden">
                        <Image 
                          src="/images/facts/workforce_1.avif" 
                          alt="Traditional Workforce" 
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-2xl font-bold text-orange-500 mb-1">$17</div>
                      <div className="text-sm text-muted-foreground">Traditional Workforce</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/10 border-primary/20">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full overflow-hidden">
                        <Image 
                          src="/images/facts/loop_1.avif" 
                          alt="Loop AI Agent" 
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">$0.6</div>
                      <div className="text-sm text-muted-foreground">Loop AI Agent</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-muted-foreground">28x Cost Reduction</span>
                  </div>
                </div>
              </div>
              
              {/* COST OF SUPERVISION */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-muted-foreground">COST OF SUPERVISION</h3>
              </div>
              
              {/* Desktop Layout - Progress Bars */}
              <div className="hidden lg:grid grid-cols-3 gap-8 items-center">
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

              {/* Mobile/Tablet Layout - Cards */}
              <div className="lg:hidden space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-orange-500/10 border-orange-500/20">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full overflow-hidden">
                        <Image 
                          src="/images/facts/workforce_2.avif" 
                          alt="Training Required" 
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-lg font-bold text-orange-500 mb-1">Training</div>
                      <div className="text-sm text-muted-foreground">Education + Management</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/10 border-primary/20">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full overflow-hidden">
                        <Image 
                          src="/images/facts/loop_2.avif" 
                          alt="Unsupervised Learning" 
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-lg font-bold text-primary mb-1">Unsupervised</div>
                      <div className="text-sm text-muted-foreground">Autonomous Learning</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-muted-foreground">Zero Supervision Cost</span>
                  </div>
                </div>
              </div>

              {/* COST OF TIME OFF */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-muted-foreground">COST OF TIME OFF</h3>
              </div>
              
              {/* Desktop Layout - Progress Bars */}
              <div className="hidden lg:grid grid-cols-3 gap-8 items-center">
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

              {/* Mobile/Tablet Layout - Cards */}
              <div className="lg:hidden space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-orange-500/10 border-orange-500/20">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full overflow-hidden">
                        <Image 
                          src="/images/facts/workforce_3.avif" 
                          alt="Paid Time Off" 
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-lg font-bold text-orange-500 mb-1">Paid Time Off</div>
                      <div className="text-sm text-muted-foreground">Vacation, Sick Days, Holidays</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/10 border-primary/20">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full overflow-hidden">
                        <Image 
                          src="/images/facts/loop_3.avif" 
                          alt="24/7 Work" 
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-lg font-bold text-primary mb-1">24/7 Work</div>
                      <div className="text-sm text-muted-foreground">Always Productive</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-muted-foreground">100% Uptime</span>
                  </div>
                </div>
              </div>
              
              {/* HUMAN ERROR RATE */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-muted-foreground">HUMAN ERROR RATE</h3>
              </div>
              
              {/* Desktop Layout - Progress Bars */}
              <div className="hidden lg:grid grid-cols-3 gap-8 items-center">
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

              {/* Mobile/Tablet Layout - Cards */}
              <div className="lg:hidden space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-orange-500/10 border-orange-500/20">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full overflow-hidden">
                        <Image 
                          src="/images/facts/workforce_4.avif" 
                          alt="Human Error" 
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-2xl font-bold text-orange-500 mb-1">20%</div>
                      <div className="text-sm text-muted-foreground">Human Error Rate</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/10 border-primary/20">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full overflow-hidden">
                        <Image 
                          src="/images/facts/loop_4.avif" 
                          alt="Accuracy" 
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">80%</div>
                      <div className="text-sm text-muted-foreground">Accuracy Increase</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-muted-foreground">4x More Accurate</span>
                  </div>
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
              Learn The Possibilities
            </h2>
            <p className="text-xl text-white/90">
              Discover How Loop AI Agents Orchestra and Loop Q Cognitive Platform Solve Your Business Challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/">
                <Zap className="mr-2 h-5 w-5" />
                    Implemented Solutions
                </Link>
              </Button>
              
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
