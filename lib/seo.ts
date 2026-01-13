// lib/seo.ts
import { MetaDataType } from "@/types/meta/meta.types";
import axios from "axios";
import { headers } from "next/headers";

const FALLBACK_META: MetaDataType = {
    x_name: "Alpha Dezine",
    x_keywords: "software development, web development, digital solutions, AI Agents",
    x_page_url: "/",
    x_page_title: "Alpha Dezine",
    x_studio_opengraph_keywords: "software development, web development, digital solutions",
    x_studio_meta_description: "Alpha Dezine",
    x_studio_opengraph_title: "Alpha Dezine",
    x_studio_opengraph_description: "Alpha Dezine",
    x_studio_opengraph_imageurl: "https://alphadezine.com/logo/ad_logo.svg",
    x_studio_opengraph_imagealt: "Alpha Dezine Logo",
    x_studio_jsonld: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Alpha Dezine",
        "url": "https://alphadezine.com",
        "logo": "https://alphadezine.com/logo/ad_logo.svg"
    })
};

export async function getSeoMeta(slug: string): Promise<MetaDataType> {
    const headerlist = await headers()
    const hostname = headerlist.get("host")
    const protocol = headerlist.get("x-forwarded-proto")
    const host = `${protocol}://${hostname}`

    try {
        const response = await axios.get(`${host}/api/meta?slug=${slug}`);
        if (response.status === 200 && response.data.data) {
            return response.data.data as MetaDataType
        }
        return FALLBACK_META
    } catch (error) {
        console.error(`[SEO] Using fallback metadata for ${slug} (API unavailable)`, error);
        return FALLBACK_META
    }
}
