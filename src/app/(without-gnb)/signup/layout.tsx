import { Fragment } from "react";

interface Props {
  children: React.ReactNode;
}

export default function SignupLayout({ children }: Props) {
  return (
    <Fragment>
      <main className="mt-20">{children}</main>
    </Fragment>
  );
}
