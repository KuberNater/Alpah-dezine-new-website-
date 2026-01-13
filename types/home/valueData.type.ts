import { z } from "zod"
import { LucideIcon } from 'lucide-react';

const lucideIconSchema = z.any() as z.ZodType<LucideIcon>;

const VALUE_VALIDATION = z.object({
    title: z.string(),
    value: z.string(),
    unit: z.string(),
    sub: z.string(),
    description: z.string(),
    icon: lucideIconSchema,
    color: z.string(),
    chart: z.array(z.number())
})

export type ValueType = z.infer<typeof VALUE_VALIDATION>