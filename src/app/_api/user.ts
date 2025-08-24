import { BASE_URL } from "@/app/_constants/api";
import { User } from "@/app/_models/user";

export async function getUser(): Promise<User> {
  const response = await fetch(`${BASE_URL}/v0/users/me`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
}

export async function updateUser(userData: Partial<User>): Promise<User> {
  const response = await fetch(`${BASE_URL}/v0/users/me`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  return response.json();
}

export async function deleteUser(): Promise<void> {
  const response = await fetch(`${BASE_URL}/v0/users/me`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
}
