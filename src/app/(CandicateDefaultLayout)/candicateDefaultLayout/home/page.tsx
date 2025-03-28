import Banner from "@/app/components/candicate/home/Banner";
import CategorySection from "@/app/components/candicate/home/CategorySection";
import CTASection from "@/app/components/candicate/home/CTASection";
import FeatureJob from "@/app/components/candicate/home/FeatureJob";
import JobSearch from "@/app/components/candicate/home/JobSearch";
import TopCompaniesSection from "@/app/components/candicate/home/TopCompaniesSection";

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <Banner />
      {/* Job Search Section */}
      <JobSearch />
      {/* Feature Job Section */}
      <FeatureJob />
      {/* Categories Section */}
      <CategorySection />
      {/* Top Companies Section */}
      <TopCompaniesSection />
      {/* CTA Section */}
      <CTASection />
    </>
  );
}
