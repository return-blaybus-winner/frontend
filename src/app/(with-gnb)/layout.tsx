import Footer from "@/app/(with-gnb)/_components/footer";
import GNB from "@/app/(with-gnb)/_components/gnb";
import { USER_QUERY_KEY } from "@/app/_hooks/use-user";
import { prefetchQueries } from "@/app/_lib/prefetch-queries";
import { User } from "@/app/_models/user";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default async function WithGNBLayout({ children }: Props) {
  const queryClient = await prefetchQueries();

  const userData = queryClient.getQueryData(USER_QUERY_KEY);

  if (userData) {
    if (!(userData as User).role) redirect("/signup");
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GNB />
      <main className="pt-[81px]">{children}</main>
      <Footer />
    </HydrationBoundary>
  );
}
