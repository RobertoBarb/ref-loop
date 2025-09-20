"use client";

import { useHomepage } from "@/hooks/use-homepage";
import { HomepageContent } from "@/components/homepage/homepage-content";
import { HomepageLoading } from "@/components/homepage/homepage-loading";

export default function Home() {
  const { data, isLoading, error } = useHomepage();

  if (isLoading) {
    return <HomepageLoading />;
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-destructive">Error Loading Homepage</h1>
          <p className="text-muted-foreground">
            {error?.message || "Unable to load homepage content. Please try again later."}
          </p>
        </div>
      </div>
    );
  }

  return <HomepageContent data={data} />;
}
