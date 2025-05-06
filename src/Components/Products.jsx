// src/components/ProductShowcase.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProductShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="buy"
      ref={ref}
      className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 lg:px-24 py-20"
    >
      {/* Product Image */}
      <div className="flex-1 flex items-center justify-center mb-10 md:mb-0">
        <motion.img
          src="/ervo-rocks-Zam8TvEgN5o-unsplash-removebg-preview.png"
          alt="Headphones Showcase"
          style={{ scale }}
          className="w-[250px] md:w-[350px] lg:w-[450px] drop-shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Engineered for Perfection
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Crafted with premium materials, our headphones combine luxurious comfort with world-class sound clarity. Built to last, designed to impress.
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-pink-400 to-orange-400 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Shop Now
        </motion.button>
      </div>
    </section>
  );
}
