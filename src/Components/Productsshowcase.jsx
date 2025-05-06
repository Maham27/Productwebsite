import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import headphoneImg from "../assets/headphones.png"; // your image path

gsap.registerPlugin(ScrollTrigger);

export default function Productsshowcase() {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const anim = gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true
        }
      }
    );

    // Cleanup to prevent memory leaks
    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="buy" className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Left: Product Image with GSAP animation */}
        <div className="relative w-full flex justify-center">
          <img
            ref={imageRef}
            src={headphoneImg}
            alt="Headphones"
            className="w-3/4 max-w-md drop-shadow-xl"
          />
        </div>

        {/* Right: Text content with Framer Motion */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-outfit font-extrabold text-pink-800 mb-4">
            Sleek, Stylish & Built for Comfort
          </h2>
          <p className="text-pink-600 font-sora mb-6">
            Our headphones are crafted with premium materials to deliver a lightweight feel, luxurious touch, and all-day comfort. Experience unmatched sound with modern aesthetics.
          </p>
          <ul className="list-disc font-outfit list-inside text-pink-600 mb-6">
            <li>Available in multiple colors</li>
            <li>Foldable & travel-friendly</li>
            <li>High-fidelity stereo sound</li>
          </ul>
           <button
          className="bg-gradient-to-r font-outfit from-pink-400 to-orange-400 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
    
        >
          Shop Now
        </button>
      </motion.div>
      </div>
    </section>
  );
}
