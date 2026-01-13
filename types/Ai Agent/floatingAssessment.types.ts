import { z } from "zod"
import { LucideIcon } from 'lucide-react';

const lucideIconSchema = z.any() as z.ZodType<LucideIcon>;

const WALKWAYOUT_VALIDATION = z.object({
    label: z.string(),
    desc: z.string(),
    icon: lucideIconSchema,
})

export type WalkAwayOutcomesType = z.infer<typeof WALKWAYOUT_VALIDATION>
