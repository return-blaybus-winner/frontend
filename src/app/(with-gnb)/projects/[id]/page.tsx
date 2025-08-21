"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Heart, Star } from "lucide-react";
import Container from "@/app/_components/container";
import { mockProject } from "@/app/(with-gnb)/projects/[id]/mock";
import { Separator } from "@/components/ui/separator";

export default function ProjectDetailPage() {
  return (
    <Container className="mt-10">
      <div className="flex gap-[50px] items-start">
        {/* Left Content */}
        <div className="flex-1">
          {/* Project Image */}
          <div className="relative bg-slate-800 rounded-lg overflow-hidden h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* 3D Cube representation */}
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-12"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg transform -rotate-12 translate-x-4 translate-y-4"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-6 h-6 bg-yellow-300 rounded-full"></div>
                </div>
              </div>
            </div>
            <button className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Heart className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Company Info */}
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src={mockProject.company.avatar}
                alt={mockProject.company.name}
              />
              <AvatarFallback>JK</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-gray-600">
                {mockProject.company.description}
              </p>
              <p className="font-semibold">{mockProject.company.name}</p>
            </div>
          </div>

          {/* Project Details Sections */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {mockProject.details.title}
              </h3>
              <p className="text-gray-700">{mockProject.details.content}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {mockProject.projectContent.title}
              </h3>
              <p className="text-gray-700">
                {mockProject.projectContent.content}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {mockProject.detailedDescription.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {mockProject.detailedDescription.content}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {mockProject.designGuide.title}
              </h3>
              <p className="text-gray-700">{mockProject.designGuide.content}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {mockProject.targetAudience.title}
              </h3>
              <p className="text-gray-700">
                {mockProject.targetAudience.content}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {mockProject.workPeriod.title}
              </h3>
              <p className="text-gray-700">{mockProject.workPeriod.content}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {mockProject.recruitNumber.title}
              </h3>
              <p className="text-gray-700">
                {mockProject.recruitNumber.content}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {mockProject.budget.title}
              </h3>
              <p className="text-gray-700">{mockProject.budget.content}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {mockProject.workScope.title}
              </h3>
              <p className="text-gray-700">{mockProject.workScope.content}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {mockProject.expectedOutcome.title}
              </h3>
              <p className="text-gray-700">
                {mockProject.expectedOutcome.content}
              </p>
            </div>

            {/* Project Images Gallery */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                프로젝트 상세 이미지 *
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {mockProject.images.map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center text-gray-500 text-sm">
                      이미지 {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 w-[426px] sticky top-[120px] p-8 pt-6 border border-gray-300 rounded-[12px]">
          <h1 className="text-2xl font-bold text-gray-900 mb-[50px]">
            {mockProject.title}
          </h1>

          {/* Period */}
          <div className="space-y-8">
            <Title>모집 기간</Title>
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-gray-800 py-[6px]">
                <Calendar className="size-5" />
                <span className="text-lg text-gray-800">
                  {mockProject.period}
                </span>
              </div>
              <Badge>{mockProject.periodStatus}</Badge>
            </div>
            <Separator />
            <div className="grid grid-cols-2 gap-x-15">
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">총 프로젝트</span>
                <span className="font-semibold">
                  {mockProject.projectInfo.budget}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">희망액</span>
                <span className="font-semibold">
                  {mockProject.projectInfo.difficulty}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">총 거래</span>
                <span className="font-semibold">
                  {mockProject.projectInfo.applicants}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">리뷰</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">
                    {mockProject.projectInfo.rating}
                  </span>
                </div>
              </div>
            </div>
            <Button
              className="w-full bg-red-500 hover:bg-red-600 text-white"
              size="lg"
            >
              프로젝트 신청하기
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{children}</h3>
  );
}
