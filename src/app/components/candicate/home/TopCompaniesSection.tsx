import { CompanyCard } from "@/app/components/candicate/home/CompanyCard";

export default function TopCompaniesSection() {
  return (
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
  );
}
