import { z } from "zod";
import { LucideIcon } from 'lucide-react';

const lucideIconSchema = z.any() as z.ZodType<LucideIcon>;

const DEMO_DIALOGS_VALIDATION = z.object({
    user: z.string(),
    bot: z.string(),
    status: z.string()
})

const AGENT_CAPABILITIES_VALIDATION = z.object({
    title: z.string(),
    description: z.string(),
    icon: lucideIconSchema,
    example: z.string()
})

export type DemoDialogsType = z.infer<typeof DEMO_DIALOGS_VALIDATION>
export type AgentCapabilitiesType = z.infer<typeof AGENT_CAPABILITIES_VALIDATION>