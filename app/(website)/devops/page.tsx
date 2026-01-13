import ComparisonSlider from "@/components/Devops/ComparisonSlider";
import Timeline from "@/components/Devops/Timeline";
import FloatingAssessment from "@/components/Devops/FloatingAssesment";
import Hero from "@/components/Devops/Hero";
import Introduction from "@/components/Devops/Introduction";
import Services from "@/components/Devops/Services";
import TechStack from "@/components/Devops/TechStack";
import WhoWeServe from "@/components/Devops/WhoWeServe";
import { FAQs } from "@/components/FAQs";
import { faqs } from "@/data/Devops.data";
import { getSeoMeta } from "@/lib/seo";
import { Metadata } from "next";
import Script from "next/script";
import { MetaDataType } from "@/types/meta/meta.types";

export async function generateMetadata(): Promise<Metadata> {
    const seo: MetaDataType = await getSeoMeta("/devops");
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
    const seo = await getSeoMeta("/devops");

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
            <Introduction />
            <Services />
            <ComparisonSlider />
            <Timeline />
            {/* Tech Stack Section  */}
            <TechStack />
            {/* Who We Serve Section */}
            <WhoWeServe />
            {/* FAQ Section */}
            <FAQs data={faqs} />
            {/* Floating Assessment */}
            <FloatingAssessment />
        </div>
    )
}

export default page;