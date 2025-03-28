export default function CTASection() {
  return (
    <section className="bg-blue-600 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to take the next step in your career?
          </h2>
          <p className="text-blue-100 mb-6">
            Join thousands of job seekers who found their dream job through our
            platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-600 py-3 px-6 rounded-md hover:bg-blue-50 transition-colors duration-300 font-semibold">
              Upload Your Resume
            </button>
            <button className="bg-transparent text-white py-3 px-6 rounded-md border border-white hover:bg-blue-700 transition-colors duration-300 font-semibold">
              Browse All Jobs
            </button>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              For Employers
            </h3>
            <p className="text-gray-600 mb-6">
              Find the perfect candidates for your open positions and build your
              dream team.
            </p>
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold">
              Post a Job
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
