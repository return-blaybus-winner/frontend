"use client";

import { useState } from "react";
import Container from "@/app/_components/container";
import { UserTypeSelection } from "@/app/(without-gnb)/signup/_components/user-type-selection";
import { CompanySignUpForm } from "@/app/(without-gnb)/signup/_components/company-signup-form";
import { ArtistSignUpForm } from "@/app/(without-gnb)/signup/_components/artist-signup-form";
import { UserRole } from "@/app/_models/user";
import SwitchCase from "@/components/utils/switch-case";

export default function SignupPage() {
  const [selectedUserType, setSelectedUserType] = useState<UserRole | null>(
    null
  );

  const handleUserTypeSelect = (type: UserRole) => {
    setSelectedUserType(type);
  };

  return (
    <Container className="flex flex-row gap-10 py-10 px-5">
      <div className="flex-1">
        <SwitchCase
          value={selectedUserType}
          caseBy={{
            [UserRole.Company]: <CompanySignUpForm />,
            [UserRole.Artist]: <ArtistSignUpForm />,
          }}
          defaultComponent={
            <UserTypeSelection onSelect={handleUserTypeSelect} />
          }
        />
      </div>
      <div className="w-[590px] rounded-xl"></div>
    </Container>
  );
}
