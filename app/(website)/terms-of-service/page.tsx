import Heading from '@/components/Heading'
import MaxWidth from '@/components/MaxWidth'
import { termsData } from '@/data/terms_of_service.data'
import { Section } from './TermsOfServiceSection'
import Script from 'next/script';
import { getSeoMeta } from '@/lib/seo';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const seo = await getSeoMeta("/terms-of-service");

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

async function TermsOfServicePage() {
    const seo = await getSeoMeta("/terms-of-service");

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
        <>
            {/* JSON-LD Structured Data */}
            {jsonLd && (
                <Script
                    id="json-ld"
                    type="application/ld+json"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            <div className="min-h-screen bg-background landing font-sans flex flex-col selection:bg-accent/30 selection:text-brand">
                <main className="grow pt-16 pb-16 lg:pt-24 lg:pb-32 overflow-hidden">
                    <MaxWidth>
                        {/* Hero Section */}
                        <Heading
                            badgeText="Loud Shark LLC dba Alpha Dezine"
                        >
                            Terms of <span className='text-primary'>Service</span>
                        </Heading>
                        <p className='text-base max-w-prose mx-auto mb-6 w-full text-foreground text-center'>Please read these terms carefully before using our services. By accessing or using Alpha Dezine's services, you acknowledge that you have read, understood, and agree to be bound by these terms.</p>
                        {/* Terms Sections */}
                        <div className="space-y-6">
                            {termsData.map((section, index) => (
                                <Section
                                    key={section.title}
                                    title={section.title}
                                    content={section.content}
                                    index={index}
                                />
                            ))}
                        </div>
                    </MaxWidth>
                </main>
            </div>
        </>
    )
}

export default TermsOfServicePage