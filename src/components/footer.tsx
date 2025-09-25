"use client";

import Image from "next/image";
import Link from "next/link";
import { useFooter } from "@/hooks/use-footer";

export function Footer() {
  const { data: footerData, isLoading } = useFooter();

  // Fallback data se non viene fornito data dalla homepage
  const defaultData = {
    companyName: "Loop AI Group",
    copyrightText: `© ${new Date().getFullYear()} Loop AI Group and its affiliates. All Rights Reserved.`,
    logo: undefined,
  };

  const finalFooterData = footerData || defaultData;

  return (
    <footer className="py-12 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            {finalFooterData.logo ? (
              <Image
                src={finalFooterData.logo.asset.url}
                alt={finalFooterData.logo.alt}
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            ) : (
              <Image
                src="/loopai_Group_Logo_2022.avif"
                alt="Loop AI Group"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            )}
            <span className="text-xl font-bold">{finalFooterData.companyName}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {finalFooterData.copyrightText}
          </p>
          
          {/* Additional footer links */}
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <Link 
              href="/company/about-us" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/company/team" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Team
            </Link>
            <Link 
              href="/cognitive-platforms/loop-ai-agents-orchestra" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              AI Agents Orchestra
            </Link>
            <Link 
              href="/cognitive-platforms/loop-q" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Loop Q
            </Link>
            <Link 
              href="/success-cases" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Success Cases
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
