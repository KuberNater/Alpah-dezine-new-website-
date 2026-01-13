import Cta from "@/components/Asset_Management/Cta"
import Hero from "@/components/Asset_Management/Hero"
import Problem from "@/components/Asset_Management/Problem"
import RoiMetrics from "@/components/Asset_Management/RoiMetrics"
import RoleBasedFeatures from "@/components/Asset_Management/RoleBasedFeatures"
import Security from "@/components/Asset_Management/Security"
import Solutions from "@/components/Asset_Management/Solutions"
import { FAQs } from "@/components/FAQs"
import { faqs } from "@/data/AssetManagement.data"
import { getSeoMeta } from "@/lib/seo"
import { Metadata } from "next"
import Script from "next/script"

export async function generateMetadata(): Promise<Metadata> {
    const seo = await getSeoMeta("/creative-asset-management");

    return {
        title: seo.x_page_title ?? "",
        description: seo.x_studio_meta_description ?? "",
        keywords: seo.x_keywords ?? "",
        openGraph: {
            title: seo.x_page_title ?? "",
            description: seo.x_studio_meta_description ?? "",
            images: [
                {
                    url: seo.x_studio_opengraph_imageurl ?? "",
                    alt: seo.x_studio_opengraph_imagealt ?? "",
                },
            ],
        },
        twitter: {
            title: seo.x_page_title ?? "",
            description: seo.x_studio_meta_description ?? "",
            images: [
                {
                    url: seo.x_studio_opengraph_imageurl ?? "",
                    alt: seo.x_studio_opengraph_imagealt ?? "",
                },
            ],
        },
    };
}

async function page() {
    const seo = await getSeoMeta("/creative-asset-management");

    let jsonLd = null;
    if (seo.x_studio_jsonld) {
        try {
            jsonLd = typeof seo.x_studio_jsonld === 'string'
                ? JSON.parse(seo.x_studio_jsonld)
                : seo.x_studio_jsonld;
        } catch (e) {
            console.error('Invalid JSON-LD:', e);
        }
    }
    return (
        <div className="relative w-full  min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
            {/* JSON-LD Structured Data */}
            {jsonLd && (
                <Script
                    id="json-ld"
                    type="application/ld+json"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            <Hero />
            <Problem />
            <Security />
            <Solutions />
            <RoleBasedFeatures />
            <RoiMetrics />
            <FAQs data={faqs} />
            <Cta />
        </div>
    )
}

export default page