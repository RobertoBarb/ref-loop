"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight, Download, Eye, Building, BarChart3, Users, Award, Target, TrendingUp, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useSuccessCase } from "@/hooks/use-success-case";
import { useSuccessCases } from "@/hooks/use-success-cases";

// Icon mapping for dynamic icons
const iconMap: Record<string, any> = {
  'Building': Building,
  'BarChart3': BarChart3,
  'Users': Users,
  'Award': Award,
  'Target': Target,
  'TrendingUp': TrendingUp,
  'Globe': Globe,
};

interface SuccessCasePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function SuccessCasePage({ params }: SuccessCasePageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const [isImageLoading, setIsImageLoading] = useState(true);
  
  // Fetch the specific success case
  const { data: currentCase, isLoading: caseLoading, error: caseError } = useSuccessCase(resolvedParams.id);
  
  // Fetch all success cases for navigation
  const { data: allCasesData } = useSuccessCases();
  const allCases = allCasesData?.cases || [];
  
  // Find current index for navigation
  const currentIndex = allCases.findIndex(case_ => case_.id.current === resolvedParams.id);

  if (caseLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (caseError || !currentCase) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-destructive">Success Case Not Found</h1>
          <p className="text-muted-foreground">
            {caseError?.message || "The requested success case could not be found."}
          </p>
          <Button asChild>
            <Link href="/success-cases">Back to Success Cases</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handlePrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : allCases.length - 1;
    const prevCase = allCases[prevIndex];
    if (prevCase) {
      router.push(`/success-cases/${prevCase.id.current}`);
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex < allCases.length - 1 ? currentIndex + 1 : 0;
    const nextCase = allCases[nextIndex];
    if (nextCase) {
      router.push(`/success-cases/${nextCase.id.current}`);
    }
  };

  // Get the icon component
  const IconComponent = iconMap[currentCase.icon] || Building;

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <section className="relative bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
              <Button variant="ghost" asChild className="btn-gradient-outline">
                <Link href="/success-cases" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Success Cases</span>
                </Link>
              </Button>
              
              <div className="flex items-center space-x-4">
                {currentCase.pdf && (
                <Button variant="outline" size="sm" asChild className="btn-gradient-hover text-sm">
                    <a href={currentCase.pdf.asset.url} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
                )}
              </div>
          </div>
        </div>
      </section>

      {/* Success Case Content */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div className="space-y-4">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">{currentCase.industry}</div>
                    <div className="text-xs text-muted-foreground">Success Case</div>
                  </div>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold">
                  {currentCase.title}
                </h2>
              </div>

              {/* Challenge Section */}
              <Card className="glass-effect">
                <CardContent className="space-y-4">
                  <h2 className="text-2xl font-semibold">Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentCase.description}
                  </p>
                </CardContent>
              </Card>

              {/* Solution Section */}
              <Card className="glass-effect">
                <CardContent className="space-y-4">
                  <h2 className="text-2xl font-semibold">Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentCase.solution}
                  </p>
                </CardContent>
              </Card>
            </div>

              {/* Image Carousel */}
              <div className="relative">
                <Card className="glass-effect overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[3/2] relative">
                      {isImageLoading && (
                        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
                          <div className="text-muted-foreground">Loading image...</div>
                        </div>
                      )}
                      {currentCase.image && (
                      <Image 
                          src={currentCase.image.asset.url} 
                          alt={currentCase.image.alt}
                        fill
                        className="object-cover transition-opacity duration-300"
                        onLoad={() => setIsImageLoading(false)}
                        priority
                      />
                      )}
                    </div>
                  </CardContent>
                </Card>
              
                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-6">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handlePrevious}
                    className="btn-gradient-outline flex items-center space-x-2 text-base"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </Button>
                  
                  <div className="text-sm text-muted-foreground">
                    {currentIndex + 1} of {allCases.length}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleNext}
                    className="btn-gradient-outline flex items-center space-x-2 text-base"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cases Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Explore More Success Cases</h2>
            <p className="text-muted-foreground">Discover other implementations across different industries</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {allCases
              .filter((_, index) => index !== currentIndex)
              .slice(0, 3)
              .map((successCase) => {
                const RelatedIconComponent = iconMap[successCase.icon] || Building;
                return (
                  <Card key={successCase.id.current} className="glass-effect hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <RelatedIconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">{successCase.industry}</div>
                        <div className="text-xs text-muted-foreground">Success Case</div>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold line-clamp-2">{successCase.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{successCase.description}</p>
                    
                    <Button variant="outline" size="sm" asChild className="w-full btn-gradient-outline">
                        <Link href={`/success-cases/${successCase.id.current}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Case
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-white/90">
              Join the growing number of enterprises transforming their operations with Loop AI Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 btn-gradient-hover" asChild>
                <Link href="/cognitive-platforms/book-demo">
                  Book a Demo
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 btn-gradient-outline" asChild>
                <Link href="/success-cases">
                  View All Cases
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
