import Link from "next/link";

const news = [
  {
    slug: "launch-announcement",
    title: "DibaTech Academy Launches New Campus",
    date: "Aug 1, 2025",
    author: "Admin",
    summary: "We’re excited to announce our new Lagos campus and expanded programs for 2025."
  },
  {
    slug: "scholarship-call",
    title: "Apply for Women in Tech Scholarships",
    date: "Aug 10, 2025",
    author: "Admissions",
    summary: "Scholarships now open for women pursuing tech careers at DibaTech Academy."
  }
];

export default function NewsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
      <p className="text-lg mb-8 text-gray-700">Latest announcements, stories, and press from DibaTech Academy.</p>

      {/* News Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {news.map(n => (
          <div key={n.slug} className="border rounded-2xl p-6 shadow bg-white flex flex-col justify-between">
            <div>
                <img src="/path/to/hero-students.png" alt={n.title} className="mb-4 rounded" />
              <h3 className="font-semibold text-xl mb-2">{n.title}</h3>
              <div className="text-sm text-gray-600 mb-2">{n.date} · {n.author}</div>
              <p className="text-gray-700 mb-2">{n.summary}</p>
            </div>
            <div className="flex gap-2 mt-4">
              <Link href={`/news/${n.slug}`} className="rounded-2xl px-4 py-2 bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700">Read Article</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Categories Placeholder */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center mt-12">
        <h3 className="text-xl font-bold mb-2">Categories</h3>
        <p className="mb-4">Academy News · Scholarships · Events · Alumni Stories · Press</p>
      </div>
    </section>
  );
}
