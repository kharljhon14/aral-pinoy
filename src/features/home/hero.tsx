import { Button } from '@/components/ui/button';

import { motion } from 'motion/react';
export default function Hero() {
  return (
    <motion.div className="relative bg-radial from-white via-pink-100 to-purple-200 rounded-xl lg:py-16 lg:px-24 px-12 py-10">
      <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto gap-y-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 }
          }}
          className="font-lora lg:text-5xl text-2xl lg:leading-16 font-bold"
        >
          READY TO LEVEL UP YOUR LEARNING JOURNEY? STAND OUT IN SCHOOL, WORK, AND BEYOND!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 }
          }}
          className="max-w-2xl"
        >
          Our Filipino-focused learning platform offers resources for students of all levels—whether
          you're in elementary, high school, college, or exploring new skills. We provide videos,
          tutorials, articles, and online courses in Filipino and English to help you succeed.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 }
        }}
        className="flex items-center justify-center gap-8 lg:my-24 my-10"
      >
        <Button size="lg">Get Started</Button>
        <Button
          size="lg"
          variant="outline"
        >
          Watch Video
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 1.6,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 }
        }}
      >
        <p className="text-xl font-semibold">4000+ </p>
        <p>Reviews (4.8 out of 5)</p>
        <p>⭐⭐⭐⭐⭐</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 2,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 }
        }}
        className="hidden lg:block absolute w-[21rem] h-[21rem] bottom-0 right-24"
      >
        <img
          src="hero-image.webp"
          alt="Kid with notebooks"
          loading="lazy"
          decoding="async"
          width="1920"
          height="1080"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
