"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Careers() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    resumeLink: "",
    challengeDescription: "",
    contributionDescription: "",
    joinType: ""
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
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[30vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-0">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Careers</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-muted-foreground">
                BE THE CHANGE
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="glass-effect">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold">
                    Interested in working to radically change how machines can autonomously learn and understand the human world?
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    If you are passionate about cognitive computing, machine learning, and deep learning, and you're interested in joining the team at Loop AI Group, please submit the application below.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We are hiring across all our offices in USA and Europe with possibility to work remotely from any country in the world. Candidates are welcome to apply from anywhere.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="glass-effect">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Last Name and First Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  {/* Resume Link */}
                  <div className="space-y-2">
                    <Label htmlFor="resumeLink" className="text-base font-medium">
                      Link to your resume (optional)
                    </Label>
                    <Input
                      id="resumeLink"
                      value={formData.resumeLink}
                      onChange={(e) => handleInputChange("resumeLink", e.target.value)}
                      placeholder="Enter link to your resume"
                      className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Challenge Description */}
                  <div className="space-y-2">
                    <Label htmlFor="challengeDescription" className="text-base font-medium">
                      Please briefly describe one of the most challenging problems you've encountered in your work and explain how you resolved it. <span className="text-red-500">*</span>
                    </Label>
                    <textarea
                      id="challengeDescription"
                      value={formData.challengeDescription}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("challengeDescription", e.target.value)}
                      placeholder="Describe the challenge and your solution..."
                      required
                      rows={4}
                      className="w-full p-3 text-base border-2 border-primary/40 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Contribution Description */}
                  <div className="space-y-2">
                    <Label htmlFor="contributionDescription" className="text-base font-medium">
                      Please share how you believe your skills and experience can contribute to advancing Loop AI Group's mission. <span className="text-red-500">*</span>
                    </Label>
                    <textarea
                      id="contributionDescription"
                      value={formData.contributionDescription}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("contributionDescription", e.target.value)}
                      placeholder="Share how you can contribute to our mission..."
                      required
                      rows={4}
                      className="w-full p-3 text-base border-2 border-primary/40 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* How you want to join */}
                  <div className="space-y-2">
                    <Label htmlFor="joinType" className="text-base font-medium">
                      How you want to join? <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.joinType}
                      onValueChange={(value) => handleInputChange("joinType", value)}
                      required
                    >
                      <SelectTrigger className="h-12 text-base border-2 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30">
                        <SelectValue placeholder="Select how you want to join" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="internship">Internship</SelectItem>
                        <SelectItem value="full-time">Full Time</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full h-12 text-lg">
                    <Send className="mr-2 h-5 w-5" />
                    Submit
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
