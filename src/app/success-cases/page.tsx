"use client";

import { ArrowRight, BarChart3, Building, Globe, Play, Zap, TrendingUp, Users, Award, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SuccessCases() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Success{" "}
                <span className="gradient-text">Cases</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how leading enterprises are transforming their operations with Loop AI Group&apos;s cognitive platforms. Real results from real customers.
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

      {/* Featured Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Featured Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world implementations that demonstrate the transformative power of our cognitive platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Global Financial Services</h3>
                    <p className="text-muted-foreground">Fortune 500 Banking Institution</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Challenge</h4>
                  <p className="text-muted-foreground">
                    The bank needed to automate complex risk assessment processes that were taking analysts 40+ hours per assessment, creating bottlenecks and increasing operational costs.
                  </p>
                  
                  <h4 className="text-lg font-semibold">Solution</h4>
                  <p className="text-muted-foreground">
                    Implemented Loop AI Agents Orchestra with custom risk assessment agents that could process complex financial data and generate comprehensive risk reports.
                  </p>
                  
                  <h4 className="text-lg font-semibold">Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">85%</div>
                      <div className="text-sm text-muted-foreground">Time Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">$2.3M</div>
                      <div className="text-sm text-muted-foreground">Annual Savings</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Healthcare Analytics</h3>
                    <p className="text-muted-foreground">Regional Healthcare Network</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Challenge</h4>
                  <p className="text-muted-foreground">
                    The healthcare network struggled with patient data analysis and treatment recommendations, leading to inconsistent care quality and delayed diagnoses.
                  </p>
                  
                  <h4 className="text-lg font-semibold">Solution</h4>
                  <p className="text-muted-foreground">
                    Deployed Loop Q Cognitive Platform with specialized medical AI agents for patient data analysis and treatment recommendation systems.
                  </p>
                  
                  <h4 className="text-lg font-semibold">Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">92%</div>
                      <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">60%</div>
                      <div className="text-sm text-muted-foreground">Faster Diagnosis</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Industry Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored AI solutions for different industries and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Financial Services",
                description: "Risk assessment, fraud detection, and automated compliance reporting",
                metrics: "40% cost reduction, 85% faster processing"
              },
              {
                icon: BarChart3,
                title: "Healthcare",
                description: "Patient data analysis, treatment recommendations, and diagnostic assistance",
                metrics: "92% accuracy rate, 60% faster diagnosis"
              },
              {
                icon: Globe,
                title: "Manufacturing",
                description: "Predictive maintenance, quality control, and supply chain optimization",
                metrics: "30% downtime reduction, 25% efficiency gain"
              },
              {
                icon: Users,
                title: "Retail & E-commerce",
                description: "Customer service automation, inventory management, and personalized recommendations",
                metrics: "50% faster response time, 35% sales increase"
              },
              {
                icon: Target,
                title: "Government",
                description: "Citizen services automation, document processing, and policy analysis",
                metrics: "70% process automation, 45% time savings"
              },
              {
                icon: TrendingUp,
                title: "Technology",
                description: "Code analysis, security monitoring, and automated testing",
                metrics: "80% bug reduction, 50% faster deployment"
              }
            ].map((industry, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                  <div className="pt-2 border-t">
                    <p className="text-sm font-medium text-primary">{industry.metrics}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Customer Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our customers about their experience with Loop AI Group&apos;s platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Loop AI Group's platform has revolutionized our risk assessment process. We've reduced processing time by 85% while maintaining the highest accuracy standards.",
                author: "Sarah Johnson",
                role: "Chief Risk Officer",
                company: "Global Financial Services"
              },
              {
                quote: "The healthcare AI agents have transformed our patient care. We can now provide faster, more accurate diagnoses and treatment recommendations.",
                author: "Dr. Michael Chen",
                role: "Chief Medical Officer",
                company: "Regional Healthcare Network"
              },
              {
                quote: "Implementation was seamless and the results exceeded our expectations. Our manufacturing efficiency has improved by 25% with predictive maintenance.",
                author: "Robert Martinez",
                role: "VP of Operations",
                company: "Industrial Manufacturing Corp"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Award key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-white/90">
              Join the growing number of enterprises transforming their operations with Loop AI Group
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
              <Award className="h-6 w-6 text-primary" />
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