import { z } from 'zod'

const META_VALIDATION = z.object({
    x_name: z.string(),
    x_keywords: z.string(),
    x_page_url: z.string(),
    x_page_title: z.string(),
    x_studio_opengraph_keywords: z.string(),
    x_studio_meta_description: z.string(),
    x_studio_opengraph_title: z.string(),
    x_studio_opengraph_description: z.string(),
    x_studio_opengraph_imageurl: z.string(),
    x_studio_opengraph_imagealt: z.string(),
    x_studio_jsonld: z.string()
})

export type MetaDataType = z.infer<typeof META_VALIDATION>