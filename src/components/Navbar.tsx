'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-off-white/90 dark:bg-soft-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight text-obsidian dark:text-off-white group">
          SWC<span className="text-teal-accent group-hover:animate-pulse">.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="font-medium hover:text-teal-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-accent transition-all group-hover:w-full"></span>
            </Link>
          ))}
          
          <Link href="/contact" className="btn-primary py-2.5 px-6 text-sm shadow-lg hover:shadow-teal-accent/20">
            Start a Project
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-obsidian dark:text-off-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-soft-black border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="container-custom py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-xl font-semibold hover:text-teal-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="btn-primary w-full justify-center py-4"
            onClick={() => setIsOpen(false)}
          >
            Start a Project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
