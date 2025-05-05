import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function Hero() {
  return (
    <div className="bg-white rounded-xl py-16 px-24">
      <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto gap-y-4">
        <h1 className="text-5xl leading-16 font-bold">
          READY TO LEVEL UP YOUR LEARNING JOURNEY? STAND OUT IN SCHOOL, WORK, AND BEYOND!
        </h1>
        <p className="max-w-2xl">
          Our Filipino-focused learning platform offers resources for students of all levels—whether
          you're in elementary, high school, college, or exploring new skills. We provide videos,
          tutorials, articles, and online courses in Filipino and English to help you succeed.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 my-24">
        <Button size="lg">Get Started</Button>
        <Link to="/">Watch Video</Link>
      </div>
      <div>
        <p className="text-xl font-semibold">4000+ </p>
        <p>Reviews (4.8 out of 5)</p>
        <p>⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  );
}
