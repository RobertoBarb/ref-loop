"use client";

import Link from "next/link";
import Image from "next/image";
import { Bot, Brain, Cloud, Database, Play, Zap, Shield, BarChart3, Settings, Clock, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LoopAIAgentsOrchestra() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                The AI Agents Platform
                </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Loop Agent Orchestra serves as an enterprise AI single agent or multi-agent development and orchestration hub, integrating four foundational layers
                </p>
              </div>
              
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="pulse-glow">
                  <Play className="mr-2 h-5 w-5" />
                BOOK A DEMO
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Pillars Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Architectural Pillars
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four foundational layers that power enterprise AI orchestration
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Full Integration */}
            <Card className="group glass-effect hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 border-2 hover:border-primary/30">
              <CardContent className="p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Database className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      Full Integration with your Legacy Systems and Data
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="group/item hover:bg-primary/5 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:translate-x-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold mb-2 group-hover/item:text-primary transition-colors duration-300">
                            APIs, Connectors and Virtual Agents
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            Easily integrates with your enterprise systems via APIs, ready-made connectors, or virtual agents that interact with your visual interfaces.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group/item hover:bg-primary/5 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:translate-x-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold mb-2 group-hover/item:text-primary transition-colors duration-300">
                            Data Pipeline
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            ETL (Extract, Transform, Load) workflows to normalize heterogeneous data inputs for agent consumption.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group/item hover:bg-primary/5 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:translate-x-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold mb-2 group-hover/item:text-primary transition-colors duration-300">
                            Protocol Support
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            Compatibility with SOAP, Kafka, and MQTT for real-time event streaming.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compute Infrastructure */}
            <Card className="group glass-effect hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 border-2 hover:border-accent/30">
              <CardContent className="p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Cloud className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                      Compute Infrastructure Orchestration
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="group/item hover:bg-accent/5 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:translate-x-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold mb-2 group-hover/item:text-accent transition-colors duration-300">
                            Cloud Agnosticism
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            Deploy Loop Agent Orchestra and Agents on your preferred cloud service or on-premise for full control and security.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group/item hover:bg-accent/5 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:translate-x-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold mb-2 group-hover/item:text-accent transition-colors duration-300">
                            Resource Management
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            GPU/TPU scheduling, containerized inference endpoints, distributed training, load balancing and agent orchestration.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group/item hover:bg-accent/5 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:translate-x-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold mb-2 group-hover/item:text-accent transition-colors duration-300">
                            Latency Optimization
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            Load balancing and edge caching for low-latency inference in hybrid environments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Algorithmic Integration */}
            <Card className="group glass-effect hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 border-2 hover:border-primary/30">
              <CardContent className="p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      Algorithmic Integration & Optimization
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="group/item hover:bg-primary/5 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:translate-x-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold mb-2 group-hover/item:text-primary transition-colors duration-300">
                            LLM/ML Agnosticism
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            Besides the free, natively integrated Loop Q, it supports TensorFlow, PyTorch, ONNX, Hugging Face Transf., and any native ML/LLM.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group/item hover:bg-primary/5 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:translate-x-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold mb-2 group-hover/item:text-primary transition-colors duration-300">
                            Automated Benchmarking
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            CAPE engine evaluates latency, accuracy, KPI and cost-per-inference metrics across LLM/ML providers or locally run open source models.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group/item hover:bg-primary/5 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:translate-x-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold mb-2 group-hover/item:text-primary transition-colors duration-300">
                            LLM/ML Hot Swap
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            Visually compare any new LLM/ML in ghost mode against your production data and models, then seamlessly hot-swap with zero downtime.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Low-Code AI Control Center */}
            <Card className="group glass-effect hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 border-2 hover:border-accent/30">
              <CardContent className="p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                      Low-Code AI Control Center for Teams
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="group/item hover:bg-accent/5 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:translate-x-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold mb-2 group-hover/item:text-accent transition-colors duration-300">
                            Simple Conversational UI
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            Conversational UI for training, model comparison, AI agent dev., deployment and monitoring with complete feedback and control.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group/item hover:bg-accent/5 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:translate-x-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold mb-2 group-hover/item:text-accent transition-colors duration-300">
                            Built for Teams
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            Build &gt; Iterate &gt; Deploy &gt; Monitor with project management and granular permissions for internal teams and external consultants.
                          </p>
                        </div>
              </div>
            </div>
            
                    <div className="group/item hover:bg-accent/5 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:translate-x-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold mb-2 group-hover/item:text-accent transition-colors duration-300">
                            Observability and Analytics
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            Detailed insights into the quality, efficiency, drift, and ROI of your AI agents through technical and business dashboards and alerts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vendor Agnostic AI Control Center */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Vendor Agnostic AI Control Center for AI Agent Lifecycle Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Loop AI Agents Orchestra is a powerful and scalable framework designed to simplify the development, deployment, optimization, and monitoring of AI agents. Since 2019, the platform has been validated in mission-critical production environments with Fortune 100 organizations.
            </p>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Built on a vendor-agnostic architecture, Loop AI Agents Orchestra seamlessly integrates diverse AI technologies—including commercial APIs, open-source libraries, and proprietary algorithms—into a unified lifecycle management solution. This ensures optimal computational efficiency, superior algorithmic performance, and cost-effective operation across all AI agent components.
            </p>
          </div>

          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Future Proof AI Control Center
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Loop AI Agents Orchestra is a robust, scalable framework engineered to streamline the development, deployment, runtime optimization and monitoring of your AI agents. Leveraging a vendor-agnostic architecture, it integrates heterogeneous AI technologies—spanning commercial APIs, open-source libraries, and proprietary algorithms—to deliver a lifecycle management solution that ensures maximum computational efficiency, algorithmic performance, and cost optimization across all AI agent components.
            </p>
          </div>

          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              AI Agents: Technical Definition
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              AI agents are autonomous computational entities engineered to fulfill defined job roles by executing end-to-end workflows within one or more enterprise legacy systems, mirroring the capabilities of human employees. These agents handle tasks ranging from discrete automation to complex, multi-step processes through modular, interoperable components. Each AI agent comprises multiple blocks—powered by machine learning (ML) models, large language models (LLMs), decision-making heuristics, and collaborative interactions with other AI agents—enabling them to replicate or enhance human workloads at scale. Loop AI Agents Orchestra optimizes their design and runtime performance via a centralized control plane, ensuring seamless operation regardless of the underlying technology in each block of every AI agent.
            </p>
          </div>
        </div>
      </section>

      {/* Tackling Algorithm Selection Complexity */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Tackling Algorithm Selection Complexity
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              This means that your company gains actual control over its suppliers and adopt not just a single vendor, but the best vendor for each block of its application.
            </p>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              The proliferation of paid and open-source ML/LLM providers creates a combinatorial explosion of choices. With Loop AI Agents Orchestra your organization gains actual control over its AI suppliers and adopt not just a single vendor strategy, but the best vendor for each block of its AI Agent or AI Application with easy performance comparison and hot-swap:
            </p>
              </div>
              
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Performance Telemetry</h3>
                <p className="text-muted-foreground">Real-time monitoring of accuracy, scores, perplexity, inference time, resource utilization and actual KPIs.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Cost Analysis</h3>
                <p className="text-muted-foreground">Normalized cost-per-operation metrics across API providers, self-hosted models and AI Agents.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Lifecycle Automation</h3>
                <p className="text-muted-foreground">Continuous retraining, provider A/B testing, and deployment of superior algorithms without manual intervention.</p>
              </CardContent>
            </Card>
            </div>

          {/* Training Models Image */}
          <div className="text-center mb-16">
            <Image 
              src="/images/Loop AI Agent Orchestra - Training Models.avif" 
              alt="Loop AI Agent Orchestra - Training Models" 
              width={1200}
              height={600}
              className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Technical Heritage Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Technical Heritage Since 2012
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Validated in mission-critical production environments with Fortune 100 organizations since 2019, Loop AI Agents Orchestra is built by Loop AI Group—a pioneer in enterprise AI since 2012. Leveraging a decade of expertise in distributed systems and MLOps, the platform streamlines AI agent development by abstracting low-level coding through a declarative configuration layer. It enables rapid prototyping with pre-built agent templates and seamlessly integrates with MLOps pipelines for comprehensive end-to-end governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="glass-effect text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Algorithmic Efficiency</h3>
                <p className="text-muted-foreground">Reduce inference costs by up to 40% through automated provider selection.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Deployment Velocity</h3>
                <p className="text-muted-foreground">Prototype-to-production in under 72 hours with pre-integrated connectors.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Vendor Neutrality</h3>
                <p className="text-muted-foreground">Avoid lock-in with a pluggable, multi-vendor runtime environment.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Real-Time Adaptability</h3>
                <p className="text-muted-foreground">Sub-millisecond algorithm swaps via service orchestration.</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="glass-effect text-center">
                <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                <h3 className="text-xl font-semibold">Observability</h3>
                <p className="text-muted-foreground">Integrated dashboards for latency, throughput, and model drift monitoring.</p>
                </CardContent>
              </Card>
          </div>

          {/* LLM-ML Building Image */}
          <div className="text-center mb-16">
            <Image 
              src="/images/Loop AI Agents Orchestra - LLM-ML building with no coding.avif" 
              alt="Loop AI Agents Orchestra - LLM-ML building with no coding" 
              width={1200}
              height={600}
              className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl"
            />
          </div>

          {/* LLM-ML Comparison Image */}
          <div className="text-center mb-16">
            <Image 
              src="/images/Loop AI Agents Orchestra - LLM-ML comparison.avif" 
              alt="Loop AI Agents Orchestra - LLM-ML comparison" 
              width={1200}
              height={600}
              className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Responsible AI Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Responsible AI and Explainability with Loop Orchestra
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">EU AI Act Compliance Simplified</h3>
                <p className="text-muted-foreground">
                  Loop Orchestra aligns seamlessly with the EU AI Act by integrating robust security features such as end-to-end encryption (TLS 1.3) and role-based access control (RBAC). These ensure data protection and accountability, key requirements for high-risk AI systems. Comprehensive audit logging provides a transparent record of operations, reducing the need for complex external compliance solutions and making adherence straightforward and cost-effective.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Streamlined Development with Ethical Integration</h3>
                <p className="text-muted-foreground">
                  The platform enhances efficiency by embedding responsible AI practices into the development process. Its vendor-agnostic architecture supports any large language model (LLM) or machine learning (ML) model, paired with low-code workflows and observability tools like model drift monitoring and automated benchmarking. This saves time and resources, allowing developers to maintain ethical standards effortlessly while scaling AI solutions.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Building Trust through Explainability</h3>
                <p className="text-muted-foreground">
                  Loop Orchestra fosters trust with explainable AI features, including methods like LIME and SHAP, which clarify how models make predictions. Visualization tools highlight factor contributions to outputs, offering transparency that builds confidence among users and stakeholders. This focus on explainability ensures alignment with regulatory and societal expectations, particularly in high-stakes applications.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">A Unified Solution for 2025 and Beyond</h3>
                <p className="text-muted-foreground">
                  By combining compliance, streamlined development, and trust-building features, Loop Orchestra empowers enterprises to create cognitive applications that are both compliant and trustworthy. In the dynamic AI landscape of 2025, this integrated approach positions the platform as a leader in responsible and efficient AI development.
                </p>
              </div>
            </div>
          </div>

          {/* Responsible AI Image */}
          <div className="text-center mb-16">
            <Image 
              src="/images/loop ai agent orchestra - responsible ai.avif" 
              alt="Loop AI Agent Orchestra - Responsible AI" 
              width={1200}
              height={600}
              className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Technical Specifications Summary */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Technical Specifications Summary
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Visual Low-Code Workflows</h3>
                <p className="text-muted-foreground">AI agents are created using visual blocks, each exposing its own API for potential reuse in other AI agents. The platform includes a comprehensive library of data cleaning tools, and users can add their own custom tools or code snippets to the library, making them shareable with the team.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Data Connectors</h3>
                <p className="text-muted-foreground">Available for most systems including major databases, Storage systems, cloud repositories</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Model and Vector Library</h3>
                <p className="text-muted-foreground">A library for managing model versions, tracking status, team permission and ensuring smooth deployment in production. It provides a centralized store, APIs, and UI to oversee models and vectors lifecycle, including lineage, versioning, aliasing, tagging, and annotations.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Algorithm and Code Library</h3>
                <p className="text-muted-foreground">A library for managing algorithms, code, and AI agents, including versioning, metrics, parameters, and artifacts. It acts as a centralized repository for tracking model evolution, capturing essential details like data, artifacts, and environment configurations.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Model Drift and Monitoring</h3>
                <p className="text-muted-foreground">Tracks the performance and accuracy of deployed models over time, detecting shifts in data distribution or model behavior. It provides real-time alerts, visualizations, and analytics to ensure models remain reliable and aligned with business goals.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Explainable ML</h3>
                <p className="text-muted-foreground">Attention mechanisms to highlight important input features, post-hoc methods like LIME and SHAP to generate understandable explanations for predictions, and providing transparency in the model's training process.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">LLM Deployments</h3>
                <p className="text-muted-foreground">Designed to simplify access to both SaaS and open-source LLM models, this platform provides a unified interface with secure, authenticated access. It also offers a consistent set of APIs for leading LLMs.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Evaluation Module</h3>
                <p className="text-muted-foreground">Built for comprehensive analysis of ML/LLM model and AI agent performance, this toolkit enables objective comparisons across different model versions. It supports the evaluation of both traditional SaaS or open-source ML algorithms and advanced SaaS or open-source LLMs.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Projects</h3>
                <p className="text-muted-foreground">Standardize the packaging of ML models and AI agent code, visual workflows, and artifacts, similar to an executable that can be deployed in preconfigured environments—whether in development, pre-production, or production infrastructure.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Computing Infrastructure</h3>
                <p className="text-muted-foreground">The computing resources are configured once by system engineers and can then be used across any project. They can be assigned with granular permissions to groups or team members via a visual interface. Support is provided for major cloud platforms as well as local infrastructures.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Deployment Modes</h3>
                <p className="text-muted-foreground">Dockerized microservices, serverless functions, or bare-metal clusters.</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Scalability</h3>
                <p className="text-muted-foreground">Horizontal scaling with Kubernetes; up to 10,000 concurrent agents per cluster (tested).</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect">
                <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Security</h3>
                <p className="text-muted-foreground">End-to-end encryption (TLS 1.3), RBAC, and audit logging for compliance (GDPR, CCPA).</p>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Engineer Your AI Future */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Engineer Your AI Future
            </h2>
            <p className="text-xl text-muted-foreground">
              Loop AI Agents Orchestra is a battle-tested platform, developed since 2012, for organizations building and scaling a digital workforce of AI agents. Whether optimizing LLMs for natural language tasks or deploying reinforcement learning for automation, it provides a vendor-agnostic strategy, flexibility, and cost optimization—keeping you in full control of your AI vendors and consultants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="pulse-glow" asChild>
                <Link href="/success-cases">
                  <Play className="mr-2 h-5 w-5" />
                  SUCCESS CASES
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Management Made Simple */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              AI Agent Management Made Simple
            </h2>
            <h3 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
              Your Next AI Agent Is Minutes Away. No Coding Required.
            </h3>
            <p className="text-xl text-muted-foreground">
              Smart. Fast. Tireless. Build your competitive digital workforce today from prototype to production.
            </p>
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

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
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
