import { CTA } from '@/components/Home/CTA';
import { DevLab } from '@/components/Home/DevLab';
import { Ecosystem } from '@/components/Home/EcoSystemSection';
import { FAQs } from '@/components/FAQs';
import { HeroSection1 } from '@/components/Home/HeroSection1';
import MarqueeSection from '@/components/Home/MarqueeSection';
import { ProcessStep } from '@/components/Home/ProcessStep';
import { Services } from '@/components/Home/ServicesSection';
import SocialProofsection from '@/components/Home/SocialProofsection';
import { ValueProp } from '@/components/Home/ValueSection';
import { AIStudio } from '@/components/Home/VisualStudio';
import { faqs } from '@/data/home.data';
import { getSeoMeta } from '@/lib/seo';
import { Metadata } from 'next';
import Script from 'next/script';
import { MetaDataType } from '@/types/meta/meta.types';

export async function generateMetadata(): Promise<Metadata> {
  const seo: MetaDataType = await getSeoMeta("/");

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

async function Page() {
  const seo = await getSeoMeta("/");

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
    <div className='relative w-full  min-h-screen flex flex-col items-center justify-center overflow-x-hidden'>
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {/* Hero Section 1 */}
      <HeroSection1 />
      {/* Ecosystem Section */}
      <Ecosystem />
      {/* Marquee Section  */}
      <MarqueeSection />
      {/* Visual Studio Section */}
      <AIStudio />
      {/* DevLab Section */}
      <DevLab />
      {/* Services Section */}
      <Services />
      {/* Value Section  */}
      <ValueProp />
      {/* Social Proof Section  */}
      <SocialProofsection />
      {/* Process Section  */}
      <ProcessStep />
      {/* FAQ Section  */}
      <FAQs data={faqs} />
      {/* CTA Section */}
      <CTA />

    </div>
  )
}



export default Page
