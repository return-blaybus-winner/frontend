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
import Image from "next/image";
import Link from "next/link";

interface Props {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: Props) {
  return (
    <Link href={`/projects/${project.id}`}>
      <Card className={cn("pt-0  border-[#f1f1f5] cursor-pointer", className)}>
        <div className="relative p-2 pb-0">
          <div className="w-full h-48 rounded-[10px] overflow-hidden relative">
            <Image
              src={project.thumbnail}
              alt={project.title}
              className="object-cover absolute"
              fill
            />
          </div>
          <Button
            size="icon"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border-0 bg-gray-950/20 backdrop-blur-[10px]"
          >
            <HeartIcon
              className={cn(
                "text-[#eeeeee]",
                project.isBookmarked && "text-[#FF4726] fill-[#FF4726]"
              )}
            />
          </Button>
        </div>
        <div>
          <CardHeader>
            <div className="flex items-center gap-1 mb-4">
              <Avatar className="size-5">
                <AvatarImage src={project.organizationProfileImage} />
                <AvatarFallback className="text-xs">
                  {project.organizationName.slice(0, 1)}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-gray-600">
                {project.organizationName}
              </span>
            </div>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <CardDescription>{project.description}</CardDescription>
          </CardContent>
        </div>
        <CardFooter>
          <div className="flex items-center w-full flex-wrap gap-2">
            <Badge className="text-[13px] rounded-full">{`모집 마감 D - ${Math.ceil(
              (new Date(project.projectApplyEndDate).getTime() - Date.now()) /
                (1000 * 60 * 60 * 24)
            )}`}</Badge>
            <Badge
              variant={"secondary"}
              className="text-[13px] rounded-full"
            >{`${project.maxRecruitNumber}인 모집`}</Badge>
            <Badge
              variant={"secondary"}
              className="text-[13px] rounded-full"
            >{`${project.regionLevel1}`}</Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
