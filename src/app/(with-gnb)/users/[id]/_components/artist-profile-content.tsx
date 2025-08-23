import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProfileField from "./profile-field";
import SectionHeader from "./section-header";
import { Separator } from "@/components/ui/separator";
import { User, isArtist } from "@/app/_models/user";

const PROFILE_FIELDS = [
  { key: "artistName" as const, label: "아티스트명", required: true },
  { key: "introduction" as const, label: "소개글", required: true },
  {
    key: "representativeField" as const,
    label: "대표 분야",
    required: true,
  },
  {
    key: "mainActivityField" as const,
    label: "주요 활동 분야",
    required: true,
  },
  { key: "subActivityField" as const, label: "세부 활동 분야", required: true },
  {
    key: "detailActivityField" as const,
    label: "상세 활동 분야",
    required: true,
  },
  { key: "activityLocation" as const, label: "활동 지역", required: true },
  { key: "workingMethod" as const, label: "진행 방식", required: true },
  {
    key: "availableContactTime" as const,
    label: "연락 가능 시간",
    required: true,
  },
] as const;

interface UserProfileContentProps {
  user: User;
  isMe: boolean;
  isEditMode?: boolean;
  onUserChange?: (user: User) => void;
  onSave?: () => void;
  onCancel?: () => void;
}

export default function ArtistProfileContent({
  user,
  isMe = false,
  isEditMode = false,
  onUserChange,
  onSave,
  onCancel,
}: UserProfileContentProps) {
  const [contactValue, setContactValue] = useState(
    isArtist(user) ? user.profile.contact : "미입력"
  );

  const handleFieldChange = (field: string, value: string) => {
    if (onUserChange && isArtist(user)) {
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
            value={isArtist(user) ? user.profile[field.key] : ""}
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

      {!isEditMode && isArtist(user) && user.profile.portfolio && (
        <>
          <Separator />

          {/* 포트폴리오 섹션 */}
          <div className="flex flex-col">
            <SectionHeader title="포트폴리오" />
            <div className="space-y-2">
              {user.profile.portfolio.representativeImages.map((image, index) => (
                <div key={index} className="py-2">
                  <img src={image} alt={`포트폴리오 ${index + 1}`} className="w-full h-auto" />
                </div>
              ))}
              {user.profile.portfolio.portfolioUrl && (
                <div className="py-2">
                  <a href={user.profile.portfolio.portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    포트폴리오 링크
                  </a>
                </div>
              )}
            </div>
            <Button variant={"outline"} size={"md"} className="mt-6">
              포트폴리오 추가하기
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
