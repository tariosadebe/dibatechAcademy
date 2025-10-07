import Link from "next/link";

export const metadata = {
  title: "Alumni Network · DibaTech Academy",
  description: "Connect with DibaTech Academy graduates working at top companies across Nigeria and beyond. Join our thriving alumni community.",
  keywords: "DibaTech Academy alumni, tech graduates Nigeria, alumni network Lagos, career success stories"
};

export default function AlumniPage() {
  const alumni = [
    {
      name: "Adebayo Johnson",
      program: "Software Engineering",
      year: "2024",
      company: "Paystack",
      role: "Frontend Developer",
      image: "/images/alumni/adebayo.jpg"
    },
    {
      name: "Fatima Aliyu",
      program: "Data Analytics",
      year: "2024",
      company: "MTN Nigeria",
      role: "Data Analyst",
      image: "/images/alumni/fatima.jpg"
    },
    {
      name: "Chinedu Okoro",
      program: "Cybersecurity",
      year: "2024",
      company: "First Bank",
      role: "Security Analyst",
      image: "/images/alumni/chinedu.jpg"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Alumni Network</h1>
      <p className="text-lg text-gray-700 mb-12">
        Join a thriving community of DibaTech Academy graduates making impact across Nigeria's tech ecosystem and beyond.
      </p>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="text-center bg-blue-50 rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-600">500+</div>
          <div className="text-gray-600">Graduates</div>
        </div>
        <div className="text-center bg-green-50 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-600">85%</div>
          <div className="text-gray-600">Job Placement Rate</div>
        </div>
        <div className="text-center bg-purple-50 rounded-lg p-6">
          <div className="text-3xl font-bold text-purple-600">50+</div>
          <div className="text-gray-600">Partner Companies</div>
        </div>
        <div className="text-center bg-orange-50 rounded-lg p-6">
          <div className="text-3xl font-bold text-orange-600">₦2.5M</div>
          <div className="text-gray-600">Average Starting Salary</div>
        </div>
      </div>

      {/* Featured Alumni */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Alumni</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {alumni.map((person, index) => (
            <div key={index} className="border rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-lg">{person.name}</h3>
              <p className="text-blue-600 font-medium">{person.role}</p>
              <p className="text-gray-600">{person.company}</p>
              <p className="text-sm text-gray-500 mt-2">{person.program} • Class of {person.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Alumni Benefits */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Alumni Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Lifetime Career Support</h3>
            <p className="text-gray-600 text-sm">Continued access to career services, job board, and placement assistance.</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Alumni Network Events</h3>
            <p className="text-gray-600 text-sm">Regular networking events, meetups, and professional development sessions.</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Continued Learning</h3>
            <p className="text-gray-600 text-sm">Access to new course materials, workshops, and skill updates.</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Mentorship Opportunities</h3>
            <p className="text-gray-600 text-sm">Give back by mentoring current students and new graduates.</p>
          </div>
        </div>
      </div>

      {/* Join Alumni Network */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Alumni Network</h2>
        <p className="mb-6 text-gray-700">
          Are you a DibaTech Academy graduate? Connect with fellow alumni and expand your professional network.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Register as Alumni
          </Link>
          <Link href="/programs" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
            View Programs
          </Link>
        </div>
      </div>
    </section>
  );
}