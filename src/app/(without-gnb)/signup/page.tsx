"use client";

import { useState } from "react";
import Container from "@/app/_components/container";
import { UserTypeSelection } from "@/app/(without-gnb)/signup/_components/user-type-selection";
import { CompanySignUpForm } from "@/app/(without-gnb)/signup/_components/ccmpany-signup-form";
import { ArtistSignUpForm } from "@/app/(without-gnb)/signup/_components/artist-signup-form";
import { UserRole } from "@/app/_model/user";

export default function SignupPage() {
  const [selectedUserType, setSelectedUserType] = useState<UserRole | null>(
    null
  );

  const handleUserTypeSelect = (type: UserRole) => {
    setSelectedUserType(type);
  };

  const handleBack = () => {
    setSelectedUserType(null);
  };

  return (
    <Container className="flex flex-row gap-10 py-10 px-5">
      <div className="flex-1">
        <div>
          {selectedUserType === null && (
            <UserTypeSelection onSelect={handleUserTypeSelect} />
          )}
          {selectedUserType === "company" && (
            <CompanySignUpForm onBack={handleBack} />
          )}
          {selectedUserType === "artist" && (
            <ArtistSignUpForm onBack={handleBack} />
          )}
        </div>
      </div>
      <div className="w-[590px] bg-gray-100 rounded-xl"></div>
    </Container>
  );
}
