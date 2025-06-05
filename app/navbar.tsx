import OStrance from "./o-strance";

export default function Navbar() {
    return (
        <div className="pl-2 py-5 w-full bg-gradient-to-l from-red-800 to-red-500">
            <a href="./page" className="ml-5 text-xl font-bold hover:text-white transition-all duration-300 hover:bg-red-900 p-3 rounded-md w-full h-full min-w-full text-center">Hlavní stránka</a>
            <a href="./o-strance" className="ml-8 text-xl font-bold hover:text-white transition-all duration-300 hover:bg-red-900 p-3 rounded-md">O stránce</a>
        </div>
    );
}