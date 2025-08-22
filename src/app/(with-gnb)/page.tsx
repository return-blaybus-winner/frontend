import Container from "@/app/_components/container";
import HeroSection from "./_components/hero-section";
import CategoryGrid from "./_components/category-grid";
import ProjectRecommendationsSection from "./_components/project-recommendations-section";
import MatchedProjectsSection from "./_components/matched-projects-section";
import StatisticsSection from "./_components/statistics-section";
import CompaniesSection from "./_components/companies-section";

export default async function Home() {
  return (
    <Container className="items-center">
      <HeroSection />
      <CategoryGrid />
      <ProjectRecommendationsSection />
      <MatchedProjectsSection />
      <StatisticsSection />
      <CompaniesSection />
    </Container>
  );
}
