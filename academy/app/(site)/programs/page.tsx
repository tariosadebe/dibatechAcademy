import { getPrograms } from "../../../lib/content";
import Link from "next/link";

export const metadata = {
  title: "Programs & Tracks · DibaTech Academy",
  description: "Explore industry-aligned tech programs, diplomas, and certificates at DibaTech Academy. Software engineering, data analytics, cybersecurity, and more in Nigeria and online.",
};

const filters = [
  { label: "Track", options: ["Software", "Data", "Cybersecurity", "Cloud", "Product", "Design"] },
  { label: "Level", options: ["Diploma", "Certificate", "Short Course"] },
  { label: "Mode", options: ["On-campus", "Online", "Hybrid"] },
  { label: "Duration", options: ["2 months", "3 months", "6 months"] },
  { label: "Start Month", options: ["August", "September", "October"] },
  { label: "Price Band", options: ["₦100k+", "₦200k+", "₦300k+"] },
];

export default async function ProgramsPage() {
  const programs = await getPrograms();
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Programs & Tracks</h1>
      <p className="text-lg mb-8 text-gray-700">Choose from industry-aligned diplomas, certificates, and bootcamps. Flexible modes, expert faculty, and career outcomes.</p>

      {/* Filters */}
      <div className="mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {filters.map(f => (
          <div key={f.label}>
            <label className="block text-xs font-semibold mb-1 text-gray-600">{f.label}</label>
            <select className="w-full rounded-lg border px-2 py-1 text-sm">
              <option value="">All</option>
              {f.options.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        ))}
      </div>

      {/* Program Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map(p => (
          <div key={p.slug} className="border rounded-2xl p-6 shadow bg-white flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{p.summary}</p>
              <div className="text-xs text-gray-500 mb-2">{p.duration} · {p.mode}</div>
            </div>
            <div className="flex gap-2 mt-4">
              <Link href={`/programs/${p.slug}`} className="rounded-2xl px-4 py-2 bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700">View Details</Link>
              <Link href={`/admissions`} className="rounded-2xl px-4 py-2 bg-black text-white text-sm font-semibold shadow hover:bg-gray-800">Apply Now</Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Band */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center mt-12">
        <h3 className="text-xl font-bold mb-2">Not sure which program is right for you?</h3>
        <p className="mb-4">Request info or talk to admissions for personalized guidance.</p>
        <Link href="/contact" className="rounded-2xl px-6 py-3 bg-blue-600 text-white font-semibold shadow">Request Info</Link>
      </div>
    </section>
  );
}
