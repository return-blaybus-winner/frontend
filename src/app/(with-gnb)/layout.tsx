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
      <div className="px-4">
        <main className="w-1100 mx-auto pt-20">{children}</main>
      </div>
      <Footer />
    </Fragment>
  );
}
