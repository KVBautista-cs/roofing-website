'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';

export default function ParallaxSection() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <div className="relative overflow-hidden bg-white">
<div className="clip-mountain-peak h-[120vh] relative z-0">
    <Image
      src="/assets/mountain.jpg"
      alt="Mountain Background"
      fill
      className="object-cover transition-transform duration-75"
      style={{ transform: `translateY(${offsetY * 0.4}px)` }}
    />
  </div>

  {/* Foreground content */}
  <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center px-6">
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full items-center">
      {/* Logo + Text */}
      <div className="text-white text-center self-center flex flex-col items-center">
        <Image
          src="/assets/logo.jpeg"
          alt="Mountain Climbers Logo"
          width={250}
          height={250}
          className="mb-4 mx-auto"
        />
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Expert Roofing Services in the Mid-South
        </h1>
        <p className="mt-2 text-lg drop-shadow">
          Roofing, siding, gutters, and painting — all under one roof.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-900 font-semibold rounded shadow hover:bg-gray-200 transition">
          Get a Free Quote
        </button>
        <p className="mt-2 text-sm">or call (901) 607-6799</p>
      </div>

      {/* Contact Form */}
      <div>
        <ContactForm />
      </div>
    </div>
  </div>
</div>

  );
}
