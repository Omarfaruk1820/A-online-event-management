import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">EventHub</h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              EventHub is a modern platform where you can discover, create, and
              manage events easily. Join amazing events around you and connect
              with people who share your interests.
            </p>

            {/* Contact Info */}
            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt />Uttara, Dhaka, Bangladesh
              </p>

              <p className="flex items-center gap-2">
                <FaEnvelope /> omarfarukfci9th@gmail.com
              </p>

              <p className="flex items-center gap-2">
                <FaPhone /> +880 1959566274
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/events" className="hover:text-white transition">
                  Events
                </Link>
              </li>

              <li>
                <Link
                  to="/create-event"
                  className="hover:text-white transition"
                >
                  Create Event
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Categories
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Music
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Workshop
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Sports
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Help Center
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Terms & Conditions
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              {/* <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <Link to="https://www.facebook.com/omar.faruk.469436" target="_blank">
                  <FaFacebookF />
                </Link>
              </a> */}

              <Link
                to="https://www.facebook.com/omar.faruk.469436"
                target="_blank"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookF></FaFacebookF>
              </Link>
              <Link
                to="https://www.linkedin.com/in/md-omar-faruk-6a592b252"
                target="_blank"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <FaLinkedinIn />
              </Link>

              {/* <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition"
              >
                <FaTwitter />
              </a> */}

              {/* <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition"
              >
                <Link
                  to="https://www.linkedin.com/in/md-omar-faruk-6a592b252"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© Copyright 2026 EventHub. All rights reserved.</p>

          <p className="mt-2 md:mt-0">Designed by md: omar faruk</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
