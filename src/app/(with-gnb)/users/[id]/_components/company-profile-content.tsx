import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserProfileContentProps } from "../types";
import ProfileField from "./profile-field";
import SectionHeader from "./section-header";
import { Separator } from "@/components/ui/separator";
import { User, isCorporate } from "@/app/_models/user";

const PROFILE_FIELDS = [
  { key: "companyName" as const, label: "기업명", required: true },
  { key: "companyType" as const, label: "기업 형태", required: true },
  { key: "businessSize" as const, label: "기업 규모", required: true },
  { key: "introduction" as const, label: "소개글", required: true },
] as const;

export default function CompanyProfileContent({
  user,
  isMe = false,
  isEditMode = false,
  onUserChange,
  onSave,
  onCancel,
}: UserProfileContentProps) {
  const [contactValue, setContactValue] = useState("미입력");

  const handleFieldChange = (field: string, value: string) => {
    if (onUserChange && isCorporate(user)) {
      onUserChange({
        ...user,
        profile: {
          ...user.profile,
          [field]: value,
        },
      });
    }
  };
  return (
    <div className="flex flex-col gap-[40px]">
      <SectionHeader title="내 정보" />

      <div className="flex flex-col gap-[40px]">
        {PROFILE_FIELDS.map((field) => (
          <ProfileField
            key={field.key}
            label={field.label}
            value={isCorporate(user) ? String(user.profile[field.key]) : ""}
            required={isEditMode && field.required}
            isEditMode={isEditMode}
            onChange={(value) => handleFieldChange(field.key, value)}
          />
        ))}

        {/* 연락처 */}
        <ProfileField
          label="연락처"
          value={contactValue}
          required={isEditMode}
          isEditMode={isEditMode}
          onChange={setContactValue}
        />
      </div>

      {/* 저장/취소 버튼 */}
      {isMe &&
        (isEditMode ? (
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              variant="outline"
              size={"md"}
              onClick={onCancel}
              className="text-gray-600"
            >
              취소
            </Button>
            <Button variant="brand" size={"md"} onClick={onSave}>
              저장하기
            </Button>
          </div>
        ) : (
          <Button variant={"outline"} size={"md"} className="mt-6">
            프로필 변경하기
          </Button>
        ))}

      {!isEditMode && isCorporate(user) && user.profile.representativeImages && (
        <>
          <Separator />

          {/* 대표 이미지 섹션 */}
          <div className="flex flex-col">
            <SectionHeader title="기업 대표 이미지" />
            <div className="space-y-2">
              {user.profile.representativeImages.map((image, index) => (
                <div key={index} className="py-2">
                  <img src={image} alt={`대표 이미지 ${index + 1}`} className="w-full h-auto" />
                </div>
              ))}
            </div>
            <Button variant={"outline"} size={"md"} className="mt-6">
              이미지 추가하기
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
