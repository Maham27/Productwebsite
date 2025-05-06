import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is the battery life of the headphones?",
    answer: "Our headphones offer up to 40 hours of battery life on a full charge."
  },
  {
    question: "Are the headphones waterproof?",
    answer: "They are water-resistant (IPX4), perfect for workouts and rainy commutes."
  },
  {
    question: "Do they support noise cancellation?",
    answer: "Yes, they come with advanced active noise cancellation technology."
  },
  {
    question: "Can I connect them to multiple devices?",
    answer: "Absolutely! Our headphones support multi-point connectivity."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-pink-300 via-pink-400 to-orange-300 text-white">
      <div className="max-w-4xl mx-auto px-6 font-outfit">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-10"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/30 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
              >
                {faq.question}
                <span>
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-white/90 font-sora"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
