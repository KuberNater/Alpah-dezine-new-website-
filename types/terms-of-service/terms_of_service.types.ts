import { z } from "zod";


export const TermItemSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.union([
        z.string().min(1, "Content is required"),
        z.array(z.string().min(1, "Content item cannot be empty")).min(1, "Content array must have at least one item"),
    ]),
});

export const TermsDataSchema = z
    .array(TermItemSchema)
    .min(1, "Terms of service must have at least one item");

export type TermItem = z.infer<typeof TermItemSchema>;
export type TermsData = z.infer<typeof TermsDataSchema>;
