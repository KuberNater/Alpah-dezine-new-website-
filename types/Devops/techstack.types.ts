import { LucideIcon } from 'lucide-react';
import { z } from 'zod';

export const TECH_STACK_ITEM_SCHEMA = z.object({
    category: z.string(),
    desc: z.string(),
    techs: z.array(z.string()),
    icon: z.custom<LucideIcon>(),
    color: z.string(),
    bg: z.string(),
    border: z.string()
});

export type TechStackItemType = z.infer<typeof TECH_STACK_ITEM_SCHEMA>;
