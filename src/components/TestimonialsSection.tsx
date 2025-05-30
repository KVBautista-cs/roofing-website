'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    quote: 'Mountain Climbers Roofers did an amazing job. Fast, professional, and respectful of our home.',
  },
  {
    name: 'Carlos Mendoza',
    quote: 'From quote to cleanup, these guys were on point. Loved the attention to detail.',
  },
  {
    name: 'Angela White',
    quote: 'The new siding looks incredible! Very pleased with the results.',
  },
  {
    name: 'John Taylor',
    quote: 'They showed up within 24 hours and saved us thousands in damage.',
  },
  {
    name: 'Lisa Raymond',
    quote: 'Super friendly crew, and the painting job turned out great.',
  },
  {
    name: 'Mike Peterson',
    quote: 'This is the only roofing company I’ll call from now on. Beautiful work.',
  },
];

export default function TestimonialsSection() {
  return (
<section className="relative overflow-hidden isolate bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
        <p className="mt-2 text-gray-600">Real feedback from homeowners we&apos;ve helped.</p>
      </div>

      {/* Mobile Swiper */}
      <div className="block lg:hidden max-w-2xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="rounded-lg"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg shadow-md h-full flex flex-col justify-between">
                <p className="text-gray-800 italic text-lg mb-4">“{testimonial.quote}”</p>
                <p className="mt-2 font-semibold text-blue-700 text-right">— {testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid with Tile Drop Animation */}
      <div className="hidden lg:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            <p className="text-gray-800 italic">“{testimonial.quote}”</p>
            <p className="mt-4 font-semibold text-blue-700 text-right">— {testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
