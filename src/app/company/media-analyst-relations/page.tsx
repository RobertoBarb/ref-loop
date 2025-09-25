"use client";

import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function MediaAnalystRelations() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[30vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-0">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Media &{" "}
                <span className="gradient-text">Analyst Relations</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    If you are a journalist or an industry analyst and would like to schedule an interview or obtain more detailed information about Loop AI Group and our Cognitive Computing Platform, please contact us.
                  </p>
                  
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-xl font-semibold text-primary">media@loop.ai</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Please note that this contact information is listed for corporate media and analyst inquiries only. We will not be able to respond to other inquiries. For non-media inquiries please use this form.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
