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
        <title>Mountain Climbers Roofing | Mid-South Roofing Experts</title>
        <meta name="description" content="We specialize in roofing, siding, gutters, and painting across the Mid-South. Get your free estimate today!" />
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
