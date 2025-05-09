import { Button } from '@/components/ui/button';

export default function Features() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col gap-y-6 bg-teal-300 p-12 rounded-2xl">
        <h3 className="text-3xl">01. Makabago at Masayang Paraan ng Pag-aaral</h3>
        <p>
          We blend modern teaching tools with culturally relevant methods so learning feels
          exciting, relatable, and effective—kahit online!
        </p>
        <div>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>

      <div className="flex flex-col gap-y-6 bg-amber-300 p-12 rounded-2xl">
        <h3 className="text-3xl">02. Expertong Guro, Gawang Pinoy</h3>
        <p>
          Our mentors are experienced teachers and professionals from the Philippines who understand
          your needs and learning style.
        </p>
        <div>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>

      <div className="flex flex-col gap-y-6 bg-pink-300 p-12 rounded-2xl">
        <h3 className="text-3xl">03. Araw-araw na Gawain Para sa Growth</h3>
        <p>
          New lessons, activities, and bite-sized content are uploaded regularly so you're always
          learning something new—kahit 10 minutes lang!
        </p>
        <div>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
