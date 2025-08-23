import { RadioGroupItem } from "@/components/ui/radio-group";

interface RadioFilterOptionProps {
  label: string;
  value: string;
}

export function RadioFilterOption({ label, value }: RadioFilterOptionProps) {
  return (
    <div className="flex items-center space-x-6 w-full h-12 px-4">
      <RadioGroupItem value={value} id={value} />
      <label htmlFor={value} className="text-gray-800 cursor-pointer flex-1">
        {label}
      </label>
    </div>
  );
}
