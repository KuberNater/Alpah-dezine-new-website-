import { z } from "zod";
import { LucideIcon } from "lucide-react";
import React from "react";

const lucideIconSchema = z.any() as z.ZodType<LucideIcon>;

const reactNodeSchema = z.any() as z.ZodType<React.ReactNode>;

const TESTIMONIAL_VALIDATION = z.object({
    quote: z.string(),
    author: z.string(),
    role: z.string(),
    company: z.string(),
    image: z.string(),
    years: z.string().optional()
});

const COLOR_STYLE_VALIDATION = z.object({
    bgLight: z.string(),
    icon: z.string(),
    glow: z.string(),
    border: z.string(),
    textGradient: z.string()
});

const STAT_CARD_PROPS_VALIDATION = z.object({
    value: z.string(),
    label: z.string(),
    subtext: z.string(),
    icon: lucideIconSchema,
    color: z.enum(['mint', 'lavender', 'peach', 'royal'])
});

export type TestimonialType = z.infer<typeof TESTIMONIAL_VALIDATION>;
export type ColorStyle = z.infer<typeof COLOR_STYLE_VALIDATION>;
export type StatCardProps = z.infer<typeof STAT_CARD_PROPS_VALIDATION>;