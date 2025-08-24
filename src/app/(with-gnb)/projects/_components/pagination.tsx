import ChevronRightIcon from "@/app/_icons/chevron-right-icon";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2">
      {currentPage > 0 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="text-gray-800 hover:text-gray-900 px-2"
        >
          <ChevronRightIcon className="rotate-180" />
        </button>
      )}

      {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
        let pageNum;
        if (totalPages <= 5) {
          pageNum = i;
        } else if (currentPage <= 2) {
          pageNum = i;
        } else if (currentPage >= totalPages - 3) {
          pageNum = totalPages - 5 + i;
        } else {
          pageNum = currentPage - 2 + i;
        }

        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`w-8 h-8 text-sm font-medium rounded ${
              currentPage === pageNum
                ? "bg-primary text-white"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {pageNum + 1}
          </button>
        );
      })}

      {currentPage < totalPages - 1 && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="text-gray-800 hover:text-gray-900 px-2"
        >
          <ChevronRightIcon />
        </button>
      )}
    </div>
  );
}
