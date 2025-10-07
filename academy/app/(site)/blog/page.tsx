import Link from "next/link";

export const metadata = {
  title: "Blog & News · DibaTech Academy",
  description: "Latest updates, tech insights, student success stories, and industry news from DibaTech Academy Nigeria.",
  keywords: "tech education blog Nigeria, programming tutorials, student success stories, tech industry news Lagos"
};

export default function BlogPage() {
  const posts = [
    {
      title: "5 Reasons Why Tech Education is the Future in Nigeria",
      excerpt: "Discover why investing in tech education is crucial for Nigeria's economic growth and your career prospects.",
      date: "October 2024",
      slug: "tech-education-future-nigeria"
    },
    {
      title: "Student Success Story: From Zero to Software Engineer in 6 Months",
      excerpt: "Read how Sarah transformed her career from sales to software engineering through our intensive program.",
      date: "September 2024",
      slug: "success-story-sarah-software-engineer"
    },
    {
      title: "Data Analytics: The Most In-Demand Skill in Nigeria's Job Market",
      excerpt: "Learn why data analytics skills are becoming essential across all industries in Nigeria.",
      date: "September 2024",
      slug: "data-analytics-demand-nigeria"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Blog & News</h1>
      <p className="text-lg text-gray-700 mb-12">
        Stay updated with the latest in tech education, industry insights, and success stories from our community.
      </p>

      {/* Featured Posts */}
      <div className="grid gap-8 mb-12">
        {posts.map((post, index) => (
          <article key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="text-sm text-gray-500 mb-2">{post.date}</div>
            <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:underline">
              Read More →
            </Link>
          </article>
        ))}
      </div>

      {/* Categories */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Popular Topics</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Career Change</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Programming Tips</span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Industry Insights</span>
          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Student Stories</span>
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Tech Trends</span>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-50 rounded-lg p-8 text-center mt-12">
        <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
        <p className="mb-6 text-gray-700">Get the latest posts and academy updates delivered to your inbox.</p>
        <div className="flex gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}