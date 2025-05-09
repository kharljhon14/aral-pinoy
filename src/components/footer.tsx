import { Link } from '@tanstack/react-router';
import { motion } from 'motion/react';
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 }
      }}
      className="bg-gradient-to-l from-white to-purple-50 rounded-xl flex justify-between py-6 px-8 flex-col"
    >
      <div className="flex flex-col lg:flex-row gap-y-8 justify-between mb-12">
        <div className="max-w-md">
          <p className="font-semibold text-xl mb-2">Aral Pinoy</p>
          <p className="text-sm">
            Empowering Filipino learners with modern, inclusive, and accessible education. From
            study guides to interactive classes, Aral Pinoy brings learning.
          </p>
        </div>

        <div>
          <p className="lg:text-lg mb-4 font-semibold">Quick Links</p>
          <div className="flex items-start gap-12">
            <nav className="flex flex-col text-sm justify-center gap-y-4">
              <Link to="/">Home</Link>
              <Link to="/">Services</Link>
              <Link to="/">Blog</Link>
            </nav>
            <nav className="flex flex-col text-sm justify-center gap-y-4">
              <Link to="/">Testimonials</Link>
              <Link to="/">About Us</Link>
            </nav>
          </div>
        </div>

        <div>
          <p className="lg:text-lg mb-4 font-semibold">Contact Us</p>
          <div>
            <p>Email: hello@learnph.org</p>
            <p>Phone: +63 912 345 6789</p>
            <p>Location: Quezon City, Metro Manila, Philippines</p>
          </div>
        </div>
      </div>

      <div className="mx-auto text-center text-xs text-gray-500">
        <p>&#169; 2025 LearnPH. All rights reserved.</p>
        <p>Crafted with 💙 in the Philippines.</p>
      </div>
    </motion.footer>
  );
}
