import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function FilterSection({ title, isExpanded, onToggle, children }: FilterSectionProps) {
  return (
    <div className="mb-6">
      <button 
        onClick={onToggle}
        className="flex items-center justify-between w-full py-2 font-medium"
      >
        {title}
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isExpanded && (
        <div className="mt-3 pl-4">
          <div className="space-y-2">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

interface FilterOptionProps {
  label: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function FilterOption({ label, checked, onCheckedChange }: FilterOptionProps) {
  return (
    <label className="flex items-center space-x-2">
      <Checkbox 
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange?.(!!checked)}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}