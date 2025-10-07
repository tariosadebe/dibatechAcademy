import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Admissions & How to Apply</h1>
      <p className="text-lg mb-8 text-gray-700">Start your journey at DibaTech Academy. Follow these steps to apply, review requirements, and secure your place in our next cohort.</p>

      {/* Stepper */}
      <div className="mb-12">
        <ol className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between bg-gray-50 rounded-2xl p-6">
          <li className="flex-1">
            <div className="font-bold text-blue-600 mb-1">1. Explore Programs</div>
            <div className="text-sm text-gray-600">Find the right track for your goals.</div>
          </li>
          <li className="flex-1">
            <div className="font-bold text-blue-600 mb-1">2. Check Requirements</div>
            <div className="text-sm text-gray-600">Review eligibility and prerequisites.</div>
          </li>
          <li className="flex-1">
            <div className="font-bold text-blue-600 mb-1">3. Apply Online</div>
            <div className="text-sm text-gray-600">Submit your application form.</div>
          </li>
          <li className="flex-1">
            <div className="font-bold text-blue-600 mb-1">4. Interview & Review</div>
            <div className="text-sm text-gray-600">Admissions team will contact you.</div>
          </li>
          <li className="flex-1">
            <div className="font-bold text-blue-600 mb-1">5. Enroll</div>
            <div className="text-sm text-gray-600">Secure your spot and start learning.</div>
          </li>
        </ol>
      </div>

      {/* Requirements & Eligibility */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Requirements & Eligibility</h2>
        <ul className="list-disc pl-6 mb-2">
          <li>Minimum age: 16 years</li>
          <li>Secondary school certificate or equivalent</li>
          <li>Basic computer literacy</li>
          <li>English proficiency</li>
        </ul>
        <Link href="/admissions/requirements" className="text-blue-600 font-medium">See full requirements</Link>
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
        <Link href="/admissions/deadlines" className="text-blue-600 font-medium">See all deadlines</Link>
      </div>

      {/* Tuition & Scholarships */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tuition & Fees</h2>
        <table className="w-full mb-2 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Program</th>
              <th className="py-2 px-4 text-left">Tuition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Software Engineering Diploma</td>
              <td className="py-2 px-4">₦300,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Data Analytics Certificate</td>
              <td className="py-2 px-4">₦180,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Cybersecurity Bootcamp</td>
              <td className="py-2 px-4">₦150,000</td>
            </tr>
          </tbody>
        </table>
        <Link href="/admissions/tuition-fees" className="text-blue-600 font-medium">See full tuition & fees</Link>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Class Types</h2>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-semibold">Standard Free Classes:</span> No tuition, only pay for ID cards.
          </li>
          <li>
            <span className="font-semibold">Paid Classes:</span> Tuition applies as listed above.
          </li>
        </ul>
      </div>

      {/* Important Guidelines */}
      <div className="mb-8 border border-orange-200 rounded-lg p-6 bg-orange-50">
        <h2 className="text-xl font-bold mb-4 text-orange-800">📋 Before You Apply</h2>
        <p className="text-orange-700 mb-4">
          Please download and read our DibaTech Academy Guidelines to understand our policies, procedures, and what to expect as a student.
        </p>
        <a 
          href="/pdf/DibaTech-Guidelines.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700"
        >
          📄 Download Guidelines (PDF)
        </a>
      </div>

      {/* Application Process Explanation */}
      <div className="mb-8 border rounded-lg p-6 bg-green-50">
        <h2 className="text-xl font-bold mb-4">How the Application Process Works</h2>
        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">1</div>
            <div>
              <div className="font-semibold">Click "Apply Now" Button</div>
              <div className="text-gray-600">You'll be directed to our student portal at students.dibatech.ng</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">2</div>
            <div>
              <div className="font-semibold">Fill Out the Signup Form</div>
              <div className="text-gray-600">Complete all required fields with accurate information and submit</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">3</div>
            <div>
              <div className="font-semibold">Wait for Login Credentials</div>
              <div className="text-gray-600">Your login credentials will be sent to your email within 48 hours</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">4</div>
            <div>
              <div className="font-semibold">Access Your Student Portal</div>
              <div className="text-gray-600">Login to access assignments, meeting links, announcements, materials, and more</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Admissions */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center mt-12">
        <h3 className="text-xl font-bold mb-2">Ready to Start Your Application?</h3>
        <p className="mb-4 text-gray-700">
          Make sure you've downloaded and read the guidelines above before proceeding.
        </p>
        <p className="mb-6 text-sm text-gray-600">
          <strong>Important:</strong> Check your email (including spam folder) for login credentials within 48 hours after submitting your application.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="https://students.dibatech.ng/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-2xl px-6 py-3 bg-blue-600 text-white font-semibold shadow hover:bg-blue-700"
          >
            Apply Now →
          </a>
          <Link href="/contact" className="rounded-2xl px-6 py-3 border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50">
            Contact Admissions
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-600">
          <strong>Need help?</strong><br />
          WhatsApp: <a href="https://wa.me/2349136701855" target="_blank" rel="noopener" className="text-blue-600">+234 913 670 1855</a> | 
          Email: <a href="mailto:admissions@dibatech.ng" className="text-blue-600">admissions@dibatech.ng</a>
        </p>
      </div>
    </section>
  );
}
