import Footer from "@/app/(with-gnb)/_components/footer";
import GNB from "@/app/(with-gnb)/_components/gnb";
import { prefetchQueries } from "@/app/_lib/prefetch-queries";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}

export default async function WithGNBLayout({ children }: Props) {
  const queryClient = await prefetchQueries();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GNB />
      <main className="pt-[81px]">{children}</main>
      <Footer />
    </HydrationBoundary>
  );
}
