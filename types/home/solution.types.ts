import { z } from "zod"

const SOLUTION_CARD_VALIDATION = z.object({
    title: z.string(),
    subtitle: z.string(),
    themeColor: z.string(),
    checklist: z.array(z.string()),
    stats: z.array(z.object({
        val: z.string(),
        label: z.string()
    })),
    illustration: z.any(),
    ctas: z.array(z.string()),
    link: z.string()
})

export type SolutionCardType = z.infer<typeof SOLUTION_CARD_VALIDATION>
