import { LucideIcon } from 'lucide-react';
import React from 'react';
import { z } from 'zod';

export const WHO_WE_SERVE_PERSONA_SCHEMA = z.object({
    id: z.number(),
    role: z.string(),
    target: z.string(),
    description: z.string(),
    metric: z.string(),
    metricLabel: z.string(),
    icon: z.custom<LucideIcon>(),
    color: z.string(),
    bg: z.string(),
    border: z.string(),
    image: z.string(),
    illustration: z.custom<(isActive: boolean) => React.ReactNode>()
});

export type WhoWeServePersonaType = z.infer<typeof WHO_WE_SERVE_PERSONA_SCHEMA>;
