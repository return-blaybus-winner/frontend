import { PROJECT_GALLERY_TITLE } from "../_constants/project-detail";

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">{PROJECT_GALLERY_TITLE}</h3>
      <div className="grid grid-cols-3 gap-4">
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