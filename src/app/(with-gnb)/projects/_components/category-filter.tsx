"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Category } from "@/app/_models/category";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoryFilterProps {
  categories: Category[];
  paramName: "artCategories" | "projectCategories";
}
export default function CategoryFilter({
  categories,
  paramName,
}: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get(paramName) || "";
  const categoryParams = categoryParam ? categoryParam.split(",") : [];

  const handleCategorySelectAll = (category: Category) => {
    const newParams = new URLSearchParams(searchParams);

    const childrenCategories = category.children.map(
      (subcategory) => subcategory.code
    );

    const allCategoryCodes = [category.code, ...childrenCategories];
    const isAllSelected = allCategoryCodes.every((code) =>
      categoryParams.includes(code)
    );

    let updatedCategories;
    if (isAllSelected) {
      updatedCategories = categoryParams.filter(
        (code) => !allCategoryCodes.includes(code)
      );
    } else {
      updatedCategories = [
        ...categoryParams,
        ...allCategoryCodes.filter((code) => !categoryParams.includes(code)),
      ];
    }

    if (updatedCategories.length > 0) {
      newParams.set(paramName, updatedCategories.join(","));
    } else {
      newParams.delete(paramName);
    }

    const url = `?${newParams.toString()}`.replace(/%2C/g, ",");
    router.push(url, {
      scroll: false,
    });
  };

  const handleCategorySelect = (code: string) => {
    const params = new URLSearchParams(searchParams);

    if (categoryParams.includes(code)) {
      const updatedCategories = categoryParams.filter((cat) => cat !== code);
      if (updatedCategories.length > 0) {
        params.set(paramName, updatedCategories.join(","));
      } else {
        params.delete(paramName);
      }
    } else {
      const updatedCategories = [...categoryParams, code];
      params.set(paramName, updatedCategories.join(","));
    }

    const url = `?${params.toString()}`.replace(/%2C/g, ",");
    router.push(url, {
      scroll: false,
    });
  };

  const isCategoryAllSelected = (category: Category) =>
    [category, ...category.children].every((subcategory) =>
      categoryParams.includes(subcategory.code)
    );

  const isCategorySelected = (code: string) => categoryParams.includes(code);

  const getParent = (code: string) => {
    return categories.find((category) =>
      category.children.some((child) => child.code === code)
    );
  };

  const computedValues = () => {
    const newValues = [...categoryParams];

    categoryParams.forEach((code) => {
      const parent = getParent(code);
      if (parent && !newValues.includes(parent.code)) {
        newValues.push(parent.code);
      }
    });

    return newValues;
  };

  return (
    <Accordion type="multiple" defaultValue={computedValues()}>
      {categories.map((category) => (
        <AccordionItem
          key={category.code}
          value={category.code}
          className="border-0"
        >
          <div className="inline-flex w-full items-center space-x-6 px-4">
            <Checkbox
              checked={isCategoryAllSelected(category)}
              onCheckedChange={() => handleCategorySelectAll(category)}
              onClick={(e) => e.stopPropagation()}
            />
            <AccordionTrigger
              className={`flex justify-between hover:no-underline`}
            >
              <span className="text-gray-800 flex-1">
                {category.description}
              </span>
            </AccordionTrigger>
          </div>
          <AccordionContent className="mt-2 bg-gray-200 pb-0">
            {category.children.map((subcategory) => (
              <label
                key={subcategory.code}
                className="flex items-center space-x-6 h-12 px-4"
              >
                <Checkbox
                  checked={isCategorySelected(subcategory.code)}
                  onCheckedChange={() => handleCategorySelect(subcategory.code)}
                  className="border-[#999999] data-[state=checked]:bg-[#999999] data-[state=checked]:text-white"
                />
                <span className="text-gray-700">{subcategory.description}</span>
              </label>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
