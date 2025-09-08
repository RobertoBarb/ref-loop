"use client";

import Link from "next/link";
import { ArrowRight, Bot, Brain, Cloud, Database, Globe, Play, Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  La Piattaforma{" "}
                  <span className="gradient-text">AI Agents</span>{" "}
                  Leader
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Potenzia la tua forza lavoro costruendo i tuoi AI Agents enterprise 
                  che forniscono lavoro reale utilizzando qualsiasi ML/LLM, i tuoi sistemi legacy 
                  e la tua infrastruttura.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="pulse-glow">
                  <Play className="mr-2 h-5 w-5" />
                  Prenota una Demo
                </Button>
                <Button variant="outline" size="lg">
                  Scopri di Più
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-effect rounded-2xl p-8 floating-animation">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Bot className="h-24 w-24 mx-auto text-primary" />
                    <h3 className="text-2xl font-semibold">AI Agent Orchestra</h3>
                    <p className="text-muted-foreground">Gestione intelligente degli agenti AI</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Riprendi il Controllo e Attraversa il{" "}
              <span className="gradient-text">Caos dell'AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Con Loop AI Agent Orchestra, riprendi il controllo e attraversa il caos dell'AI!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Qualsiasi ML o LLM",
                description: "Sfrutta qualsiasi LLM/ML o i modelli integrati di Loop Q, personalizzati per il caso d'uso del tuo AI agent."
              },
              {
                icon: Database,
                title: "Qualsiasi Sistema Legacy",
                description: "I tuoi AI agents imparano dai colleghi umani utilizzando dati storici, eseguendo compiti semplici e complessi."
              },
              {
                icon: Cloud,
                title: "Qualsiasi Infrastruttura",
                description: "Esegui e scala training, inferenza e i tuoi AI agents enterprise senza problemi attraverso la tua infrastruttura."
              },
              {
                icon: Sparkles,
                title: "Strumenti Low-Code",
                description: "Strumenti visuali no-code e low-code costruiti per i team, con permessi granulari per sviluppo, test e deployment."
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
              Gestione degli AI Agents Semplificata
            </h2>
            <p className="text-xl text-white/90">
              Distribuisci, scala e gestisci senza problemi tutte le tue soluzioni AI 
              e AI Agents attraverso più vendor da una piattaforma unificata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Zap className="mr-2 h-5 w-5" />
                Inizia Ora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Globe className="mr-2 h-5 w-5" />
                Scopri le Soluzioni
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
              &copy; {new Date().getFullYear()} Loop AI Group e le sue affiliate. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
