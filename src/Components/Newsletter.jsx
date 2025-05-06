import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-pink-600 mb-6"
        >
          Subscribe to Our Newsletter
        </motion.h2>
        <p className="text-gray-600 mb-6">
          Get updates on new products, promotions, and more — straight to your inbox.
        </p>
        <form className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="px-5 py-3 rounded-md border border-gray-300 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
