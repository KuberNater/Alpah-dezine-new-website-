import { LucideIcon } from 'lucide-react';
import { z } from 'zod';



export interface IntroductionItems {
    id?: number;
    question: string;
    friction: string;
    flow: string;
}

export interface FeatureItem {
    category: string;
    legacy: {
        title: string;
        desc: string;
        icon: LucideIcon;
        status: string;
    };
    alpha: {
        title: string;
        desc: string;
        icon: LucideIcon;
        status: string;
    };
}

export interface StepItem {
    id: number;
    title: string;
    subtitle: string;
    desc: string;
    icon: LucideIcon;
    command: string;
    output: string[];
}
export const SERVICE_ITEM_SCHEMA = z.object({
    id: z.number(),
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    icon: z.custom<LucideIcon>(),
    colSpan: z.string().optional()
});

export type ServiceItem = z.infer<typeof SERVICE_ITEM_SCHEMA>;
