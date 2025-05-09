import ChooseUs from '@/features/home/choose-us';
import Features from '@/features/home/features';
import Hero from '@/features/home/hero';
import Stats from '@/features/home/stats';
import Testimonial from '@/features/home/testimonial';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <div className="flex flex-col lg:flex-row gap-4">
        <ChooseUs />
        <Testimonial />
      </div>
    </>
  );
}
