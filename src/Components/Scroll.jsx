import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Scroll() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { scrollTo: 0, duration: 1, ease: "power2.out" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )
  );
}
