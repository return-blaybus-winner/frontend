import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            아티스트와 기업을 연결하는 플랫폼
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            창작자의 재능과 기업의 프로젝트를 매칭하여 새로운 가치를 창출합니다
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/projects">프로젝트 찾기</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/artists">아티스트 찾기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">우리의 성과</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">매칭 성사된 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">등록된 아티스트</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">기업 의뢰</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">매칭 성사 비율</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">기업을 위한 프로젝트 추천</h3>
              <p className="text-gray-600 mb-6">
                AI 기반 매칭 시스템으로 기업의 요구사항에 맞는 최적의 아티스트를 추천합니다.
              </p>
              <Button variant="outline" asChild>
                <Link href="/projects">더 알아보기</Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">개인을 위한 아티스트 추천</h3>
              <p className="text-gray-600 mb-6">
                개인의 취향과 선호도를 분석하여 맞춤형 아티스트와 작품을 추천합니다.
              </p>
              <Button variant="outline" asChild>
                <Link href="/artists">더 알아보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Movetum</h3>
              <p className="text-gray-400">
                아티스트와 기업을 연결하는 혁신적인 플랫폼
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/projects">프로젝트 찾기</Link></li>
                <li><Link href="/artists">아티스트 찾기</Link></li>
                <li><Link href="/my-projects">내 프로젝트</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">고객지원</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help">도움말</Link></li>
                <li><Link href="/contact">문의하기</Link></li>
                <li><Link href="/faq">자주 묻는 질문</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">회사</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">회사소개</Link></li>
                <li><Link href="/careers">채용</Link></li>
                <li><Link href="/press">보도자료</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Movetum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
