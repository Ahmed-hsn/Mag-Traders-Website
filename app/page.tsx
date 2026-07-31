import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQs from '@/components/FAQs';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <Services limit={8} isHome={true} />
      <WhyChooseUs />
      <FAQs />
    </>
  );
}
