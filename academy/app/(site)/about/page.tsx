export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">About DibaTech Academy</h1>
      <p className="text-lg mb-8 text-gray-700">DibaTech Academy is Nigeria’s leading tech school, dedicated to transforming careers through hands-on, industry-aligned education and career support.</p>

      <div className="mb-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-700 mb-4">Empower students to build real-world tech skills, launch successful careers, and drive innovation in Africa and beyond.</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Project-based learning</li>
            <li>Expert faculty & mentors</li>
            <li>Career placement & support</li>
            <li>Inclusive, accessible education</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Quick Facts</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Founded: 2022</li>
            <li>Students: 500+ graduates</li>
            <li>Programs: 6 tracks</li>
            <li>Partners: 100+ companies</li>
            <li>Locations: Lagos & online</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-bold mb-2">Our Story</h2>
        <p className="text-gray-700">Founded to bridge the gap between education and industry, DibaTech Academy brings together top instructors, modern curriculum, and real career outcomes. Our alumni work at leading tech companies across Nigeria and globally.</p>
      </div>

      <div className="bg-blue-50 rounded-2xl p-8 text-center mt-12">
        <h3 className="text-xl font-bold mb-2">Meet our faculty, partners, and leadership</h3>
        <div className="flex justify-center gap-4">
          <a href="/about/faculty" className="rounded-2xl px-6 py-3 bg-blue-600 text-white font-semibold shadow">Faculty Directory</a>
          <a href="/about/partners" className="rounded-2xl px-6 py-3 bg-black text-white font-semibold shadow">Partners</a>
          <a href="/about/leadership" className="rounded-2xl px-6 py-3 bg-gray-100 text-black font-semibold shadow">Leadership</a>
        </div>
      </div>
    </section>
  );
}
