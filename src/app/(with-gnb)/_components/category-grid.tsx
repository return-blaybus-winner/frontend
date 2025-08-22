import Image from "next/image";
import Link from "next/link";
import { CATEGORY_ITEMS } from "../_constants/mock-data";

export default function CategoryGrid() {
  return (
    <div className="mx-auto flex items-center">
      {CATEGORY_ITEMS.map((item) => (
        <Link 
          href={item.href} 
          className="px-4 flex flex-col gap-1" 
          key={item.id}
        >
          <div className="relative h-[100px] w-[124px] flex items-center justify-center">
            <Image
              src={item.imageUrl}
              alt="Exhibition Planning"
              className="rounded-md object-contain absolute py-[22px]"
              fill
            />
          </div>
          <div className="text-base text-center">{item.label}</div>
        </Link>
      ))}
    </div>
  );
}