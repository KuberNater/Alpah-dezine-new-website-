import { z } from "zod"
import { LucideIcon } from 'lucide-react';

const lucideIconSchema = z.any() as z.ZodType<LucideIcon>;

const STEPS_VALIDATION = z.object({
    id: z.string(),
    label: z.string(),
    title: z.string(),
    icon: lucideIconSchema,
    desc: z.string(),
    color: z.string()
})

export type StepType = z.infer<typeof STEPS_VALIDATION>