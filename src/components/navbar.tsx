"use client";

import Link from "next/link";
import { Bot, Brain, Users, Building, Award, BarChart3, FileText, Video, Mail, Calendar, X } from "lucide-react";
import { useState, useEffect } from "react";

import Logo from "@/components/navbar-components/logo";
import ThemeToggle from "@/components/navbar-components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

// Main navigation menu items
const mainNavigationItems = [
  {
    title: "Cognitive Platforms",
    items: [
      { href: "/cognitive-platforms/loop-ai-agents-orchestra", label: "Loop AI Agents Orchestra", icon: Bot },
      { href: "/cognitive-platforms/loop-q", label: "Loop Q Cognitive Platform", icon: Brain },
      { href: "/cognitive-platforms/platform-facts", label: "Loop Platform Facts", icon: BarChart3 },
      { href: "/cognitive-platforms/book-demo", label: "Book a Demo", icon: Calendar },
    ]
  },
  {
    title: "Company",
    items: [
      { href: "/company/about-us", label: "About Us", icon: Building },
      { href: "/company/team", label: "Team", icon: Users },
      { href: "/company/media-analyst-relations", label: "Media & Analyst Relations", icon: FileText },
      { href: "/company/loop-ai-research", label: "Loop AI Research (LAIR)", icon: Brain },
      { href: "/company/careers", label: "Careers", icon: Users },
      { href: "/company/videos", label: "Videos", icon: Video },
      { href: "/company/contact", label: "Contact", icon: Mail },
    ]
  },
  {
    title: "Success Cases",
    href: "/success-cases",
    icon: Award,
    items: []
  },
];


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Disable body scroll when mobile menu is open (come in AppNav.vue)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-20 items-center justify-between gap-4 md:h-24">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu trigger */}
          <Button
            className="group size-8 md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg
              className="pointer-events-none"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
          </Button>
          
          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              {/* Overlay di sfondo */}
              <div 
                className="absolute inset-0 bg-black/50"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Sidebar */}
              <div className={`absolute left-0 top-0 w-[75vw] h-full bg-background transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}>
                <div className="flex flex-col h-full bg-background">
                  <div className="flex items-center justify-between p-6 border-b">
                    <Logo />
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="size-10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <Accordion type="multiple" className="w-full">
                      {mainNavigationItems.map((section, sectionIndex) => {
                        // Se ha items, mostra accordion, altrimenti link diretto
                        if (section.items && section.items.length > 0) {
                          return (
                            <AccordionItem key={sectionIndex} value={`section-${sectionIndex}`} className="border-b">
                              <AccordionTrigger className="text-lg font-semibold py-4 px-6 hover:no-underline">
                                {section.title}
                              </AccordionTrigger>
                              <AccordionContent className="pb-0">
                                <div className="space-y-2 px-6">
                                  {section.items.map((item, itemIndex) => {
                                    const Icon = item.icon;
                                    return (
                                      <Link
                                        key={itemIndex}
                                        href={item.href}
                                        className="flex items-center gap-3 py-3 px-2 text-base hover:bg-accent rounded-lg transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        <Icon
                                          size={20}
                                          className="text-muted-foreground"
                                          aria-hidden="true"
                                        />
                                        <span className="font-medium">{item.label}</span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          );
                        } else {
                          // Link diretto senza accordion
                          const Icon = section.icon;
                          if (!section.href || !Icon) return null;
                          return (
                            <div key={sectionIndex} className="border-b">
                              <Link
                                href={section.href}
                                className="flex items-center gap-3 py-4 px-6 text-lg font-semibold hover:bg-accent rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <Icon
                                  size={20}
                                  className="text-muted-foreground"
                                  aria-hidden="true"
                                />
                                <span>{section.title}</span>
                              </Link>
                            </div>
                          );
                        }
                      })}
                    </Accordion>
                  </div>
                  <div className="p-6 border-t">
                    <Link href="/cognitive-platforms/book-demo" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full" size="lg">
                        <Calendar className="mr-2 h-5 w-5" />
                        Book a Demo
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
            {/* Desktop navigation - main menu */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-6">
                {mainNavigationItems.map((section, sectionIndex) => {
                  // Se ha items, mostra dropdown, altrimenti link diretto
                  if (section.items && section.items.length > 0) {
                    return (
                      <NavigationMenuItem key={sectionIndex}>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                              {section.title}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent align="start" className="w-64 p-2">
                            <div className="space-y-1">
                              {section.items.map((item, itemIndex) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={itemIndex}
                                    href={item.href}
                                    className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                                  >
                                    <Icon className="h-4 w-4" />
                                    <span>{item.label}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </PopoverContent>
                        </Popover>
                      </NavigationMenuItem>
                    );
                  } else {
                    // Link diretto senza dropdown
                    const Icon = section.icon;
                    if (!section.href || !Icon) return null;
                    return (
                      <NavigationMenuItem key={sectionIndex}>
                        <Link href={section.href}>
                          <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                            {section.title}
                          </Button>
                        </Link>
                      </NavigationMenuItem>
                    );
                  }
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Book a Demo button */}
          <Link href="/cognitive-platforms/book-demo">
            <Button size="sm" className="hidden md:flex">
              <Calendar className="mr-2 h-4 w-4" />
              Book a Demo
            </Button>
          </Link>
          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
