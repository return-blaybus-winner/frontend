"use client";

import { useState } from "react";
import Container from "@/app/_components/container";
import UserSidebar from "./_components/user-sidebar";
import ProfileTabs from "./_components/profile-tabs";
import ArtistProfileContent from "./_components/artist-profile-content";
import { MOCK_ARTIST_USER, MOCK_CORPORATE_USER } from "./constants";
import SwitchCase from "@/components/utils/switch-case";
import ProjectContent from "@/app/(with-gnb)/users/[id]/_components/project-content";
import { User } from "@/app/_models/user";
import CompanyProfileContent from "@/app/(with-gnb)/users/[id]/_components/company-profile-content";

export default function UserPage() {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState<User>(MOCK_ARTIST_USER);

  const isMe = true;
  const isArtist = false;
  const user: User = isArtist ? MOCK_ARTIST_USER : MOCK_CORPORATE_USER;

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
                <>
                  {isArtist ? (
                    <ArtistProfileContent
                      user={isEditMode ? editedUser : user}
                      isMe={isMe}
                      isEditMode={isEditMode}
                      onUserChange={setEditedUser}
                      onSave={handleSave}
                      onCancel={handleCancel}
                    />
                  ) : (
                    <CompanyProfileContent
                      user={isEditMode ? editedUser : user}
                      isMe={isMe}
                      isEditMode={isEditMode}
                      onUserChange={setEditedUser}
                      onSave={handleSave}
                      onCancel={handleCancel}
                    />
                  )}
                </>
              ),
              projects: <ProjectContent isArtist={isArtist} />,
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
