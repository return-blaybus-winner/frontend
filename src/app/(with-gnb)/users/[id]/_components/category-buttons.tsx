import CategoryButton from "@/app/(with-gnb)/_components/category-button";

const CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "pending", label: "매칭 대기중" },
  { id: "completed", label: "매칭 완료" },
  { id: "liked", label: "찜한 프로젝트" },
];

interface Props {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryButtons({
  activeCategory,
  onCategoryChange,
}: Props) {
  return (
    <div className="flex gap-2 flex-wrap items-center">
      {CATEGORIES.map((category) => (
        <CategoryButton
          key={category.id}
          id={category.id}
          category={category.label}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
      ))}
    </div>
  );
}
