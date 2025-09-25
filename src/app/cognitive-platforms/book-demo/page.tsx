"use client";

import { useState } from "react";
import { Calendar, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function BookDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    organization: "",
    country: "",
    organizationSize: "",
    challenges: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-0">
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
                Book a{" "}
                <span className="gradient-text">Demo</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Please fill out this form and a Loop AI Group representative will be in touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="glass-effect">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Name and Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-base font-medium">
                        First name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Enter your first name"
                        required
                        className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-base font-medium">
                        Last name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Enter your last name"
                        required
                        className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Role */}
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-base font-medium">
                      Role <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                      placeholder="e.g., CTO, AI Director, VP of Technology"
                      required
                      className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Organization */}
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-base font-medium">
                      Organization <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      placeholder="Enter your organization name"
                      required
                      className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Country */}
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-base font-medium">
                      Country <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      placeholder="Enter your country"
                      required
                      className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Organization Size */}
                  <div className="space-y-2">
                    <Label htmlFor="organizationSize" className="text-base font-medium">
                      Organization Size <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.organizationSize}
                      onValueChange={(value) => handleInputChange("organizationSize", value)}
                      required
                    >
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

                  {/* Challenges */}
                  <div className="space-y-2">
                    <Label htmlFor="challenges" className="text-base font-medium">
                      What challenges or goals are you hoping to address with our Enterprise AI platform? We'd love to tailor your demo to showcase how we can best support your needs! <span className="text-red-500">*</span>
                    </Label>
                    <textarea
                      id="challenges"
                      value={formData.challenges}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("challenges", e.target.value)}
                      placeholder="Describe your AI initiatives, current challenges, and what you'd like to see in the demo..."
                      required
                      rows={4}
                      className="w-full p-3 text-base border-2 border-primary/40 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full h-12 text-lg">
                    <Send className="mr-2 h-5 w-5" />
                    Request a Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
