"use client";

import { useState } from "react";
import Container from "@/app/_components/container";
import UserSidebar from "./_components/user-sidebar";
import ProfileTabs from "./_components/profile-tabs";
import ProfileContent from "./_components/profile-content";
import { MOCK_USER } from "./constants";
import type { UserProfile } from "./types";
import SwitchCase from "@/components/utils/switch-case";
import ProjectContent from "@/app/(with-gnb)/users/[id]/_components/project-content";

export default function UserPage() {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState<UserProfile>(MOCK_USER);
  const user: UserProfile = MOCK_USER;

  const isMe = true;
  const isArtist = true;

  const handleEditToggle = () => {
    if (isEditMode) {
      setEditedUser(user);
    }
    setIsEditMode(!isEditMode);
  };

  const handleSave = () => {
    // TODO: API 호출로 사용자 데이터 저장
    console.log("Saving user data:", editedUser);
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditMode(false);
  };

  return (
    <Container className="mt-8">
      <div className="flex flex-col lg:flex-row gap-[80px]">
        <UserSidebar user={user} />

        <div className="flex-1">
          <ProfileTabs
            isMe={isMe}
            isArtist={isArtist}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <SwitchCase
            value={activeTab}
            caseBy={{
              profile: (
                <ProfileContent
                  user={isEditMode ? editedUser : user}
                  isMe={isMe}
                  isEditMode={isEditMode}
                  onUserChange={setEditedUser}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              ),
              projects: <ProjectContent />,
              proposals: (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    받은 제안 목록이 여기에 표시됩니다.
                  </p>
                </div>
              ),
            }}
          />
        </div>
      </div>
    </Container>
  );
}
