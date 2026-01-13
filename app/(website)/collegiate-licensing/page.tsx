import Hero from '@/components/Collegiate_Licensing/Hero'
import Problem from '@/components/Collegiate_Licensing/Problem'
import Solution from '@/components/Collegiate_Licensing/Solution'
import RoiMetrics from '@/components/Collegiate_Licensing/RoiMetrics'
import RoleBasedFeatures from '@/components/Collegiate_Licensing/RoleBasedFeatures'
import Timeline from '@/components/Collegiate_Licensing/Timeline'
import Cta from '@/components/Collegiate_Licensing/Cta'
import Marqueee from '@/components/Collegiate_Licensing/Marquee'
import { FAQs } from '@/components/FAQs'
import { faqs } from '@/data/CollegiateLicencing.data'
import Script from 'next/script'
import { getSeoMeta } from '@/lib/seo'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const seo = await getSeoMeta("/collegiate-licensing");

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
    const seo = await getSeoMeta("/collegiate-licensing");

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
            <Solution />
            <RoiMetrics />
            <RoleBasedFeatures />
            <Timeline />
            <FAQs data={faqs} />
            <Cta />
            <Marqueee />
        </div>
    )
}

export default page