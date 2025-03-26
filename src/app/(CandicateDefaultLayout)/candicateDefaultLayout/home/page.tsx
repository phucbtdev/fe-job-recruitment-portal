import { CategoryCard } from "@/app/components/layouts/Header/CategoryCard";
import { CompanyCard } from "@/app/components/layouts/Header/CompanyCard";
import { JobCard } from "@/app/components/layouts/Header/JobCard";
import {
  SearchIcon,
  BriefcaseIcon,
  BuildingIcon,
  UsersIcon,
  ArrowRightIcon,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="bg-blue-600 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Dream Job Today
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover thousands of job opportunities with top employers to find
            your perfect match.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <SearchIcon className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <BuildingIcon className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
              </div>
            </div>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold">
              Search Jobs
            </button>
          </div>
        </div>
      </section>
      {/* Featured Jobs Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Featured Jobs</h2>
            <a
              href="#"
              className="text-blue-600 flex items-center hover:text-blue-800 font-medium"
            >
              View all jobs <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <JobCard
              title="Senior Frontend Developer"
              company="TechCorp"
              location="San Francisco, CA"
              salary="$120K - $150K"
              type="Full-time"
              logo="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              tags={["React", "TypeScript", "Tailwind"]}
              isNew={true}
            />
            <JobCard
              title="Product Manager"
              company="InnovateCo"
              location="New York, NY"
              salary="$110K - $140K"
              type="Full-time"
              logo="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              tags={["Agile", "SaaS", "B2B"]}
            />
            <JobCard
              title="UX/UI Designer"
              company="DesignHub"
              location="Remote"
              salary="$90K - $120K"
              type="Full-time"
              logo="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              tags={["Figma", "UX Research", "Design Systems"]}
              isNew={true}
            />
            <JobCard
              title="DevOps Engineer"
              company="CloudSys"
              location="Austin, TX"
              salary="$130K - $160K"
              type="Full-time"
              logo="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              tags={["AWS", "Docker", "Kubernetes"]}
            />
            <JobCard
              title="Marketing Specialist"
              company="GrowthLabs"
              location="Chicago, IL"
              salary="$70K - $90K"
              type="Full-time"
              logo="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              tags={["SEO", "Content Marketing", "Analytics"]}
            />
            <JobCard
              title="Data Scientist"
              company="DataDrive"
              location="Remote"
              salary="$115K - $145K"
              type="Full-time"
              logo="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              tags={["Python", "Machine Learning", "SQL"]}
              isNew={true}
            />
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore job opportunities by industry or role to find the perfect
              position that matches your skills and interests.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CategoryCard
              icon={<BriefcaseIcon />}
              name="Technology"
              count={1420}
            />
            <CategoryCard icon={<BuildingIcon />} name="Finance" count={870} />
            <CategoryCard icon={<UsersIcon />} name="Marketing" count={650} />
            <CategoryCard
              icon={<BriefcaseIcon />}
              name="Healthcare"
              count={930}
            />
            <CategoryCard
              icon={<BuildingIcon />}
              name="Education"
              count={540}
            />
            <CategoryCard icon={<UsersIcon />} name="Design" count={320} />
            <CategoryCard icon={<BriefcaseIcon />} name="Sales" count={760} />
            <CategoryCard
              icon={<BuildingIcon />}
              name="Customer Service"
              count={490}
            />
          </div>
        </div>
      </section>
      {/* Top Companies Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Top Companies Hiring
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join these industry-leading organizations that are changing the
              world and building amazing teams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CompanyCard
              idCompany={1}
              name="TechCorp"
              logo="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              industry="Technology"
              location="San Francisco, CA"
              openings={24}
            />
            <CompanyCard
              idCompany={2}
              name="InnovateCo"
              logo="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              industry="SaaS"
              location="New York, NY"
              openings={18}
            />
            <CompanyCard
              idCompany={3}
              name="DesignHub"
              logo="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              industry="Design"
              location="Remote"
              openings={12}
            />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to take the next step in your career?
            </h2>
            <p className="text-blue-100 mb-6">
              Join thousands of job seekers who found their dream job through
              our platform.
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
                Find the perfect candidates for your open positions and build
                your dream team.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
