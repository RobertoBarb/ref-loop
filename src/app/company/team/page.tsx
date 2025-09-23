"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Globe, Mail, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
                  image: "/images/team/daniele-preda.avif"
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
                        <Link href={`/company/team/${member.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace('phd', '').replace('--', '-')}`}>
                          <Mail className="h-4 w-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                          View Info
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 group/btn btn-gradient-outline">
                        <Linkedin className="h-4 w-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                        LinkedIn
                      </Button>
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
                        <Link href={`/company/team/${advisor.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace('--', '-')}`}>
                          <Mail className="h-4 w-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                          View Info
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 group/btn btn-gradient-outline">
                        <Linkedin className="h-4 w-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                        LinkedIn
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90">
              Contact us today to learn how Loop AI Group can transform your enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cognitive-platforms/book-demo">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 btn-gradient-hover">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Demo
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 group/btn btn-gradient-outline">
                <Globe className="mr-2 h-5 w-5 group-hover/btn:scale-110 transition-transform duration-300" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
