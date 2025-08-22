import { Separator } from "@/components/ui/separator";
import { STATISTICS } from "../_constants/home";

export default function StatisticsSection() {
  return (
    <section className="pt-[120px] w-full">
      <h2 className="text-[28px] font-semibold">국내 대표 협업매칭 플랫폼</h2>
      <div className="flex items-center bg-white mt-8 shadow-card rounded-[16px] px-[9px] py-6 gap-[5px]">
        {STATISTICS.map((stat, index) => (
          <div key={index} className="flex items-center">
            <div className="w-[340px] p-8 flex flex-col gap-2">
              <div className={`text-[40px] font-bold tracking-[-2.5%] ${stat.className}`}>
                {stat.value}
              </div>
              <div className="text-[20px] text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
            {index < STATISTICS.length - 1 && (
              <Separator
                orientation="vertical"
                className="min-h-[60px] bg-[#d4d4d4]"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}