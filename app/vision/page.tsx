import type { Metadata } from 'next';
import Vision from '@/components/Vision';

export const metadata: Metadata = {
  title: 'Our Vision | MAG Traders (Pvt.) Ltd.',
  description: 'Explore the long-term vision and core values of MAG Traders (Pvt.) Ltd., and our commitment to industry leadership and nationwide delivery across Pakistan.',
};

export default function VisionPage() {
  return (
    <>
      <Vision />
    </>
  );
}
