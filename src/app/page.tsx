import Head from 'next/head';
import ParallaxSection from "@/components/ParallaxSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import MailchimpModal from '@/components/MailchimpModal';

export default function Home() {
  return (
    <>
      <Head>
        <title>Memphis Roofing Company | Mountain Climbers Roofers</title>
        <meta name="description" content="Top-rated roofing company in Memphis, TN. We specialize in roof repair, siding, gutters, and painting. Free quotes & 10-year guarantee. Serving all of the Mid-South." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="">
        <MailchimpModal />
        <ParallaxSection />

        {/* 🔽 SEO Keyword Boosting Paragraph */}
        <section className="py-8 px-4 max-w-4xl mx-auto">
          <p className="text-lg text-center text-gray-700 mt-4">
            Mountain Climbers Roofers is a licensed and insured roofing company based in Memphis, TN. 
            We provide expert roof replacement, roof repair, siding, gutters, and painting services 
            throughout the Mid-South, including Bartlett, Germantown, Arlington, and Southaven.
          </p>
        </section>

        <WhoWeAreSection />
        <ServicesSection />
        <TestimonialsSection />
        <ServiceAreaSection />
      </main>
    </>
  );
}
