"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, Linkedin, Calendar, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Team member data based on official website content
const teamMembers = {
  "gm-calafiore": {
    name: "GM Calafiore",
    role: "PRESIDENT, FOUNDER",
    image: "/images/team/GM.avif",
    bio: "GM is the President and Founder of Loop AI Group. A lifelong serial entrepreneur, he first became a CEO at age 19. His career launched as an independent consultant, overseeing projects for Fortune 100 Italian firms to integrate their internal computing systems with Internet and mobile technologies.",
    detailedBio: `Subsequently, GM established GSMBOX, the pioneering pan-European mobile media group that seamlessly fused mobile, Internet, and television platforms. Headquartered in Italy, GSMBOX grew to include subsidiaries in Spain, France, Germany, the UK, and Portugal. In collaboration with Telecinco—Spain's top commercial broadcaster—and Endemol (now part of 21st Century Fox), a global leader in television entertainment, GSMBOX introduced the world's first interactive TV format, driving the Mobile Premium Services market. GM also co-founded Endemol-GSMBOX, a London-based joint venture with Endemol International, dedicated to embedding mobile media interactions into Endemol's globally distributed formats. GSMBOX was later acquired by a subsidiary of NTT DoCoMo.

Under GM's guidance, GSMBOX transformed from a vision into a powerhouse, gaining over 25 million customers and generating $33 million in revenue within three years of its inception. Remarkably, he navigated the company through the dot-com crash, forging a resilient and successful enterprise.`,
    achievements: [
      "Founded Loop AI Group as President and Founder",
      "CEO at age 19 - lifelong serial entrepreneur",
      "Established GSMBOX - pioneering pan-European mobile media group",
      "25+ million customers and $33 million revenue in 3 years",
      "Co-founded Endemol-GSMBOX joint venture",
      "Successfully navigated through dot-com crash"
    ]
  },
  "patrick-ehlen": {
    name: "Patrick Ehlen, PhD",
    role: "CHIEF AI ADVISOR",
    image: "/images/team/Patrick_new.avif",
    bio: "Patrick's fascination with artificial intelligence began in third grade after reading Arthur C. Clarke's *2001: A Space Odyssey*. In 1992, inspired by the *Parallel Distributed Processing* volumes, he trained his first neural network to learn distributed representations of concepts.",
    detailedBio: `Patrick earned a PhD in Cognitive Psychology from the New School for Social Research, where he received the Dissertation Fellowship, the Alfred J. Marrow Memorial Award in Psychology, and became the inaugural recipient of the Charles Cannell Fund award from the University of Michigan for his innovative mathematical modeling of concept processing. During his doctoral studies, he interned at Dragon Systems—a speech recognition pioneer later acquired by Nuance—and at AT&T Labs-Research, where he spearheaded advancements in speech and multimodal understanding technologies. He then joined the Center for the Study of Language and Information (CSLI), an AI hub at Stanford University.

As a research scientist at Stanford's Computational Semantics Lab, Patrick contributed to the $200M DARPA CALO AI project, developing machine learning techniques to extract concepts and topics from natural, spontaneous conversations. In 2008, he returned to AT&T in San Francisco, joining the nascent R&D team at AT&T Interactive. There, he led the development of *AT&T Speak4it*, the first mobile app to leverage cloud-based speech recognition and, later, the first to integrate simultaneous speech and gesture for multimodal search. Patrick also played a key role in launching AT&T's Speech API, a cloud-based speech recognition service.`,
    achievements: [
      "PhD in Cognitive Psychology from New School for Social Research",
      "10+ U.S. patents and 70+ research publications",
      "1,500+ scientific paper citations",
      "Contributed to $200M DARPA CALO AI project",
      "Led development of AT&T Speak4it mobile app",
      "Former research scientist at Stanford's Computational Semantics Lab"
    ]
  },
  "viqar-shariff": {
    name: "Viqar Shariff",
    role: "CHIEF STRATEGY OFFICER",
    image: "/images/team/viqar.avif",
    bio: "Viqar Shariff serves as the Chief Strategy Officer of Loop AI Group, a position he assumed in July 2017 after acting as a Board Member and Advisor to the company. He oversees the company's strategic direction, with a primary focus on finance and investor relations.",
    detailedBio: `Before joining Loop AI Group, Viqar co-founded and served as managing partner of SAFA Partners LLC and was a managing partner at Rizvi Traverse, an opportunistic investment fund. He has spearheaded investments in prominent technology companies, including Lyft, Boxed Wholesale, Twitter, Pinterest, Facebook, and Square. Prior to his investment career, Viqar amassed over 11 years of expertise in mergers and acquisitions, notably as a partner at Clifford Chance. His professional journey began at the Department of Justice, Antitrust Division, before transitioning to the private sector.

Viqar's extensive deal experience spans all aspects of growth tech investing, from deal origination and structuring to due diligence, execution, and operational oversight. During his legal tenure, he navigated complex domestic and cross-border transactions, skillfully negotiating key terms for acquisitions and financings.`,
    achievements: [
      "Chief Strategy Officer since July 2017",
      "Co-founded SAFA Partners LLC",
      "Managing partner at Rizvi Traverse investment fund",
      "Invested in Lyft, Twitter, Pinterest, Facebook, Square",
      "11+ years M&A expertise at Clifford Chance",
      "Former Department of Justice, Antitrust Division"
    ]
  },
  "andrea-pitrone": {
    name: "Andrea Pitrone",
    role: "CHIEF CUSTOMER SUCCESS OFFICER AND CHIEF PRODUCT OFFICER",
    image: "/images/team/andrea.avif",
    bio: "Andrea Pitrone is a visionary leader in cognitive computing, serving as the Chief Customer Success Officer and Chief Product Officer at Loop AI Group. With a deep expertise in AI-driven digital transformation, Andrea is responsible for the global strategy, execution, and oversight of all client projects and pilot implementations.",
    detailedBio: `Andrea plays a pivotal role in shaping Loop AI Group's Cognitive Transformation Program, working closely with Strategy Partners to help enterprises adopt AI-powered solutions and re-engineer their core business processes. His expertise ensures that clients maximize value from their Cognitive Roadmaps, achieving tangible business outcomes.

He also leads the product development of Loop Q, the company's cutting-edge Unsupervised Cognitive Computing Platform, ensuring continuous innovation and excellence. With over 20 years of experience in management consulting, IT systems integration, and digital transformation, Andrea has worked across global markets, including Italy, Kazakhstan, and Saudi Arabia. Before joining Loop AI Group, he spent 12 years at Accenture, driving large-scale projects for Telecommunications and Utilities clients.

Earlier in his career, he held leadership roles at companies spun off from Ericsson Telecomunicazioni and Alcatel Italia, specializing in quality assurance, pre-sales, project management, and business operations.`,
    achievements: [
      "20+ years in management consulting and digital transformation",
      "12 years at Accenture driving large-scale projects",
      "Global experience across Italy, Kazakhstan, Saudi Arabia",
      "Former leadership roles at Ericsson and Alcatel Italia",
      "M.Sc. in Electrical Engineering, cum laude",
      "Member of Bemycompany Scientific Committee since 2018"
    ]
  },
  "luigi-manzi": {
    name: "Luigi Manzi",
    role: "HEAD OF SOFTWARE ENGINEERING",
    image: "/images/team/luigi.avif",
    bio: "Luigi Manzi is the Head of Software Engineering at Loop AI Group, where his deep technical expertise drives the evolution of Loop Q cognitive technology. His leadership ensures that the platform continues to advance in alignment with the company's long-term vision, delivering the award-winning, world-class AI solutions that Loop AI Group is known for.",
    detailedBio: `With responsibility for platform cognitive software development, Luigi oversees the design, supervision, coordination, and execution of application management activities. His focus is on making machine learning and cognitive computing more efficient and user-friendly, ensuring seamless adoption for enterprise clients.

Bringing over 20 years of experience in building and leading high-performing technology teams, Luigi has worked across hardware and software engineering, product design, management, quality assurance, and enterprise client support. Before joining Loop AI Group, he served as a Software Engineering Team Leader at Accenture, where he played a key role in developing cutting-edge software solutions.`,
    achievements: [
      "20+ years building and leading technology teams",
      "Expertise in hardware and software engineering",
      "Former Software Engineering Team Leader at Accenture",
      "M.S. in Computer Science from Naples University",
      "Focus on making ML and cognitive computing user-friendly",
      "Oversees platform cognitive software development"
    ]
  },
  "marco-torresi": {
    name: "Marco Torresi",
    role: "HEAD OF GLOBAL PR AND ANALYST RELATIONS",
    image: "/images/team/marco.avif",
    bio: "Marco Torresi is the Head of Global PR & Analyst Relations at Loop AI Group, where he leads the planning, development, and execution of the company's public relations strategy. With over a decade of experience in technology PR and corporate communications, he has a proven track record of shaping brand narratives and strengthening industry presence.",
    detailedBio: `Marco has served as a PR Director, managing communications programs for major internet brands, including LinkedIn, Knewton, Message Systems, PartnerUp, and TrustedID. His expertise spans early-stage product launches, market analysis, media relations, corporate positioning, and executive profiling. He also played a key role as a Senior Account Executive, executing global PR initiatives for Compaq and Hewlett-Packard.

Beyond his PR career, Marco has been a successful entrepreneur, launching and selling a music venue in San Francisco and a restaurant in the Dominican Republic.`,
    achievements: [
      "10+ years in technology PR and corporate communications",
      "PR Director for LinkedIn, Knewton, Message Systems",
      "Senior Account Executive for Compaq and Hewlett-Packard",
      "Successful entrepreneur - music venue and restaurant",
      "B.A. in Sociology from U.C. Irvine",
      "MBA from Santa Clara University"
    ]
  },
  "jaana-heikkila": {
    name: "Jaana Heikkila",
    role: "VP, MARKETING",
    image: "/images/team/jaana.avif",
    bio: "Jaana Heikkilä, VP of Marketing at Loop AI Group, brings over 20 years of experience in the global technology sector, having held leadership roles across multinational corporations and innovative startups. Originally from Finland, Jaana has played a pivotal role in marketing, global partnerships, and business development for leading technology companies.",
    detailedBio: `She began her career at Nokia and Microsoft, later contributing to the growth of three startup ventures in Stockholm and Helsinki. After relocating to Rome, she worked with Etnoteam (now NTT Italy) on M&A target scouting and international partnerships.

In 2004, Jaana co-founded the Rome and Milan chapters of Mobile Monday, a global networking movement that helped shape Italy's mobile industry ecosystem. Originating in Helsinki in 2000, Mobile Monday became the world's leading mobile innovation community, growing to 100,000+ members across 150+ cities worldwide.

For over a decade, Jaana collaborated with executive teams of international corporations, driving marketing strategies, partner management, and business development. She later moved to San Francisco, working with pioneering IoT companies before joining Loop AI Group in 2016. Since then, she has been instrumental in shaping the company's global brand, increasing visibility, and working closely with leading AI industry analysts.`,
    achievements: [
      "20+ years in global technology sector",
      "Former roles at Nokia and Microsoft",
      "Co-founded Mobile Monday Rome and Milan chapters",
      "100,000+ members across 150+ cities worldwide",
      "Worked with pioneering IoT companies in San Francisco",
      "Joined Loop AI Group in 2016"
    ]
  },
  "ilaria-colleoni": {
    name: "Ilaria Colleoni",
    role: "CHIEF EXECUTIVE OFFICER",
    image: "/images/team/ilaria.avif",
    bio: "Ilaria Colleoni serves as the Chief Executive Officer of Loop AI Group, bringing extensive leadership experience and strategic vision to drive the company's growth and innovation in the AI space.",
    detailedBio: `As CEO, Ilaria oversees the overall strategic direction of Loop AI Group, ensuring the company continues to deliver cutting-edge AI solutions to enterprise clients worldwide. Her leadership has been instrumental in positioning Loop AI Group as a leader in the cognitive computing space.

With a strong background in business strategy and technology leadership, Ilaria has guided the company through significant growth phases while maintaining focus on innovation and client success.`,
    achievements: [
      "Chief Executive Officer of Loop AI Group",
      "Extensive leadership experience in AI space",
      "Strategic vision for company growth and innovation",
      "Strong background in business strategy",
      "Guided company through significant growth phases",
      "Focus on innovation and client success"
    ]
  },
  "tom-davenport": {
    name: "Tom Davenport",
    role: "BOARD OF ADVISORS",
    image: "/images/team/tom_davenport.avif",
    bio: "Tom Davenport serves on the Board of Advisors for Loop AI Group, bringing extensive expertise in analytics and data science to guide the company's strategic direction.",
    detailedBio: `As a renowned expert in analytics and data science, Tom provides valuable insights and guidance to Loop AI Group's leadership team. His extensive experience in helping organizations leverage data and AI for competitive advantage makes him an invaluable advisor to the company.`,
    achievements: [
      "Board of Advisors member",
      "Renowned expert in analytics and data science",
      "Extensive experience in data and AI strategy",
      "Helps organizations leverage AI for competitive advantage",
      "Valuable guidance to leadership team"
    ]
  },
  "vinay-chaudhri": {
    name: "Vinay Chaudhri",
    role: "BOARD OF ADVISORS",
    image: "/images/team/vinay.avif",
    bio: "Vinay Chaudhri serves on the Board of Advisors for Loop AI Group, contributing his expertise in AI research and technology development to the company's strategic initiatives.",
    detailedBio: `With a strong background in AI research and technology development, Vinay provides strategic guidance to Loop AI Group's research and development efforts. His expertise helps ensure the company remains at the forefront of AI innovation.`,
    achievements: [
      "Board of Advisors member",
      "Expertise in AI research and technology development",
      "Strategic guidance for R&D efforts",
      "Helps maintain AI innovation leadership",
      "Strong background in technology development"
    ]
  },
  "raul-vejar": {
    name: "Raul Véjar",
    role: "BOARD OF ADVISORS",
    image: "/images/team/raul.avif",
    bio: "Raul Véjar serves on the Board of Advisors for Loop AI Group, bringing his extensive experience in technology leadership and business strategy to guide the company's growth.",
    detailedBio: `As a member of the Board of Advisors, Raul provides strategic insights and guidance to Loop AI Group's leadership team. His experience in technology leadership and business strategy helps shape the company's strategic direction and growth initiatives.`,
    achievements: [
      "Board of Advisors member",
      "Extensive experience in technology leadership",
      "Business strategy expertise",
      "Strategic insights for leadership team",
      "Helps shape company's strategic direction"
    ]
  },
  "massimo-marchiori": {
    name: "Massimo Marchiori",
    role: "BOARD OF ADVISORS",
    image: "/images/team/massimo.avif",
    bio: "Massimo Marchiori serves on the Board of Advisors for Loop AI Group, contributing his expertise in computer science and web technologies to the company's technological advancement.",
    detailedBio: `With a distinguished background in computer science and web technologies, Massimo provides valuable technical guidance to Loop AI Group's development teams. His expertise helps ensure the company's platforms remain cutting-edge and innovative.`,
    achievements: [
      "Board of Advisors member",
      "Expertise in computer science and web technologies",
      "Technical guidance for development teams",
      "Helps maintain cutting-edge platforms",
      "Distinguished background in technology"
    ]
  },
  "tony-trousset": {
    name: "Tony Trousset",
    role: "BOARD OF ADVISORS",
    image: "/images/team/tony.avif",
    bio: "Tony Trousset serves on the Board of Advisors for Loop AI Group, bringing his extensive experience in business development and strategic partnerships to support the company's growth.",
    detailedBio: `As a member of the Board of Advisors, Tony provides strategic guidance on business development and partnership opportunities. His experience helps Loop AI Group identify and pursue growth opportunities in the AI market.`,
    achievements: [
      "Board of Advisors member",
      "Extensive experience in business development",
      "Strategic partnerships expertise",
      "Guidance on growth opportunities",
      "Helps identify AI market opportunities"
    ]
  },
  "doug-bewsher": {
    name: "Doug Bewsher",
    role: "BOARD OF ADVISORS",
    image: "/images/team/doug.avif",
    bio: "Doug Bewsher serves on the Board of Advisors for Loop AI Group, contributing his expertise in marketing and brand strategy to enhance the company's market presence.",
    detailedBio: `With a strong background in marketing and brand strategy, Doug provides valuable insights to Loop AI Group's marketing and communications efforts. His expertise helps strengthen the company's brand and market positioning.`,
    achievements: [
      "Board of Advisors member",
      "Expertise in marketing and brand strategy",
      "Insights for marketing and communications",
      "Helps strengthen brand positioning",
      "Strong background in marketing"
    ]
  },
  "claus-karthe": {
    name: "Claus Karthe",
    role: "BOARD OF ADVISORS",
    image: "/images/team/claus.avif",
    bio: "Claus Karthe serves on the Board of Advisors for Loop AI Group, bringing his extensive experience in technology consulting and enterprise solutions to guide the company's client engagement strategies.",
    detailedBio: `As a member of the Board of Advisors, Claus provides strategic guidance on enterprise client engagement and technology consulting approaches. His experience helps Loop AI Group better serve its enterprise clients and expand its market reach.`,
    achievements: [
      "Board of Advisors member",
      "Extensive experience in technology consulting",
      "Enterprise solutions expertise",
      "Strategic guidance on client engagement",
      "Helps expand market reach"
    ]
  }
};

interface TeamMemberPageProps {
  params: {
    slug: string;
  };
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = teamMembers[params.slug as keyof typeof teamMembers];

  if (!member) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Member Not Found</h1>
          <p className="text-muted-foreground">The requested team member could not be found.</p>
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
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-0">
          <div className="max-w-4xl mx-auto">
            <Link href="/company/team" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Team
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                    {member.name}
                  </h1>
                  <p className="text-2xl text-primary font-semibold">
                    {member.role}
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex space-x-4">
                  <Button className="group/btn btn-gradient-hover">
                    <Mail className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    Contact
                  </Button>
                  <Button variant="outline" className="group/btn btn-gradient-outline">
                    <Linkedin className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    LinkedIn
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="w-80 h-80 relative overflow-hidden rounded-2xl glass-effect p-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Bio Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">About {member.name.split(' ')[0]}</h2>
                <div className="prose prose-lg max-w-none">
                  {member.detailedBio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Key Achievements</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {member.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl text-white/90">
              Discover how our team can help transform your organization with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cognitive-platforms/book-demo">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 btn-gradient-hover">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Demo
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 group/btn btn-gradient-outline">
                <Globe className="mr-2 h-5 w-5 group-hover/btn:scale-110 transition-transform duration-300" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
