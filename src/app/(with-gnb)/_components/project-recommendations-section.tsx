import ProjectCard from "./project-card";
import SectionHeader from "./section-header";
import { SECTIONS } from "../_constants/home";
import { MOCK_PROJECT_DATA } from "../_constants/mock-data";

export default function ProjectRecommendationsSection() {
  const { title, description, buttonText, buttonWidth } =
    SECTIONS.PROJECT_RECOMMENDATIONS;

  return (
    <section className="pt-[137px] w-full">
      <SectionHeader
        title={title}
        description={description}
        buttonText={buttonText}
        buttonWidth={buttonWidth}
      />
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <ProjectCard
            key={index}
            project={{
              ...MOCK_PROJECT_DATA,
              liked: index % 2 === 0,
            }}
            className="shadow-card"
          />
        ))}
      </div>
    </section>
  );
}
