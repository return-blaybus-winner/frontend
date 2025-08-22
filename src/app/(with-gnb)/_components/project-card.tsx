import HeartIcon from "@/app/_icons/heart-icon";
import { Project } from "@/app/_models/project";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/1`}>
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
        <div>
          <CardHeader>
            <div className="flex items-center gap-1 mb-4">
              <Avatar className="size-5">
                <AvatarImage />
                <AvatarFallback className="text-xs">D</AvatarFallback>
              </Avatar>
              <span className="text-sm text-gray-600">DESIGN</span>
            </div>
            <CardTitle>Fusion Art Installation 2025</CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <CardDescription>
              *지역 커뮤니티와 연결되어 미술대학 학생들과 전문 예술가들이 협업할
              수 있는 다양한 활동을 통해 새로운 예술 프로젝트를 진행합니다.
            </CardDescription>
          </CardContent>
        </div>
        <CardFooter>
          <div className="flex items-center w-full flex-wrap gap-2">
            <Badge className="text-[13px] rounded-full">{`모집 마감 D - 12`}</Badge>
            <Badge
              variant={"secondary"}
              className="text-[13px] rounded-full"
            >{`2인 모집`}</Badge>
            <Badge
              variant={"secondary"}
              className="text-[13px] rounded-full"
            >{`강동구`}</Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
