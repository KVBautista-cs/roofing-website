'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full px-6 md:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/assets/logo.jpeg" alt="Logo" width={60} height={60} className="rounded-full" />
          <span className="font-bold text-xl text-blue-900">Mountain Climbers</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className="text-gray-800 hover:text-blue-700 font-medium">Home</Link>
          <Link href="/services" className="text-gray-800 hover:text-blue-700 font-medium">Services</Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-700 font-medium">About</Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-700 font-medium">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white shadow-md border-t border-gray-200">
          <Link href="/" className="block text-gray-800 hover:text-blue-700 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" className="block text-gray-800 hover:text-blue-700 font-medium" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" className="block text-gray-800 hover:text-blue-700 font-medium" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="block text-gray-800 hover:text-blue-700 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
