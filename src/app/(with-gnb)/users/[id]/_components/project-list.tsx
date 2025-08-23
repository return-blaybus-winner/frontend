import CategoryButton from "@/app/(with-gnb)/_components/category-button";
import CategoryButtons from "@/app/(with-gnb)/users/[id]/_components/category-buttons";
import React, { useState } from "react";

const CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "pending", label: "매칭 대기중" },
  { id: "completed", label: "매칭 완료" },
  { id: "liked", label: "찜한 프로젝트" },
];

export default function ProjectList() {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <div>
      <CategoryButtons
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
    </div>
  );
}
