import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserProfileContentProps, UserProfile } from "../types";
import ProfileField from "./profile-field";
import SectionHeader from "./section-header";

const PROFILE_FIELDS = [
  { key: "nickname" as const, label: "닉네임", required: true },
  { key: "introduction" as const, label: "소개글", required: true },
  {
    key: "collaborationField" as const,
    label: "관심 협업 분야",
    required: true,
  },
  { key: "activityArea" as const, label: "활동 지역", required: true },
  { key: "projectMethod" as const, label: "진행 방식", required: true },
  { key: "workableTime" as const, label: "연락 가능 시간", required: true },
] as const;

export default function ProfileContent({ 
  user, 
  isMe = false, 
  isEditMode = false, 
  onUserChange, 
  onSave, 
  onCancel 
}: UserProfileContentProps) {
  const [contactValue, setContactValue] = useState("미입력");

  const handleFieldChange = (field: keyof UserProfile, value: string) => {
    if (onUserChange) {
      onUserChange({
        ...user,
        [field]: value
      });
    }
  };
  return (
    <div className="space-y-6">
      <SectionHeader title="내 정보" />

      <div className="space-y-6">
        {PROFILE_FIELDS.map((field) => (
          <ProfileField
            key={field.key}
            label={field.label}
            value={user[field.key]}
            required={field.required}
            isEditMode={isEditMode}
            onChange={(value) => handleFieldChange(field.key, value)}
          />
        ))}

        {/* 연락처 */}
        <ProfileField 
          label="연락처" 
          value={contactValue} 
          required 
          isEditMode={isEditMode}
          onChange={setContactValue}
        />
      </div>

      {/* 저장/취소 버튼 */}
      {isEditMode && isMe && (
        <div className="flex items-center justify-end gap-4 pt-4">
          <Button 
            variant="outline" 
            onClick={onCancel}
            className="text-gray-600"
          >
            취소
          </Button>
          <Button 
            variant="brand"
            onClick={onSave}
          >
            저장
          </Button>
        </div>
      )}

      {/* 경력 섹션 */}
      <div className="pt-8 border-t border-gray-200">
        <SectionHeader title={user.career.title} />
        <div className="space-y-2">
          {user.career.items.map((item, index) => (
            <div key={index} className="py-2">
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 포트폴리오 섹션 */}
      <div className="pt-8 border-t border-gray-200">
        <SectionHeader title={user.portfolio.title} />
        <div className="space-y-2">
          {user.portfolio.items.map((item, index) => (
            <div key={index} className="py-2">
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
