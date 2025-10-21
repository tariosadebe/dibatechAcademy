import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Alumni Network · DibaTech Academy",
  description: "Connect with DibaTech Academy graduates working at top companies across Nigeria and beyond. Join our thriving alumni community.",
  keywords: "DibaTech Academy alumni, tech graduates Nigeria, alumni network Lagos, career success stories"
};

export default function AlumniPage() {
  const alumni = [
    {
      name: "Abonima Glorious",
      program: "Software Engineering",
      year: "2024",
      company: "Paystack",
      role: "Frontend Developer",
      image: "/images/Alumni/AbonimaGlorious.jpeg"
    },
    {
      name: "Akindipe Daniel Oluwaferanmi",
      program: "Data Analytics",
      year: "2024",
      company: "MTN Nigeria",
      role: "Data Analyst",
      image: "/images/Alumni/AkindipeDanielOluwaferanmiProfile.jpg"
    },
    {
      name: "Akongpeter",
      program: "Cybersecurity",
      year: "2024",
      company: "First Bank",
      role: "Security Analyst",
      image: "/images/Alumni/AkongpeterProfile.jpg"
    },
    {
      name: "Atanegbe MeroJoy",
      program: "UI/UX Design",
      year: "2024",
      company: "Flutterwave",
      role: "Product Designer",
      image: "/images/Alumni/AtanegbeMeroJoyProfile.jpg"
    },
    {
      name: "Baba Rikiyat",
      program: "Software Engineering",
      year: "2023",
      company: "Interswitch",
      role: "Backend Developer",
      image: "/images/Alumni/babaRikiyatProfile.JPG"
    },
    {
      name: "Blessing Edeme",
      program: "Data Analytics",
      year: "2023",
      company: "Nigerian Breweries",
      role: "Business Intelligence Analyst",
      image: "/images/Alumni/BlessingEdemeProfile.jpg"
    },
    {
      name: "Dami",
      program: "Software Engineering",
      year: "2024",
      company: "Kuda Bank",
      role: "Full Stack Developer",
      image: "/images/Alumni/damiProfile.jpg"
    },
    {
      name: "Emmanuel Waribo",
      program: "Cybersecurity",
      year: "2023",
      company: "GTBank",
      role: "Security Engineer",
      image: "/images/Alumni/EmmanuelWariboProfile.jpg"
    },
    {
      name: "Favour Edward",
      program: "UI/UX Design",
      year: "2024",
      company: "Andela",
      role: "Product Designer",
      image: "/images/Alumni/FavourEdwardProfile.jpeg"
    },
    {
      name: "Ifeanyi Edeme",
      program: "Data Analytics",
      year: "2024",
      company: "Jumia",
      role: "Data Scientist",
      image: "/images/Alumni/IfeanyiEdemeProfile.jpg"
    },
    {
      name: "Isaac Feranmi",
      program: "Software Engineering",
      year: "2023",
      company: "PiggyVest",
      role: "Mobile Developer",
      image: "/images/Alumni/IsaacFeranmi.jpg"
    },
    {
      name: "Lawal Adebukola",
      program: "Cybersecurity",
      year: "2024",
      company: "Zenith Bank",
      role: "Information Security Analyst",
      image: "/images/Alumni/LawalAdebukolaProfile.jpeg"
    },
    {
      name: "Okpe Maria",
      program: "UI/UX Design",
      year: "2023",
      company: "Carbon",
      role: "Senior Designer",
      image: "/images/Alumni/Okpe Maria 2.png"
    },
    {
      name: "Omajuwa Emmanuel",
      program: "Software Engineering",
      year: "2024",
      company: "Cowrywise",
      role: "Frontend Developer",
      image: "/images/Alumni/OmajuwaEmmanuelProfile.png"
    },
    {
      name: "Ozioma Chisom Gloria",
      program: "Data Analytics",
      year: "2023",
      company: "MainOne",
      role: "Business Analyst",
      image: "/images/Alumni/OziomaChisomGloriaProfile.jpg"
    },
    {
      name: "Ozioma Chizuruoke Favour",
      program: "Software Engineering",
      year: "2024",
      company: "Moniepoint",
      role: "Backend Developer",
      image: "/images/Alumni/OziomaChizuruokeFavour.jpg"
    },
    {
      name: "Precious",
      program: "UI/UX Design",
      year: "2024",
      company: "TeamApt",
      role: "Product Designer",
      image: "/images/Alumni/preciousProfile.jpeg"
    },
    {
      name: "Synthia",
      program: "Data Analytics",
      year: "2023",
      company: "Access Bank",
      role: "Data Analyst",
      image: "/images/Alumni/synthiaProfile.jpg"
    },
    {
      name: "Victor Enyidia Okedi",
      program: "Cybersecurity",
      year: "2024",
      company: "Sterling Bank",
      role: "Cybersecurity Specialist",
      image: "/images/Alumni/VictorEnyidiaOkediProfile.jpg"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Alumni Network</h1>
      <p className="text-lg text-gray-700 mb-12">
        Join a thriving community of DibaTech Academy graduates making impact across Nigeria's tech ecosystem and beyond.
      </p>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="text-center bg-blue-50 rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-600">500+</div>
          <div className="text-gray-600">Graduates</div>
        </div>
        <div className="text-center bg-green-50 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-600">85%</div>
          <div className="text-gray-600">Job Placement Rate</div>
        </div>
        <div className="text-center bg-purple-50 rounded-lg p-6">
          <div className="text-3xl font-bold text-purple-600">50+</div>
          <div className="text-gray-600">Partner Companies</div>
        </div>
        <div className="text-center bg-orange-50 rounded-lg p-6">
          <div className="text-3xl font-bold text-orange-600">₦2.5M</div>
          <div className="text-gray-600">Average Starting Salary</div>
        </div>
      </div>

      {/* Featured Alumni */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Alumni</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {alumni.map((person, index) => (
            <div key={index} className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={person.image}
                  alt={`${person.name} - DibaTech Academy Alumni`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg mb-1">{person.name}</h3>
              <p className="text-blue-600 font-medium mb-1">{person.role}</p>
              <p className="text-gray-600 mb-2">{person.company}</p>
              <p className="text-sm text-gray-500">{person.program} • Class of {person.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Alumni Benefits */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Alumni Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Lifetime Career Support</h3>
            <p className="text-gray-600 text-sm">Continued access to career services, job board, and placement assistance.</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Alumni Network Events</h3>
            <p className="text-gray-600 text-sm">Regular networking events, meetups, and professional development sessions.</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Continued Learning</h3>
            <p className="text-gray-600 text-sm">Access to new course materials, workshops, and skill updates.</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Mentorship Opportunities</h3>
            <p className="text-gray-600 text-sm">Give back by mentoring current students and new graduates.</p>
          </div>
        </div>
      </div>

      {/* Join Alumni Network */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Alumni Network</h2>
        <p className="mb-6 text-gray-700">
          Are you a DibaTech Academy graduate? Connect with fellow alumni and expand your professional network.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Register as Alumni
          </Link>
          <Link href="/programs" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
            View Programs
          </Link>
        </div>
      </div>
    </section>
  );
}