import Link from "next/link"
import ZakladniInformace from "./zakladni-informace/page";
import OStrance from "./o-strance/page";

export default function MainNavbar() {
    return(
        <div className="bg-black flex items-center lg:space-x-20 space-x-10 justify-between p-5 lg:px-20 h-20">

            <div>
                <h1 className="font-extrabold text-white lg:text-4xl text-lg transition-all duration-500">HKS 2025</h1>
            </div>

            <div className="flex">
                <Link href="/zakladni-informace" className="text-white font-extrabold hover:text-yellow-400 p-2 rounded-md text-md lg:text-xl text-sm transition-all duration-500 lg:m-7 m-0">Základní informace</Link>              
                <Link href="/o-strance" className="text-white font-extrabold hover:text-yellow-400 p-2 text-md lg:text-xl text-sm transition-all duration-500 lg:m-7 m-0">O stránce</Link>
                <Link href="/interaktivni-mapa" className="text-white font-extrabold hover:text-yellow-400 p-2 text-md lg:text-xl text-sm transition-all duration-500 lg:m-7 m-0">Interaktivní mapa</Link>
            </div>

            <div className="lg:w-44 w-0"></div>
            
        </div>
    );
}