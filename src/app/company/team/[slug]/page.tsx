"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Linkedin, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTeamMember } from "@/hooks/use-team-member";

interface TeamMemberPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const resolvedParams = use(params);
  const { data: member, isLoading, error } = useTeamMember(resolvedParams.slug);

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

  if (error || !member) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-destructive">Member Not Found</h1>
          <p className="text-muted-foreground">
            {error?.message ?? "The requested team member could not be found."}
          </p>
          <Link href="/company/team">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Team
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[40vh] flex items-center mb-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-0 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/company/team" className="relative z-10 inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Team
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image - First on mobile, second on desktop */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                {member.image && (
                <div className="w-80 h-80 relative overflow-hidden rounded-2xl glass-effect p-4">
                  <Image
                      src={member.image.asset.url}
                      alt={member.image.alt}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                )}
              </div>
              
              {/* Content - Second on mobile, first on desktop */}
              <div className="space-y-6 order-2 lg:order-1">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                    {member.name}
                  </h1>
                  <p className="text-2xl text-primary font-semibold">
                    {member.role}
                  </p>
                  
                  <div className="flex space-x-4">
                    {member.linkedinUrl ? (
                      <Button variant="outline" className="group/btn btn-gradient-outline" asChild>
                        <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                          LinkedIn
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" className="group/btn btn-gradient-outline" disabled>
                        <Linkedin className="mr-2 h-4 w-4 opacity-50" />
                        LinkedIn
                      </Button>
                    )}
                  </div>
                </div>
                
                {member.bio && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                )}
                
                {member.detailedBio && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {member.detailedBio}
                </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-8 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Meet the Team
            </h2>
            <p className="text-xl text-white/90">
              Discover our team and their expertise
            </p>
            <div className="flex justify-center">
              <Link href="/company/team">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Users className="mr-2 h-5 w-5" />
                  Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
