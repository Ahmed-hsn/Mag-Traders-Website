import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | MAG Traders',
  description: 'Get in touch with MAG Traders for your printing and branding needs. Request a quote or ask us a question today.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Let's bring your vision to life. Reach out today for a free quote." 
      />
      <Contact />
    </>
  );
}
