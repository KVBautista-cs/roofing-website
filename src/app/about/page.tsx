'use client';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-white text-black px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4">About Mountain Climbers</h1>
          <p className="text-lg mb-4">
            Mountain Climbers Roofers is a family-owned and operated roofing and construction company proudly serving the Mid-South region.
          </p>
          <p className="text-lg mb-4">
            With years of hands-on experience and a deep passion for craftsmanship, we specialize in Roofing, Siding, Gutters, and Painting — offering top-tier service backed by integrity and precision.
          </p>
          <p className="text-lg">
            Our mission is to protect your home like it’s our own. Every project comes with a 10-year workmanship guarantee, and we’re fully licensed and insured for your peace of mind.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/assets/crew-group.jpg" // Replace with your real image
            alt="Our team at work"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
