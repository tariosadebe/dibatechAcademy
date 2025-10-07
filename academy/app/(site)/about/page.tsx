import Link from "next/link";

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

      {/* Deadlines & Cohorts */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Important Dates - Year-Round Enrollment</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
          <p className="text-green-800 font-medium">✅ Rolling Admissions Available</p>
          <p className="text-green-700 text-sm">Since our programs are online, you can apply and start any month of the year!</p>
        </div>
        <table className="w-full mb-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Month</th>
              <th className="py-2 px-4 text-left">Application Deadline</th>
              <th className="py-2 px-4 text-left">Cohort Start Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4">January</td>
              <td className="py-2 px-4">December 15</td>
              <td className="py-2 px-4">January 10</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4">February</td>
              <td className="py-2 px-4">January 15</td>
              <td className="py-2 px-4">February 10</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4">March</td>
              <td className="py-2 px-4">February 15</td>
              <td className="py-2 px-4">March 10</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4">April</td>
              <td className="py-2 px-4">March 15</td>
              <td className="py-2 px-4">April 10</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4">May</td>
              <td className="py-2 px-4">April 15</td>
              <td className="py-2 px-4">May 10</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4">June</td>
              <td className="py-2 px-4">May 15</td>
              <td className="py-2 px-4">June 10</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4">July</td>
              <td className="py-2 px-4">June 15</td>
              <td className="py-2 px-4">July 10</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4">August</td>
              <td className="py-2 px-4">July 15</td>
              <td className="py-2 px-4">August 10</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4">September</td>
              <td className="py-2 px-4">August 15</td>
              <td className="py-2 px-4">September 10</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4">October</td>
              <td className="py-2 px-4">September 15</td>
              <td className="py-2 px-4">October 10</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4">November</td>
              <td className="py-2 px-4">October 15</td>
              <td className="py-2 px-4">November 10</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4">December</td>
              <td className="py-2 px-4">November 15</td>
              <td className="py-2 px-4">December 10</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-600 text-sm">
          Note: For detailed information on program start dates and to check the status of your application, please visit our{" "}
          <Link href="/admissions" className="text-blue-600 hover:underline">
            Admissions page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
