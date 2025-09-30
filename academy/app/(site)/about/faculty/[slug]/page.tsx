import { getFacultyDetail } from "../../../../../lib/content";

export function generateStaticParams() {
  return [
    { slug: "software-engineering" },
    { slug: "data-analytics" }
  ];
}

export default async function FacultyProfilePage({ params }: { params: { slug: string } }) {
  const faculty = await getFacultyDetail(params.slug);
  if (!faculty) return <div>Faculty not found.</div>;
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">{faculty.name}, {faculty.role}</h1>
      <div className="mb-4 text-sm text-gray-500">Expertise: {faculty.expertise.join(", ")}</div>
      <div className="mb-6 text-gray-700">{faculty.bio}</div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Courses Taught</h2>
        <ul className="list-disc pl-6">
          {faculty.courses.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </div>
      <div className="mb-6">
        <a href={faculty.social.linkedin} target="_blank" rel="noopener" className="text-blue-600 font-medium">LinkedIn</a>
      </div>
      <div className="bg-blue-50 rounded-2xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold mb-2">Contact or learn more</h3>
        <a href="/about/faculty" className="rounded-2xl px-6 py-3 bg-blue-600 text-white font-semibold shadow">Back to Faculty Directory</a>
      </div>
    </section>
  );
}
