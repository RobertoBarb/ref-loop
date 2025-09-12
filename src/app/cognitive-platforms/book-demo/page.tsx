"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock, Globe, Mail, Phone, Play, Sparkles, Zap, CheckCircle, Users, Building, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BookDemo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Book a{" "}
                <span className="gradient-text">Demo</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how Loop AI Group's cognitive platforms can transform your enterprise. Schedule a personalized demonstration with our experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              What You'll See in the Demo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the full power of our cognitive platforms in a personalized demonstration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Play,
                title: "Live Platform Walkthrough",
                description: "See our platforms in action with real-world scenarios and use cases"
              },
              {
                icon: Users,
                title: "Expert Consultation",
                description: "Get personalized recommendations from our AI and enterprise experts"
              },
              {
                icon: Building,
                title: "Custom Use Cases",
                description: "Explore how our platforms can address your specific business challenges"
              },
              {
                icon: MessageSquare,
                title: "Q&A Session",
                description: "Ask questions and get detailed answers about implementation and ROI"
              },
              {
                icon: Clock,
                title: "Implementation Timeline",
                description: "Understand the deployment process and expected timeframes"
              },
              {
                icon: CheckCircle,
                title: "Success Metrics",
                description: "Learn about expected outcomes and performance improvements"
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

      {/* Demo Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold">Schedule Your Demo</h2>
                  <p className="text-xl text-muted-foreground">
                    Fill out the form and our team will contact you to schedule a personalized demonstration.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Free Consultation</h4>
                      <p className="text-sm text-muted-foreground">No cost, no obligation - just valuable insights</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Customized for Your Needs</h4>
                      <p className="text-sm text-muted-foreground">Tailored demonstration based on your industry and use cases</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Expert Guidance</h4>
                      <p className="text-sm text-muted-foreground">Learn from our team of AI and enterprise experts</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="glass-effect">
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john.doe@company.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" placeholder="Your Company Name" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Input id="role" placeholder="CTO, AI Director, etc." />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message (Optional)</Label>
                        <textarea 
                          id="message" 
                          className="w-full p-3 border border-input rounded-md resize-none"
                          rows={4}
                          placeholder="Tell us about your AI initiatives and what you'd like to see in the demo..."
                        />
                      </div>
                    </div>
                    
                    <Button size="lg" className="w-full">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Demo
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Other Ways to Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Prefer to reach out directly? We're here to help with any questions you might have.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-muted-foreground">Get in touch via email for detailed information</p>
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
            
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-muted-foreground">Speak directly with our sales team</p>
                <Button variant="outline" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  +1 (555) 123-4567
                </Button>
              </CardContent>
            </Card>
            
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Visit Us</h3>
                <p className="text-muted-foreground">Learn more about our company and culture</p>
                <Button variant="outline" className="w-full">
                  <Globe className="mr-2 h-4 w-4" />
                  About Us
                </Button>
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
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-white/90">
              Join leading organizations already using Loop AI Group's cognitive platforms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Zap className="mr-2 h-5 w-5" />
                Schedule Demo
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
              <Calendar className="h-6 w-6 text-primary" />
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
