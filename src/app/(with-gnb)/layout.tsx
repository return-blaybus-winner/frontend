import Footer from "@/app/(with-gnb)/_components/footer";
import GNB from "@/app/(with-gnb)/_components/gnb";
import { Fragment } from "react";

interface Props {
  children: React.ReactNode;
}

export default function WithGNBLayout({ children }: Props) {
  return (
    <Fragment>
      <GNB />
      <main className="pt-[81px]">{children}</main>
      <Footer />
    </Fragment>
  );
}
