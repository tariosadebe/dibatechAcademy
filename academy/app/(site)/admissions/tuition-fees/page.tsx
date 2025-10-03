export default function TuitionFeesPage() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Full Tuition & Fees</h1>
      <table className="w-full mb-6 border rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">Program</th>
            <th className="py-2 px-4 text-left">Tuition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">Standard Free Classes</td>
            <td className="py-2 px-4">Free (ID card fee only)</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Software Engineering Diploma</td>
            <td className="py-2 px-4">₦300,000</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Data Analytics Certificate</td>
            <td className="py-2 px-4">₦180,000</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Cybersecurity Bootcamp</td>
            <td className="py-2 px-4">₦250,000</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Frontend Web Development</td>
            <td className="py-2 px-4">₦120,000</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Backend Web Development</td>
            <td className="py-2 px-4">₦150,000</td>
          </tr>
          <tr>
            <td className="py-2 px-4">UI/UX Design</td>
            <td className="py-2 px-4">₦100,000</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Cloud Computing Fundamentals</td>
            <td className="py-2 px-4">₦130,000</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Product Management</td>
            <td className="py-2 px-4">₦110,000</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Digital Marketing</td>
            <td className="py-2 px-4">₦90,000</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h2 className="text-xl font-semibold mb-2">Note</h2>
        <ul className="list-disc pl-6">
          <li>Standard Free Classes require only an ID card fee, no tuition.</li>
          <li>Paid classes require tuition as indicated in the table.</li>
        </ul>
      </div>
    </section>
  );
}