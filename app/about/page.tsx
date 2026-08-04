import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import AboutExtended from '@/components/AboutExtended';

export const metadata: Metadata = {
  title: 'About Us | MAG Traders (Pvt.) Ltd.',
  description: 'Learn more about MAG Traders (Pvt.) Ltd., your reliable partner for printing services, branding, and graphic design in Pakistan.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Discover our story, philosophy, and commitment to excellence." 
      />
      <AboutExtended />
    </>
  );
}
