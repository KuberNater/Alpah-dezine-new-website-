import { z } from "zod"
import { LucideIcon } from 'lucide-react';

const lucideIconSchema = z.any() as z.ZodType<LucideIcon>;

const STEPS_VALIDATION = z.object({
    label: z.string(),
    title: z.string(),
    desc: z.string(),
    pain: z.string(),
    gain: z.string(),
    icon: lucideIconSchema,
})

export type StepsType = z.infer<typeof STEPS_VALIDATION>
