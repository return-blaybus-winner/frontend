import { RadioFilterOption } from "@/app/(with-gnb)/projects/_components/radio-filter-option";
import { RadioGroup } from "@/components/ui/radio-group";
import { RECRUIT_COUNT_OPTIONS } from "@/app/(with-gnb)/projects/_constants/projects";
import { useRouter, useSearchParams } from "next/navigation";

export default function RecruitNumberFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const minRecruitNumberParam = searchParams.get("minRecruitNumber") || "";
  const maxRecruitNumberParam = searchParams.get("maxRecruitNumber") || "";

  const currentValue =
    RECRUIT_COUNT_OPTIONS.find(
      (option) =>
        Number(minRecruitNumberParam) === option.min &&
        Number(maxRecruitNumberParam) === (option.max || 0)
    )?.description || "";

  const handleRecruitNumberChange = (value: string) => {
    const option = RECRUIT_COUNT_OPTIONS.find(
      (opt) => opt.description === value
    );
    const params = new URLSearchParams(searchParams);

    if (option) {
      params.set("minRecruitNumber", option.min.toString());
      if (option.max) {
        params.set("maxRecruitNumber", option.max.toString());
      } else {
        params.delete("maxRecruitNumber");
      }
    } else {
      params.delete("minRecruitNumber");
      params.delete("maxRecruitNumber");
    }

    router.push(`?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <RadioGroup value={currentValue} onValueChange={handleRecruitNumberChange}>
      {RECRUIT_COUNT_OPTIONS.map((option) => (
        <RadioFilterOption
          key={option.description}
          label={option.description}
          value={option.description}
        />
      ))}
    </RadioGroup>
  );
}
