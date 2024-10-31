import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaHeart,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap -mx-4">
          {/* Column 1 */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h2 className="text-2xl font-bold mb-4">Meditative</h2>
            <p className="text-gray-700">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="flex mt-4">
              <a href="#" className="text-gray-600 hover:text-primary mr-4">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary mr-4">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          {/* Column 2 */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h2 className="text-xl font-bold mb-4">Popular Links</h2>
            <ul className="text-gray-700">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Yoga for Beginners
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Yoga for Pregnant
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Yoga Barre
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Yoga Advance
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="text-gray-700">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Classes
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Schedule
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h2 className="text-xl font-bold mb-4">Have a Questions?</h2>
            <ul className="text-gray-700">
              <li className="mb-2 flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="mb-2 flex items-center">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+23923929210">+2 392 3929 210</a>
              </li>
              <li className="mb-2 flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} All rights reserved | This template is made with{' '}
            <FaHeart className="inline text-red-600" aria-hidden="true" /> by{' '}
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
