import { ProblemTypes, RoleTypes, StepsTypes } from '@/types/CollegiateLicensing/data.types';
import { FaqType } from '@/types/faqs.type';
import { ILogos } from '@/types/home/logos.type';
import { Mail, FileSpreadsheet, Clock, Calendar, Shuffle, EyeOff, AlertTriangle, Building2, ShieldCheck, Briefcase, BarChart3, Factory, Tag } from 'lucide-react';
export const Problem: ProblemTypes[] = [
    {
        icon: Mail,
        title: "Email Overload",
        desc: "Email chains averaging 20+ emails per approval and 12 people CC'd."
    },
    {
        icon: FileSpreadsheet,
        title: "Fragile Spreadsheets",
        desc: "Master sheets that break the moment someone sorts a column wrong."
    },
    {
        icon: Clock,
        title: "Slow Approvals",
        desc: "Taking two full weeks just to approve a single t-shirt design."
    },
    {
        icon: Calendar,
        title: "Manual Tracking",
        desc: "Requiring, on average, 10+ days of administrative time per decision."
    },
    {
        icon: Shuffle,
        title: "Disconnected Systems",
        desc: "Siloed tools demanding duplicate data entry and risking errors."
    },
    {
        icon: EyeOff,
        title: "Zero Visibility",
        desc: "No insight into what's stuck, where it's stuck, or why it's stuck."
    },
]

export const roles: RoleTypes[] = [
    {
        icon: Building2,
        activeIcon: ShieldCheck,
        title: "For Universities",
        headline: "Protect your brand.",
        description: "Enforce brand guidelines automatically without slowing down your partners.",
        features: ["Custom Approval Workflows", "Brand Guideline Library", "Revenue Attribution"]
    },
    {
        icon: Briefcase,
        activeIcon: BarChart3,
        title: "For Agencies",
        headline: "Scale your portfolio.",
        description: "Manage hundreds of university clients from a single, unified dashboard.",
        features: ["Multi-tenant Architecture", "Bulk Operations", "Consolidated Reporting"]
    },
    {
        icon: Factory,
        activeIcon: Tag,
        title: "For Manufacturers",
        headline: "Accelerate to market.",
        description: "Get products approved in days, not weeks. Real-time status updates.",
        features: ["24/7 Submission Portal", "Instant Certificates", "Direct Messaging"]
    }
];

export const steps: StepsTypes[] = [
    { number: "01", title: "Kickoff & Discovery", time: "Week 1", desc: "We map your current workflows and identify bottlenecks." },
    { number: "02", title: "Configuration", time: "Week 2-3", desc: "We configure the platform to match your specific business rules." },
    { number: "03", title: "Training & Launch", time: "Week 4-6", desc: "Comprehensive team onboarding and official go-live event." },
];

export const faqs: FaqType[] = [
    { question: "How long does implementation take?", answer: "Most clients are fully operational in 6 weeks. Simple setups can go live in 3 weeks." },
    { question: "Can we try it before committing?", answer: "Yes—a 30-day pilot program is available with full functionality and up to 50 approvals." },
    { question: "What if we have unique workflow requirements?", answer: "Our platform supports custom workflows, approval rules, and business logic. 85% of customizations require no code." },
    { question: "Do you offer training?", answer: "Comprehensive training included: live sessions, recorded tutorials, documentation, and ongoing webinars." },
    { question: "What happens to our data if we leave?", answer: "You own your data. Full export in standard formats (CSV, JSON, PDF) available anytime." }
];

export const logos: ILogos[] = [
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-01.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-02.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-03.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-04.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-05.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-06.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-07.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-08.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-09.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-10.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-11.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-12.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-13.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-14.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-15.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-16.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-17.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-18.svg"
    },
    {
        name: "NCAA",
        url: "images/collegiate/NCAA LOGO-19.svg"
    },
    {
        name: "Harvard University",
        url: "images/collegiate/NCAA LOGO-20.svg"
    },
    {
        name: "Boston University",
        url: "images/collegiate/NCAA LOGO-21.svg"
    },

];