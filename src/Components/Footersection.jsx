import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export function Footersection() {
  return (
    <footer className="bg-gradient-to-br from-pink-500 via-pink-600 to-orange-500 text-white py-16 font-outfit">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Description */}
        <div>
          <h3 className="text-xl font-bold mb-4">SonicPulse</h3>
          <p className="text-white/80 text-sm">
            Experience sound like never before. Comfortable, stylish, and powerful headphones that match your lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#faq" className="hover:underline">FAQs</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        
        

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h4>
          <p className="text-white/80 text-sm mb-4">
            Get updates on new products, promotions, and more — straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md border border-white/30 bg-white/10 text-white placeholder-white/70 w-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-pink-600 hover:bg-pink-100 font-semibold px-5 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-orange-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-200"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-200"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-white/70 text-sm mt-10">
        &copy; {new Date().getFullYear()} SonicPulse. All rights reserved.
      </div>
    </footer>
  );
}

