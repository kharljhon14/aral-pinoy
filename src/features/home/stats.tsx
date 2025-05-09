import { motion } from 'motion/react';

export default function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 }
      }}
      className="flex justify-between gap-y-8 flex-col lg:flex-row items-center text-center bg-white py-8 px-16 rounded-xl"
    >
      <div className="">
        <h2 className="lg:text-6xl text-4xl mb-4 font-bold">20K+</h2>
        <p>Pinoy Students Empowered</p>
      </div>
      <div>
        <h2 className="lg:text-6xl text-4xl mb-4 font-bold">250K+</h2>
        <p>Hours of Learning Delivered</p>
      </div>
      <div>
        <h2 className="lg:text-6xl text-4xl mb-4 font-bold">300+</h2>
        <p>Expert Filipino Educators</p>
      </div>
    </motion.div>
  );
}
