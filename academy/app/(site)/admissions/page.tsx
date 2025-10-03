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
        <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
        <table className="w-full mb-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Cohort</th>
              <th className="py-2 px-4 text-left">Application Deadline</th>
              <th className="py-2 px-4 text-left">Start Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">August 2025</td>
              <td className="py-2 px-4">Aug 20, 2025</td>
              <td className="py-2 px-4">Aug 28, 2025</td>
            </tr>
            <tr>
              <td className="py-2 px-4">September 2025</td>
              <td className="py-2 px-4">Sept 5, 2025</td>
              <td className="py-2 px-4">Sept 10, 2025</td>
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

      {/* Contact Admissions */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center mt-12">
        <h3 className="text-xl font-bold mb-2">Questions? Talk to Admissions</h3>
        <p className="mb-4">WhatsApp: <a href="https://wa.me/2348000000000" target="_blank" rel="noopener" className="text-blue-600">+234 800 000 0000</a> | Email: <a href="mailto:admissions@dibatech.ng" className="text-blue-600">admissions@dibatech.ng</a></p>
        <Link href="/contact" className="rounded-2xl px-6 py-3 bg-blue-600 text-white font-semibold shadow">Contact Admissions</Link>
      </div>
    </section>
  );
}
