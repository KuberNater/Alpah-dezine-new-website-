import {z} from "zod"

const FLOATING_ASSESSMENT_VALIDATION=z.object({
    title:z.string(),
    desc:z.string()
})
export type FloatingAssesmentType= z.infer<typeof FLOATING_ASSESSMENT_VALIDATION>