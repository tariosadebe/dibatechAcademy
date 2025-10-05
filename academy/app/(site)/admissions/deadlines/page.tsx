export default function DeadlinesPage() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">All Application Deadlines</h1>
      <table className="w-full mb-6 border rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">Cohort</th>
            <th className="py-2 px-4 text-left">Application Deadline</th>
            <th className="py-2 px-4 text-left">Start Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">August 2025</td>
            <td className="py-2 px-4">Aug 20, 2025</td>
            <td className="py-2 px-4">Aug 28, 2025</td>
          </tr>
          <tr>
            <td className="py-2 px-4">September 2025</td>
            <td className="py-2 px-4">Sept 5, 2025</td>
            <td className="py-2 px-4">Sept 10, 2025</td>
          </tr>
        </tbody>
      </table>
      <p>
        Please note that deadlines may vary by program. Early applications are encouraged as spaces are limited.
      </p>
    </section>
  );
}