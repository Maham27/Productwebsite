import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-orange-100 via-pink-100 to-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-pink-500 mb-10 font-outfit">
          Get in Touch
        </h2>
        <form ref={formRef} className="space-y-6 bg-white text-pink-800 p-8 rounded-xl font-sora shadow-lg">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 px-6 py-3  bg-gradient-to-br from-orange-100 via-pink-100 to-white  text-pink-600 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition-all shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

