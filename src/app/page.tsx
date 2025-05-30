import ParallaxSection from "@/components/ParallaxSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import MailchimpModal from '@/components/MailchimpModal';





export default function Home() {
  return (
    <main className="">
      <MailchimpModal /> {/* The popup will mount here */}

      <ParallaxSection />
      <WhoWeAreSection />
      <ServicesSection />
      <TestimonialsSection />
      <ServiceAreaSection />
    </main>
  );
}

