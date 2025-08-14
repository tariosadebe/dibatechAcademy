import Link from "next/link";

const events = [
  {
    slug: "open-day-aug-2025",
    title: "Open Day: Discover DibaTech Academy",
    date: "Aug 28, 2025",
    location: "Lagos Campus",
    type: "On-campus",
    description: "Tour our campus, meet faculty, and learn about programs."
  },
  {
    slug: "webinar-sept-2025",
    title: "Webinar: Careers in Tech",
    date: "Sept 10, 2025",
    location: "Online",
    type: "Online",
    description: "Join our expert panel to explore tech career paths."
  }
];

export default function EventsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Events</h1>
      <p className="text-lg mb-8 text-gray-700">See upcoming open days, webinars, and campus events at DibaTech Academy.</p>

      {/* Event Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {events.map(e => (
          <div key={e.slug} className="border rounded-2xl p-6 shadow bg-white flex flex-col justify-between">
            <div>
                <img src="/path/to/hero-students.png" alt={e.title} className="mb-4 rounded" />
              <h3 className="font-semibold text-xl mb-2">{e.title}</h3>
              <div className="text-sm text-gray-600 mb-2">{e.date} · {e.location} · {e.type}</div>
              <p className="text-gray-700 mb-2">{e.description}</p>
            </div>
            <div className="flex gap-2 mt-4">
              <Link href={`/events/${e.slug}`} className="rounded-2xl px-4 py-2 bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700">View Details</Link>
              <a href="#register" className="rounded-2xl px-4 py-2 bg-black text-white text-sm font-semibold shadow hover:bg-gray-800">Register</a>
            </div>
          </div>
        ))}
      </div>

      {/* Calendar Placeholder */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center mt-12">
        <h3 className="text-xl font-bold mb-2">Event Calendar</h3>
        <p className="mb-4">Check back for more events and webinars throughout the year.</p>
      </div>
    </section>
  );
}
