import Link from "next/link"
import ZakladniInformace from "./zakladni-informace/page";
import OStrance from "./o-strance/page";

export default function MainNavbar() {
    return(
        <div className="bg-black flex items-center space-x-20 justify-between p-5 lg:px-20 h-20">

            <div>
                <h1 className="font-extrabold text-white text-3xl lg:text-4xl md:text-3xl sm:text-2xl transition-all duration-500">HKS 2025</h1>
            </div>

            <div className="">
                <Link href="/zakladni-informace" className="text-white font-extrabold hover:text-yellow-400 p-2 rounded-md text-md lg:text-xl md:text-lg sm:text-md transition-all duration-500 lg:m-7">Základní informace</Link>
               
                <Link href="/o-strance" className="text-white font-extrabold hover:text-yellow-400 p-2 text-md lg:text-xl md:text-lg sm:text-md transition-all duration-500 lg:m-7">O stránce</Link>
            </div>

            <div className="w-44"></div>
            
        </div>
    );
}