export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Contact DibaTech Academy</h1>
      <div className="mb-8">
        <p className="mb-2">Email: <a href="mailto:academy@dibatech.ng" className="text-blue-600">academy@dibatech.ng</a></p>
        <p className="mb-2">Address: Lagos, Nigeria</p>
        <p className="mb-2">Office hours: Mon–Fri, 9am–5pm</p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">WhatsApp</h3>
          <p className="text-gray-600">+234 913 670 1855</p>
          <a href="https://wa.me/2349136701855" className="text-blue-600 hover:underline">
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Inquiry Form */}
      <form className="bg-blue-50 rounded-2xl p-8 mb-8">
        <h2 className="text-xl font-bold mb-4">Request Info / Inquiry Form</h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input type="text" className="w-full rounded-lg border px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input type="email" className="w-full rounded-lg border px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Phone (optional)</label>
          <input type="tel" className="w-full rounded-lg border px-3 py-2" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Interest</label>
          <select className="w-full rounded-lg border px-3 py-2">
            <option value="">Select</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea className="w-full rounded-lg border px-3 py-2" rows={3}></textarea>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" required className="mr-2" /> I consent to DibaTech Academy contacting me (NDPR)
          </label>
        </div>
        <button type="submit" className="rounded-2xl px-6 py-3 bg-blue-600 text-white font-semibold shadow">Submit</button>
      </form>

      {/* Map Placeholder */}
      <div className="bg-gray-100 rounded-2xl p-8 text-center">
        <h3 className="text-lg font-bold mb-2">Find Us</h3>
        <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">Map Placeholder</div>
      </div>
    </section>
  );
}
