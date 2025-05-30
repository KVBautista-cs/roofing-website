'use client';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function ServiceCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3–6 seconds, independently
  useEffect(() => {
const delay = Math.floor(Math.random() * 4000) + 6000; // 6000–10000ms
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(timer);
  }, [images.length]);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-md">
      {/* Display current image */}
      <img
        src={images[index]}
        alt="Service preview"
        className="object-cover w-full h-full transition-all duration-700"
      />

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-100"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-100"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
