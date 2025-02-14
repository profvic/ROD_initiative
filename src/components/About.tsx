


export default function About() {
  return (
    <section id="About" className="py-20 bg-green-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8">
          {/* Text Section */}
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl text-gray-600">
              At ROD Africa Initiative, our mission centers on the <br /> 
              empowerment and betterment of young Africans, <br /> 
              working tirelessly to create opportunities and drive <br /> 
              meaningful change for the youth across the continent.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-1/2">
            <img 
              src="/about.png" 
              alt="ROD Africa Initiative" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
