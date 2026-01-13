import { z } from "zod";
import { LucideIcon } from 'lucide-react';

const lucideIconSchema = z.any() as z.ZodType<LucideIcon>;

export const PANELS_VALIDATION = z.object({
    id: z.string(),
    title: z.string(),
    image: z.string(),
    alt: z.string(),
    icon: lucideIconSchema,
    desc: z.string(),
    pos: z.string(),
    zIndex: z.string(),
    rotation: z.number(),
})

export type panelsValidation  = z.infer<typeof PANELS_VALIDATION> 