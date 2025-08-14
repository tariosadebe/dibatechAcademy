import { getProgramDetail } from "../../../../lib/content";
export default async function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = await getProgramDetail(params.slug);
  if (!program) return <div>Program not found.</div>;
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">{program.title}</h1>
      <div className="mb-4 text-sm text-gray-500">{program.level} · {program.mode} · {program.duration}</div>
      <ul className="mb-6 list-disc pl-6">
        {program.valueBullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div className="mb-6">
        <h2 className="font-semibold">Who it’s for / Prerequisites</h2>
        <p>{program.prerequisites}</p>
      </div>
      {/* Curriculum, schedule, faculty, tuition, career outcomes, FAQs, sticky CTA to be added */}
    </section>
  );
}
