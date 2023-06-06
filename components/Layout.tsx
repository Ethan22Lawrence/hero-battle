import { ReactNode } from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"

interface Props {
    children?: ReactNode;
 }

export default function Layout({ children } : Props) {
    return (
      <div>
        <Navbar/>
        <div className="py-[65px]">{children}</div>
        <Footer/>
      </div>
    );
  }