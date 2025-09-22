"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Globe, Play, Sparkles, Zap, CheckCircle, Clock, MessageSquare, Building } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Contact{" "}
                <span className="gradient-text">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get in touch with our team to learn more about how Loop AI Group can transform your enterprise with AI solutions.
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

      {/* Contact Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to connect with our team and get the information you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-muted-foreground">Get detailed information via email</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">General Inquiries</p>
                  <p className="text-primary">info@loop.ai</p>
                  <p className="text-sm font-medium">Sales</p>
                  <p className="text-primary">sales@loop.ai</p>
                  <p className="text-sm font-medium">Support</p>
                  <p className="text-primary">support@loop.ai</p>
                </div>
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
            
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-muted-foreground">Speak directly with our team</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Sales</p>
                  <p className="text-primary">+1 (555) 123-4567</p>
                  <p className="text-sm font-medium">Support</p>
                  <p className="text-primary">+1 (555) 123-4568</p>
                  <p className="text-sm font-medium">General</p>
                  <p className="text-primary">+1 (555) 123-4569</p>
                </div>
                <Button variant="outline" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Visit Us</h3>
                <p className="text-muted-foreground">Our headquarters location</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-muted-foreground text-sm">
                    123 AI Innovation Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold">Send us a Message</h2>
                  <p className="text-xl text-muted-foreground">
                    Have a question or want to learn more? We'd love to hear from you.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Quick Response</h4>
                      <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Expert Consultation</h4>
                      <p className="text-sm text-muted-foreground">Get personalized advice from our AI experts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">No Obligation</h4>
                      <p className="text-sm text-muted-foreground">Free consultation with no strings attached</p>
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
                        <Label htmlFor="subject">Subject</Label>
                        <select 
                          id="subject" 
                          className="w-full p-3 border border-input rounded-md"
                        >
                          <option value="">Select a subject</option>
                          <option value="demo">Request a Demo</option>
                          <option value="sales">Sales Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="media">Media Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <textarea 
                          id="message" 
                          className="w-full p-3 border border-input rounded-md resize-none"
                          rows={4}
                          placeholder="Tell us how we can help you..."
                        />
                      </div>
                    </div>
                    
                    <Button size="lg" className="w-full">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Support */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Office Hours & Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When and how you can reach us for different types of inquiries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Sales Team</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Monday - Friday</p>
                  <p className="text-muted-foreground">9:00 AM - 6:00 PM PST</p>
                  <p className="text-sm font-medium">Saturday</p>
                  <p className="text-muted-foreground">10:00 AM - 4:00 PM PST</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Technical Support</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Monday - Friday</p>
                  <p className="text-muted-foreground">8:00 AM - 8:00 PM PST</p>
                  <p className="text-sm font-medium">Emergency Support</p>
                  <p className="text-muted-foreground">24/7 for Enterprise</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">General Inquiries</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Monday - Friday</p>
                  <p className="text-muted-foreground">9:00 AM - 5:00 PM PST</p>
                  <p className="text-sm font-medium">Response Time</p>
                  <p className="text-muted-foreground">Within 24 hours</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90">
              Contact us today to learn how Loop AI Group can transform your enterprise
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
