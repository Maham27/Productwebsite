import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hp1  from "../assets/hp1.png";
import hp3  from "../assets/hp3.png";
import hp4  from "../assets/hp4.png";
import hp2  from "../assets/hp2.png";
gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Black Edition",
    image: hp1,
    price: "$149"
  },
  {
    name: "Blue Edition",
    image: hp4,
    price: "$149"
  },
  {
    name: "Silver Edition",
    image: hp2,
    price: "$159"
  },
  {
    name: "Space Black Pro",
    image: hp3,
    price: "$199"
  }
];

export default function Gallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelectorAll(".product-card"),
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white font-outfit">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-pink-600 mb-4">Choose Your Style</h2>
        <p className="text-pink-600 mb-12">
          Sleek colors and premium finishes that match your personality.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              className="product-card bg-pink-50 p-6 rounded-2xl shadow-xl transform transition-transform hover:-translate-y-2 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-contain mb-6"
              />
              <h3 className="text-xl font-semibold text-pink-600">{product.name}</h3>
              <p className="text-pink-400 text-lg font-medium mt-2">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
