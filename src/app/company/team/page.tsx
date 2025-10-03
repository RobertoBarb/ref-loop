"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTeam } from "@/hooks/use-team";

export default function Team() {
  const { data, isLoading, error } = useTeam();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-destructive">Error Loading Team</h1>
          <p className="text-muted-foreground">
            {error?.message || "Unable to load team content. Please try again later."}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[30vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-0">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                {data.heroSection.title.split(' ').map((word, index) => 
                  word === 'Team' ? (
                    <span key={index} className="gradient-text">{word} </span>
                  ) : (
                    <span key={index}>{word} </span>
                  )
                )}
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
              {data.executiveTeam.members.map((member, index) => (
                <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-center">
                      {member.image && (
                        <div className="w-40 h-40 mx-auto mb-4 relative overflow-hidden rounded-full">
                          <Image
                            src={member.image.asset.url}
                            alt={member.image.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-primary font-medium text-sm">{member.role}</p>
                    </div>
                    
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1 group/btn btn-gradient-outline" asChild>
                        <Link href={`/company/team/${member.slug.current}`}>
                          <Mail className="h-4 w-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                          View Info
                        </Link>
                      </Button>
                      {member.linkedinUrl ? (
                        <Button size="sm" variant="outline" className="flex-1 group/btn btn-gradient-outline" asChild>
                          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
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
                  image: "/images/Team/tom_davenport.avif"
                },
                {
                  name: "Vinay Chaudhri",
                  image: "/images/Team/vinay.avif"
                },
                {
                  name: "Raul Véjar",
                  image: "/images/Team/raul.avif"
                },
                {
                  name: "Massimo Marchiori",
                  image: "/images/Team/massimo.avif"
                },
                {
                  name: "Tony Trousset",
                  image: "/images/Team/tony.avif"
                },
                {
                  name: "Doug Bewsher",
                  image: "/images/Team/doug.avif"
                },
                {
                  name: "Claus Karthe",
                  image: "/images/Team/claus.avif"
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
