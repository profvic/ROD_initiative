

export default function Events() {
  const projects = [
    {
      title: "Clean Water Initiative",
      image: "/event1.png",
      description: "Providing clean water access to remote communities through sustainable infrastructure.",
    },
    {
      title: "Education for All",
      image: "/event2.png",
      description: "Supporting education initiatives and building schools in underserved areas.",
    },
    {
      title: "Healthcare Access",
      image: "/event3.png",
      description: "Improving healthcare accessibility through mobile clinics and medical supplies.",
    },
  ];

  return (
    <section id="events" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Past/Upcomming Events</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}