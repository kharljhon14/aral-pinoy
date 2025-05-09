import { Button } from '@/components/ui/button';

export default function ChooseUs() {
  return (
    <div className="bg-white rounded-xl lg:py-16 lg:px-24 p-8">
      <h2 className="font-bold text-3xl lg:text-5xl mb-6">Why You Should Choose Us</h2>
      <p className="mb-6">
        We believe in accessible and flexible education for all Filipinos—kahit nasaan ka pa. Our
        platform gives you the freedom to study at your own pace, using resources aligned with DepEd
        and CHED standards, plus extra skills training like digital literacy and entrepreneurship.
      </p>
      <Button>Learn More</Button>
    </div>
  );
}
