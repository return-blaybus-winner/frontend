import MatchedProjectCard from "./matched-project-card";
import SectionHeader from "./section-header";
import { SECTIONS } from "../_constants/home";
import { MOCK_PROJECT_DATA } from "../_constants/mock-data";

export default function MatchedProjectsSection() {
  const { title, description, buttonText, buttonWidth } = SECTIONS.MATCHED_PROJECTS;

  return (
    <section className="pt-[120px]">
      <SectionHeader
        title={title}
        description={description}
        buttonText={buttonText}
        buttonWidth={buttonWidth}
      />
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <MatchedProjectCard
            key={index}
            project={{
              ...MOCK_PROJECT_DATA,
              liked: index % 2 === 1,
            }}
          />
        ))}
      </div>
    </section>
  );
}