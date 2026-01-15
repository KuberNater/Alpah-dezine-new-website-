import { z } from "zod";
import { LucideIcon } from "lucide-react";

const lucideIconSchema = z.any() as z.ZodType<LucideIcon>;

const TESTIMONIAL_VALIDATION = z.object({
    id:z.number(),
    name:z.string(),
    designation:z.string(),
    content:z.string(),
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