export default function GNB() {
  return (
    <header className="w-full border-b">
      <div className="w-1100 mx-auto flex items-center justify-between py-4">
        {/* 로고 */}
        <div className="flex items-center">
          <div className="text-2xl font-bold">m_</div>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-primary">
            카테고리
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            예술가 찾기
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            기업찾기
          </a>
        </nav>

        {/* 회원가입/로그인 */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">회원가입</span>
          <span className="text-sm text-muted-foreground">/</span>
          <span className="text-sm text-muted-foreground">로그인</span>
        </div>
      </div>
    </header>
  );
}
