interface ResultsInfoProps {
  filteredCount: number;
}

export default function ResultsInfo({ filteredCount }: ResultsInfoProps) {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-600">
        총 {filteredCount}개의 프로젝트
      </p>
    </div>
  );
}