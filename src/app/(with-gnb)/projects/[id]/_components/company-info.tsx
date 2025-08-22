import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CompanyInfoProps {
  company: {
    name: string;
    description: string;
    avatar: string;
  };
}

export default function CompanyInfo({ company }: CompanyInfoProps) {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="w-12 h-12">
        <AvatarImage src={company.avatar} alt={company.name} />
        <AvatarFallback>JK</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm text-gray-600">{company.description}</p>
        <p className="font-semibold">{company.name}</p>
      </div>
    </div>
  );
}