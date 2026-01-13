import React from 'react'
import PrivacyPolicyPageContext from './PrivacyPolicyPageContent'
import Script from 'next/script';
import { getSeoMeta } from '@/lib/seo';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const seo = await getSeoMeta("/privacy-policy");

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
    const seo = await getSeoMeta("/privacy-policy");

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
            <PrivacyPolicyPageContext />
        </>
    )
}

export default page