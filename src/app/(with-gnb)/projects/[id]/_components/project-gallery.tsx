interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-[22px] text-gray-900 mb-2">
        프로젝트 상세 이미지
      </h3>
      <div className="grid grid-cols-3 gap-[10px]">
        {images.map((_, index) => (
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
  );
}
