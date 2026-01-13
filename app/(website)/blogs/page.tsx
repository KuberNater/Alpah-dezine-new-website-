import BlogPostList from '@/components/Blogs/BlogPostList'
import FeatureCard from '@/components/Blogs/FeatureCard'
import Heading from '@/components/Heading'
import MaxWidth from '@/components/MaxWidth'
import { getSeoMeta } from '@/lib/seo';
import { Metadata } from 'next';
import Script from 'next/script';


export async function generateMetadata(): Promise<Metadata> {
    const seo = await getSeoMeta("/blogs");

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
    const seo = await getSeoMeta("/blogs");

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
            <div className='relative w-full bg-beige-50 min-h-screen flex flex-col items-center justify-center overflow-x-hidden'>
                <section className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-24 bg-beige-50 dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
                    <MaxWidth className='relative flex flex-col items-center justify-center'>
                        {/* Header Content */}
                        <Heading>
                            Blogs
                        </Heading>
                        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
                            <Heading badgeClassName='lg:mr-auto' decorativeTextClassName='mr-auto w-full' decorativeText='Global Licensing Market' badgeText='Featured Deep Dive' className='lg:mr-auto -mt-5 w-full text-center md:text-center lg:text-left lg:text-6xl'>
                                Insights for the
                            </Heading>
                        </div>
                        {/* Featured Post Card */}
                        <FeatureCard />
                        {/* Blog Post Lists  */}
                    </MaxWidth>
                    <BlogPostList />
                </section>
            </div>
        </>

    )
}

export default page