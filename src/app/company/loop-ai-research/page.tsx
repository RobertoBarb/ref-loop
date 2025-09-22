"use client";

import Link from "next/link";
import { ArrowRight, Brain, Globe, Play, Sparkles, Zap, CheckCircle, Award, Users, Building, Clock, FileText, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LoopAIResearch() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Loop AI{" "}
                <span className="gradient-text">Research (LAIR)</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advancing the frontiers of artificial intelligence through cutting-edge research, innovation, and collaboration with leading academic institutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="pulse-glow">
                <Play className="mr-2 h-5 w-5" />
                View Research
              </Button>
              <Button variant="outline" size="lg">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Research Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our research focuses on solving fundamental challenges in artificial intelligence and cognitive computing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Mission</h3>
                <p className="text-muted-foreground">
                  To advance the state-of-the-art in artificial intelligence through fundamental research, applied innovation, and collaboration with the global AI research community.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Research Areas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Cognitive Computing and Human-AI Interaction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Explainable AI and Model Interpretability</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Distributed AI and Edge Computing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>AI Ethics and Responsible AI</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Natural Language Processing and Understanding</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Key Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Research Papers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">PhD Researchers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">University Partnerships</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Patents Filed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Current Research Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ongoing research initiatives that are pushing the boundaries of AI technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Cognitive Architecture for Enterprise AI",
                description: "Developing a new cognitive architecture that enables AI systems to reason, learn, and adapt in complex enterprise environments.",
                status: "Active",
                duration: "2 years",
                team: "8 researchers",
                publications: "3 papers"
              },
              {
                title: "Explainable AI for High-Stakes Decisions",
                description: "Creating interpretable AI models that can explain their reasoning process for critical business decisions.",
                status: "Active",
                duration: "18 months",
                team: "6 researchers",
                publications: "2 papers"
              },
              {
                title: "Distributed AI Training at Scale",
                description: "Researching efficient methods for training large AI models across distributed computing environments.",
                status: "Active",
                duration: "1 year",
                team: "5 researchers",
                publications: "1 paper"
              },
              {
                title: "Human-AI Collaboration Frameworks",
                description: "Developing frameworks that enable seamless collaboration between humans and AI systems in enterprise workflows.",
                status: "Planning",
                duration: "2 years",
                team: "10 researchers",
                publications: "0 papers"
              }
            ].map((project, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-sm text-muted-foreground">{project.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Team:</span> {project.team}
                    </div>
                    <div>
                      <span className="font-medium">Publications:</span> {project.publications}
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Recent Publications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our latest research contributions to the AI community
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Cognitive Orchestration: A New Paradigm for Enterprise AI Systems",
                authors: "Dr. Sarah Chen, Dr. Michael Rodriguez, et al.",
                venue: "NeurIPS 2024",
                year: "2024",
                description: "Introducing a new cognitive orchestration framework that enables AI systems to coordinate complex tasks across enterprise environments.",
                type: "Conference Paper"
              },
              {
                title: "Explainable AI for Financial Risk Assessment: A Case Study",
                authors: "Dr. Lisa Wang, Dr. Robert Johnson, et al.",
                venue: "ICML 2024",
                year: "2024",
                description: "A comprehensive study on applying explainable AI techniques to financial risk assessment in enterprise settings.",
                type: "Conference Paper"
              },
              {
                title: "Distributed Training of Large Language Models: Challenges and Solutions",
                authors: "Dr. Alex Thompson, Dr. Maria Garcia, et al.",
                venue: "ICLR 2024",
                year: "2024",
                description: "Novel approaches to distributed training of large language models with improved efficiency and scalability.",
                type: "Conference Paper"
              },
              {
                title: "AI Ethics in Enterprise: A Framework for Responsible Deployment",
                authors: "Dr. Kevin Lee, Dr. Sofia Patel, et al.",
                venue: "AI & Society",
                year: "2024",
                description: "A comprehensive framework for ensuring ethical AI deployment in enterprise environments.",
                type: "Journal Article"
              }
            ].map((publication, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {publication.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{publication.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold">{publication.title}</h3>
                  <p className="text-sm text-primary font-medium">{publication.authors}</p>
                  <p className="text-sm text-muted-foreground">{publication.venue}</p>
                  <p className="text-muted-foreground">{publication.description}</p>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Read Paper
                    </Button>
                    <Button variant="outline" size="sm">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Cite
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Partnerships */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Academic Partnerships
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaborating with leading universities and research institutions worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Stanford University",
                department: "Computer Science",
                focus: "Natural Language Processing",
                projects: "3 active projects"
              },
              {
                name: "MIT",
                department: "CSAIL",
                focus: "Machine Learning",
                projects: "2 active projects"
              },
              {
                name: "Carnegie Mellon University",
                department: "Machine Learning",
                focus: "AI Ethics",
                projects: "2 active projects"
              },
              {
                name: "UC Berkeley",
                department: "EECS",
                focus: "Distributed Systems",
                projects: "1 active project"
              },
              {
                name: "Oxford University",
                department: "Computer Science",
                focus: "Cognitive AI",
                projects: "2 active projects"
              },
              {
                name: "University of Toronto",
                department: "Vector Institute",
                focus: "Deep Learning",
                projects: "1 active project"
              }
            ].map((partner, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{partner.name}</h3>
                  <p className="text-primary font-medium">{partner.department}</p>
                  <p className="text-sm text-muted-foreground">{partner.focus}</p>
                  <p className="text-xs text-primary">{partner.projects}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Research Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the brilliant minds driving our research initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Chief Research Officer",
                expertise: "Cognitive AI, Human-AI Interaction",
                education: "PhD Stanford, Postdoc MIT"
              },
              {
                name: "Dr. Michael Rodriguez",
                role: "Senior Research Scientist",
                expertise: "Distributed AI, Machine Learning",
                education: "PhD MIT, MS Stanford"
              },
              {
                name: "Dr. Lisa Wang",
                role: "Research Director",
                expertise: "Explainable AI, NLP",
                education: "PhD Berkeley, MS CMU"
              },
              {
                name: "Dr. Robert Johnson",
                role: "Principal Research Scientist",
                expertise: "AI Ethics, Responsible AI",
                education: "PhD Oxford, Postdoc Harvard"
              },
              {
                name: "Dr. Alex Thompson",
                role: "Research Scientist",
                expertise: "Deep Learning, Computer Vision",
                education: "PhD Toronto, MS Waterloo"
              },
              {
                name: "Dr. Maria Garcia",
                role: "Research Scientist",
                expertise: "Natural Language Processing",
                education: "PhD Stanford, MS Barcelona"
              }
            ].map((researcher, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Brain className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{researcher.name}</h3>
                  <p className="text-primary font-medium">{researcher.role}</p>
                  <p className="text-sm text-muted-foreground">{researcher.expertise}</p>
                  <p className="text-xs text-muted-foreground">{researcher.education}</p>
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
              Join Our Research Mission
            </h2>
            <p className="text-xl text-white/90">
              Be part of advancing the frontiers of artificial intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Zap className="mr-2 h-5 w-5" />
                View Open Positions
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
