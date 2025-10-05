import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us · DibaTech Academy",
  description: "Learn about DibaTech Academy's mission to transform tech careers in Nigeria through industry-aligned programs and hands-on learning.",
};

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">About DibaTech Academy</h1>
      
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-4">
          DibaTech Academy is Nigeria's premier technology education institution, dedicated to bridging the gap between traditional education and industry demands. We empower students with practical skills, real-world experience, and career support to succeed in the rapidly evolving tech landscape.
        </p>
        <p className="text-gray-700 mb-4">
          Our industry-aligned curriculum, expert faculty, and strong employer partnerships ensure our graduates are job-ready from day one. We believe in hands-on learning, mentorship, and creating pathways to meaningful tech careers.
        </p>
      </div>

      {/* Quick Facts */}
      <div className="bg-blue-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Quick Facts</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">2024</div>
            <div className="text-sm text-gray-600">Founded</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-600">Graduates</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">6</div>
            <div className="text-sm text-gray-600">Program Tracks</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">20+</div>
            <div className="text-sm text-gray-600">Partner Companies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">Lagos & Online</div>
            <div className="text-sm text-gray-600">Locations</div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To democratize access to quality tech education and create pathways for Africans to thrive in the global digital economy through practical, industry-relevant training and career support.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To become Africa's leading technology education institution, known for producing job-ready graduates who drive innovation and economic growth across the continent.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Why Choose DibaTech Academy?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Industry-Aligned Curriculum</h3>
            <p className="text-sm text-gray-600">
              Our programs are designed with input from industry experts and updated regularly to match current market demands.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Hands-On Learning</h3>
            <p className="text-sm text-gray-600">
              Learn by building real projects that you can showcase to employers and add to your professional portfolio.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Expert Faculty</h3>
            <p className="text-sm text-gray-600">
              Learn from industry practitioners with years of experience at top tech companies and startups.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Career Support</h3>
            <p className="text-sm text-gray-600">
              From resume reviews to interview prep and job placement assistance, we support you beyond graduation.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Flexible Learning</h3>
            <p className="text-sm text-gray-600">
              Choose from online, in-person, or hybrid formats that fit your schedule and learning preferences.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Strong Network</h3>
            <p className="text-sm text-gray-600">
              Join a community of ambitious learners and successful alumni working at leading companies across Africa.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h2>
        <p className="mb-6 text-gray-700">
          Join hundreds of graduates who have successfully transitioned into rewarding tech careers.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/programs" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Explore Programs
          </Link>
          <Link href="/admissions" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
