'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess(true);
      setError('');

      setFormData({ name: '', email: '', phone: '', message: '' });

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);


      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
  const result = await res.json();
  setError(result?.error || 'Something went wrong. Please try again.');
}

  } catch (error) {
    console.error('Error sending message:', error);
    setError('There was a problem sending your message.');

  }
};





  return (
  <form onSubmit={handleSubmit} className="bg-white/50 backdrop-blur-md p-6 rounded shadow-md text-black">
    <h3 className="text-xl font-semibold mb-4">Get a Quote Today</h3>

    {/*  Success Message */}
    {success && (
      <div className="flex items-center gap-2 mb-4 text-green-600 text-lg font-semibold animate-fadeInUp">
        <span className="text-2xl animate-bounce">📩</span>
        Message sent successfully!
      </div>
    )}

    {error && (
  <div className="mb-4 text-red-600 font-medium animate-fadeInUp">
    ❌ {error}
  </div>
)}


    

    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
      className="w-full mb-3 p-2 border border-gray-300 rounded"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="w-full mb-3 p-2 border border-gray-300 rounded"
      required
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone"
      value={formData.phone}
      onChange={handleChange}
      className="w-full mb-3 p-2 border border-gray-300 rounded"
      required
    />

    <textarea
      name="message"
      placeholder="What do you need done?"
      value={formData.message}
      onChange={handleChange}
      rows={3}
      className="w-full mb-4 p-2 border border-gray-300 rounded"
    />

    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
      Send Message
    </button>
  </form>
);

}
