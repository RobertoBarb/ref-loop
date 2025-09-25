"use client";

import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Videos() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[20vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-0">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Videos</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="glass-effect">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Below is a curated selection of videos showcasing our offerings. For access to the full catalog, please visit our YouTube channel at this link: <a href="https://www.youtube.com/@LoopAiLabs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.youtube.com/@LoopAiLabs</a>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "The Infinite Productivity Era",
                  url: "https://youtu.be/4cdvHwBaVj8?list=TLGGMiS1AxIYrPoyNTA5MjAyNQ",
                  embedId: "4cdvHwBaVj8"
                },
                {
                  title: "The Proliferation of AI at VLAB Stanford University",
                  url: "https://youtu.be/zyJ-Ng6P5mw?list=TLGGeVE_Tj_W6T8yNTA5MjAyNQ",
                  embedId: "zyJ-Ng6P5mw"
                },
                {
                  title: "Patrick Ehlen: AI, The end of deep learning?",
                  url: "https://youtu.be/gdtHB-D-nWI?list=TLGGyVo_w-kgY9oyNTA5MjAyNQ",
                  embedId: "gdtHB-D-nWI"
                },
                {
                  title: "Can Cognitive Computing be the brain for an enterprise personal assistant?",
                  url: "https://youtu.be/Vwsy3O41o9A?list=TLGGToLMLFCYwCMyNTA5MjAyNQ",
                  embedId: "Vwsy3O41o9A"
                },
                {
                  title: "Patrick Ehlen: Human Capacity Cognitve Computing at Deloitte",
                  url: "https://youtu.be/tunu1RCILas?list=TLGGYVOdtgbIBZQyNTA5MjAyNQ",
                  embedId: "tunu1RCILas"
                },
                {
                  title: "Patrick Ehlen: Crossing the Event Horizon at Deloitte",
                  url: "https://youtu.be/K4GDP7EwqLg?list=TLGGxfzCMlzg6i4yNTA5MjAyNQ",
                  embedId: "K4GDP7EwqLg"
                },
                {
                  title: "Patrick Ehlen: Doing semantics with GPUs at Stanford Univeristy",
                  url: "https://youtu.be/bBsDT9RAyoU?list=TLGGA71OovW2L3AyNTA5MjAyNQ",
                  embedId: "bBsDT9RAyoU"
                },
                {
                  title: "Andrea Pitrone: Thinking Businesses, The New Cognitive Era",
                  url: "https://youtu.be/KGrsFCHcb4Q",
                  embedId: "KGrsFCHcb4Q"
                }
              ].map((video, index) => (
                <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0 overflow-hidden">
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.embedId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(video.url, '_blank')}
                        className="w-full group/btn btn-gradient-outline"
                      >
                        <Play className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                        Watch on YouTube
                      </Button>
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
