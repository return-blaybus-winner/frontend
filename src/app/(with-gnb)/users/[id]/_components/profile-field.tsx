import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ProfileFieldProps {
  label: string;
  value: string;
  required?: boolean;
  isEditMode?: boolean;
  onChange?: (value: string) => void;
}

export default function ProfileField({
  label,
  value,
  required = false,
  isEditMode = false,
  onChange,
}: ProfileFieldProps) {
  return (
    <div>
      <Label className="text-[18px] font-semibold text-gray-900 mb-2 block">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      {isEditMode ? (
        <Input
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full"
        />
      ) : (
        <div className="font-medium text-gray-700">{value}</div>
      )}
    </div>
  );
}
