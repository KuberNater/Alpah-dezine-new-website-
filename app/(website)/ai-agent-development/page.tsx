import AiIntroduction from '@/components/Ai_Agent/AiIntroduction'
import Capabilities from '@/components/Ai_Agent/Capabilities'
import CTA from '@/components/Ai_Agent/CTA'
import FloatingAssessment from '@/components/Ai_Agent/FloatingAssessment'
import HeroSection1 from '@/components/Ai_Agent/HeroSection1'
import Services from '@/components/Ai_Agent/Services'
import Timeline from '@/components/Ai_Agent/TimeLine'
import WhoWeServe from '@/components/Ai_Agent/WhoWeServe'
import { FAQs } from '@/components/FAQs'
import { aiFaqs } from '@/data/AiAgent.data'
import { getSeoMeta } from '@/lib/seo'
import { Metadata } from 'next'
import Script from 'next/script'

export async function generateMetadata(): Promise<Metadata> {
    const seo = await getSeoMeta("/ai-agent-development");

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
    const seo = await getSeoMeta("/ai-agent-development");

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
        <div className="relative w-full landing bg-background  min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
            {/* JSON-LD Structured Data */}
            {jsonLd && (
                <Script
                    id="json-ld"
                    type="application/ld+json"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            {/* Hero section 1  */}
            <HeroSection1 />
            {/* AI Introduction Section  */}
            <AiIntroduction />
            {/* Who We Serve Section  */}
            <WhoWeServe />
            {/* Capabilities Section  */}
            <Capabilities />
            {/* Services Section  */}
            <Services />
            {/* TimeLine Section  */}
            <Timeline />
            {/* Floating Assesment Section  */}
            <FloatingAssessment />
            {/* FAQ Section  */}
            <FAQs data={aiFaqs} />
            {/* CTA Section  */}
            <CTA />
        </div>
    )
}

export default page