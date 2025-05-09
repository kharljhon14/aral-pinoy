import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export default function ChooseUs() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 }
      }}
      className="bg-gradient-to-tl from-white via-pink-100 to-purple-50 rounded-xl lg:py-16 lg:px-24 p-8"
    >
      <h2 className="font-bold text-3xl lg:text-5xl mb-6">Why You Should Choose Us</h2>
      <p className="mb-6">
        We believe in accessible and flexible education for all Filipinos—kahit nasaan ka pa. Our
        platform gives you the freedom to study at your own pace, using resources aligned with DepEd
        and CHED standards, plus extra skills training like digital literacy and entrepreneurship.
      </p>
      <Button>Learn More</Button>
    </motion.div>
  );
}
