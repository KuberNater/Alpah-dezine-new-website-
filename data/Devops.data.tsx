import { FloatingAssesmentType } from "@/types/Devops/floatingAssesment.types";
import { FeatureItem, IntroductionItems, ServiceItem, StepItem } from "@/types/Devops/serviceItem.types";
import { TechStackItemType } from "@/types/Devops/techstack.types";
import { TestimonialType } from "@/types/Devops/testimonial.types";
import { WhoWeServePersonaType } from "@/types/Devops/WhoWeServe.types";
import { FaqType } from "@/types/faqs.type";
import {
    Globe, ShoppingCart, BarChart3, Network, MousePointer2,
    Ear, PenTool, Code2, Rocket, GraduationCap, HeartHandshake, Zap,
    ShieldCheck,
    ShieldAlert,
    Server,
    HardDrive,
    GitBranch,
    FileCode,
    RefreshCw,
    AlertTriangle,
    Lock,
    Activity,
    XCircle,
    ZapIcon,
    TrendingUpIcon,
    ShieldIcon,
    LightbulbIcon,
    LayoutIcon,
    ServerIcon,
    BoxIcon,
    CloudIcon,
} from 'lucide-react';


export const servicesData: ServiceItem[] = [
    {
        id: 1,
        title: "Websites That Breathe",
        tagline: "Launch in weeks. Iterate in hours.",
        description: "Your website isn’t static — it evolves. We build sites that are beautiful today and easy to update tomorrow.",
        icon: Globe,
        colSpan: "md:col-span-2"
    },
    {
        id: 2,
        title: "E-commerce That Scales",
        tagline: "Performance that never cracks under pressure.",
        description: "From your first sale to your millionth. Fast checkout. Secure payments. Real-time inventory.",
        icon: ShoppingCart,
        colSpan: "md:col-span-1"
    },
    {
        id: 3,
        title: "Dashboards That Illuminate",
        tagline: "Beautiful. Functional. Yours.",
        description: "Your data tells a story. We build dashboards and admin panels that make complex information instantly clear.",
        icon: BarChart3,
        colSpan: "md:col-span-1"
    },
    {
        id: 4,
        title: "APIs That Connect",
        tagline: "Fast. Secure. Developer-friendly.",
        description: "Your systems need to talk. We build and deploy APIs that integrate seamlessly.",
        icon: Network,
        colSpan: "md:col-span-1"
    },
    {
        id: 5,
        title: "Experiences That Delight",
        tagline: "Interfaces so intuitive; they feel invisible.",
        description: "UI/UX isn’t decoration — it’s how your product feels. We design user experiences that prioritize your goals.",
        icon: MousePointer2,
        colSpan: "md:col-span-1"
    }
];

export const items: IntroductionItems[] = [
    {
        question: "What if launching felt simple?",
        friction: "Complex, stressful deployments.",
        flow: "One-click releases. Zero anxiety."
    },
    {
        question: "What if you never crashed?",
        friction: "Downtime during traffic spikes.",
        flow: "Auto-scaling that breathes with demand."
    },
    {
        question: "What if you owned your code?",
        friction: "Dependent on expensive agencies.",
        flow: "Your team trained. Your system documented."
    },
    {
        question: "What if design met engineering?",
        friction: "Beautiful sites that break.",
        flow: "Stunning interfaces on bulletproof infrastructure."
    }
];

export const features: FeatureItem[] = [
    {
        category: "Deployment",
        legacy: {
            title: "Manual & Risky",
            desc: "FTP uploads, nervous Friday evenings, and 'it works on my machine' syndrome.",
            icon: HardDrive,
            status: "High Friction",
        },
        alpha: {
            title: "Automated CI/CD",
            desc: "Push to git. Tests run. Deploys instantly. One-click rollbacks if needed.",
            icon: Zap,
            status: "Instant",
        }
    },
    {
        category: "Scaling",
        legacy: {
            title: "Single Point of Failure",
            desc: "One server. Traffic spike? Crash. You're on hold with support while users bounce.",
            icon: Server,
            status: "Unreliable",
        },
        alpha: {
            title: "Serverless Edge",
            desc: "Auto-scales to infinity. Distributed globally. You sleep while traffic spikes.",
            icon: RefreshCw,
            status: "99.99% Uptime",
        }
    },
    {
        category: "Security",
        legacy: {
            title: "Patchwork Plugins",
            desc: "Relying on outdated plugins, weak passwords, and hoping nobody scans your ports.",
            icon: ShieldAlert,
            status: "Vulnerable",
        },
        alpha: {
            title: "Enterprise Fortress",
            desc: "SOC2 ready. Automated pen-testing. Immutable infrastructure. Zero trust.",
            icon: ShieldCheck,
            status: "Fortified",
        }
    },
    {
        category: "Maintenance",
        legacy: {
            title: "The Retainer Trap",
            desc: "Hourly billing for text changes. Waiting days for simple updates. Vendor lock-in.",
            icon: Lock,
            status: "Expensive",
        },
        alpha: {
            title: "Empowered Teams",
            desc: "Headless CMS integration. Marketing updates content instantly. You own the code.",
            icon: FileCode,
            status: "Autonomous",
        }
    },
    {
        category: "Code Quality",
        legacy: {
            title: "Spaghetti Code",
            desc: "No documentation. Tangled logic. Every new feature breaks two old ones.",
            icon: AlertTriangle,
            status: "Tech Debt",
        },
        alpha: {
            title: "Clean Architecture",
            desc: "TypeScript. Modular. Self-documenting. Built to be read by humans.",
            icon: GitBranch,
            status: "Maintainable",
        }
    },
    {
        category: "Visibility",
        legacy: {
            title: "Black Box",
            desc: "You don't know it's down until a customer tweets at you. Zero data on performance.",
            icon: XCircle,
            status: "Blind",
        },
        alpha: {
            title: "Real-time Metrics",
            desc: "Live observability dashboards. Alerting before users notice issues. Total clarity.",
            icon: Activity,
            status: "Insightful",
        }
    }
];

export const steps: StepItem[] = [
    {
        id: 1,
        title: "Discovery",
        subtitle: "Mapping & Audit",
        desc: "We analyze infrastructure requirements and audit legacy code to define success metrics.",
        icon: Ear,
        command: "alphadezine audit --deep --target=infrastructure",
        output: [
            "Analyzing system architecture...",
            "Identifying bottlenecks...",
            "✔ Latency issues detected: us-east-1",
            "✔ Legacy codebase mapped",
            "Ready for optimization."
        ]
    },
    {
        id: 2,
        title: "Architect",
        subtitle: "System Design",
        desc: "Designing a cloud-native architecture that scales automatically and heals itself.",
        icon: PenTool,
        command: "terraform plan -out=architecture.tfplan",
        output: [
            "Refreshing state...",
            "Plan: 12 to add, 0 to change, 0 to destroy.",
            "+ aws_eks_cluster.main",
            "+ aws_rds_cluster.production",
            "Architecture blueprint verified."
        ]
    },
    {
        id: 3,
        title: "Build",
        subtitle: "Dev Sprints",
        desc: "Agile sprints with strict code quality gates. You see progress every two weeks.",
        icon: Code2,
        command: "git commit -m 'feat: scalable microservices'",
        output: [
            "Running pre-commit hooks...",
            "✔ Linting passed",
            "✔ Unit tests passed (42/42)",
            "[main 8a2b3c] feat: core scalable microservices",
            "15 files changed, 450 insertions(+)"
        ]
    },
    {
        id: 4,
        title: "Deploy",
        subtitle: "CI/CD Pipeline",
        desc: "CI/CD pipelines that deploy to production with zero downtime.",
        icon: Rocket,
        command: "kubectl apply -f ./k8s/production",
        output: [
            "deployment.apps/frontend configured",
            "service/backend unchanged",
            "Waiting for rollout...",
            "✔ Deployment successfully rolled out.",
            "Status: HEALTHY (HA Mode)"
        ]
    },
    {
        id: 5,
        title: "Handoff",
        subtitle: "Training",
        desc: "We don't just hand over keys; we train your team to drive the car.",
        icon: GraduationCap,
        command: "docs generate --format=interactive",
        output: [
            "Compiling documentation...",
            "Generating architecture diagrams...",
            "Recording walkthrough sessions...",
            "✔ Knowledge base created",
            "Team access granted."
        ]
    },
    {
        id: 6,
        title: "Scale",
        subtitle: "Evolution",
        desc: "24/7 monitoring and proactive scaling adjustments as your user base grows.",
        icon: HeartHandshake,
        command: "monitor start --mode=proactive",
        output: [
            "Attaching probes...",
            "Listening on port 8080...",
            "✔ Real-time metrics stream active",
            "✔ Auto-scaling policies enabled",
            "System is running optimally."
        ]
    }
];

export const FloatingAssesmentData: FloatingAssesmentType[] = [
    { title: "Performance Audit", desc: "Identify exactly what's slowing down your TTI." },
    { title: "Scalability Roadmap", desc: "Step-by-step plan to handle 10x traffic." },
    { title: "Tech Stack Review", desc: "Unbiased advice on your current tools." },
    { title: "Cost Optimization", desc: "Find where you're overspending on cloud." }
]

export const testimonials: TestimonialType[] = [
    { quote: "We launched in 6 weeks. Our old agency said it would take 6 months." },
    { quote: "Black Friday. 10x our normal traffic. Not a single issue." },
    { quote: "Our team updates the site daily now — before, we waited weeks." },
    { quote: "The dashboard they built saves us 15 hours every week." },
    { quote: "It’s the first website both our CEO and CTO love." }
];

export const personas: WhoWeServePersonaType[] = [
    {
        id: 0,
        role: "The Disruptor",
        target: "Early-Stage Startups",
        description: "You need to launch yesterday. We build the foundation that scales from user 1 to 1 million without the technical debt hangover.",
        metric: "4 Weeks",
        metricLabel: "Avg. Time to MVP",
        icon: ZapIcon,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
        image: '/images/devops/start_up.webp',
        illustration: (isActive: boolean) => (
            <svg viewBox="0 0 200 200" className={`w-full h-full text-primary ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`
            } >
                <defs>
                    <filter id="glow-primary" x="-50%" y="-50%" width="200%" height="200%" >
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                < circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="animate-[spin_10s_linear_infinite] opacity-30" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_15s_linear_infinite_reverse] opacity-20" />

                <g className="animate-pulse" >
                    <circle cx="100" cy="100" r="10" fill="currentColor" filter="url(#glow-primary)" />
                </g>

                {/* Shooting particles */}
                < circle cx="100" cy="100" r="2" fill="currentColor" className="animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <path d="M100 80 L100 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50 animate-pulse" />
            </svg>
        )
    },
    {
        id: 1,
        role: "The Scaler",
        target: "High-Growth Scaleups",
        description: "Your Wix site crashed during Black Friday. You need infrastructure that breathes with traffic and performs under pressure.",
        metric: "99.99%",
        metricLabel: "Uptime Guarantee",
        icon: TrendingUpIcon,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
        image: '/images/devops/high_growth.webp',
        illustration: (isActive: boolean) => (
            <svg viewBox="0 0 200 200" className={`w-full h-full text-primary ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`
            }>
                <defs>
                    <linearGradient id="grad-primary" x1="0%" y1="100%" x2="0%" y2="0%" >
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
                    </linearGradient>
                </defs>

                {/* Grid background */}
                <path d="M20 180 L180 180" stroke="currentColor" strokeWidth="1" className="opacity-30" />
                <path d="M20 180 L20 20" stroke="currentColor" strokeWidth="1" className="opacity-30" />

                {/* Bars */}
                < rect x="40" y="140" width="20" height="40" fill="url(#grad-primary)" className="animate-[pulse_3s_ease-in-out_infinite]" />
                <rect x="70" y="100" width="20" height="80" fill="url(#grad-primary)" className="animate-[pulse_3s_ease-in-out_infinite_0.5s]" />
                <rect x="100" y="120" width="20" height="60" fill="url(#grad-primary)" className="animate-[pulse_3s_ease-in-out_infinite_1s]" />
                <rect x="130" y="60" width="20" height="120" fill="url(#grad-primary)" className="animate-[pulse_3s_ease-in-out_infinite_1.5s]" />

                {/* Trend Line */}
                < polyline points="30,150 60,130 90,150 120,80 160,40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    className="drop-shadow-[0_0_8px_rgba(var(--primary),0.8)] [stroke-dasharray:200] [stroke-dashoffset:200] animate-[dash_4s_linear_infinite]" />

                <style>{`
            @keyframes dash {
              0% { stroke-dashoffset: 200; opacity: 0; }
              20% { opacity: 1; }
              80% { stroke-dashoffset: 0; opacity: 1; }
              100% { stroke-dashoffset: 0; opacity: 0; }
            }
          `}</style>
            </svg>
        )
    },
    {
        id: 2,
        role: "The Enterprise",
        target: "Modernizing Organizations",
        description: "You have legacy systems that cannot break. We build secure bridges to the cloud, ensuring compliance and continuity.",
        metric: "SOC 2",
        metricLabel: "Compliance Ready",
        icon: ShieldIcon,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
        image: '/images/devops/modernizing_org.webp',
        illustration: (isActive: boolean) => (
            <svg viewBox="0 0 200 200" className={`w-full h-full text-primary ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`
            }>
                {/* Shield Outline */}
                < path d="M100 30 L160 55 V100 C160 145 100 175 100 175 C100 175 40 145 40 100 V55 L100 30 Z"
                    fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50" />

                {/* Inner Grid Lock */}
                < path d="M70 90 L130 90 M70 110 L130 110 M70 130 L130 130 M90 70 V150 M110 70 V150"
                    stroke="currentColor" strokeWidth="1" className="opacity-30" />

                {/* Scanning Line */}
                < line x1="40" y1="50" x2="160" y2="50" stroke="currentColor" strokeWidth="2" className="opacity-80 animate-[scan_3s_ease-in-out_infinite]" >
                </line>

                < style > {`
             @keyframes scan {
               0%, 100% { transform: translateY(0); opacity: 0; }
               10% { opacity: 1; }
               90% { opacity: 1; }
               50% { transform: translateY(120px); }
             }
           `}</style>
            </svg>
        )
    },
    {
        id: 3,
        role: "The Visionary",
        target: "Product Innovators",
        description: "You're building something that doesn't exist yet. We architect custom solutions for complex, unprecedented problems.",
        metric: "100%",
        metricLabel: "IP Ownership",
        icon: LightbulbIcon,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
        image: '/images/devops/product_innovators.webp',
        illustration: (isActive: boolean) => (
            <svg viewBox="0 0 200 200" className={`w-full h-full text-primary ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`
            }>
                <defs>
                    <filter id="glow-primary-2" >
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Tesseract-ish vibe */}
                <g className="animate-[spin_20s_linear_infinite] origin-center" >
                    <rect x="70" y="70" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-80" />
                    <rect x="50" y="50" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-40" />
                    <line x1="50" y1="50" x2="70" y2="70" stroke="currentColor" strokeWidth="1" className="opacity-40" />
                    <line x1="150" y1="50" x2="130" y2="70" stroke="currentColor" strokeWidth="1" className="opacity-40" />
                    <line x1="50" y1="150" x2="70" y2="130" stroke="currentColor" strokeWidth="1" className="opacity-40" />
                    <line x1="150" y1="150" x2="130" y2="130" stroke="currentColor" strokeWidth="1" className="opacity-40" />
                </g>

                < circle cx="100" cy="100" r="5" fill="currentColor" filter="url(#glow-primary-2)" className="animate-pulse" />
            </svg>
        )
    }
];

export const stack: TechStackItemType[] = [
    {
        category: "Frontend",
        desc: "Interfaces that feel instant.",
        techs: ["React", "Next.js", "Blazor",],
        icon: LayoutIcon,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        category: "E-commerce",
        desc: "Whatever fits your business.",
        techs: ["Shopify", "WooCommerce", "Odoo"],
        icon: ShoppingCart,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        category: "Backend",
        desc: "APIs that scale.",
        techs: ["Node.js", "Python", ".NET"],
        icon: ServerIcon,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        category: "Deployment",
        desc: "From code to customer in minutes.",
        techs: ["Docker", "Kubernetes", "CI/CD"],
        icon: BoxIcon,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
    },
    {
        category: "Cloud",
        desc: "Reliable, fast, secure.",
        techs: ["AWS", "Azure", "GCP"],
        icon: CloudIcon,
        color: "text-sky-500",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20"
    }
];

export const faqs: FaqType[] = [

    {
        question: "How long does a typical project take?",
        answer: "Website: 4–8 weeks. E-commerce: 8–12 weeks. Dashboards: 8–12 weeks. We move fast without cutting corners."
    },
    {
        question: "Can you work with our existing site or platform?",
        answer: "Absolutely — revamp, rebuild, migrate, or integrate."
    }, {
        question: "What happens after launch?",
        answer: "Your choice. We can maintain it or train your team to take full ownership."
    },
    {
        question: "Will we be able to update it ourselves?",
        answer: "Yes. That’s the point. We build intuitive CMS solutions and teach you how to use them."
    },
    {
        question: "Do you only do new builds?",
        answer: "No. Some of our best work comes from revamping existing systems"
    },
    {
        question: "Do you help with API Integration?",
        answer: "Yes"
    }
]