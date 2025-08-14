import Image from "next/image";
import Link from "next/link";

const alumni = [
  {
    slug: "ada-software-engineer",
    name: "Ada",
    story: "Landed her first tech job after DibaTech Academy. Now at a top fintech company.",
    program: "Software Engineering Diploma"
  },
  {
    slug: "chinedu-data-analyst",
    name: "Chinedu",
    story: "Built a real portfolio and works as a data analyst for a global firm.",
    program: "Data Analytics Certificate"
  }
];

export default function OutcomesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Outcomes</h1>
      <p className="text-lg mb-8 text-gray-700">Discover alumni success stories, hiring partners, and career outcomes from DibaTech Academy.</p>

      {/* Stats & Partner Logos */}
      <div className="mb-12 bg-blue-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">Placement Stats</h2>
          <ul className="text-gray-700 mb-4">
            <li>95% job placement rate within 6 months</li>
            <li>100+ hiring partners</li>
            <li>Alumni at top tech companies</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">Hiring Partners</h2>
          <div className="flex gap-4">
            <Image src="/images/hero-students.png" alt="Partner 1" width={80} height={40} />
            <Image src="/images/hero-students.png" alt="Partner 2" width={80} height={40} />
            <Image src="/images/hero-students.png" alt="Partner 3" width={80} height={40} />
          </div>
        </div>
      </div>

      {/* Alumni Stories */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-6">Alumni Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {alumni.map(a => (
            <div key={a.slug} className="bg-white border rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">{a.name}</h3>
              <div className="text-xs text-gray-500 mb-2">{a.program}</div>
              <p className="text-gray-700 mb-2">{a.story}</p>
              <Link href={`/outcomes/alumni/${a.slug}`} className="text-blue-600 font-medium">Read Story</Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Band */}
      <div className="bg-black text-white rounded-2xl p-8 text-center mt-12">
        <h3 className="text-xl font-bold mb-2">Ready to join our alumni?</h3>
        <p className="mb-4">Apply now or request more information about DibaTech Academy programs.</p>
        <div className="flex justify-center gap-4">
          <Link href="/admissions" className="rounded-2xl px-6 py-3 bg-white text-black font-semibold shadow">Apply Now</Link>
          <Link href="/contact" className="rounded-2xl px-6 py-3 bg-blue-600 text-white font-semibold shadow">Request Info</Link>
        </div>
      </div>
    </section>
  );
}
