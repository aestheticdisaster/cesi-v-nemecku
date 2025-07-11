import Navbar from "./navbar";
import OStrance from "./o-strance/page";
import Top from "./Top";
import Flag from "../public/Flag_of_Germany_(3-2).svg.png"
import WideFlag from "../public/Flag_of_Germany_(16-9).png"
import MainNavbar from "./mainnavbar";
import Footer from "./footer";
import Munich from "../public/960px-Stadtbild_München.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="lg:text-xl text-sm p-2 bg-amber-500 text-center hover:text-white transition-all duration-500 hover:bg-amber-600">K 2.6.2025 byly řešeny technické problémy s GitHub Actions, obsah bude dodán v nejbližší možné době</div>
    <MainNavbar />
    <div>
      <div className="relative min-h-screen bg-wideFlag flex items-center justify-start bg-center bg-cover bg-no-repeat scale-y-90 -mt-14">
        <div className="absolute inset-0 bg-black/20 bg-gradient-to-l from-black/0 to-black/90 z-0" />
        <h1 className="relative lg:text-7xl text-4xl text-white font-extrabold p-5 lg:pl-20 pl-10 mt-48 scale-105 animate-slideInLeft">Češi v Německu</h1>
      </div>
    </div>
    <div className="mt-20 min-h-screen">
      <div className="flex justify-center text-center">
        <h1 className="text-white lg:text-3xl text-2xl p-5 animate-fadeIn">Češi v Německu jako minorita</h1>
      </div>
      <div className="flex lg:flex-row flex-col justify-center lg:text-right text-center items-center text-pretty lg:space-x-10 space-x-0 max-w-6xl mx-auto p-5">
        <p className="lg:text-xl test-lg text-white lg:p-5 p-2 animate-slideInLeft">Češi žijí v Německu v odhadovaném počtu 50 000 osob, přičemž nejvíce se zdržují s oblasti Bavorska, a to hlavně v okolí v Mnichova. Další skupiny se ale nachází i v Porýní-Vestfálsku, další menší skupiny v městských aglomeracích Hamburk, Berlín a další. V těchto a jiných oblastech se taktéž můžeme setkat s krajanskými spolky, čímž jsou různé školy, spolky všeho druhu, nebo i restaurace.</p>
        <img src="960px-Stadtbild_München.jpg" className="rounded-xl animate-slideInLeft lg:max-w-xl max-w-sm mx-auto justify-center"/>
      </div>
      <div className="flex justify-center text-center mt-20">
        <h1 className="text-white lg:text-3xl text-2xl p-5 animate-fadeIn">Co lze najít na této stránce?</h1>
      </div>
      <div className="flex justify-center text-center max-w-6xl items-center mx-auto">
        <p className="text-white lg:text-xl text-lg p-5 animate-fadeIn">Stránka slouží jako obecný přehled o české minoritě v Německu, přičemž obsahuje základní informace o menšině a historické aspekty výskytu Čechů na území Německa, dále obsahuje interaktivní mapu s jednotlivými spolkovými zeměmi německa, kde je možné se dozvědět, co v daném regionu lze najít (samozřejmě takové věci, které se nějak pojí k české komunitě).</p>
      </div>
      <div className="flex justify-center text-center mt-20">
        <h1 className="text-white lg:text-3xl text-2xl p-5 animate-fadeIn">Proč zrovna Německo?</h1>
      </div>
      <div className="flex justify-center text-center max-w-6xl items-center mx-auto lg:space-x-32">
        <p className="text-white lg:text-xl text-lg p-20 animate-fadeIn bg-red-900 rounded-3xl">PLACEHOLDER</p>
        <p className="text-white lg:text-xl text-lg p-20 animate-fadeIn bg-red-900 rounded-3xl lg:mt-40">PLACEHOLDER</p>
      </div>
      <div className="flex justify-center text-center max-w-6xl items-center mx-auto lg:space-x-20">
        <p className="text-white lg:text-xl text-lg p-20 animate-fadeIn bg-red-900 rounded-3xl mt-20">PLACEHOLDER</p>
      </div>
    </div>
    <Footer />
    </div>
  );
}
