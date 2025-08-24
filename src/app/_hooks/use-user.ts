import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteUser, getUser, updateUser } from "../_api/user";
import { User } from "../_models/user";

export const USER_QUERY_KEY = ["user"] as const;

export function useUser() {
  return useQuery({
    queryKey: USER_QUERY_KEY,
    queryFn: getUser,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: Partial<User>) => updateUser(userData),
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(USER_QUERY_KEY, updatedUser);
    },
    onError: (error) => {
      console.error("Failed to update user:", error);
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: USER_QUERY_KEY });
    },
    onError: (error) => {
      console.error("Failed to delete user:", error);
    },
  });
}