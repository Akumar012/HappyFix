import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { assets } from "../assets/assets"; // adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto  pt-12 pb-6 ">
      {/* Background Decoration */}
      <figure className="absolute top-0 left-0 opacity-10 -ml-20 -mt-20 pointer-events-none select-none">
        <svg
          width="775px"
          height="834px"
          viewBox="0 0 775 834"
          fill="currentColor"
          className="text-white"
        >
          <path d="M486.1,564.4c-3.6,2.5-7.4,4.8-11.3,6.4c-12,5.5-25.7,7.9-42.2,7.4..." />
        </svg>
      </figure>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <img src={assets.logo} alt="logo" className="h-12 mb-4 brightness-110" />
            <p className="text-sm leading-relaxed">
              HappyFix provides reliable repair and maintenance services for all
              major home appliances. Keeping your home running smoothly with expert care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="font-semibold text-white mb-4 uppercase tracking-wide">Quick Links</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-white transition">FAQs</a></li>
              <li><a href="/services" className="hover:text-white transition">Our Services</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="font-semibold text-white mb-4 uppercase tracking-wide">Our Services</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="/ac-repair" className="hover:text-white transition">AC Repair</a></li>
              <li><a href="/fridge-repair" className="hover:text-white transition">Fridge Service</a></li>
              <li><a href="/washing-machine" className="hover:text-white transition">Washing Machine</a></li>
              <li><a href="/microwave" className="hover:text-white transition">Microwave / Geyser</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h6 className="font-semibold text-white mb-4 uppercase tracking-wide">Follow Us</h6>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white hover:text-black transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white hover:text-black transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white hover:text-black transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-white hover:text-black transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <img src={assets.logo} alt="logo" className="mt-6 h-10 opacity-80" />
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom */}
        <div className="text-center md:flex md:justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} HappyFix. All rights reserved.</p>
          <p>Made with ❤️ for hassle-free home care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
