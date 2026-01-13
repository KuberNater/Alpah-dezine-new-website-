import { z } from "zod"

const FAQ_VALIDATION = z.object({
    id: z.string().optional(),
    question: z.string(),
    answer: z.string()
})

export type FaqType = z.infer<typeof FAQ_VALIDATION>