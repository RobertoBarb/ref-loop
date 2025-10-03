"use client";

import Link from "next/link";
import Image from "next/image";
import { Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAboutUs } from "@/hooks/use-about-us";

export default function AboutUs() {
  const { data, isLoading, error } = useAboutUs();

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
          <h1 className="text-2xl font-bold text-destructive">Error Loading About Us</h1>
          <p className="text-muted-foreground">
            {error?.message || "Unable to load about us content. Please try again later."}
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
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
                {data.heroSection.title.split(' ').map((word, index) => 
                  word === 'Us' ? (
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

      {/* Mission & Vision Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="glass-effect">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold">{data.missionVision.mission.title}</h2>
                  <h3 className="text-2xl font-semibold text-primary">{data.missionVision.mission.description}</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold">{data.missionVision.vision.title}</h2>
                  <h3 className="text-2xl font-semibold text-primary">{data.missionVision.vision.description}</h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">{data.ourStory.title}</h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {data.ourStory.sections.map((section, index) => (
              <Card key={index} className="glass-effect">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary">{section.title}</h3>
                    <div className={`grid ${section.image ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-8 items-center`}>
                      <div>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                      {section.image && (
                        <div className="glass-effect rounded-2xl p-4 flex justify-center">
                          <Image
                            src={section.image.asset.url}
                            alt={section.image.alt}
                            width={350}
                            height={150}
                            className="rounded-xl object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Images Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Team Images - Same Row */}
            <div className="grid md:grid-cols-2 gap-8">
              {data.teamImages.images.map((imageData, index) => (
                <div key={index} className="glass-effect rounded-2xl p-6">
                  <Image
                    src={imageData.image.asset.url}
                    alt={imageData.image.alt}
                    width={600}
                    height={400}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
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
              {data.ctaSection.title}
            </h2>
            <p className="text-xl text-white/90">
              {data.ctaSection.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={data.ctaSection.button.link}>
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Users className="mr-2 h-5 w-5" />
                  {data.ctaSection.button.text}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
