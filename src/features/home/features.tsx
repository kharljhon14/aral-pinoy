import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export default function Features() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 }
        }}
        className="flex flex-col gap-y-6 bg-teal-200 p-12 rounded-2xl"
      >
        <h3 className="text-3xl">01. Makabago at Masayang Paraan ng Pag-aaral</h3>
        <p>
          We blend modern teaching tools with culturally relevant methods so learning feels
          exciting, relatable, and effective—kahit online!
        </p>
        <div>
          <Button variant="secondary">Learn More</Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 }
        }}
        className="flex flex-col gap-y-6 bg-amber-200 p-12 rounded-2xl"
      >
        <h3 className="text-3xl">02. Expertong Guro, Gawang Pinoy</h3>
        <p>
          Our mentors are experienced teachers and professionals from the Philippines who understand
          your needs and learning style.
        </p>
        <div>
          <Button variant="secondary">Learn More</Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 }
        }}
        className="flex flex-col gap-y-6 bg-pink-200 p-12 rounded-2xl"
      >
        <h3 className="text-3xl">03. Araw-araw na Gawain Para sa Growth</h3>
        <p>
          New lessons, activities, and bite-sized content are uploaded regularly so you're always
          learning something new—kahit 10 minutes lang!
        </p>
        <div>
          <Button variant="secondary">Learn More</Button>
        </div>
      </motion.div>
    </div>
  );
}
