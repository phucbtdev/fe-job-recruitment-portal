import { JobCard } from "@/app/components/candicate/home/JobCard";
import { ArrowRightIcon } from "lucide-react";

export default function FeatureJob() {
  return (
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
  );
}
