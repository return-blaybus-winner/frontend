import Header from "@/app/(without-gnb)/signup/_components/header";
import { Fragment } from "react";

interface Props {
  children: React.ReactNode;
}

export default function SignupLayout({ children }: Props) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
}
