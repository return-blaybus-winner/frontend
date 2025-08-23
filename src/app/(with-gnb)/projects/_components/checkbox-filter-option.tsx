import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxFilterOptionProps {
  label: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function CheckboxFilterOption({
  label,
  checked,
  onCheckedChange,
}: CheckboxFilterOptionProps) {
  return (
    <label className="flex items-center space-x-6 w-full h-12 px-4">
      <Checkbox
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange?.(!!checked)}
      />
      <span className="text-gray-800">{label}</span>
    </label>
  );
}
