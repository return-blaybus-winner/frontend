import { CheckboxFilterOption } from "@/app/(with-gnb)/projects/_components/checkbox-filter-option";
import { LOCATION_OPTIONS } from "@/app/(with-gnb)/projects/_constants/projects";
import { useRouter, useSearchParams } from "next/navigation";

export default function LocationFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locationParam = searchParams.get("projectRegion") || "";
  const locationParams = locationParam ? locationParam.split(",") : [];

  const handleLocationSelect = (code: string) => {
    const params = new URLSearchParams(searchParams);

    if (locationParams.includes(code)) {
      const updatedLocations = locationParams.filter(
        (location) => location !== code
      );
      if (updatedLocations.length > 0) {
        params.set("projectRegion", updatedLocations.join(","));
      } else {
        params.delete("projectRegion");
      }
    } else {
      const updatedLocations = [...locationParams, code];
      params.set("projectRegion", updatedLocations.join(","));
    }

    const url = `?${params.toString()}`.replace(/%2C/g, ",");
    router.push(url, {
      scroll: false,
    });
  };

  const isLocationSelected = (code: string) => locationParams.includes(code);

  return (
    <>
      {LOCATION_OPTIONS.map((option) => (
        <CheckboxFilterOption
          key={option.code}
          label={option.description}
          checked={isLocationSelected(option.code)}
          onCheckedChange={() => handleLocationSelect(option.code)}
        />
      ))}
    </>
  );
}
