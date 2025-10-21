"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3">
        {/* Main header row */}
        <div className="flex items-center justify-between">
          {/* Logo and title - always visible */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image 
              src="/images/logo.png" 
              alt="DibaTech Academy Logo" 
              width={56} 
              height={56} 
              className="md:w-16 md:h-16" 
            />
            <span className="text-xl md:text-3xl text-green-600 whitespace-nowrap">
              <strong className="font-bold text-green-700">DibaTech</strong> Academy
            </span>
          </Link>

          {/* Desktop navigation - hidden on mobile */}
          <nav className="hidden lg:flex gap-5 text-sm">
            <Link href="/programs" className="hover:text-blue-600 transition-colors">Programs</Link>
            <Link href="/admissions" className="hover:text-blue-600 transition-colors">Admissions</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/alumni" className="hover:text-blue-600 transition-colors">Alumni</Link>
            <Link href="/careers" className="hover:text-blue-600 transition-colors">Careers</Link>
            <Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </nav>

          {/* Desktop buttons - hidden on mobile */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://students.dibatech.ng/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-2xl px-4 py-2 border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              Login
            </a>
            <a 
              href="https://students.dibatech.ng/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-2xl px-4 py-2 bg-black text-white text-sm font-semibold shadow hover:bg-gray-800 transition-colors"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile menu - shows/hides based on state */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="pt-4 pb-2 space-y-3">
            <Link 
              href="/programs" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link 
              href="/admissions" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Admissions
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/alumni" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Alumni
            </Link>
            <Link 
              href="/careers" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              href="/resources" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Mobile buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <a 
                href="https://students.dibatech.ng/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-2xl px-4 py-2 border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                Login
              </a>
              <a 
                href="https://students.dibatech.ng/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-2xl px-4 py-2 bg-black text-white text-sm font-semibold shadow hover:bg-gray-800 transition-colors text-center"
              >
                Apply Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
