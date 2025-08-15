import OStrance from "./o-strance/page";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="pl-2 py-5 w-full bg-gradient-to-l from-black to-red-900">
            <Link href="/zakladni-informace" className="ml-5 text-white lg:text-xl text-sm font-bold hover:text-black transition-all duration-300 hover:bg-red-600 p-3 rounded-md w-full h-full min-w-full text-center">Základní informace</Link>
            <Link href="/o-strance" className="lg:ml-8 ml-0 lg:text-xl text-sm text-white font-bold hover:text-black transition-all duration-300 hover:bg-red-600 p-3 rounded-md">O stránce</Link>
            <Link href="/interaktivni-mapa" className="lg:ml-8 ml-0 lg:text-xl text-sm text-white font-bold hover:text-black transition-all duration-300 hover:bg-red-600 p-3 rounded-md">Interaktivní mapa</Link>
        </div>
    );
}