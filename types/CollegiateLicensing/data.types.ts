import { LucideIcon } from "lucide-react";
import { z } from "zod";

// Helper for LucideIcon since it's a React component type
const LucideIconSchema = z.custom<LucideIcon>((val) => {
    return typeof val === 'function' || typeof val === 'object';
}, { message: "Invalid Lucide Icon" });

export const ProblemSchema = z.object({
    icon: LucideIconSchema,
    title: z.string(),
    desc: z.string(),
});

export type ProblemTypes = z.infer<typeof ProblemSchema>;

export const RoleSchema = z.object({
    icon: LucideIconSchema,
    activeIcon: LucideIconSchema,
    title: z.string(),
    headline: z.string(),
    description: z.string(),
    features: z.array(z.string()),
});

export type RoleTypes = z.infer<typeof RoleSchema>;

export const StepsSchema = z.object({
    number: z.string(),
    title: z.string(),
    time: z.string(),
    desc: z.string(),
});

export type StepsTypes = z.infer<typeof StepsSchema>;
