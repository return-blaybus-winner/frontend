"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    userType: "",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    company: "",
    category: "",
    experience: "",
    bio: "",
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 기본 유효성 검사
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    
    if (!formData.agreeTerms || !formData.agreePrivacy) {
      alert("필수 약관에 동의해주세요.");
      return;
    }

    console.log("Sign up attempt:", formData);
    // 실제 회원가입 로직은 여기에 구현
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
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
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            회원가입
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Movetum에 가입하여 아티스트와 기업을 연결하세요
          </p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white py-8 px-6 shadow-sm rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* User Type Selection */}
            <div>
              <Label htmlFor="userType">가입 유형 *</Label>
              <Select onValueChange={(value) => handleSelectChange("userType", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="가입 유형을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="artist">아티스트 (개인)</SelectItem>
                  <SelectItem value="company">기업</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">이메일 *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="이메일을 입력하세요"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="name">
                  {formData.userType === "company" ? "담당자명" : "이름"} *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={formData.userType === "company" ? "담당자명을 입력하세요" : "이름을 입력하세요"}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="password">비밀번호 *</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="비밀번호를 입력하세요"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword">비밀번호 확인 *</Label>
                <div className="relative mt-1">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="비밀번호를 다시 입력하세요"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="phone">연락처</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="연락처를 입력하세요"
                className="mt-1"
              />
            </div>

            {/* Company specific fields */}
            {formData.userType === "company" && (
              <div>
                <Label htmlFor="company">회사명 *</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="회사명을 입력하세요"
                  className="mt-1"
                />
              </div>
            )}

            {/* Artist specific fields */}
            {formData.userType === "artist" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">전문 분야 *</Label>
                    <Select onValueChange={(value) => handleSelectChange("category", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="전문 분야를 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="illustration">일러스트</SelectItem>
                        <SelectItem value="pottery">도예</SelectItem>
                        <SelectItem value="craft">공예</SelectItem>
                        <SelectItem value="painting">회화</SelectItem>
                        <SelectItem value="sculpture">조각</SelectItem>
                        <SelectItem value="design">디자인</SelectItem>
                        <SelectItem value="other">기타</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="experience">경력</Label>
                    <Select onValueChange={(value) => handleSelectChange("experience", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="경력을 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">1년 미만</SelectItem>
                        <SelectItem value="1-3">1-3년</SelectItem>
                        <SelectItem value="4-7">4-7년</SelectItem>
                        <SelectItem value="8+">8년 이상</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">자기소개</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="자신의 작업 스타일, 경험, 전문성 등을 간단히 소개해주세요"
                    className="mt-1"
                    rows={4}
                  />
                </div>
              </>
            )}

            {/* Terms and Conditions */}
            <div className="space-y-4 pt-6 border-t">
              <h3 className="text-lg font-medium">약관 동의</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="agree-terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }))
                    }
                  />
                  <div className="text-sm">
                    <Label htmlFor="agree-terms" className="font-medium">
                      이용약관 동의 (필수)
                    </Label>
                    <p className="text-gray-600 mt-1">
                      Movetum 서비스 이용약관에 동의합니다.{" "}
                      <Link href="/terms" className="text-blue-600 hover:underline">
                        자세히 보기
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="agree-privacy"
                    checked={formData.agreePrivacy}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, agreePrivacy: checked as boolean }))
                    }
                  />
                  <div className="text-sm">
                    <Label htmlFor="agree-privacy" className="font-medium">
                      개인정보 처리방침 동의 (필수)
                    </Label>
                    <p className="text-gray-600 mt-1">
                      개인정보 수집 및 이용에 동의합니다.{" "}
                      <Link href="/privacy" className="text-blue-600 hover:underline">
                        자세히 보기
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="agree-marketing"
                    checked={formData.agreeMarketing}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, agreeMarketing: checked as boolean }))
                    }
                  />
                  <div className="text-sm">
                    <Label htmlFor="agree-marketing" className="font-medium">
                      마케팅 정보 수신 동의 (선택)
                    </Label>
                    <p className="text-gray-600 mt-1">
                      새로운 프로젝트, 이벤트 등의 마케팅 정보를 이메일로 받아보시겠습니까?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Button 
                type="submit" 
                className="w-full"
                disabled={!formData.userType || !formData.agreeTerms || !formData.agreePrivacy}
              >
                회원가입
              </Button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">또는</span>
              </div>
            </div>
          </div>

          {/* Social Sign Up */}
          <div className="mt-6 space-y-3">
            <Button variant="outline" className="w-full">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google로 가입하기
            </Button>
            
            <Button variant="outline" className="w-full">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub로 가입하기
            </Button>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              이미 계정이 있으신가요?{" "}
              <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}