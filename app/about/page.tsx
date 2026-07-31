import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About Us | MAG Traders',
  description: 'Learn more about MAG Traders, your reliable partner for printing services, branding, and graphic design in Pakistan.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Discover our story, mission, and commitment to excellence." 
      />
      <About />
    </>
  );
}
