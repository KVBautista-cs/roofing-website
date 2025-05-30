'use client';

import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-10 text-sm">
        {/* Column 1: Contact Info */}
        <div>
          <h4 className="text-base font-semibold mb-2 text-blue-900">Office Location</h4>
          <div className="border-b-2 border-red-500 w-8 mb-3" />
          <p>1234 Roofer Ave.</p>
          <p>Memphis, TN 38104</p>

          <h4 className="mt-6 text-base font-semibold text-blue-900">Need to Get In Touch?</h4>
          <div className="border-b-2 border-red-500 w-8 mb-2" />
          <p>📞 (901) 607-6799</p>
          <p>✉️ mountainclimbersroofers@gmail.com</p>

          <h4 className="mt-6 text-base font-semibold text-blue-900">Our Business Hours</h4>
          <div className="border-b-2 border-red-500 w-8 mb-2" />
          <p>Mon – Fri: 8:00am – 4:30pm</p>
        </div>

        

        {/* Column 4: Service Areas */}
        <div>
          <h4 className="text-base font-semibold mb-2 text-blue-900">Our Service Areas</h4>
          <div className="border-b-2 border-red-500 w-8 mb-3" />
          <p className="text-red-600">
            Memphis, Arlington, Bartlett, Cordova, Germantown, Olive Branch, Southaven, West Memphis, Marion
          </p>
        </div>

        {/* Column 5: Socials */}
        <div>
          <h4 className="text-base font-semibold mb-2 text-blue-900">Connect With Us</h4>
          <div className="border-b-2 border-red-500 w-8 mb-3" />
          <div className="flex gap-4 text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Mountain Climbers Roofing. All rights reserved.</p>
        <p className="mt-1">Sitemap • Privacy Policy</p>
      </div>
    </footer>
  );
}
