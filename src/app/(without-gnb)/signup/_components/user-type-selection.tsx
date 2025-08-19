import { UserRole } from "@/app/_model/user";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface UserTypeSelectionProps {
  onSelect: (type: UserRole) => void;
}

export function UserTypeSelection({ onSelect }: UserTypeSelectionProps) {
  const [pendingType, setPendingType] = useState<UserRole | null>(null);

  const handleSelect = (type: UserRole) => {
    setPendingType(type);
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-semibold pt-10 text-gray-950 text-[28px] whitespace-pre-line">{`만나서 반갑습니다! \n어떤 유형으로 가입하시나요?`}</h1>
      <button
        onClick={() => handleSelect(UserRole.Company)}
        className={cn(
          "p-6 border font-semibold rounded-[10px] text-base transition-all text-left",
          pendingType === UserRole.Company
            ? "border-primary"
            : "border-gray-300 hover:border-primary/50"
        )}
      >
        <div className="text-lg font-medium text-gray-900">기업 회원</div>
        <div className="text-sm text-gray-600 mt-2">
          프로젝트를 의뢰하고 아티스트와 협업하세요
        </div>
      </button>

      <button
        onClick={() => handleSelect(UserRole.Artist)}
        className={cn(
          "p-6 border font-semibold rounded-[10px] text-base transition-all text-left",
          pendingType === UserRole.Artist
            ? "border-primary"
            : "border-gray-300 hover:border-primary/50"
        )}
      >
        <div className="text-lg font-medium text-gray-900">아티스트</div>
        <div className="text-sm text-gray-600 mt-2">
          작품을 공유하고 프로젝트 기회를 찾아보세요
        </div>
      </button>

      <Button
        variant="brand"
        disabled={!pendingType}
        size="lg"
        className="w-full"
        onClick={() => {
          if (pendingType) {
            onSelect(pendingType);
          }
        }}
      >
        다음
      </Button>
    </div>
  );
}
