'use client';

import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function ServiceAreaSection() {
  const areas = [
    'Memphis, TN',
    'Bartlett, TN',
    'Germantown, TN',
    'Collierville, TN',
    'Arlington, TN',
    'Lakeland, TN',
    'Southaven, MS',
    'Olive Branch, MS',
    'Hernando, MS',
    'Horn Lake, MS',
    'West Memphis, AR',
    'Marion, AR',
  ];

  return (
    <section className="bg-[#0a2540] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Service Area</h2>
        <p className="mt-2 text-blue-100">
          We're proud to serve homeowners and businesses across the entire Mid-South region.
        </p>
      </div>

      {/* Map image placeholder */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="relative w-full h-96 rounded-lg overflow-hidden border border-white/20 shadow-md">
          <Image
            src="/assets/service-area-map.jpg" 
            alt="Mid-South service area map"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Cities list */}
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-5 text-left">
        {areas.map((city, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-red-500 mt-1" />
            <span className="text-white">{city}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
