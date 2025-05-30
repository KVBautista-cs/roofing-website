'use client';
import { FaHammer, FaPaintRoller, FaWater, FaHome } from 'react-icons/fa';
import { ServiceCarousel } from './ServiceCarousel';

const services = [
  {
    title: 'Roofing',
    icon: <FaHome className="text-blue-700 text-3xl" />,
    images: [
      '/assets/roofing1.jpg',
      '/assets/roofing2.jpg',
      '/assets/roofing3.jpg',
    ],
    description:
      'We offer expert roofing installation, shingle replacement, and storm damage repair. Our team handles residential roofing with quality materials and a 10-year guarantee.',
  },
  {
    title: 'Siding',
    icon: <FaHammer className="text-blue-700 text-3xl" />,
    images: [
      '/assets/siding1.jpg',
      '/assets/siding2.jpg',
      '/assets/siding3.jpg',
    ],
    description:
      'Protect your home’s exterior with our professional siding services. We install durable vinyl, fiber cement, and wood siding that’s made to withstand harsh Mid-South weather.',
  },
  {
    title: 'Gutters',
    icon: <FaWater className="text-blue-700 text-3xl" />,
    images: [
      '/assets/gutters1.jpg',
      '/assets/gutters2.jpg',
      '/assets/gutters3.jpg',
    ],
    description:
      'We custom-fit seamless gutters to direct water away from your foundation and prevent long-term damage. Includes installation and optional gutter guards.',
  },
  {
    title: 'Painting',
    icon: <FaPaintRoller className="text-blue-700 text-3xl" />,
    images: [
      '/assets/painting1.jpg',
      '/assets/painting2.jpg',
      '/assets/painting3.jpg',
    ],
    description:
      'Boost curb appeal with our high-quality interior and exterior painting services. We prep surfaces, prime properly, and finish with long-lasting coatings.',
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
        <p className="mt-2 text-gray-600">
          Professional, licensed services built to last — serving the entire Mid-South region.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 max-w-6xl mx-auto">
        {services.map((service, idx) => (
        <div
          key={idx}
          className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition 
                    transform opacity-0 animate-[fadeInDrop_0.8s_ease-out_forwards]"
          style={{ animationDelay: `${idx * 0.15}s` }}
        >
          <ServiceCarousel images={service.images} />
          <div className="flex items-center gap-4 mt-4 mb-2">
            {service.icon}
            <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
          </div>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
      ))}

      </div>
    </section>
  );
}
