import ProjectList from "@/app/(with-gnb)/_components/project-list";
import { mockProjects } from "@/app/(with-gnb)/projects/_constants/mock-data";
import CategoryButtons from "@/app/(with-gnb)/users/[id]/_components/category-buttons";
import React, { useState } from "react";

interface Props {
  isArtist: boolean;
}

export default function ProjectContent({ isArtist }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <div>
      <CategoryButtons
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <div className="mt-6">
        <ProjectList projects={mockProjects} />
      </div>

      {!isArtist}
    </div>
  );
}
