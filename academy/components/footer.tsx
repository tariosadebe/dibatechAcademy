import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">DibaTech Academy</h3>
            <p className="text-gray-300 text-sm mb-4">
              Transforming careers through industry-aligned tech education in Nigeria and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/programs/software-engineering" className="hover:text-white">Software Engineering</Link></li>
              <li><Link href="/programs/data-analytics" className="hover:text-white">Data Analytics</Link></li>
              <li><Link href="/programs/cybersecurity" className="hover:text-white">Cybersecurity</Link></li>
              <li><Link href="/programs" className="hover:text-white">View All Programs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/about/faculty" className="hover:text-white">Faculty</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/alumni" className="hover:text-white">Alumni</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
              <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
              <li><a href="https://wa.me/2349136701855" className="hover:text-white">WhatsApp: +234 913 670 1855</a></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* DibaTech Ecosystem */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center mb-4">
            <p className="text-gray-400 text-sm mb-3">Part of the DibaTech Ecosystem</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="https://dibatech.ng" target="_blank" rel="noopener" className="text-gray-400 hover:text-white">DibaTech Main</a>
              <a href="https://ebooks.dibatech.ng" target="_blank" rel="noopener" className="text-gray-400 hover:text-white">DibaTech eBooks</a>
              <a href="https://linker.dibatech.ng" target="_blank" rel="noopener" className="text-gray-400 hover:text-white">DibaTech Linker</a>
              <span className="text-blue-400 font-medium">DibaTech Academy</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 DibaTech Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white text-sm">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}