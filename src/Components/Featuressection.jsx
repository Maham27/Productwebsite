import { motion } from "framer-motion";
import { FaHeadphonesAlt, FaBatteryFull, FaBluetooth, FaMicrophone } from "react-icons/fa";
import '../app.css';

const features = [
  {
    icon: <FaHeadphonesAlt />,
    title: "Noise Cancellation",
    description: "Block out distractions and enjoy pure, uninterrupted sound.",
  },
  {
    icon: <FaBatteryFull />,
    title: "40-Hour Battery",
    description: "Long-lasting performance for all-day listening.",
  },
  {
    icon: <FaBluetooth />,
    title: "Bluetooth 5.2",
    description: "Seamless connectivity with your devices.",
  },
  {
    icon: <FaMicrophone />,
    title: "Built-in Mic",
    description: "Take calls and talk to voice assistants hands-free.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold font-outfit text-pink-600 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Why You’ll Love These Headphones
        </motion.h2>
        <motion.p
          className="text-lg font-sora text-pink-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Engineered for comfort, designed for immersive audio.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-orange-100 via-pink-100 to-white  p-6 rounded-3xl shadow-xl hover:shadow-2xl border border-pink-100 transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4 font-sora">
                <div className="bg-pink-100 text-pink-600 rounded-full p-3 shadow-md text-2xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-outfit font-semibold text-pink-600 mb-2">{feature.title}</h3>
              <p className="text-pink-500 font-sora text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
