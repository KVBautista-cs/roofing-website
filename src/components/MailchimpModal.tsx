'use client';
import { useEffect, useState } from 'react';

export default function MailchimpModal() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('mailchimpPopupShown');
    if (alreadyShown) return;

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
        sessionStorage.setItem('mailchimpPopupShown', 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert('Subscription failed.');
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={() => setShow(false)}
    >
      <div
        className="relative bg-white w-full max-w-lg rounded-xl shadow-lg overflow-hidden border text-black"
        style={{
          clipPath: 'polygon(0 40px, 50% 0, 100% 40px, 100% 100%, 0% 100%)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
        >
          ×
        </button>

        <div className="p-6 pt-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Get Roofing Tips & Exclusive Offers 🏔️
          </h2>
          <p className="text-gray-600 mb-6">
            Sign up to receive project updates, special discounts, and helpful tips from our experts.
          </p>

          {submitted ? (
            <p className="text-green-600 text-center font-medium">
              🎉 Thanks! You’re now subscribed.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 font-medium"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
