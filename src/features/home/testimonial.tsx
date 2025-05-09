import { motion } from 'motion/react';

export default function Testimonial() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 }
      }}
      className="bg-gradient-to-br from-white via-pink-100 to-purple-100 rounded-xl lg:py-16 lg:px-24 p-8"
    >
      <p className="mb-6 text-2xl">
        "Salamat sa Aral Pinoy! Ang dami kong natutunan na wala sa classroom. Mas naging confident
        ako sa English at Science dahil sa platform na to!"
      </p>
      <p className=" mr-auto text-gray-500">— Jenny Wilson, BSED Student from Quezon City</p>
    </motion.div>
  );
}
