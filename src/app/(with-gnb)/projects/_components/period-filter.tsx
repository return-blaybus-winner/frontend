import { RadioFilterOption } from "@/app/(with-gnb)/projects/_components/radio-filter-option";
import { RadioGroup } from "@/components/ui/radio-group";
import { DURATION_OPTIONS } from "@/app/(with-gnb)/projects/_constants/projects";
import { useRouter, useSearchParams } from "next/navigation";

export default function PeriodFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const periodParam = searchParams.get("period") || "";

  const handlePeriodChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("period", value);
    } else {
      params.delete("period");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <RadioGroup value={periodParam} onValueChange={handlePeriodChange}>
      {DURATION_OPTIONS.map((option) => (
        <RadioFilterOption
          key={option.value}
          label={option.label}
          value={option.value}
        />
      ))}
    </RadioGroup>
  );
}
