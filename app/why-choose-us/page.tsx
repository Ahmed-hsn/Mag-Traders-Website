import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import WhyChooseUs from '@/components/WhyChooseUs';

export const metadata: Metadata = {
  title: 'Why Choose Us | MAG Traders',
  description: 'Discover why MAG Traders is the leading choice for premium printing, affordable pricing, and fast turnaround in Pakistan.',
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHeader 
        title="Why Choose Us" 
        subtitle="The MAG Traders advantage: Quality, speed, and reliability you can trust." 
      />
      <WhyChooseUs />
    </>
  );
}
