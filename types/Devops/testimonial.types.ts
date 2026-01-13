import {z} from "zod"

const TESTIMONIAL_VALIDATION=z.object({
    quote:z.string()
})

export type TestimonialType= z.infer<typeof TESTIMONIAL_VALIDATION>