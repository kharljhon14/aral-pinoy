import { motion } from 'motion/react';

export default function Partners() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 }
      }}
      className="bg-white rounded-xl lg:py-16 lg:px-24 p-8"
    >
      <h2 className="font-bold text-3xl lg:text-4xl text-center mb-10">
        Our Trusted Partners in Education
      </h2>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-around">
        <img
          className="w-24 h-24"
          src="deped.png"
          alt="Deped logo"
        />
        <img
          className="w-24 h-24"
          src="dict.png"
          alt="DICT logo"
        />
        <img
          className="w-24 h-24"
          src="tesda.png"
          alt="Tesda logo"
        />
      </div>
    </motion.div>
  );
}
