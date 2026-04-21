'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="backdrop-blur-md bg-white/10 border-b border-white/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-4">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link href="/">
              <motion.h1
                className="text-3xl pt-[5px] md:text-4xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
              >
                RAHMA Hassan
              </motion.h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-10">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.span
                    className="text-lg md:text-xl text-white/80 hover:text-white transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              className="md:hidden mt-6 flex flex-col gap-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg text-white/80 hover:text-white transition-colors block py-2 font-medium">
                    {link.label}
                  </span>
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </nav>
  );
}