import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Services from '@/components/Services';

export const metadata: Metadata = {
  title: 'Our Services | MAG Traders',
  description: 'Explore our 14+ premium printing, branding, and graphic design services including business cards, custom packaging, and more.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive printing and branding solutions tailored to your business needs." 
      />
      <Services />
    </>
  );
}
