'use client';
import { FaCheckCircle } from 'react-icons/fa';

export default function WhoWeAreSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left - About Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
          Mountain Climbers Roofers is a fully licensed and insured roofing company serving the Mid-South. 
          With years of experience in roofing, siding, gutters, and painting, we&apos;re committed to delivering top-tier workmanship and customer satisfaction.
        </p>

          <p className="mt-4 text-gray-700">
            Whether it&apos;s a new installation, repairs, or maintenance, our team ensures every project is done right—backed by a 10-year guarantee.
          </p>
        </div>

        {/* Right - Service Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Qualified & Insured", text: "Fully licensed and insured. Your project is in safe hands." },
            { title: "10-Year Guarantee", text: "We stand by our work with a decade of guaranteed quality." },
            { title: "Approved Installers", text: "Using premium materials for long-lasting protection." },
            { title: "Tailored Free Quotes", text: "No obligation quotes with full transparency." },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <FaCheckCircle className="text-blue-700 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
