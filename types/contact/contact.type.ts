import { z } from "zod"

const LOCATION_VALIDATION = z.object({
    country: z.string(),
    company: z.string(),
    address: z.array(z.string()),
    phone: z.string(),
    tel: z.string()
})


export type LocationType = z.infer<typeof LOCATION_VALIDATION>

export enum InquiryType {
    PROJECT = 'Start a Project',
    CAREERS = 'Careers',
}

export enum ClientType {
    BUSINESS = 'Business/Company',
    STARTUP = 'Startup',
    AGENCY = 'Agency',
    INDIVIDUAL = 'Individual Entrepreneur',
}

export const CONTACT_FORM_VALIDATION = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional().or(z.literal('')),
    inquiryType: z.enum(InquiryType),
    clientType: z.enum(ClientType).optional(),
    message: z.string().min(1, "Message is required"),
    resume: z.any().optional().nullable()
})

export type ContactFormData = z.infer<typeof CONTACT_FORM_VALIDATION>