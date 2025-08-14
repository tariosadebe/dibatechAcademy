import { getFaculty } from "../../../lib/content";
import Link from "next/link";

const filters = [
  { label: "Department", options: ["Software", "Data", "Cybersecurity", "Cloud", "Product", "Design"] },
  { label: "Role", options: ["Lead Instructor", "Instructor", "Mentor"] },
  { label: "Expertise", options: ["Web Development", "SQL", "Security"] },
];

export default async function FacultyDirectoryPage() {
  const faculty = await getFaculty();
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Faculty Directory</h1>
      <p className="text-lg mb-8 text-gray-700">Meet our expert instructors, mentors, and academic leaders.</p>

      {/* Filters */}
      <div className="mb-8 grid grid-cols-2 md:grid-cols-3 gap-4">
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

      {/* Faculty Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faculty.map(f => (
          <div key={f.slug} className="border rounded-2xl p-6 shadow bg-white flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-xl mb-2">{f.name}</h3>
              <div className="text-sm text-gray-600 mb-2">{f.role}</div>
              <div className="text-xs text-gray-500 mb-2">{f.expertise.join(", ")}</div>
            </div>
            <div className="flex gap-2 mt-4">
              <Link href={`/about/faculty/${f.slug}`} className="rounded-2xl px-4 py-2 bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700">View Profile</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
