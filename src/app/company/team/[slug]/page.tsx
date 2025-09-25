"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Linkedin, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

// Team member interface
interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  bio: string;
  detailedBio: string;
}

// Team member data based on official website content
const teamMembers: Record<string, TeamMember> = {
  "gm-calafiore": {
    name: "GM Calafiore",
    role: "PRESIDENT, FOUNDER",
    image: "/images/Team/GM.avif",
    bio: "GM is the President and Founder of Loop AI Group. A lifelong serial entrepreneur, he first became a CEO at age 19. His career launched as an independent consultant, overseeing projects for Fortune 100 Italian firms to integrate their internal computing systems with Internet and mobile technologies.",
    detailedBio: `Subsequently, GM established GSMBOX, the pioneering pan-European mobile media group that seamlessly fused mobile, Internet, and television platforms. Headquartered in Italy, GSMBOX grew to include subsidiaries in Spain, France, Germany, the UK, and Portugal. In collaboration with Telecinco—Spain's top commercial broadcaster—and Endemol (now part of 21st Century Fox), a global leader in television entertainment, GSMBOX introduced the world's first interactive TV format, driving the Mobile Premium Services market. GM also co-founded Endemol-GSMBOX, a London-based joint venture with Endemol International, dedicated to embedding mobile media interactions into Endemol's globally distributed formats. GSMBOX was later acquired by a subsidiary of NTT DoCoMo.

Under GM's guidance, GSMBOX transformed from a vision into a powerhouse, gaining over 25 million customers and generating $33 million in revenue within three years of its inception. Remarkably, he navigated the company through the dot-com crash, forging a resilient and successful enterprise.`
  },
  "patrick-ehlen": {
    name: "Patrick Ehlen, PhD",
    role: "CHIEF AI ADVISOR",
    image: "/images/Team/Patrick_new.avif",
    bio: "Patrick's fascination with artificial intelligence began in third grade after reading Arthur C. Clarke's *2001: A Space Odyssey*. In 1992, inspired by the *Parallel Distributed Processing* volumes, he trained his first neural network to learn distributed representations of concepts.",
    detailedBio: `Patrick earned a PhD in Cognitive Psychology from the New School for Social Research, where he received the Dissertation Fellowship, the Alfred J. Marrow Memorial Award in Psychology, and became the inaugural recipient of the Charles Cannell Fund award from the University of Michigan for his innovative mathematical modeling of concept processing. During his doctoral studies, he interned at Dragon Systems—a speech recognition pioneer later acquired by Nuance—and at AT&T Labs-Research, where he spearheaded advancements in speech and multimodal understanding technologies. He then joined the Center for the Study of Language and Information (CSLI), an AI hub at Stanford University.

As a research scientist at Stanford's Computational Semantics Lab, Patrick contributed to the $200M DARPA CALO AI project, developing machine learning techniques to extract concepts and topics from natural, spontaneous conversations. In 2008, he returned to AT&T in San Francisco, joining the nascent R&D team at AT&T Interactive. There, he led the development of *AT&T Speak4it*, the first mobile app to leverage cloud-based speech recognition and, later, the first to integrate simultaneous speech and gesture for multimodal search. Patrick also played a key role in launching AT&T's Speech API, a cloud-based speech recognition service.

With ten U.S. patents to his name and over 70 research publications, Patrick has made significant contributions to computational semantics, cognitive linguistics, psycholinguistics, word sense disambiguation, human concept learning, and artificial intelligence. His work has been cited in more than 1,500 scientific papers. He currently serves on the Advisory Board for Digility, a conference and expo on Digital Reality, and The Flight Exchange, a charter aircraft booking platform.`
  },
  "viqar-shariff": {
    name: "Viqar Shariff",
    role: "CHIEF STRATEGY OFFICER",
    image: "/images/Team/viqar.avif",
    bio: "Viqar Shariff serves as the Chief Strategy Officer of Loop AI Group, a position he assumed in July 2017 after acting as a Board Member and Advisor to the company. He oversees the company's strategic direction, with a primary focus on finance and investor relations.",
    detailedBio: `Before joining Loop AI Group, Viqar co-founded and served as managing partner of SAFA Partners LLC and was a managing partner at Rizvi Traverse, an opportunistic investment fund. He has spearheaded investments in prominent technology companies, including Lyft, Boxed Wholesale, Twitter, Pinterest, Facebook, and Square. Prior to his investment career, Viqar amassed over 11 years of expertise in mergers and acquisitions, notably as a partner at Clifford Chance. His professional journey began at the Department of Justice, Antitrust Division, before transitioning to the private sector.

Viqar's extensive deal experience spans all aspects of growth tech investing, from deal origination and structuring to due diligence, execution, and operational oversight. During his legal tenure, he navigated complex domestic and cross-border transactions, skillfully negotiating key terms for acquisitions and financings.

A graduate of The Johns Hopkins University, Viqar earned his JD, magna cum laude, from Tulane Law School. He resides in New York, New York, with his wife and two daughters.`,
  },
  "andrea-pitrone": {
    name: "Andrea Pitrone",
    role: "CHIEF CUSTOMER SUCCESS OFFICER AND CHIEF PRODUCT OFFICER",
    image: "/images/Team/andrea.avif",
    linkedin: "https://www.linkedin.com/in/andrea-pitrone-a012712/",
    bio: "Andrea Pitrone is a visionary leader in cognitive computing, serving as the Chief Customer Success Officer and Chief Product Officer at Loop AI Group. With a deep expertise in AI-driven digital transformation, Andrea is responsible for the global strategy, execution, and oversight of all client projects and pilot implementations. His role ensures the seamless development and integration of cognitive computing applications (\"Q Robots\") across pre- and post-sales phases.",
    detailedBio: `Andrea plays a pivotal role in shaping Loop AI Group's Cognitive Transformation Program, working closely with Strategy Partners to help enterprises adopt AI-powered solutions and re-engineer their core business processes. His expertise ensures that clients maximize value from their Cognitive Roadmaps, achieving tangible business outcomes.

He also leads the product development of Loop Q, the company's cutting-edge Unsupervised Cognitive Computing Platform, ensuring continuous innovation and excellence.

With over 20 years of experience in management consulting, IT systems integration, and digital transformation, Andrea has worked across global markets, including Italy, Kazakhstan, and Saudi Arabia. Before joining Loop AI Group, he spent 12 years at Accenture, driving large-scale projects for Telecommunications and Utilities clients.

Earlier in his career, he held leadership roles at companies spun off from Ericsson Telecomunicazioni and Alcatel Italia, specializing in quality assurance, pre-sales, project management, and business operations.

Andrea holds an M.Sc. in Electrical Engineering, cum laude, from the University of Catania, Italy.

In addition to his corporate leadership, he has been a member of the Permanent Scientific Committee of Bemycompany, an Italian Venture Incubator, since July 2018, supporting innovative startups and fostering technological advancements.`,
  },
  "daniele-preda": {
    name: "Daniele Preda",
    role: "CUSTOMER SUCCESS DIRECTOR",
    image: "/images/Team/daniele_preda.PNG",
    bio: "Daniele Preda serves as the Customer Success Director at Loop AI Group",
    detailedBio: ``,
  },
  "luigi-manzi": {
    name: "Luigi Manzi",
    role: "HEAD OF SOFTWARE ENGINEERING",
    image: "/images/Team/luigi.avif",
    bio: "Luigi Manzi is the Head of Software Engineering at Loop AI Group, where his deep technical expertise drives the evolution of Loop Q cognitive technology. His leadership ensures that the platform continues to advance in alignment with the company's long-term vision, delivering the award-winning, world-class AI solutions that Loop AI Group is known for.",
    detailedBio: `With responsibility for platform cognitive software development, Luigi oversees the design, supervision, coordination, and execution of application management activities. His focus is on making machine learning and cognitive computing more efficient and user-friendly, ensuring seamless adoption for enterprise clients.

Bringing over 20 years of experience in building and leading high-performing technology teams, Luigi has worked across hardware and software engineering, product design, management, quality assurance, and enterprise client support.

Before joining Loop AI Group, he served as a Software Engineering Team Leader at Accenture, where he played a key role in developing cutting-edge software solutions.

Luigi holds an M.S. in Computer Science from Naples University.`,
  },
  "marco-torresi": {
    name: "Marco Torresi",
    role: "HEAD OF GLOBAL PR AND ANALYST RELATIONS",
    image: "/images/Team/marco.avif",
    bio: "Marco Torresi is the Head of Global PR & Analyst Relations at Loop AI Group, where he leads the planning, development, and execution of the company's public relations strategy. With over a decade of experience in technology PR and corporate communications, he has a proven track record of shaping brand narratives and strengthening industry presence.",
    detailedBio: `Marco has served as a PR Director, managing communications programs for major internet brands, including LinkedIn, Knewton, Message Systems, PartnerUp, and TrustedID. His expertise spans early-stage product launches, market analysis, media relations, corporate positioning, and executive profiling. He also played a key role as a Senior Account Executive, executing global PR initiatives for Compaq and Hewlett-Packard.

Beyond his PR career, Marco has been a successful entrepreneur, launching and selling a music venue in San Francisco and a restaurant in the Dominican Republic.

He holds a B.A. in Sociology from U.C. Irvine and an MBA from Santa Clara University.`,
  },
  "jaana-heikkila": {
    name: "Jaana Heikkila",
    role: "VP, MARKETING",
    image: "/images/Team/jaana.avif",
    bio: "Jaana Heikkilä, VP of Marketing at Loop AI Group, brings over 20 years of experience in the global technology sector, having held leadership roles across multinational corporations and innovative startups. Originally from Finland, Jaana has played a pivotal role in marketing, global partnerships, and business development for leading technology companies.",
    detailedBio: `She began her career at Nokia and Microsoft, later contributing to the growth of three startup ventures in Stockholm and Helsinki. After relocating to Rome, she worked with Etnoteam (now NTT Italy) on M&A target scouting and international partnerships.

In 2004, Jaana co-founded the Rome and Milan chapters of Mobile Monday, a global networking movement that helped shape Italy's mobile industry ecosystem. Originating in Helsinki in 2000, Mobile Monday became the world's leading mobile innovation community, growing to 100,000+ members across 150+ cities worldwide.

For over a decade, Jaana collaborated with executive teams of international corporations, driving marketing strategies, partner management, and business development. She later moved to San Francisco, working with pioneering IoT companies before joining Loop AI Group in 2016. Since then, she has been instrumental in shaping the company's global brand, increasing visibility, and working closely with leading AI industry analysts.

Jaana holds an M.Sc. in Social Sciences from the University of Helsinki and a Business Administration degree from Helsinki Business College.`,
  },
  "ilaria-colleoni": {
    name: "Ilaria Colleoni",
    role: "CHIEF EXECUTIVE OFFICER, LOOP AI CONSULTING",
    image: "/images/Team/ilaria.avif",
    bio: "Ilaria brings over 20 years of experience in project management, product development, and corporate leadership. She began her career in Bologna, Italy, overseeing the development and roadmap of high-tech products, managing customer relations, and leading a 30-person team.",
    detailedBio: `At TAS Group, a multinational company with 400+ experts across 20 countries, Ilaria played a key role in industrial relations, leading negotiations with Italian trade unions. In her human resources role, she managed the selection process and executive recruitment, shaping the company's leadership talent.

With over 15 years in HR, Ilaria developed deep expertise in people development and organizational transformation. She designed and led training programs to foster positive work cultures, helping individuals and teams reach their full potential.

In 2016, she founded Peplo, a company specializing in event design, corporate communication, and team-building activities. Since 2019, she has served as the CEO of Loop AI Consulting, a subsidiary of Loop AI Group, where she continues to drive innovation and strategic growth.

Ilaria holds a degree in Computer Science from Alma Mater Studiorum – University of Bologna.`,
  },
  "tom-davenport": {
    name: "Tom Davenport",
    role: "BOARD OF ADVISORS",
    image: "/images/Team/tom_davenport.avif",
    bio: "Tom Davenport is the President's Distinguished Professor of Information Technology and Management at Babson College, co-founder of the International Institute for Analytics, a Fellow of the MIT Initiative on the Digital Economy, and a Senior Advisor to Deloitte Analytics.",
    detailedBio: `He teaches analytics and big data in executive programs at Babson, Harvard Business School, MIT Sloan School, and Boston University.

A pioneer in analytics-driven business strategy, Tom introduced the concept of "competing on analytics" through his best-selling 2006 Harvard Business Review article, followed by his influential 2007 book of the same name.

Continuing to push the boundaries of management and technology, Tom has explored the impact of AI and automation on the workforce. His 2015 Harvard Business Review article, "Beyond Automation"—recognized as one of the year's best—led to the 2016 book, Only Humans Need Apply: Winners and Losers in the Age of Smart Machines, co-authored with Julia Kirby.

A prolific writer and thought leader, Tom has authored or edited 18 books and published over 100 articles in Harvard Business Review, Sloan Management Review, and the Financial Times. He contributes regularly to The Wall Street Journal, Fortune, and Harvard Business Review's online platforms. Recognized as one of the top three business/technology analysts in the world, he has also been named among the 100 most influential people in IT and one of Fortune magazine's top 50 business school professors.

Tom holds a Ph.D. in Social Science from Harvard University and has taught at Harvard Business School, the University of Chicago, Dartmouth's Tuck School of Business, Boston University, and the University of Texas at Austin.`,
  },
  "vinay-chaudhri": {
    name: "Vinay Chaudhri",
    role: "BOARD OF ADVISORS",
    image: "/images/Team/vinay.avif",
    linkedin: "https://www.linkedin.com/in/vinay-k-chaudhri-849556/",
    bio: "Vinay is the Program Director at the Artificial Intelligence Center of SRI International (formerly known as Stanford Research Institute), one of the world's leading independent research and development organizations.",
    detailedBio: `He leads research and development in knowledge representation, reasoning, and question-answering systems. His work focuses on creating intelligent systems that can understand, reason about, and answer questions using large-scale knowledge bases.

Vinay has been instrumental in developing advanced AI technologies that enable machines to process and understand complex information. His research contributions span multiple areas of artificial intelligence, including natural language processing, knowledge engineering, and automated reasoning.

He has published extensively in top-tier AI conferences and journals, contributing to the advancement of the field. His work has been recognized by the research community and has influenced the development of modern AI systems.

Vinay has received several prestigious awards and fellowships, including the University of Toronto Open Fellowship and the Connaught Fellowship.

He earned his Ph.D. in Computer Science from the University of Toronto and began his career in 1988 as an Analyst Programmer at Tata Consultancy Services.`,
  },
  "raul-vejar": {
    name: "Raul Véjar",
    role: "BOARD OF ADVISORS",
    image: "/images/Team/raul.avif",
    bio: "Raul Véjar is an experienced executive with extensive experience in the enterprise software industry, specializing in strategic, operational, and management roles. Currently, he advises several early-stage private companies in the enterprise software sector.",
    detailedBio: `Until May 2010, Raul served as EVP and COO of SAP's Business Objects division, where he led the integration of Business Objects following its acquisition by SAP. His leadership was instrumental in successfully merging the two organizations and driving operational excellence.

Raul's deep understanding of enterprise software markets, combined with his operational expertise, makes him a valuable advisor to Loop AI Group. His experience in scaling technology companies and managing complex integrations provides strategic guidance for the company's growth initiatives.

Raul holds a degree in Computer Science from Instituto Tecnológico y de Estudios Superiores de Monterrey in Mexico and an MBA from the Catholic University of Leuven, Belgium.`,
  },
  "massimo-marchiori": {
    name: "Massimo Marchiori",
    role: "BOARD OF ADVISORS",
    image: "/images/Team/massimo.avif",
    bio: "Massimo Marchiori is a Professor of Computer Science at the University of Padova, Researcher at MIT's Computer Science and Artificial Intelligence Laboratory (CSAIL) within the World Wide Web Consortium (W3C), and Chief Technology Officer of Atomium Culture.",
    detailedBio: `Massimo is the creator of several world-impacting technologies, including P3P (Platform for Privacy Preferences), which became a W3C standard and is now used by millions of websites worldwide. His work has significantly influenced web privacy and security standards.

As a leading researcher in computer science and web technologies, Massimo brings invaluable technical expertise to Loop AI Group's advisory board. His deep understanding of web standards, artificial intelligence, and emerging technologies helps guide the company's technological development and innovation strategies.

Massimo's research contributions span multiple areas of computer science, including web technologies, artificial intelligence, and privacy-preserving systems. His work has been published in top-tier academic venues and has had a lasting impact on the development of the modern web.`,
  },
  "tony-trousset": {
    name: "Tony Trousset",
    role: "BOARD OF ADVISORS",
    image: "/images/Team/tony.avif",
    bio: "Tony Trousset brings extensive experience in business development and strategic partnerships to Loop AI Group's Board of Advisors. His expertise in scaling technology companies and building strategic alliances provides valuable guidance for the company's growth initiatives.",
    detailedBio: `With a strong background in enterprise software and technology partnerships, Tony has helped numerous companies expand their market reach and develop strategic relationships with key industry players. His experience in identifying and executing partnership opportunities is particularly valuable for Loop AI Group's expansion into new markets and verticals.

Tony's strategic insights help the company navigate complex business development challenges and identify opportunities for growth through strategic partnerships and alliances. His guidance supports Loop AI Group's mission to bring AI solutions to enterprise clients worldwide.`,
  },
  "doug-bewsher": {
    name: "Doug Bewsher",
    role: "BOARD OF ADVISORS",
    image: "/images/Team/doug.avif",
    bio: "Doug Bewsher brings extensive experience in marketing and brand strategy to Loop AI Group's Board of Advisors. His expertise in building and scaling technology brands provides valuable guidance for the company's marketing and communications initiatives.",
    detailedBio: `With a proven track record in technology marketing, Doug has helped numerous companies establish strong brand presence and market positioning. His experience in developing comprehensive marketing strategies and executing successful brand campaigns is particularly valuable for Loop AI Group's growth in the competitive AI market.

Doug's strategic insights help the company develop effective marketing approaches that resonate with enterprise clients and industry stakeholders. His guidance supports Loop AI Group's efforts to establish itself as a leading provider of AI solutions for enterprise applications.`,
  },
  "claus-karthe": {
    name: "Claus Karthe",
    role: "BOARD OF ADVISORS",
    image: "/images/Team/claus.avif",
    bio: "Claus Karthe brings extensive experience in technology consulting and enterprise solutions to Loop AI Group's Board of Advisors. His deep understanding of enterprise client needs and technology implementation challenges provides valuable guidance for the company's client engagement strategies.",
    detailedBio: `With a strong background in enterprise technology consulting, Claus has helped numerous organizations successfully implement and adopt new technologies. His experience in understanding complex enterprise requirements and translating them into effective technology solutions is particularly valuable for Loop AI Group's approach to serving enterprise clients.

Claus's strategic insights help the company develop client engagement approaches that address the unique challenges and opportunities in enterprise AI adoption. His guidance supports Loop AI Group's mission to deliver practical, impactful AI solutions that drive real business value for enterprise clients.`,
  }
};

interface TeamMemberPageProps {
  params: {
    slug: string;
  };
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = teamMembers[params.slug];

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
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[40vh] flex items-center mb-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-0 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/company/team" className="relative z-10 inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Team
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image - First on mobile, second on desktop */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="w-80 h-80 relative overflow-hidden rounded-2xl glass-effect p-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
              
              {/* Content - Second on mobile, first on desktop */}
              <div className="space-y-6 order-2 lg:order-1">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                    {member.name}
                  </h1>
                  <p className="text-2xl text-primary font-semibold">
                    {member.role}
                  </p>
                  
                  <div className="flex space-x-4">
                    {member.linkedin ? (
                      <Button variant="outline" className="group/btn btn-gradient-outline" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                          LinkedIn
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" className="group/btn btn-gradient-outline" disabled>
                        <Linkedin className="mr-2 h-4 w-4 opacity-50" />
                        LinkedIn
                      </Button>
                    )}
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {member.detailedBio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-8 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Meet the Team
            </h2>
            <p className="text-xl text-white/90">
              Discover our team and their expertise
            </p>
            <div className="flex justify-center">
              <Link href="/company/team">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Users className="mr-2 h-5 w-5" />
                  Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
