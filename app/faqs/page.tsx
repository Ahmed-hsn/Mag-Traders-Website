import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import FAQs from '@/components/FAQs';

export const metadata: Metadata = {
  title: 'FAQs | MAG Traders',
  description: 'Frequently asked questions about our premium printing services, turnaround times, and order process.',
};

export default function FAQsPage() {
  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Got questions? We've got answers." 
      />
      <FAQs />
    </>
  );
}
