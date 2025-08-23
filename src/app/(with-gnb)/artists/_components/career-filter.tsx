import { RadioFilterOption } from "@/app/(with-gnb)/projects/_components/radio-filter-option";
import { RadioGroup } from "@/components/ui/radio-group";
import { CAREER_OPTIONS } from "@/app/(with-gnb)/projects/_constants/projects";
import { useRouter, useSearchParams } from "next/navigation";

export default function CareerFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const careerParam = searchParams.get("career") || "";

  const handleCareerChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("career", value);
    } else {
      params.delete("career");
    }
    router.push(`?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <RadioGroup value={careerParam} onValueChange={handleCareerChange}>
      {CAREER_OPTIONS.map((option) => (
        <RadioFilterOption
          key={option.value}
          label={option.label}
          value={option.value}
        />
      ))}
    </RadioGroup>
  );
}
