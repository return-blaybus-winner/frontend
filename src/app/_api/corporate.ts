import { BASE_URL } from "@/app/_constants/api";
import { CorporateSignUpDto } from "@/app/_models/corporate";

export async function signUpCorporate(
  corporateData: CorporateSignUpDto,
  profileImage?: File,
): Promise<any> {
  const formData = new FormData();
  
  formData.append("artist", new Blob([JSON.stringify(corporateData)], {
    type: "application/json"
  }));
  
  // 파일들 추가
  if (profileImage) {
    formData.append("profileImage", profileImage);
  }


  const response = await fetch(`${BASE_URL}/v0/corporates`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to sign up artist");
  }

  return response.json();
}