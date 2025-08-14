export async function getFaculty() {
  // Replace with CMS later
  return [
    { slug: "jane-doe", name: "Jane Doe", role: "Lead Instructor", expertise: ["Software Engineering", "Web Development"] },
    { slug: "john-smith", name: "John Smith", role: "Data Analytics Instructor", expertise: ["Data Analytics", "SQL"] }
  ];
}

export async function getFacultyDetail(slug: string) {
  // Replace with CMS later
  if (slug === "jane-doe") {
    return {
      name: "Jane Doe",
      role: "Lead Instructor",
      expertise: ["Software Engineering", "Web Development"],
      bio: "Jane has 10+ years experience building scalable web applications and mentoring new engineers.",
      courses: ["Software Engineering Diploma"],
      social: { linkedin: "https://linkedin.com/in/janedoe" }
    };
  }
  if (slug === "john-smith") {
    return {
      name: "John Smith",
      role: "Data Analytics Instructor",
      expertise: ["Data Analytics", "SQL"],
      bio: "John specializes in data analysis and visualization, helping students master SQL and dashboards.",
      courses: ["Data Analytics Certificate"],
      social: { linkedin: "https://linkedin.com/in/johnsmith" }
    };
  }
  return null;
}
export async function getPrograms() {
  // Replace with CMS later
  return [
    { slug: "software-engineering", title: "Software Engineering Diploma", summary: "Build production-ready apps with modern stacks.", duration: "6 months", mode: "Hybrid" },
    { slug: "data-analytics", title: "Data Analytics Certificate", summary: "From spreadsheets to SQL & dashboards.", duration: "3 months", mode: "Online" }
  ];
}

export async function getProgramDetail(slug: string) {
  // Replace with CMS later
  if (slug === "software-engineering") {
    return {
      title: "Software Engineering Diploma",
      level: "Diploma",
      mode: "Hybrid",
      duration: "6 months",
      valueBullets: [
        "Build production-ready apps with modern stacks.",
        "Project-based curriculum.",
        "Career support and placement."
      ],
      prerequisites: "Basic computer literacy."
    };
  }
  if (slug === "data-analytics") {
    return {
      title: "Data Analytics Certificate",
      level: "Certificate",
      mode: "Online",
      duration: "3 months",
      valueBullets: [
        "From spreadsheets to SQL & dashboards.",
        "Hands-on projects.",
        "Industry mentors."
      ],
      prerequisites: "No prior experience required."
    };
  }
  return null;
}
