"use client";

import Link from "next/link";
import { Globe, Calendar, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-0">
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
                Contact{" "}
                <span className="gradient-text">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Please fill out this form and a Loop AI Group representative will be in touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="glass-effect">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-base font-medium">
                        First name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        required
                        className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-base font-medium">
                        Last name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        required
                        className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-base font-medium">
                      Role <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="role"
                      placeholder="e.g., CTO, AI Director, VP of Technology"
                      required
                      className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-base font-medium">
                      Organization <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="organization"
                      placeholder="Enter your organization name"
                      required
                      className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-base font-medium">
                      Country <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="country"
                      placeholder="Enter your country"
                      required
                      className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organizationSize" className="text-base font-medium">
                      Organization Size <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30">
                        <SelectValue placeholder="Select Size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501-1000">501-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="request" className="text-base font-medium">
                      Please describe your request! <span className="text-red-500">*</span>
                    </Label>
                    <textarea
                      id="request"
                      required
                      rows={4}
                      placeholder="Describe your request..."
                      className="w-full p-3 text-base border-2 border-primary/40 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12 text-lg">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Submit Contact Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Locations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-effect hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:bg-primary/80 transition-colors duration-300"></div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">AMERICAS</h3>
                </div>
                <div className="space-y-4">
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                      524 Broadway<br />
                      New York, NY 10012<br />
                      USA
                    </p>
                  </div>
                  <div className="group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                      535 Mission St<br />
                      San Francisco, CA 94105<br />
                      USA
                    </p>
                  </div>
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-effect hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:bg-primary/80 transition-colors duration-300"></div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">EUROPE</h3>
                </div>
                <div className="space-y-4">
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                      Via San Raffaele 1<br />
                      20121 Milano<br />
                      Italy
                    </p>
                  </div>
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
