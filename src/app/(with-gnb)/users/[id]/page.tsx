"use client";

import { useState } from "react";
import Container from "@/app/_components/container";
import UserSidebar from "./_components/user-sidebar";
import ProfileTabs from "./_components/profile-tabs";
import ProfileContent from "./_components/profile-content";
import { MOCK_USER } from "./constants";
import type { UserProfile } from "./types";

export default function UserPage() {
  const [activeTab, setActiveTab] = useState<
    "profile" | "projects" | "proposals"
  >("profile");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState<UserProfile>(MOCK_USER);
  const isMe = true;
  const user: UserProfile = MOCK_USER;

  const handleEditToggle = () => {
    if (isEditMode) {
      setEditedUser(user);
    }
    setIsEditMode(!isEditMode);
  };

  const handleSave = () => {
    // TODO: API 호출로 사용자 데이터 저장
    console.log('Saving user data:', editedUser);
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditMode(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <ProfileContent 
            user={isEditMode ? editedUser : user}
            isMe={isMe}
            isEditMode={isEditMode}
            onUserChange={setEditedUser}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        );
      case "projects":
        return (
          <div className="text-center py-12">
            <p className="text-gray-500">프로젝트 목록이 여기에 표시됩니다.</p>
          </div>
        );
      case "proposals":
        return (
          <div className="text-center py-12">
            <p className="text-gray-500">받은 제안 목록이 여기에 표시됩니다.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-8 py-8">
        <UserSidebar 
          user={user} 
          isMe={isMe}
          isEditMode={isEditMode}
          onEditToggle={handleEditToggle}
        />

        <div className="flex-1">
          <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {renderTabContent()}
        </div>
      </div>
    </Container>
  );
}
