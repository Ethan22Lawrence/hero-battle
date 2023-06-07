import { ReactNode } from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import bg from '../assets/space-bg.jpg'


interface Props {
    children?: ReactNode;
 }

export default function Layout({ children } : Props) {
    return (
      <div className="bg-cover h-screen" style={{backgroundImage: `url(${bg.src})`}}>
        <Navbar/>
        <div className="py-[65px]">{children}</div>
        <Footer/>
      </div>
    );
  }