import HeartIcon from "@/app/_icons/heart-icon";
import { ProjectForList } from "@/app/_models/project";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: ProjectForList | any;
}

export default function MatchedProjectCard({ project }: Props) {
  return (
    <Card className="pt-0 shadow-card border-[#f1f1f5] cursor-pointer">
      <div className="relative p-2 pb-0">
        <div className="w-full h-48 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-[10px] overflow-hidden"></div>
        <Button
          size="icon"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border-0 bg-gray-950/20 backdrop-blur-[10px]"
        >
          <HeartIcon
            className={cn(
              "text-[#eeeeee]",
              project.liked && "text-[#FF4726] fill-[#FF4726]"
            )}
          />
        </Button>
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
            DESIGN
          </span>
        </div>
        <CardTitle>Fusion Art Installation 2025</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          *지역 커뮤니티와 연결되어 미술대학 학생들과 전문 예술가들이 협업할 수
          있는 다양한 활동을 통해 새로운 예술 프로젝트를 진행합니다.
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <div className="text-sm text-red-500">방금 해외 1등</div>
          <div className="text-sm text-gray-500">2시간 전</div>
        </div>
      </CardFooter>
    </Card>
  );
}
