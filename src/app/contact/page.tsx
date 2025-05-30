'use client';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="bg-white text-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">Contact Us</h1>
        <p className="text-gray-600 mb-10 text-center">
          Questions? Need a quote? Send us a message and we’ll get back to you shortly.
        </p>

        {/*  Reused working form component */}
        <ContactForm />
      </div>
    </main>
  );
}
