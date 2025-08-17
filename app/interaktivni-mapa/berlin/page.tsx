import Navbar from "@/app/navbar";
import Top from "@/app/Top";
import Link from "next/link";

export default function Berlin() {
    return (
        <div className="min-h-screen bg-black">
            <Top />
            <Navbar />
            <h1 className="text-2xl p-4 pl-10 bg-gradient-to-l from-black via-yellow-900 to-yellow-700 text-white">INTERAKTIVNÍ MAPA - REGIONY</h1>
            <div className="bg-gradient-to-tl from-black via-black to-red-950 mx-auto min-h-screen justify-center">
                <h1 className="text-2xl text-white pl-10 p-5 justify-center mx-auto flex pt-10">Berlin</h1>
                <div className="justify-center flex flex-col items-center">
                    <svg baseProfile="tiny" fill="#660000" height="600" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" version="1.2" viewBox="0 0 400 400" width="400" className="w-full max-w-4xl" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                        <g id="features" className="lg:scale-150 hover:stroke-red-600 transition-all duration-500">
                            <path d="M150.5 100.7l2.8-0.4 0.9 0.5 1.4 1.8 2.9 1.3 0.5 0.4 0.6 0.8 0 0.4-0.1 0.2-0.5 0.4-0.2 0.3-0.1 0.3-0.1 0.4 0.1 0.8-0.2 0.5-0.1 0.3-1.4 1.1-0.2 0.3-0.3 0.4-0.3 0.8 0 0.7 0.2 1.1 0 0.6-0.1 0.4-0.2 0.3-0.1 0.3-0.1 0.1-0.2 0.1-0.1 0.1-1.7 0.5-0.1 0.1-0.3 0.3-1 2.1-0.7 0 0-0.2-0.1-0.1 0-0.4-0.1-1.5-0.3-1.9-0.4-0.7-0.4-0.3-0.8 0.2-0.4-0.1-1.8-0.6-1.4-0.8-2.8-1.1-0.6 0-0.4 0.1-0.1 0.3-0.2 0.2-0.3 0.1-0.2 0.1-0.6 0-0.8-0.1-0.3-0.2-0.3-0.4-0.2-0.4-0.3-0.8-0.4-0.2-0.4-0.1-0.6 0.1-1.2 0.4-0.2 0.2-0.2 0.1-0.2 0.3-0.1 0.3 0.1 0.4 0 0.3 0.2 0.6 0 0.4 0 0.3-0.1 0.8-2.3 0-1.4-0.6-0.3-0.4-0.4-0.7-0.8-0.8-0.4-0.4-0.3-0.2-0.6 0.2-1.8 0.6-0.2-0.1-0.3-0.1-0.5-1-0.2-0.4-0.1-0.1-0.1 0-0.1 0.1-0.4 0.2-2 0.8-0.5 0.1-0.3 0-0.6-0.7-0.9-0.6-0.6-0.2-0.4 0-3 1.5-0.2 0.1-0.2 0.3-0.3 0.4-0.3 0.1-0.2 0.1-2.5-0.6-0.3-0.1-0.4-0.2-1.2-1-0.2-0.1-0.1-0.1 0-0.1 0-0.2 0.2-0.3 0.7-0.8 0-0.1 0.1-0.2 0-0.2 0-0.3 0.2-0.3 0.1-0.2 0.2-0.2 0.3-0.3 0.1-0.1-0.4-0.7-0.1-0.3-0.1-0.6 0-0.4 0.1-0.8 0.2-0.7 0.1-0.4 0.1-0.2 0.2-0.2 0.6-0.3 0.2-0.2 2-2.3-0.1-0.4 0.1-0.3-1.2-2.1 0.2-3.3 0.3-1.8 0.1-1.1-0.1-0.6-0.2-0.5 0-0.3 0.1-0.3 0.2-0.3 0.2-0.6 0.2-0.2 0.2-0.1 0.6 0.2 3.1 1.4 0.6-0.1 0-0.2 0-0.2-0.1-0.2-0.2-0.4-0.1-0.3-0.1-0.3 0-0.3 0-0.4 0.1-0.3 0.7-2 0.2-0.1 2.2-0.4 0.6-0.3 0.8-0.8 0.3-0.6 0.2-0.5 0.2-0.7 0.3-0.2 0.2-0.1 0.8 0 0.2 0.1-0.1 0.1-0.1 0.2 0 0.3 0.2 0.5 0.1 0.3-0.1 1.1 0.1 0.3 0.2 0.2 0.3 0.2 1.1 0.5 2.8 0.2 0.7-0.2 0.4-0.1 0.2-0.3 0.1-0.3 0.4-0.7 1.7-1.4 1.4 0.9 0.2 0 0.3-0.1 0.1-0.3 0.2-0.4 0.2-0.2 1.7-1.7 0.4 0 0.2 0.2 0.2 0.5 0.3 0.4 1.2 1.1 0.1 0.2 0.1 0.3 0 0.3-0.2 1.1-0.1 0.6 0 0.6 0.1 0.7 0 0.1 0.2 0.3 4.8 5.6 1.6 1.2 0.9 0.4 0.6 0.6 1.1 0.5 1.5 0.2 0.1 0.9-1.7 4-0.1 0.9 0.2 0.5z" id="DEBE" name="Berlin"></path>
                        </g>               
                    </svg>
                    <h2 className="text-2xl text-white animate-fadeIn">Počet Čechů zaměstnaných v dané spolkové zemi (odvádějících sociální pojištění)</h2>
                    <p className="text-white animate-slideInLeft text-xl text-pretty p-5">Data z roku 2014: 600</p>
                    <p className="text-white animate-slideInLeft text-xl text-pretty">Data z roku 2024: 1400</p>
                    <p className="text-white animate-slideInLeft text-xl text-pretty p-5 max-w-6xl text-center">Berlín je lákavý především pro uchazeče do větších firem, přesto je ale počet zaměstnaných Čechů víceméně stejný. Je nutno brát v potaz i mnohem menší rozlohu, z toho důvodu jsou čísla značně menší, než třeba u velkého Bavorska, kde kromě Mnichova jsou i další lákavé destinace pro práci. Počet respodentů v Berlíně ovšem skutečně nebyl jakkoliv velký, je tedy možné, že Berlín ani není destinací číslo jedna, kde se usadit a pracovat. </p>
                </div>
            </div>
            <footer className="fixed bottom-10 right-10">
                <Link href="/interaktivni-mapa" className="text-white text-xs lg:text-lg bg-red-900 px-5 py-2 rounded-lg hover:bg-red-600">Zpět</Link>
            </footer>
        </div>
    );
}