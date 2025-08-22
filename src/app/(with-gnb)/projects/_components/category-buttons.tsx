import { CATEGORIES } from "../_constants/projects";

interface CategoryButtonsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryButtons({ activeCategory, onCategoryChange }: CategoryButtonsProps) {
  return (
    <div className="flex bg-gray-100 rounded-lg p-1">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-3 py-1 text-sm rounded ${
            activeCategory === category
              ? "bg-black text-white"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}