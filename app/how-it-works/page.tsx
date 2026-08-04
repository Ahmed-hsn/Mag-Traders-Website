import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import HowItWorks from '@/components/HowItWorks';

export const metadata: Metadata = {
  title: 'How It Works | MAG Traders (Pvt.) Ltd.',
  description: 'Our simple 6-step process from requesting a quote to the final delivery of your premium printed products.',
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader 
        title="How It Works" 
        subtitle="A seamless, transparent process designed to bring your vision to life." 
      />
      <HowItWorks />
    </>
  );
}
