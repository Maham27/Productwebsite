import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Ali",
    review: "Absolutely love the noise cancellation. I use them at work and on flights. 10/10!",
    stars: 5,
    avatar: "https://i.pravatar.cc/100?img=31"
  },
  {
    name: "Ahmed Khan",
    review: "Best battery life I’ve ever had on headphones. Great sound too!",
    stars: 4,
    avatar: "https://i.pravatar.cc/100?img=12"
  },
  {
    name: "Maria Yousaf",
    review: "Stylish, comfy, and the mic is crystal clear. Highly recommend!",
    stars: 5,
    avatar: "https://i.pravatar.cc/100?img=45"
  },
  {
    name: "Ali Raza",
    review: "Love the comfort and noise isolation. Great value for money!",
    stars: 5,
    avatar: "https://i.pravatar.cc/100?img=48"
  }
];

export default function Testimonials() {
  useEffect(() => {
    // optional scroll or animation logic here
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center font-outfit text-pink-600 mb-12">
          Hear From Our Happy Customers
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1
            },
            640: {
              slidesPerView: 1.2
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className=" bg-gradient-to-br from-orange-100 via-pink-100 to-white  rounded-xl shadow-xl p-6 max-w-sm mx-auto my-3"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold font-outfit text-pink-800">{t.name}</h4>
                    <div className="flex text-yellow-400">
                      {Array(t.stars)
                        .fill()
                        .map((_, i) => (
                          <FaStar key={i} />
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-orange-600 text-sm  font-sora">{t.review}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
