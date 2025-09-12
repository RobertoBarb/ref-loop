import Link from "next/link";
import { Bot, Brain, Cloud, HomeIcon, LayersIcon, Sparkles, Users, Building, Award, Play, BarChart3, FileText, Video, Mail, Calendar } from "lucide-react";

import Logo from "@/components/navbar-components/logo";
import ThemeToggle from "@/components/navbar-components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Navigation links with icons for desktop icon-only navigation
const navigationLinks = [
  { href: "/", label: "Home", icon: HomeIcon, active: true },
  { href: "/dashboard", label: "Dashboard", icon: Bot },
  { href: "/todo", label: "Todo", icon: LayersIcon },
];

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
  }
];

// Additional navigation items (not in dropdown)
const additionalNavItems = [
  { href: "/success-cases", label: "Success Cases", icon: Award },
];

export default function Navbar() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-20 items-center justify-between gap-4 md:h-24">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
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
            </PopoverTrigger>
            <PopoverContent align="start" className="w-80 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {mainNavigationItems.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="w-full">
                      <div className="px-3 py-2 text-sm font-semibold text-muted-foreground border-b">
                        {section.title}
                      </div>
                      {section.items.map((item, itemIndex) => {
                        const Icon = item.icon;
                        return (
                          <NavigationMenuItem key={itemIndex} className="w-full">
                            <NavigationMenuLink
                              href={item.href}
                              className="flex-row items-center gap-2 py-1.5 px-3"
                            >
                              <Icon
                                size={16}
                                className="text-muted-foreground"
                                aria-hidden="true"
                              />
                              <span>{item.label}</span>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        );
                      })}
                    </div>
                  ))}
                  {/* Additional navigation items for mobile */}
                  <div className="w-full">
                    <div className="px-3 py-2 text-sm font-semibold text-muted-foreground border-b">
                      Additional
                    </div>
                    {additionalNavItems.map((item, itemIndex) => {
                      const Icon = item.icon;
                      return (
                        <NavigationMenuItem key={`mobile-additional-${itemIndex}`} className="w-full">
                          <NavigationMenuLink
                            href={item.href}
                            className="flex-row items-center gap-2 py-1.5 px-3"
                          >
                            <Icon
                              size={16}
                              className="text-muted-foreground"
                              aria-hidden="true"
                            />
                            <span>{item.label}</span>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      );
                    })}
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
            {/* Desktop navigation - main menu */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-6">
                {mainNavigationItems.map((section, sectionIndex) => (
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
                ))}
                {/* Additional navigation items */}
                {additionalNavItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <NavigationMenuItem key={`additional-${index}`}>
                      <Link
                        href={item.href}
                        className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Book a Demo button */}
          <Button size="sm" className="hidden md:flex">
            <Calendar className="mr-2 h-4 w-4" />
            Book a Demo
          </Button>
          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
