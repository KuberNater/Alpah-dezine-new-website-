import { FaqType } from "@/types/faqs.type";
import { ILogos } from "@/types/home/logos.type";
import { StatCardProps, TestimonialType } from "@/types/home/testimonial.type";
import { ValueType } from "@/types/home/valueData.type";
import {
    Bot,
    Clock,
    Cpu,
    CpuIcon,
    DollarSignIcon,
    GlobeIcon,
    GraduationCap,
    HeartHandshake,
    Layers,
    MessageSquare,
    Palette,
    PieChart,
    RectangleHorizontal,
    RectangleVertical,
    Rocket,
    RocketIcon,
    ShieldCheck,
    ShieldCheckIcon,
    Square,
    Target,
    Terminal,
    TrendingUpIcon,
    ZapIcon
} from "lucide-react";
import { AgentType } from "@/types/home/agent.types";
import { Presets, Ratios } from "@/types/home/aistudio.types";
import { categoryValidation, ecosystemValidation } from "@/types/home/ecosystem.types";
import { StepType } from "@/types/home/process-step.type";
import { SolutionCardType } from "@/types/home/solution.types";

export const logos: ILogos[] = [
    {
        name: "A2000 Global",
        url: "images/marquee/A2000 color.svg"
    },
    {
        name: "Azure",
        url: "images/marquee/AZURE  color.svg"
    },
    {
        name: "Board Book",
        url: "images/marquee/BOARD book  COLOR.svg"
    },
    {
        name: "Boxer",
        url: "images/marquee/BOXER COLOR.svg"
    },
    {
        name: "Dropbox",
        url: "images/marquee/Dropbox color.svg"
    },
    {
        name: "Fallo",
        url: "images/marquee/FALLO BLACK.svg"
    },
    {
        name: "Garb",
        url: "images/marquee/garb color.svg"
    },
    {
        name: "J&A Marketing",
        url: "images/marquee/jamarketing color.svg"
    },
    {
        name: "Jardine",
        url: "images/marquee/jardine color.svg"
    },
    {
        name: "KAP7",
        url: "images/marquee/KAP7  Color.svg"
    },
    {
        name: "MCRL",
        url: "images/marquee/MCRL Color.svg"
    },
    {
        name: "Ng Labs",
        url: "images/marquee/nglabs Color.svg"
    },
    {
        name: "Nordic",
        url: "images/marquee/nordic Color.svg"
    },
    {
        name: "Nordic Resort",
        url: "images/marquee/nordicresort Color.svg"
    },
    {
        name: "Quick Intuit",
        url: "images/marquee/QUICK INTUIT color.svg"
    },
    {
        name: "Rico",
        url: "images/marquee/rico Color.svg"
    },
    {
        name: "SCI",
        url: "images/marquee/SCI Color.svg"
    },
    {
        name: "Share Point",
        url: "images/marquee/Share point color.svg"
    },
    {
        name: "CSI Group",
        url: "images/marquee/thecsigroup (1).svg"
    },
    {
        name: "UBF",
        url: "images/marquee/UBF Color.svg"
    },
    {
        name: "USCAPE",
        url: "images/marquee/USCAPE  BLACK.svg"
    },
    {
        name: "VIVA",
        url: "images/marquee/VIVA Color.svg"
    },

];

export const panelsData = [
    {
        id: 'collegiate-licensing',
        title: 'Collegiate Licensing',
        image: '/images/landing/Licensing approval.webp',
        alt: 'University building representing collegiate licensing and administration',
        icon: GraduationCap,
        desc: 'Empowering administrators with brand clarity.',
        pos: 'top-[15%] left-[2%] w-[14%] aspect-[3/4]',
        zIndex: 'z-10',
        rotation: -2
    },
    {
        id: 'devops',
        title: 'DevOps & Development',
        image: '/images/landing/Dev ops.webp',
        alt: 'DevOps engineers collaborating in a modern agile workspace',
        icon: Terminal,
        desc: 'Calm mastery through automated deployment.',
        pos: 'bottom-[15%] left-[4%] w-[20%] aspect-[16/10]',
        zIndex: 'z-20',
        rotation: 1
    },
    {
        id: 'asset-management',
        title: 'Creative Assets',
        image: '/images/landing/asset management.webp',
        alt: 'Creative director and designer reviewing approved brand assets',
        icon: Palette,
        desc: 'Streamlined workflows for creative alignment.',
        pos: 'top-[12%] right-[4%] w-[17%] aspect-square',
        zIndex: 'z-10',
        rotation: 2
    },
    {
        id: 'ai-agent-development',
        title: 'AI Agent Deployment',
        image: '/images/landing/AI AGENTS.webp',
        alt: 'Strategists observing an AI agent network graph',
        icon: Bot,
        desc: 'Intelligent governance with human oversight.',
        pos: 'bottom-[12%] right-[3%] w-[13%] aspect-[2/3]',
        zIndex: 'z-20',
        rotation: -1
    }
];

export const CATEGORIES: categoryValidation[] = [
    { id: 'Finance', label: 'Financial Clarity', sub: 'The end of manual reconciliations.', icon: CpuIcon },
    { id: 'Commerce', label: 'Unified Sales', sub: 'One view of every customer touchpoint.', icon: ZapIcon },
    { id: 'Compliance', label: 'Compliance Peace', sub: 'Automated auditing that never sleeps.', icon: GlobeIcon },
];

export const ECOSYSTEM_LOGOS: ecosystemValidation[] = [
    { id: 'ons', name: 'Oracle NetSuite', category: 'Finance', logo: "images/landing/netsuite color.svg", glow: 'shadow-blue-500/20' },
    { id: 'or', name: 'Oracle', category: 'Finance', logo: "images/landing/oracle color.svg", glow: 'shadow-red-500/20' },
    { id: 'sa', name: 'Sage', category: 'Finance', logo: "images/landing/sage Color.svg", glow: 'shadow-emerald-500/20' },
    { id: 'sh', name: 'Commerce', category: 'Finance', logo: "images/landing/shopify color.svg", glow: 'shadow-lime-500/20' },
    { id: 'cin7', name: 'Cin7', category: 'Commerce', logo: "images/landing/dearsystem color.svg", glow: 'shadow-red-500/20' },
    { id: 'hp', name: 'HP Flow', category: 'Commerce', logo: "images/landing/hpflow color.svg", glow: 'shadow-sky-500/20' },
    { id: 'cl', name: 'Claris', category: 'Compliance', logo: "images/landing/claris black.svg", glow: 'shadow-indigo-500/20' },
    { id: 'clc', name: 'CLC', category: 'Compliance', logo: "images/landing/clc Color.svg", glow: 'shadow-royal-500/20' },
];

export const PRESETS: Presets[] = [
    { label: "Architecture", prompt: "A modern, minimalist glass office building in a forest, high quality architectural photography." },
    { label: "Software", prompt: "A clean and professional user interface for a business dashboard, showing growth charts and simple navigation." },
    { label: "Concept", prompt: "Abstract visual representing teamwork and connection, soft blue and white colors, professional aesthetic." }
];

export const RATIOS: Ratios[] = [
    { id: '1:1', label: 'Square', icon: Square },
    { id: '16:9', label: 'Wide', icon: RectangleHorizontal },
    { id: '9:16', label: 'Tall', icon: RectangleVertical },
];

export const AGENT_TYPES: AgentType[] = [
    {
        id: 'support',
        name: 'Support Pilot',
        icon: MessageSquare,
        desc: 'Automates customer resolutions with policy-aware logic.',
        defaultScenario: 'A VIP customer is requesting a full refund for a yearly subscription used for 7 months. Our policy says no refunds after 30 days. Should we make an exception?',
        benefit: '8.5 hours saved daily'
    },
    {
        id: 'brand',
        name: 'Brand Guard',
        icon: ShieldCheck,
        desc: 'Audits assets for brand identity and legal compliance.',
        defaultScenario: 'A new marketing banner uses a non-approved neon green color for the CTA button. Does this violate our current brand guidelines for Q3?',
        benefit: 'Zero compliance errors'
    },
    {
        id: 'data',
        name: 'Data Analyst',
        icon: PieChart,
        desc: 'Extracts actionable growth trends from complex datasets.',
        defaultScenario: 'Identify if our 12% churn rate last month is a seasonal trend or if we should trigger an immediate promotional rescue campaign.',
        benefit: 'Reports ready in seconds'
    }
];

export const solutionData: SolutionCardType[] = [
    {
        title: "Licensing",
        subtitle: "The only system built specifically for university brand management.",
        themeColor: "",
        illustration: '/images/landing/ASSEST-08.svg',
        checklist: ["2-day approvals (from 14)", "Automated compliance", "100% royalty accuracy"],
        stats: [{ val: "2 Days", label: "Approval" }],
        ctas: ["Explore Licensing"],
        link: "/collegiate-licensing"
    },
    {
        title: "DevOps",
        subtitle: "Websites, e-commerce, and APIs that evolve with your institution.",
        themeColor: "",
        illustration: '/images/landing/ASSEST-07.svg',
        checklist: ["Launch in 4-8 weeks", "Update in minutes", "Zero downtime"],
        stats: [{ val: "6 Weeks", label: "Launch" }],
        ctas: ["Explore DevOps"],
        link: "/devops"
    },
    {
        title: "Creative",
        subtitle: "One source of truth for design systems where accuracy is inevitable.",
        themeColor: "",
        illustration: '/images/landing/ASSEST-05.svg',
        checklist: ["Version control audit", "Zero violations", "Stakeholder sync"],
        stats: [{ val: "100%", label: "Accuracy" }],
        ctas: ["View Assets"],
        link: "/creative-asset-management"
    },
    {
        title: "AI Agents",
        subtitle: "Alpha Dezine deploys Copilot-powered agents for secure automation.",
        themeColor: "",
        illustration: '/images/landing/ASSEST-06.svg',
        checklist: ["Human-in-the-loop", "SOC 2 compliant", "RAG grounded data"],
        stats: [{ val: "40%", label: "Efficiency" }],
        ctas: ["Deploy AI Agents"],
        link: "/ai-agent-development"
    }
]

export const METRICS: ValueType[] = [
    {
        title: "Launch Velocity",
        value: "6",
        unit: "Weeks",
        sub: "Average Deployment",
        description: "Go from concept to institutional production in weeks, not quarters.",
        icon: Clock,
        color: "text-brandText dark:text-royal-300",
        chart: [20, 40, 30, 70, 60, 90, 85]
    },
    {
        title: "System Uptime",
        value: "99.9",
        unit: "%",
        sub: "Always Available",
        description: "Infrastructure built to handle 10x traffic spikes without breaking.",
        icon: ShieldCheck,
        color: "text-emerald-500",
        chart: [95, 96, 98, 97, 99, 99.5, 99.9]
    },
    {
        title: "Resource Recovery",
        value: "30",
        unit: "Hrs",
        sub: "Weekly Time Saved",
        description: "Automated workflows that give your team back their most valuable asset.",
        icon: ZapIcon,
        color: "text-amber-500",
        chart: [10, 25, 45, 30, 55, 75, 80]
    }
];

export const stats: StatCardProps[] = [
    { value: "6 Weeks", label: "Speed to Launch", subtext: "Average launch time vs. 6 months with traditional agencies.", icon: RocketIcon, color: "mint" },
    { value: "10x", label: "Scale Capacity", subtext: "Zero downtime during Black Friday traffic spikes.", icon: TrendingUpIcon, color: "lavender" },
    { value: "15 Hrs", label: "Efficiency Gained", subtext: "Saved per week per team member via dashboard automation.", icon: Clock, color: "peach" },
    { value: "99.9%", label: "Uptime SLA", subtext: "Enterprise-grade reliability guaranteed for all deployments.", icon: ShieldCheckIcon, color: "royal" },
    { value: "$67K", label: "Annual Recovery", subtext: "Revenue recovered through automated royalty tracking.", icon: DollarSignIcon, color: "mint" },
    { value: "2 Days", label: "Approval Time", subtext: "Reduced from 14 days average for licensing designs.", icon: ZapIcon, color: "lavender" },
];

export const TESTIMONIALS: TestimonialType[] = [
    {
        quote: "We couldn’t ask for a better development partner than Alpha. They take the time to understand our unique, often complex business needs, and approach every challenge with enthusiasm and expertise. They’re responsive, knowledgeable, and always bring a positive, solution-focused attitude to every project",
        author: "Steve Brown",
        role: "President of The CSI Group",
        company: "The CSI Group",
        image: "images/testimonials/Steve-color.webp",
    },
    {
        quote: "From a Marketing Director’s perspective, finding a development partner who truly understands both the business and brand side of what we do is rare. Alpha not only takes the time to learn our unique processes but approaches every challenge with insight, a positive attitude, and solutions. Their responsiveness and collaborative spirit make them an invaluable part of our extended team",
        author: "Lori McKnight",
        role: "Marketing Director",
        company: "The CSI Group and MCRL Overseas Group",
        image: "images/testimonials/LORI-COLOR.webp",
    },
    {
        quote: "Alpha Dezine has been Nordic’s trusted technology and artwork partner for over 13 years. Yates and his team never tell us ‘no’—they simply get it done. Their technical expertise, attention to detail, and ability to turn artwork around quickly have been essential to our growth. Whether it’s complex setups, new technology needs, or last-minute challenges, Alpha delivers with professionalism and consistency every time. We truly value this partnership and look forward to many more years of success together.",
        author: "Mark Kindberg",
        role: "CEO & President",
        company: "Nordic Company Inc.",
        image: "images/testimonials/MARK-COLOR.webp",
    },
    {
        quote: "Working with Alpha Dezine has been an exceptional experience. For over 10 years, they have been a trusted partner in our business, helping us streamline operations, improve efficiency, and develop new processes that have made a lasting impact. Their team is knowledgeable, proactive, and an absolute pleasure to work with. They are a true collaborator in driving our continued success.",
        author: "Maryellen",
        role: "VP OF OPERATIONS",
        company: "JARDINE",
        image: "images/testimonials/website-testimonial-pic.webp",
    },
    {
        quote: "Alpha Dezine has been an amazing partner for us. They handle a large volume of our production artwork and always deliver great work. We wouldn’t have been able to scale and support our sales without them. The custom tools and programs they’ve built have made our process smoother for both us and our customers.",
        author: "Tyler Silva",
        role: "PRESIDENT",
        company: "GARB INC.",
        image: "images/testimonials/TYLER-COLOR.webp",
    },
    {
        quote: 'We are incredibly grateful for our partnership with Alpha Design. Their team has consistently gone above and beyond to support us with quick turnarounds on designs, high-quality web images, and a wide range of administrative needs such as licensing submissions.Working with Alpha Design has truly felt like having an extension of our own team.We appreciate their dedication, attention to detail, and the seamless collaboration that makes every project run smoothly.Thank you to the entire Alpha Design team in India for being such a valuable and trusted partner!',
        author: "Anonymous",
        role: "VP at Large Collegiate Licensee",
        company: "Large Collegiate Licensee",
        image: "images/testimonials/website-testimonial-pic.webp",
    },
];

export const steps: StepType[] = [
    {
        id: "01",
        label: "Strategy",
        title: "The Audit",
        icon: Target,
        desc: "Technical systems audit and KPI alignment to ensure every line of code serves business goals.",
        color: "emerald"
    },
    {
        id: "02",
        label: "Design",
        title: "The Interface",
        icon: Layers,
        desc: "Creation of friction-free UI/UX systems designed for clarity and institutional security.",
        color: "brandText"
    },
    {
        id: "03",
        label: "Engineer",
        title: "The Build",
        icon: Cpu,
        desc: "Precision engineering using the Alpha-01 engine for high-performance, cloud-native scale.",
        color: "indigo"
    },
    {
        id: "04",
        label: "Launch",
        title: "The Delivery",
        icon: Rocket,
        desc: "Zero-downtime, blue-green deployment orchestrated with surgical accuracy.",
        color: "cyan"
    },
    {
        id: "05",
        label: "Support",
        title: "The Growth",
        icon: HeartHandshake,
        desc: "Long-term partnership with full team training, documentation, and a growth roadmap.",
        color: "purple"
    }
];

export const faqs: FaqType[] = [
    {
        id: "01",
        question: "How is this different from competitors?",
        answer: "Most agencies are generalists. We are specialists. We are purpose-built for collegiate licensing and digital deployment with 15 years of focus. We don't do everything; we do this perfectly."
    },
    {
        id: "02",
        question: "What if we have unique requirements?",
        answer: "Our platform is designed for flexibility. 85% of customizations are handled via no-code configurations. For the remaining 15%, our engineering team builds custom workflows that integrate seamlessly with the core system."
    },
    {
        id: "03",
        question: "Can we try before committing?",
        answer: "Absolutely. We offer a comprehensive 30-day pilot program. You get full functionality, team training, and real data import—with no credit card required and zero obligation."
    },
    {
        id: "04",
        question: "What happens to our data if we leave?",
        answer: "It's your data, period. You can export everything (CSV, JSON, PDF, or SQL dump) at any time with a single click. We believe in earning loyalty, not locking you in."
    },
    {
        id: "05",
        question: "How long until we see ROI?",
        answer: "Our clients typically see a full return on investment within 90 days. This comes from an average of 32 hours saved per week per team and $67K in revenue recovered annually through automated tracking."
    },
];