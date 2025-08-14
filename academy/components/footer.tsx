import Link from "next/link";
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-2">DibaTech Academy</h3>
          <p className="text-sm">Transform your tech career. Industry-aligned programs, hands-on learning, career support.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/admissions">Admissions</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/admissions/tuition-fees">Tuition & Fees</Link></li>
            <li><Link href="/admissions/scholarships">Scholarships</Link></li>
            <li><Link href="/resources/academic-calendar">Academic Calendar</Link></li>
            <li><Link href="/news">News</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li>WhatsApp: <a href="https://wa.me/2348000000000" target="_blank" rel="noopener">+234 800 000 0000</a></li>
            <li>Email: <a href="mailto:academy@dibatech.ng">academy@dibatech.ng</a></li>
            <li>Address: Lagos, Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 text-xs bg-gray-800">© {new Date().getFullYear()} DibaTech Academy. All rights reserved.</div>
    </footer>
  );
}
