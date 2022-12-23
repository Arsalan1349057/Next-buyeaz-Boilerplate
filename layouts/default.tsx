import Navbar from "../components/navbar/navbar";
import { PropsWithChildren } from "react";
import Footer from "../components/footer/footer";

interface DefaultLayoutProps extends PropsWithChildren {
  [x: string]: any;
}
export default function DefaultLayout(props: DefaultLayoutProps) {
  const { children, ...rest } = props;

  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
}
