import { isArtist, User } from "@/app/_models/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  artist: User;
}

export default function ArtistCard({ artist }: Props) {
  if (isArtist(artist) === false) {
    return null;
  }

  return (
    <Link href={`/users/${artist.userId}`}>
      <div className="p-6 pb-8 flex justify-between border border-gray-300 rounded-[12px]">
        <div className="flex gap-10">
          <Avatar className="size-[80px]">
            <AvatarImage src="/profile.png" alt={artist.name} />
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] font-bold">{artist.name}</h3>
              <p className="text-sm text-gray-600">
                {artist.profile.introduction}
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <Badge className="text-sm rounded-full" variant={"secondary"}>
                {artist.profile.mainActivityField}
              </Badge>
              <Badge className="text-sm rounded-full" variant={"secondary"}>
                {artist.profile.activityLocation}
              </Badge>
              <Badge className="text-sm rounded-full" variant={"secondary"}>
                {artist.profile.workingMethod}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
