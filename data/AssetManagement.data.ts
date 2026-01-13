import { FaqItem } from "@/types/AssetManagement/faq.types";
import { Role } from "@/types/AssetManagement/role.types";
import { Steps } from "@/types/AssetManagement/solutionStep.types";
import { ValueProposition } from "@/types/AssetManagement/valueProposition.types";
import { Archive, Building, CheckCircle2, Database, Globe, GraduationCap, Heart, MessageSquare, PenTool, Scale, ShoppingBag, Users, Zap } from "lucide-react";

export const steps: Steps[] = [
    {
        id: "01",
        title: "Intake & Audit",
        desc: "We catalogue every asset and verify guidelines. Comprehensive digital registry creation.",
        humanValue: "Eliminate manual search",
        icon: Database,
        stickerStyle: "bg-yellow-300 rotate-[-4deg] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        position: "top-[5%] left-[5%]"
    },
    {
        id: "02",
        title: "Stakeholder Alignment",
        desc: "Single source of truth. Bridge university, agency, and manufacturer gaps.",
        humanValue: "One shared view",
        icon: Globe,
        stickerStyle: "bg-blue-600 text-white rounded-full border-4 border-white shadow-lg rotate-[6deg]",
        position: "bottom-[15%] left-[-5%]"
    },
    {
        id: "03",
        title: "Approval Workflows",
        desc: "Custom-built checkpoints. Nothing advances without timestamped verification.",
        humanValue: "Zero-friction signoff",
        icon: Heart,
        stickerStyle: "bg-pink-500 text-white rounded-[24px] border-2 border-white rotate-[-8deg] shadow-lg",
        position: "top-[15%] right-[5%]"
    },
    {
        id: "04",
        title: "Version Control",
        desc: "Automated file retirement. Ensure only current approved assets stay in circulation.",
        humanValue: "Never use an old logo",
        icon: MessageSquare,
        stickerStyle: "bg-white text-black rounded-full border-2 border-black rotate-[5deg] shadow-md",
        position: "bottom-[10%] right-[0%]"
    }
];

export const valuePropositions: ValueProposition[] = [
    {
        id: '01',
        icon: Zap,
        title: 'High Efficiency',
        subtitle: 'Designed to minimize cognitive load. Tasks that used to take hours now take minutes.',
    },
    {
        id: '02',
        icon: CheckCircle2,
        title: 'Predictable Results',
        subtitle: 'Standardized workflows mean every output is correct. Every time. No exceptions.',
    },
    {
        id: '03',
        icon: Archive,
        title: 'Institutional Knowledge',
        subtitle: 'The platform becomes your memory. Never lose history when team members move on.',
    }
]
export const roles: Role[] = [
    { role: "Manufacturers", desc: "Approved, ready-to-print assets with clear specifications.", icon: Building, color: "text-primary", accent: "blue", status: "Synced" },
    { role: "Universities", desc: "Guidelines and brand approval management in one portal.", icon: GraduationCap, color: "text-primary", accent: "slate", status: "Active" },
    { role: "Agencies", desc: "Complete documentation for verified audit trails.", icon: Scale, color: "text-primary", accent: "emerald", status: "Verified" },
    { role: "Design Teams", desc: "Centrally organized asset libraries and master files.", icon: PenTool, color: "text-primary", accent: "rose", status: "Syncing..." },
    { role: "Retailers", desc: "Verified product imagery for immediate distribution.", icon: ShoppingBag, color: "text-primary", accent: "indigo", status: "Live" },
    { role: "Legal", desc: "Trademark usage archives and agreement history.", icon: Users, color: "text-primary", accent: "slate", status: "Protected" },
];


export const faqs: FaqItem[] = [
    { question: "What assets do you manage?", answer: "All licensed creative assets—logos, wordmarks, mascots, product designs, packaging, and high-fidelity brand guidelines are centrally archived and managed." },
    { question: "How do you ensure royalty compliance?", answer: "Every asset carries automated metadata including terms, rights, and approval status. This creates a complete digital audit trail that is always current." },
    { question: "We received a warning. Can you help?", answer: "Absolutely. We specialize in addressing structural gaps while simultaneously building systems to prevent future recurrence and legal friction." },
    { question: "We're facing an upcoming audit.", answer: "Contact us immediately. We offer white-glove preparation services that organize your entire documentation library before auditors arrive." },
    { question: "How quickly can we begin?", answer: "Most standard implementations complete within 2-4 weeks. Accelerated deployment options are available for high-urgency compliance needs." }
];