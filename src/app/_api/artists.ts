import { BASE_URL } from "@/app/_constants/api";
import { ArtistSignUpDto } from "@/app/_models/artist";

export async function signUpArtist(
  artistData: ArtistSignUpDto,
  profileImage?: File,
  portfolioThumbnail?: File
): Promise<any> {
  const formData = new FormData();
  
  // JSON 데이터를 Blob으로 변환해서 추가 (Spring @RequestPart("artist") 부분)
  formData.append("artist", new Blob([JSON.stringify(artistData)], {
    type: "application/json"
  }));
  
  // 파일들 추가
  if (profileImage) {
    formData.append("profileImage", profileImage);
  }
  
  if (portfolioThumbnail) {
    formData.append("portfolioThumbnail", portfolioThumbnail);
  }

  const response = await fetch(`${BASE_URL}/v1/artists`, {
    method: "POST",
    body: formData, // Content-Type 헤더는 FormData 사용시 자동 설정됨
  });

  if (!response.ok) {
    throw new Error("Failed to sign up artist");
  }

  return response.json();
}