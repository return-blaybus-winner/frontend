import { isServer } from "@/app/_api/utils";

export const BASE_URL = isServer
  ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/v0`
  : `/api/v0`;
