import { Button } from "@/components/ui/button";

interface SectionHeaderProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonWidth: string;
}

export default function SectionHeader({ 
  title, 
  description, 
  buttonText, 
  buttonWidth 
}: SectionHeaderProps) {
  return (
    <div className="mb-8 flex items-end justify-between">
      <div className="flex flex-col gap-2">
        <h2 className="text-[28px] font-semibold">{title}</h2>
        {description && (
          <p className="text-gray-600 whitespace-pre-line">
            {`"${description}"`}
          </p>
        )}
      </div>
      <Button
        variant="outline"
        className={`${buttonWidth} rounded-[100px] font-semibold text-base py-[10px]`}
      >
        {buttonText}
      </Button>
    </div>
  );
}