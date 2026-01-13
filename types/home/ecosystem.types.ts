import {z} from "zod"
import { LucideIcon } from 'lucide-react';

const lucideIconSchema = z.any() as z.ZodType<LucideIcon>;

const CATEGORY_VALIDATION = z.object({
    id: z.string(),
    label: z.string(),
    sub: z.string(),
    icon: lucideIconSchema,
})

const ECOSYSTEM_VALIDATION=z.object({
    id:z.string(),
    name:z.string(),
    category:z.string(),
    logo:z.string(),
    glow:z.string()
})

export type categoryValidation = z.infer<typeof CATEGORY_VALIDATION>
export type ecosystemValidation = z.infer<typeof ECOSYSTEM_VALIDATION>