"use client";
import Link from "next/link";
import Image from "next/image";
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="DibaTech Academy Logo" width={64} height={64} />
          <span className="text-2xl text-green-600"><strong className="font-bold text-green-700">DibaTech</strong> Academy</span>
        </Link>
        <nav className="hidden md:flex gap-5 text-sm">
          <Link href="/programs">Programs</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/news">News</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="ml-auto">
          <Link 
  href="https://students.dibatech.ng/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="rounded-2xl px-4 py-2 bg-black text-white text-sm font-semibold shadow hover:bg-gray-800"
>
  Apply Now
</Link>
        </div>
      </div>
    </header>
  );
}
