import { AiIntroductionType } from "@/types/Ai Agent/aiIntroduction.types";
import { AgentCapabilitiesType, DemoDialogsType } from "@/types/Ai Agent/capabilities.types";
import { WalkAwayOutcomesType } from "@/types/Ai Agent/floatingAssessment.types";
import { StepsType } from "@/types/Ai Agent/howWeWork.types";
import { DeliverableType } from "@/types/Ai Agent/services.types";
import { WhoWeServeType } from "@/types/Ai Agent/whoWeServe.types";
import { FaqType } from "@/types/faqs.type";
import {
    ArchiveIcon,
    BotIcon,
    BriefcaseIcon,
    CheckCircleIcon,
    CodeIcon,
    DatabaseIcon,
    FileTextIcon,
    HandshakeIcon,
    MapIcon,
    MessageSquareIcon,
    PackageIcon,
    RocketIcon,
    SearchIcon,
    SettingsIcon,
    ShieldCheckIcon,
    ShieldIcon,
    UsersIcon,
    WorkflowIcon,
    ZapIcon
} from "lucide-react";

export const aiToolData: AiIntroductionType[] = [
    { title: "Clean Facts", desc: "Only company-approved info grounded in your data sources.", icon: DatabaseIcon },
    { title: "Action Mode", desc: "Completes multi-step tasks across your entire software stack.", icon: ZapIcon },
    { title: "Safety Rules", desc: "Built-in governance and PII limits keep your data protected.", icon: ShieldIcon }
]

export const whoWeServeData: WhoWeServeType[] = [
    {
        id: 0,
        role: "Customer Support",
        target: "Service Excellence",
        description: "Handle repeat questions with approved answers and smarter intake.",
        points: ["Handle repeat questions", "Smarter ticket intake", "Consistent guidance"],
        icon: MessageSquareIcon,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        id: 1,
        role: "Sales & Pre-Sales",
        target: "Growth Acceleration",
        description: "Draft proposals and responses with product/policy guardrails.",
        points: ["Draft proposals & responses", "Product and policy Q&A", "Call summaries & follow-ups"],
        icon: BriefcaseIcon,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        id: 2,
        role: "HR & People Ops",
        target: "Employee Experience",
        description: "Policy and benefits Q&A with onboarding guidance.",
        points: ["Policy and benefits Q&A", "Onboarding checklists", "Request intake & routing"],
        icon: UsersIcon,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        id: 3,
        role: "IT & Operations",
        target: "Internal Efficiency",
        description: "Helpdesk triage and SOP guidance for self-service workflows.",
        points: ["Helpdesk triage & SOPs", "Access and request workflows", "Status updates & service"],
        icon: SettingsIcon,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
    }
];

export const agentCapabilities: AgentCapabilitiesType[] = [
    {
        title: "Answer",
        description: "Responds to common questions using approved company knowledge.",
        icon: MessageSquareIcon,
        example: "What it looks like: Responds to common questions using approved company knowledge"
    },
    {
        title: "Guide",
        description: "Walks users through processes—intake, validation, completion.",
        icon: MapIcon,
        example: "What it looks like: Walks users through processes—intake, validation, completion"
    },
    {
        title: "Act",
        description: "Executes tasks in connected tools (when permitted).",
        icon: ZapIcon,
        example: "What it looks like: Executes tasks in connected tools"
    },
    {
        title: "Escalate",
        description: "Hands off to humans when it should.",
        icon: HandshakeIcon,
        example: "What it looks like: Hands off to humans when it should"
    }
];

export const demoDialogs: DemoDialogsType[] = [
    {
        user: "What is our holiday policy?",
        bot: "You have 25 days of annual leave. I've verified this from the 2024 HR Handbook. Would you like to see the carry-over rules?",
        status: "Verified Source: PDF"
    },
    {
        user: "I need to request a new laptop.",
        bot: "I can help with that. Is this for a replacement or a new hire? I'll need your department code to start the request.",
        status: "Workflow: Active"
    },
    {
        user: "Cancel my last order #12345.",
        bot: "Checking order status... Order #12345 is still 'Processing'. I have initiated the cancellation in the ERP system. You'll get a confirmation email shortly.",
        status: "Action: Executed"
    },
    {
        user: "This isn't working, I'm frustrated.",
        bot: "I understand. I'm connecting you with a senior support lead right now. I've sent them a full summary of our conversation so you don't have to repeat yourself.",
        status: "Handoff: Human Lead"
    }
];

export const deliverablesData: DeliverableType[] = [
    {
        id: 1,
        title: "Use-case selection & agent planning",
        tagline: "Strategy First",
        description: "We identify the agent opportunities actually worth building first.",
        icon: SearchIcon,
        deliverables: ["Workflow discovery and prioritization", "Scope definition", "Success metrics (time saved, resolution rate)"]
    },
    {
        id: 2,
        title: "Agent design & build",
        tagline: "Behavioral Design",
        description: "We design the conversation. Then build the behavior to match.",
        icon: BotIcon,
        deliverables: ["Conversation structure & tone", "Guardrails, fallbacks, defaults", "Human handoff paths"]
    },
    {
        id: 3,
        title: "Knowledge readiness",
        tagline: "Grounded Accuracy",
        description: "Most 'AI problems' are knowledge problems: scattered docs, stale pages.",
        icon: DatabaseIcon,
        deliverables: ["Source mapping: approved & current", "Content preparation for retrieval", "Maintenance model"]
    },
    {
        id: 4,
        title: "Integrations & workflow automation",
        tagline: "Transformative Power",
        description: "An agent that talks is helpful. An agent that completes work is transformative.",
        icon: WorkflowIcon,
        deliverables: ["Intake and routing (tickets, requests)", "Connected system updates", "Logging and traceability"]
    },
    {
        id: 5,
        title: "Security, governance & rollout",
        tagline: "Built for Enterprise",
        description: "Built for real-world constraints.",
        icon: ShieldCheckIcon,
        deliverables: ["Role-aware access & privilege", "Rigorous accuracy testing", "Admin handoff documentation"]
    }
];

export const steps: StepsType[] = [
    {
        label: "Discover",
        title: "Finding the path",
        desc: "We look at your messy workflows and pick 1–2 spots where an AI agent will save the most time immediately.",
        pain: "Teams overwhelmed by repeat questions",
        gain: "A clear, approved plan for automation",
        icon: SearchIcon
    },
    {
        label: "Build",
        title: "Teaching the agent",
        desc: "We connect the agent to your approved docs and teach it exactly how to talk and act on your behalf.",
        pain: "Manual data entry and tab-switching",
        gain: "A working agent that knows your business",
        icon: CodeIcon
    },
    {
        label: "Validate",
        title: "Safety check",
        desc: "We throw real-world problems at the agent to make sure it never makes things up and always follows the rules.",
        pain: "Fear of AI 'hallucinating' or leaking data",
        gain: "Tested, trustworthy, and safe deployment",
        icon: CheckCircleIcon
    },
    {
        label: "Launch",
        title: "Ready for work",
        desc: "We roll it out to your team with clear guides and a plan to keep making it smarter every single month.",
        pain: "Stale tools that people don't use",
        gain: "A productive new member of the team",
        icon: RocketIcon
    }
];

export const walkawayOutcomes: WalkAwayOutcomesType[] = [
    { label: "Production Agent", desc: "Production-ready Copilot agent(s)", icon: BotIcon },
    { label: "Knowledge Map", desc: "Knowledge source map + improvements", icon: FileTextIcon },
    { label: "Automations", desc: "Workflow automations (where appropriate)", icon: ZapIcon },
    { label: "Governance Pack", desc: "Testing results & deployment checklist", icon: ShieldIcon },
    { label: "Admin Handoff", desc: "Admin + governance documentation", icon: ArchiveIcon },
    { label: "Adoption Kit", desc: "Quick-start guide + rollout assets", icon: PackageIcon }
];

export const businessWins: string[] = [
    "Scale support without hiring more people.",
    "No more hunting through messy folders for the right doc.",
    "Remove human lag from your repetitive daily tasks.",
    "Stay compliant and protected automatically.",
    "Your team can manage the agent with zero coding.",
    "Everyone gets the right answer from day one."
];

export const aiFaqs: FaqType[] = [
    { question: "Will this replace our team?", answer: "No. Agents reduce repetitive work and improve consistency. Your people keep the judgment calls." },
    { question: "How do you prevent hallucinations?", answer: "Grounding in approved sources. Narrow scope. Clear escalation when confidence is low." },
    { question: "Can we start small?", answer: "Yes. One well-chosen agent is often the fastest path to value—then expand intentionally." },
    { question: "How do you measure success?", answer: "Adoption, containment rate, time saved, cycle-time reduction, user feedback. Tracked from day one." }
];