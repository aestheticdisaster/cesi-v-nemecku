import Navbar from "./navbar";
import OStrance from "./o-strance/page";
import Top from "./Top";
import Flag from "../public/Flag_of_Germany_(3-2).svg.png"
import WideFlag from "../public/Flag_of_Germany_(16-9).png"
import MainNavbar from "./mainnavbar";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="">
      <div className="text-xl p-2 bg-amber-500 text-center hover:text-white transition-all duration-500 hover:bg-amber-600">K 2.6.2025 byly řešeny technické problémy s GitHub Actions, obsah bude dodán v nejbližší možné době</div>
    <MainNavbar />
    <div>
      <div className="relative min-h-screen bg-wideFlag flex items-center justify-start bg-center bg-cover bg-no-repeat scale-y-90 -mt-14">
        <div className="absolute inset-0 bg-black/20 bg-gradient-to-l from-black/0 to-black/90 z-0" />
        <h1 className="relative text-7xl text-white font-extrabold p-5 pl-20 mt-48 scale-105">Češi v Německu</h1>
      </div>
    </div>
    <Footer />
    </div>
  );
}
