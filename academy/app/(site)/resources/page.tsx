import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Resources · DibaTech Academy",
  description: "Access learning resources, career guides, academic calendar, and student support materials at DibaTech Academy.",
};

export default function ResourcesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Student Resources</h1>
      <p className="text-lg text-gray-700 mb-12">
        Everything you need to succeed at DibaTech Academy and beyond. Access learning materials, career guidance, and academic information.
      </p>

      {/* Quick Access */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Link href="/resources/academic-calendar" className="bg-blue-50 border border-blue-200 rounded-lg p-6 hover:bg-blue-100 transition-colors">
          <h3 className="font-semibold text-lg mb-2">Academic Calendar</h3>
          <p className="text-sm text-gray-600">View important dates, deadlines, and school holidays.</p>
        </Link>
        <Link href="/resources/student-handbook" className="bg-green-50 border border-green-200 rounded-lg p-6 hover:bg-green-100 transition-colors">
          <h3 className="font-semibold text-lg mb-2">Student Handbook</h3>
          <p className="text-sm text-gray-600">Policies, procedures, and guidelines for students.</p>
        </Link>
        <Link href="/resources/career-services" className="bg-purple-50 border border-purple-200 rounded-lg p-6 hover:bg-purple-100 transition-colors">
          <h3 className="font-semibold text-lg mb-2">Career Services</h3>
          <p className="text-sm text-gray-600">Resume help, interview prep, and job search support.</p>
        </Link>
        <Link href="/resources/tech-library" className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:bg-orange-100 transition-colors">
          <h3 className="font-semibold text-lg mb-2">Tech Library</h3>
          <p className="text-sm text-gray-600">Free resources, tutorials, and learning materials.</p>
        </Link>
      </div>

      {/* Learning Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Learning Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Programming Tutorials</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-blue-600">JavaScript Fundamentals</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Python for Data Science</Link></li>
              <li><Link href="#" className="hover:text-blue-600">React Development</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Node.js Backend</Link></li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Design Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-blue-600">UI/UX Design Principles</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Figma Templates</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Color Theory Guide</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Typography Best Practices</Link></li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Data & Analytics</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-blue-600">Excel Advanced Functions</Link></li>
              <li><Link href="#" className="hover:text-blue-600">SQL Query Examples</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Power BI Dashboards</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Data Visualization</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Career Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Career Development</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Job Search Tools</h3>
            <div className="space-y-3">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-1">Resume Templates</h4>
                <p className="text-sm text-gray-600">Professional templates for tech roles</p>
                <Link href="#" className="text-blue-600 text-sm hover:underline">Download →</Link>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-1">Cover Letter Guide</h4>
                <p className="text-sm text-gray-600">How to write compelling cover letters</p>
                <Link href="#" className="text-blue-600 text-sm hover:underline">Read Guide →</Link>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-1">Portfolio Examples</h4>
                <p className="text-sm text-gray-600">Showcase your work effectively</p>
                <Link href="#" className="text-blue-600 text-sm hover:underline">View Examples →</Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Interview Preparation</h3>
            <div className="space-y-3">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-1">Technical Interview Questions</h4>
                <p className="text-sm text-gray-600">Common coding and system design questions</p>
                <Link href="#" className="text-blue-600 text-sm hover:underline">Practice →</Link>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-1">Behavioral Interview Guide</h4>
                <p className="text-sm text-gray-600">STAR method and common questions</p>
                <Link href="#" className="text-blue-600 text-sm hover:underline">Learn More →</Link>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-1">Salary Negotiation</h4>
                <p className="text-sm text-gray-600">Know your worth and negotiate effectively</p>
                <Link href="#" className="text-blue-600 text-sm hover:underline">Read Tips →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Support */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Student Support</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Academic Support</h3>
            <p className="text-sm text-gray-600 mb-4">Get help with coursework and projects</p>
            <Link href="/contact" className="text-blue-600 font-medium hover:underline">Contact Tutors</Link>
          </div>
          <div className="text-center border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Technical Help</h3>
            <p className="text-sm text-gray-600 mb-4">Platform issues and technical support</p>
            <Link href="/contact" className="text-blue-600 font-medium hover:underline">Get Help</Link>
          </div>
          <div className="text-center border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Counseling Services</h3>
            <p className="text-sm text-gray-600 mb-4">Personal and academic counseling</p>
            <Link href="/contact" className="text-blue-600 font-medium hover:underline">Book Session</Link>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Quick Links</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/programs" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
            <div className="font-medium text-blue-600">Programs</div>
            <div className="text-sm text-gray-600">Explore all courses</div>
          </Link>
          <Link href="/admissions" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
            <div className="font-medium text-blue-600">Admissions</div>
            <div className="text-sm text-gray-600">Apply now</div>
          </Link>
          <Link href="/events" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
            <div className="font-medium text-blue-600">Events</div>
            <div className="text-sm text-gray-600">Upcoming events</div>
          </Link>
          <Link href="/contact" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
            <div className="font-medium text-blue-600">Contact</div>
            <div className="text-sm text-gray-600">Get in touch</div>
          </Link>
        </div>
      </div>
    </section>
  );
}