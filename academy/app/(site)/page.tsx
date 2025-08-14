import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Transform your tech career at DibaTech Academy</h1>
          <p className="text-xl mb-6 text-gray-700">Industry-aligned programs with hands-on projects, expert faculty, and career support in Nigeria and online.</p>
          <div className="flex gap-4 mb-8">
            <Link href="/admissions" className="rounded-2xl px-6 py-3 bg-black text-white font-semibold shadow hover:bg-gray-800">Apply Now</Link>
            <Link href="/contact" className="rounded-2xl px-6 py-3 bg-gray-100 text-black font-semibold shadow hover:bg-gray-200">Request Info</Link>
            <Link href="/programs" className="rounded-2xl px-6 py-3 bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">Explore Programs</Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="/images/hero-students.png" alt="DibaTech Academy students" width={480} height={320} className="rounded-2xl shadow-lg object-cover" />
        </div>
      </div>

      {/* Programs Grid */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-5 shadow hover:shadow-lg bg-white">
            <h3 className="font-semibold text-lg mb-2">Software Engineering Diploma</h3>
            <p className="text-sm text-gray-600 mb-2">Build production-ready apps with modern stacks.</p>
            <div className="text-xs text-gray-500 mb-2">6 months · Hybrid</div>
            <Link href="/programs/software-engineering" className="text-blue-600 font-medium">View Program</Link>
          </div>
          <div className="border rounded-2xl p-5 shadow hover:shadow-lg bg-white">
            <h3 className="font-semibold text-lg mb-2">Data Analytics Certificate</h3>
            <p className="text-sm text-gray-600 mb-2">From spreadsheets to SQL & dashboards.</p>
            <div className="text-xs text-gray-500 mb-2">3 months · Online</div>
            <Link href="/programs/data-analytics" className="text-blue-600 font-medium">View Program</Link>
          </div>
          <div className="border rounded-2xl p-5 shadow hover:shadow-lg bg-white">
            <h3 className="font-semibold text-lg mb-2">Cybersecurity Bootcamp</h3>
            <p className="text-sm text-gray-600 mb-2">Protect systems and data with hands-on labs.</p>
            <div className="text-xs text-gray-500 mb-2">2 months · Hybrid</div>
            <Link href="/programs/cybersecurity" className="text-blue-600 font-medium">View Program</Link>
          </div>
        </div>
      </div>

      {/* Outcomes Section */}
      <div className="mb-16 bg-blue-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">Outcomes</h2>
          <ul className="text-gray-700 mb-4">
            <li>95% job placement rate within 6 months</li>
            <li>100+ hiring partners</li>
            <li>Alumni at top tech companies</li>
          </ul>
          <div className="flex gap-4">
            <Image src="/images/hero-students.png" alt="Partner 1" width={80} height={40} />
            <Image src="/images/hero-students.png" alt="Partner 2" width={80} height={40} />
            <Image src="/images/hero-students.png" alt="Partner 3" width={80} height={40} />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">Upcoming Events</h2>
          <ul className="mb-4">
            <li className="mb-2"><span className="font-semibold">Open Day:</span> Aug 28, 2025</li>
            <li className="mb-2"><span className="font-semibold">Webinar:</span> Sept 10, 2025</li>
          </ul>
          <Link href="/events" className="text-blue-600 font-medium">See all events</Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h2 className="text-xl font-bold mb-6">Student Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-2xl p-6 shadow">
            <p className="text-gray-700 mb-2">“DibaTech Academy helped me land my first tech job. The projects and career support were world-class.”</p>
            <div className="text-xs text-gray-500">— Ada, Software Engineering Alumna</div>
          </div>
          <div className="bg-white border rounded-2xl p-6 shadow">
            <p className="text-gray-700 mb-2">“The faculty are amazing mentors. I learned so much and built a real portfolio.”</p>
            <div className="text-xs text-gray-500">— Chinedu, Data Analytics Graduate</div>
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="mb-16">
        <h2 className="text-xl font-bold mb-6">Our Partners</h2>
        <div className="flex gap-8 items-center">
          <Image src="/images/hero-students.png" alt="Partner 1" width={80} height={40} />
          <Image src="/images/hero-students.png" alt="Partner 2" width={80} height={40} />
          <Image src="/images/hero-students.png" alt="Partner 3" width={80} height={40} />
        </div>
      </div>

      {/* Footer Lead Band */}
      <div className="bg-black text-white rounded-2xl p-8 text-center mt-12">
        <h3 className="text-2xl font-bold mb-2">Ready to start your tech journey?</h3>
        <p className="mb-4">Apply now or request more information about DibaTech Academy programs.</p>
        <div className="flex justify-center gap-4">
          <Link href="/admissions" className="rounded-2xl px-6 py-3 bg-white text-black font-semibold shadow">Apply Now</Link>
          <Link href="/contact" className="rounded-2xl px-6 py-3 bg-blue-600 text-white font-semibold shadow">Request Info</Link>
        </div>
      </div>
    </section>
  );
}
