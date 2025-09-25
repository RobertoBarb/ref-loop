"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Globe, Mail, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// LinkedIn links for team members
const linkedinLinks: Record<string, string> = {
  "andrea-pitrone": "https://www.linkedin.com/in/andrea-pitrone-a012712/",
  "vinay-chaudhri": "https://www.linkedin.com/in/vinay-k-chaudhri-849556/"
};

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[30vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-0">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Executive{" "}
                <span className="gradient-text">Team</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "GM Calafiore",
                  role: "PRESIDENT, FOUNDER",
                  image: "/images/team/GM.avif"
                },
                {
                  name: "Patrick Ehlen, PhD",
                  role: "CHIEF AI ADVISOR",
                  image: "/images/team/Patrick_new.avif"
                },
                {
                  name: "Viqar Shariff",
                  role: "CHIEF STRATEGY OFFICER",
                  image: "/images/team/viqar.avif"
                },
                {
                  name: "Andrea Pitrone",
                  role: "CHIEF OPERATING OFFICER",
                  image: "/images/team/andrea.avif"
                },
                {
                  name: "Daniele Preda",
                  role: "CUSTOMER SUCCESS DIRECTOR",
                  image: "/images/team/daniele_preda.png"
                },
                {
                  name: "Luigi Manzi",
                  role: "HEAD OF SOFTWARE ENGINEERING",
                  image: "/images/team/luigi.avif"
                },
                {
                  name: "Marco Torresi",
                  role: "HEAD OF GLOBAL PR",
                  image: "/images/team/marco.avif"
                },
                {
                  name: "Jaana Heikkila",
                  role: "VP, MARKETING",
                  image: "/images/team/jaana.avif"
                },
                {
                  name: "Ilaria Colleoni",
                  role: "CHIEF EXECUTIVE OFFICER",
                  image: "/images/team/ilaria.avif"
                }
              ].map((member, index) => (
                <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-center">
                      <div className="w-40 h-40 mx-auto mb-4 relative overflow-hidden rounded-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-primary font-medium text-sm">{member.role}</p>
                    </div>
                    
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1 group/btn btn-gradient-outline" asChild>
                        <Link href={`/company/team/${member.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace('phd', '').replace('--', '-').replace(/-$/, '')}`}>
                          <Mail className="h-4 w-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                          View Info
                        </Link>
                      </Button>
                      {linkedinLinks[member.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace('phd', '').replace('--', '-').replace(/-$/, '')] ? (
                        <Button size="sm" variant="outline" className="flex-1 group/btn btn-gradient-outline" asChild>
                          <a href={linkedinLinks[member.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace('phd', '').replace('--', '-').replace(/-$/, '')]} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                            LinkedIn
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="flex-1 group/btn btn-gradient-outline" disabled>
                          <Linkedin className="h-4 w-4 mr-1 opacity-50" />
                          LinkedIn
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board of Advisors */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Board of Advisors
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Tom Davenport",
                  image: "/images/team/tom_davenport.avif"
                },
                {
                  name: "Vinay Chaudhri",
                  image: "/images/team/vinay.avif"
                },
                {
                  name: "Raul Véjar",
                  image: "/images/team/raul.avif"
                },
                {
                  name: "Massimo Marchiori",
                  image: "/images/team/massimo.avif"
                },
                {
                  name: "Tony Trousset",
                  image: "/images/team/tony.avif"
                },
                {
                  name: "Doug Bewsher",
                  image: "/images/team/doug.avif"
                },
                {
                  name: "Claus Karthe",
                  image: "/images/team/claus.avif"
                }
              ].map((advisor, index) => (
                <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-center">
                      <div className="w-40 h-40 mx-auto mb-4 relative overflow-hidden rounded-full">
                        <Image
                          src={advisor.image}
                          alt={advisor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{advisor.name}</h3>
                    </div>
                    
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1 group/btn btn-gradient-outline" asChild>
                        <Link href={`/company/team/${advisor.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace('--', '-').replace(/-$/, '')}`}>
                          <Mail className="h-4 w-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                          View Info
                        </Link>
                      </Button>
                      {linkedinLinks[advisor.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace('--', '-').replace(/-$/, '')] ? (
                        <Button size="sm" variant="outline" className="flex-1 group/btn btn-gradient-outline" asChild>
                          <a href={linkedinLinks[advisor.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace('--', '-').replace(/-$/, '')]} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                            LinkedIn
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="flex-1 group/btn btn-gradient-outline" disabled>
                          <Linkedin className="h-4 w-4 mr-1 opacity-50" />
                          LinkedIn
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
