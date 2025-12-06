import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import WorkflowSection from '@/components/sections/workflow';
import Services from '@/components/sections/services';
import StatsSection from '@/components/sections/stats';
import ClientLogosCarousel from '@/components/sections/client-logos-carousel';
import ContactCTA from '@/components/sections/contact-cta';
import FAQ from '@/components/sections/faq';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-[112px]">
        <Hero />
        <Services />
        <WorkflowSection />
        <StatsSection />
        <ClientLogosCarousel />
        <ContactCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}