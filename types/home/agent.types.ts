import { z } from "zod"
import { LucideIcon } from 'lucide-react';

const lucideIconSchema = z.any() as z.ZodType<LucideIcon>;

const AGENT_TYPES_VALIDATION = z.object({
    id: z.string(),
    name: z.string(),
    icon: lucideIconSchema,
    desc: z.string(),
    defaultScenario: z.string(),
    benefit: z.string()
})

export type AgentType = z.infer<typeof AGENT_TYPES_VALIDATION>