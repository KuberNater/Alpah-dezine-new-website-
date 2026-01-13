import {z} from "zod"
import { LucideIcon } from 'lucide-react';

const lucideIconSchema = z.any() as z.ZodType<LucideIcon>;

const AI_INTRODUCTION_VALIDATION = z.object({
    title: z.string(),
    desc: z.string(),
    icon: lucideIconSchema,
})

export type AiIntroductionType = z.infer<typeof AI_INTRODUCTION_VALIDATION>