import { z } from "zod"
import { LucideIcon } from 'lucide-react';

const lucideIconSchema = z.any() as z.ZodType<LucideIcon>;

const WHO_WE_SERVE_VALIDATION = z.object({
    id: z.number(),
    role: z.string(),
    target: z.string(),
    description: z.string(),
    points: z.array(z.string()),
    icon: lucideIconSchema,
    color: z.string(),
    bg: z.string(),
    border: z.string()
})

export type WhoWeServeType = z.infer<typeof WHO_WE_SERVE_VALIDATION>