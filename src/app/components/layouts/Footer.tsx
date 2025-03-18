export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">JobBoard</h3>
            <p className="mb-4">
              Find your dream job and connect with top employers around the
              world.
            </p>
          </div>
          <div>
            <h4 className="text-white text-md font-semibold mb-4">
              For Job Seekers
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Browse Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Browse Companies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Salary Calculator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Career Advice
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-md font-semibold mb-4">
              For Employers
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Post a Job
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Browse Resumes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Recruiting Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} JobBoard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
