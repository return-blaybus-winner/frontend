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
    <div className="flex items-center gap-4 mt-6">
      <Avatar className="size-[60px]">
        <AvatarImage src={company.avatar} alt={company.name} />
        <AvatarFallback>JK</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <p className="text-base text-[#505050]">{company.description}</p>
        <p className="text-[20px] font-semibold">{company.name}</p>
      </div>
    </div>
  );
}
