import { Skeleton } from "@/components/ui/skeleton";

export function HomepageLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section Loading */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-6 w-3/4" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Skeleton className="h-12 w-32" />
                <Skeleton className="h-12 w-28" />
              </div>
            </div>
            <div className="relative">
              <Skeleton className="aspect-square w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Loading */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Skeleton className="h-12 w-3/4 mx-auto" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
            <div className="flex justify-center mt-8">
              <Skeleton className="h-64 w-96 rounded-2xl" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section Loading */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Skeleton className="h-10 w-2/3 mx-auto" />
              <Skeleton className="h-6 w-1/2 mx-auto" />
            </div>
            <Skeleton className="aspect-video w-full rounded-2xl" />
          </div>
        </div>
      </section>

      {/* CTA Section Loading */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Skeleton className="h-12 w-3/4 mx-auto bg-white/20" />
            <Skeleton className="h-6 w-1/2 mx-auto bg-white/20" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-12 w-32 bg-white/20" />
              <Skeleton className="h-12 w-36 bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Loading */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-6 rounded" />
              <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="h-4 w-64" />
          </div>
        </div>
      </footer>
    </div>
  );
}

