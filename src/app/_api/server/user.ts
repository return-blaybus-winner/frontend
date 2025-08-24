import { BASE_URL } from "@/app/_constants/api";
import { User } from "@/app/_models/user";
import { cookies } from "next/headers";

export async function getUserForServer(): Promise<User> {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("accessToken");

  const response = await fetch(`${BASE_URL}/v0/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
}
