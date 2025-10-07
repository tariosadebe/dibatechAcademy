import Link from "next/link";

export const metadata = {
  title: "Careers · DibaTech Academy",
  description: "Join the DibaTech Academy team. Current job openings for instructors, admissions staff, and administrative positions in Lagos, Nigeria.",
  keywords: "DibaTech Academy jobs, tech instructor jobs Lagos, education careers Nigeria, academy jobs"
};

export default function CareersPage() {
  const openings = [
    {
      title: "Senior Software Engineering Instructor",
      type: "Full-time",
      location: "Lagos / Remote",
      department: "Academic",
      description: "Lead our software engineering program and mentor the next generation of Nigerian developers."
    },
    {
      title: "Data Analytics Instructor",
      type: "Part-time",
      location: "Lagos / Remote", 
      department: "Academic",
      description: "Teach data analytics and help students build real-world data science skills."
    },
    {
      title: "Admissions Counselor",
      type: "Full-time",
      location: "Lagos",
      department: "Admissions",
      description: "Guide prospective students through the admissions process and help them find the right program."
    },
    {
      title: "Career Services Coordinator",
      type: "Full-time",
      location: "Lagos",
      department: "Student Services",
      description: "Support students and alumni with job placement, career guidance, and employer partnerships."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Careers at DibaTech Academy</h1>
      <p className="text-lg text-gray-700 mb-12">
        Join our mission to transform tech education in Nigeria. We're looking for passionate educators, administrators, and support staff who believe in the power of practical learning.
      </p>

      {/* Why Work With Us */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Why Work With Us?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Impact & Purpose</h3>
            <p className="text-gray-600 text-sm">Make a real difference in students' lives and Nigeria's tech ecosystem.</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Professional Growth</h3>
            <p className="text-gray-600 text-sm">Continuous learning opportunities and career development support.</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Flexible Work Environment</h3>
            <p className="text-gray-600 text-sm">Hybrid work options and flexible scheduling for work-life balance.</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Competitive Benefits</h3>
            <p className="text-gray-600 text-sm">Health insurance, professional development budget, and performance bonuses.</p>
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
        <div className="space-y-6">
          {openings.map((job, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-600 mt-1">
                    <span>{job.type}</span>
                    <span>{job.location}</span>
                    <span>{job.department}</span>
                  </div>
                </div>
                <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                  Apply Now
                </Link>
              </div>
              <p className="text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How to Apply</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <div className="font-semibold">Review Job Requirements</div>
                <div className="text-gray-600 text-sm">Make sure you meet the qualifications for the position.</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <div className="font-semibold">Submit Application</div>
                <div className="text-gray-600 text-sm">Send your CV and cover letter to careers@dibatech.ng</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <div className="font-semibold">Interview Process</div>
                <div className="text-gray-600 text-sm">Initial screening, technical assessment, and final interview.</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <div className="font-semibold">Join the Team</div>
                <div className="text-gray-600 text-sm">Welcome aboard and orientation process.</div>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Join Our Team?</h2>
        <p className="mb-6 text-gray-700">
          Don't see a position that fits? Send us your CV anyway - we're always looking for talented people.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="mailto:careers@dibatech.ng" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Send Your CV
          </a>
          <Link href="/contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}