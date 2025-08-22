import CompanyCard from "./company-card";
import SectionHeader from "./section-header";
import { SECTIONS } from "../_constants/home";

export default function CompaniesSection() {
  const { title, buttonText, buttonWidth } = SECTIONS.COMPANIES;

  return (
    <section className="pt-[120px] w-full">
      <SectionHeader
        title={title}
        buttonText={buttonText}
        buttonWidth={buttonWidth}
      />
      <div className="grid grid-cols-2 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <CompanyCard key={index} />
        ))}
      </div>
    </section>
  );
}