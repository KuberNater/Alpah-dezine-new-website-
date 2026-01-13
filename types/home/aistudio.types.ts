import {z} from "zod"
import { LucideIcon } from 'lucide-react';

const lucideIconSchema = z.any() as z.ZodType<LucideIcon>;

const PRESETS_VALIDATION = z.object({
    label: z.string(),
    prompt: z.string()
})

const RATIOS_VALIDATION = z.object({
    id: z.string(),
    label: z.string(),
    icon: lucideIconSchema
})

export type Presets = z.infer<typeof PRESETS_VALIDATION>
export type Ratios = z.infer<typeof RATIOS_VALIDATION>