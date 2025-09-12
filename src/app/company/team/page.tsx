"use client";

import Link from "next/link";
import { ArrowRight, Users, Globe, Play, Sparkles, Zap, CheckCircle, Award, Brain, Building, Mail, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Our{" "}
                <span className="gradient-text">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the brilliant minds behind Loop AI Group. Our diverse team of AI researchers, engineers, and business leaders is driving the future of enterprise AI.
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

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visionary leaders driving Loop AI Group's mission and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Chief Executive Officer",
                bio: "Former AI researcher at Stanford with 15+ years in enterprise AI applications. Led AI initiatives at Fortune 500 companies before founding Loop AI Group.",
                expertise: ["AI Strategy", "Enterprise Applications", "Leadership"],
                image: "/images/team/sarah-chen.jpg"
              },
              {
                name: "Michael Rodriguez",
                role: "Chief Technology Officer",
                bio: "Expert in cognitive computing and distributed systems with extensive enterprise experience. Previously led engineering teams at major tech companies.",
                expertise: ["Cognitive Computing", "Distributed Systems", "Engineering"],
                image: "/images/team/michael-rodriguez.jpg"
              },
              {
                name: "Dr. Lisa Wang",
                role: "Chief AI Officer",
                bio: "Leading AI researcher and former head of AI at major tech companies. PhD in Machine Learning from MIT with 20+ years in AI research and development.",
                expertise: ["Machine Learning", "AI Research", "Innovation"],
                image: "/images/team/lisa-wang.jpg"
              },
              {
                name: "David Kim",
                role: "Chief Product Officer",
                bio: "Product visionary with deep experience in AI platform development. Previously led product teams at leading enterprise software companies.",
                expertise: ["Product Strategy", "AI Platforms", "User Experience"],
                image: "/images/team/david-kim.jpg"
              },
              {
                name: "Jennifer Martinez",
                role: "Chief Revenue Officer",
                bio: "Sales and marketing leader with extensive experience in enterprise AI solutions. Built and scaled sales teams at multiple AI companies.",
                expertise: ["Sales Strategy", "Enterprise Sales", "Market Development"],
                image: "/images/team/jennifer-martinez.jpg"
              },
              {
                name: "Dr. Robert Johnson",
                role: "Chief Research Officer",
                bio: "Leading researcher in cognitive AI and human-AI interaction. Former professor at Carnegie Mellon with 25+ years in AI research.",
                expertise: ["Cognitive AI", "Human-AI Interaction", "Research"],
                image: "/images/team/robert-johnson.jpg"
              }
            ].map((leader, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{leader.name}</h3>
                    <p className="text-primary font-medium">{leader.role}</p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{leader.bio}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Linkedin className="h-4 w-4 mr-1" />
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Research & Development Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              World-class researchers and engineers pushing the boundaries of AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Alex Thompson",
                role: "Senior AI Researcher",
                focus: "Natural Language Processing"
              },
              {
                name: "Maria Garcia",
                role: "Machine Learning Engineer",
                focus: "Computer Vision"
              },
              {
                name: "Dr. James Wilson",
                role: "AI Research Scientist",
                focus: "Cognitive Computing"
              },
              {
                name: "Sofia Patel",
                role: "Data Scientist",
                focus: "Predictive Analytics"
              },
              {
                name: "Dr. Kevin Lee",
                role: "AI Research Director",
                focus: "Explainable AI"
              },
              {
                name: "Anna Kowalski",
                role: "ML Platform Engineer",
                focus: "Distributed Systems"
              },
              {
                name: "Dr. Carlos Mendez",
                role: "AI Research Fellow",
                focus: "Human-AI Interaction"
              },
              {
                name: "Rachel Brown",
                role: "AI Engineer",
                focus: "Model Optimization"
              }
            ].map((member, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4 space-y-3 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Engineering Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Talented engineers building robust, scalable AI platforms for enterprise use
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Platform Engineering",
                description: "Building the core infrastructure that powers our cognitive platforms",
                teamSize: "25+ Engineers",
                focus: ["Distributed Systems", "Cloud Infrastructure", "API Development"]
              },
              {
                title: "AI Engineering",
                description: "Developing and optimizing AI models and algorithms for enterprise use",
                teamSize: "20+ Engineers",
                focus: ["Model Development", "Algorithm Optimization", "ML Infrastructure"]
              },
              {
                title: "Frontend Engineering",
                description: "Creating intuitive user interfaces for our AI platforms",
                teamSize: "15+ Engineers",
                focus: ["React/Next.js", "UI/UX Design", "Web Applications"]
              },
              {
                title: "DevOps & Security",
                description: "Ensuring platform reliability, security, and compliance",
                teamSize: "12+ Engineers",
                focus: ["DevOps", "Security", "Compliance"]
              },
              {
                title: "Data Engineering",
                description: "Building data pipelines and processing systems for AI applications",
                teamSize: "18+ Engineers",
                focus: ["Data Pipelines", "ETL Processes", "Data Quality"]
              },
              {
                title: "Quality Assurance",
                description: "Ensuring the highest quality standards for our platforms",
                teamSize: "10+ Engineers",
                focus: ["Testing", "Quality Assurance", "Performance"]
              }
            ].map((team, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{team.title}</h3>
                  <p className="text-muted-foreground">{team.description}</p>
                  <p className="text-sm font-medium text-primary">{team.teamSize}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Focus Areas:</h4>
                    <div className="flex flex-wrap gap-1">
                      {team.focus.map((area, areaIndex) => (
                        <span key={areaIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Join Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're always looking for talented individuals to join our mission of transforming enterprise AI
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Why Work at Loop AI Group?</h3>
                  <p className="text-muted-foreground">
                    Join a team of passionate innovators working on cutting-edge AI technology that's transforming how enterprises operate.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">What We Offer:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Competitive salary and equity</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Comprehensive health benefits</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Flexible work arrangements</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Professional development opportunities</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Open Positions:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Senior AI Research Scientist</li>
                      <li>• Machine Learning Engineer</li>
                      <li>• Full-Stack Developer</li>
                      <li>• DevOps Engineer</li>
                      <li>• Product Manager</li>
                      <li>• Sales Engineer</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <Button size="lg">
                    <Users className="mr-2 h-5 w-5" />
                    View Open Positions
                  </Button>
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
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-white/90">
              Discover how our team can help transform your organization with AI
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
              <Users className="h-6 w-6 text-primary" />
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
