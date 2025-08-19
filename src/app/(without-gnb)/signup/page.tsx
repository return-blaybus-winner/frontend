"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Container from "@/app/_components/container";
import { UserTypeSelection } from "./_components/user-type-selection";
import { CompanySignUpForm } from "./_components/ccmpany-signup-form";
import { ArtistSignUpForm } from "./_components/artist-signup-form";

export default function SignUpPage() {
  const [selectedUserType, setSelectedUserType] = useState<
    "company" | "artist" | null
  >(null);

  const handleUserTypeSelect = (type: "company" | "artist") => {
    setSelectedUserType(type);
  };

  const handleBack = () => {
    setSelectedUserType(null);
  };

  return (
    <Container>
      {/* Back Button */}
      <div className="flex justify-start mb-8">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            홈으로 돌아가기
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <Link href="/" className="text-3xl font-bold text-blue-600">
          Movetum
        </Link>
        <h2 className="mt-6 text-3xl font-bold text-gray-900">회원가입</h2>
        <p className="mt-2 text-sm text-gray-600">
          Movetum에 가입하여 아티스트와 기업을 연결하세요
        </p>
      </div>

      {/* Sign Up Form */}
      <div className="bg-white py-8 px-6 shadow-sm rounded-lg">
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
    </Container>
  );
}
