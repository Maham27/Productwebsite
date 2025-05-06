// src/components/HeroSection.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import image from "../assets/headphones.png";
import Navbar from "./Navbarsection";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-gradient-to-b from-pink-300 via-pink-400 to-orange-300 ">

    <Navbar/>
    <section
      ref={ref}
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-10 lg:px-20 relative overflow-hidden py-20 lg:py-20"
    >
      

      {/* Floating Accent Blob */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-white/20 rounded-full blur-2xl animate-pulse z-0" />

      {/* Left Side */}
      <div className="flex-1 space-y-6 z-10">
        {/* Tagline */}
        <motion.p
          className="uppercase tracking-widest text-white/70 text-sm font-sora"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          #1 Choice for Audiophiles
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-outfit font-extrabold text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience Pure Sound
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-2xl font-sora text-[#ffffffcc] max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover high-fidelity audio with our next-gen headphones. Perfect for music lovers and audiophiles alike.
        </motion.p>

        {/* Button */}
        <motion.button
          className="mt-4 px-6 py-3 bg-white text-pink-800 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition-all shadow-lg flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          🎧 Buy Now
        </motion.button>
      </div>

      {/* Right Side (Image) */}
      <motion.div className="flex-1 flex justify-center items-center z-10">
        <motion.img
          src={image}
          alt="Headphones"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-[500px] md:w-[700px] lg:w-[1000px]  drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)] animate-[float_3s_ease-in-out_infinite]"
        />
      </motion.div>

      {/* Floating Animation Keyframe (Tailwind doesn't support custom keyframes inline, so add this in your global CSS file) */}
    </section>
    </div>
  );
}
