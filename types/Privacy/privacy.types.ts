import { z } from "zod";

export const PrivacySectionSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
});

export const PrivacyPolicySchema = z.array(PrivacySectionSchema);

export type PrivacySection = z.infer<typeof PrivacySectionSchema>;
export type PrivacyPolicy = z.infer<typeof PrivacyPolicySchema>;

