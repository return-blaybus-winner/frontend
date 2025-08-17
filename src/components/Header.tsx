"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Movetum
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/projects" className="text-gray-600 hover:text-gray-900">
            프로젝트 찾기
          </Link>
          <Link href="/artists" className="text-gray-600 hover:text-gray-900">
            아티스트 찾기
          </Link>
          <Link href="/my-projects" className="text-gray-600 hover:text-gray-900">
            내 프로젝트
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/login">로그인</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">회원가입</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}