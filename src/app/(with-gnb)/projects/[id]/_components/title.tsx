interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{children}</h3>
  );
}