import { z } from "zod"
import { LucideIcon } from 'lucide-react';

const lucideIconSchema = z.any() as z.ZodType<LucideIcon>;

const DELIVERABLE_VALIDATION = z.object({
    id: z.number(),
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    icon: lucideIconSchema,
    deliverables: z.array(z.string())
})

export type DeliverableType = z.infer<typeof DELIVERABLE_VALIDATION>