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

        <WhoWeAreSection />
        <ServicesSection />
        <TestimonialsSection />
        <ServiceAreaSection />
      </main>
    </>
  );
}
