'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  { title: 'Roofing', description: 'Expert installation and repair of all roof types.', image: '/assets/roofing.jpg' },
  { title: 'Siding', description: 'Durable, stylish siding that protects your home.', image: '/assets/siding.jpg' },
  { title: 'Gutters', description: 'Custom-fit gutters that protect your foundation.', image: '/assets/gutters.jpg' },
  { title: 'Painting', description: 'Professional interior and exterior painting services.', image: '/assets/painting.jpg' },
];

export default function ServicesSection() {
  return (
    <section className="relative isolate">
      
      {/* Blue Section */}
      <div className="relative z-10 bg-[#0a2540] text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-blue-100 mt-2">Quality craftsmanship in every detail</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded shadow-lg hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center text-gray-800">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
