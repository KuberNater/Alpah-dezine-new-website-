import { z } from "zod";


export const SecurityItemSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.union([
        z.string().min(1, "Content is required"),
        z.array(z.string().min(1, "Content item cannot be empty")).min(1, "Content array must have at least one item"),
    ]),
});

export const SecurityDataSchema = z
    .array(SecurityItemSchema)
    .min(1, "Security data must have at least one item");

export type SecurityItem = z.infer<typeof SecurityItemSchema>;
export type SecurityData = z.infer<typeof SecurityDataSchema>;
