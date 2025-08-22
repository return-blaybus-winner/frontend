interface ProjectDetailSectionProps {
  title: string;
  content: string;
}

export default function ProjectDetailSection({ title, content }: ProjectDetailSectionProps) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}