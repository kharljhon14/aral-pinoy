import Features from '@/features/home/features';
import Hero from '@/features/home/hero';
import Stats from '@/features/home/stats';
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
    </>
  );
}
