interface UserTypeSelectionProps {
  onSelect: (type: 'company' | 'artist') => void;
}

export function UserTypeSelection({ onSelect }: UserTypeSelectionProps) {
  return (
    <div className="text-center space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">가입 유형을 선택해주세요</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => onSelect('company')}
          className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left"
        >
          <div className="text-lg font-medium text-gray-900">기업</div>
          <div className="text-sm text-gray-600 mt-2">
            프로젝트를 의뢰하고 아티스트와 협업하세요
          </div>
        </button>
        <button
          onClick={() => onSelect('artist')}
          className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left"
        >
          <div className="text-lg font-medium text-gray-900">아티스트 (개인)</div>
          <div className="text-sm text-gray-600 mt-2">
            작품을 공유하고 프로젝트 기회를 찾아보세요
          </div>
        </button>
      </div>
    </div>
  );
}