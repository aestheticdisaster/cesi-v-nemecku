import Navbar from "@/app/navbar";
import Top from "@/app/Top";
import Link from "next/link";

export default function Bremy() {
    return (
        <div className="min-h-screen bg-black">
            <Top />
            <Navbar />
            <h1 className="text-2xl p-4 pl-10 bg-gradient-to-l from-black via-yellow-900 to-yellow-700 text-white">INTERAKTIVNÍ MAPA - REGIONY</h1>
            <div className="bg-gradient-to-tl from-black via-black to-red-950 mx-auto min-h-screen justify-center">
                <h1 className="text-2xl text-white pl-10 p-5 justify-center mx-auto flex pt-10">Brémy</h1>
                <div className="justify-center flex flex-col items-center">
                    <svg baseProfile="tiny" fill="#660000" height="600" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" version="1.2" viewBox="0 0 400 400" width="400" className="w-full max-w-4xl" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                        <g id="features" className="lg:scale-150 hover:stroke-red-600 transition-all duration-500">
                            <path d="M120.7 90.6l3.6 1.3 1.6 0.3 3-0.1 0.4 0.1 0.1 0.2-0.3 0.4-0.2 0.3-0.2 0.3-0.1 0.3-0.1 0.5 0.1 0.7 0.2 0.6 0.6 1.2 0.2 0.9 0.5 2.5 0.1 1-0.1 0.8-0.1 0.6-0.1 0.4-1.1 1.8-1.5 1.4-0.2 0.1-0.1 0-0.1-0.1-0.2-0.2-0.5-1-0.1 0-0.1 0-0.5 0.2-0.4-0.4-0.9-1.7-0.3-0.5 0.7-3.3-0.4-0.6-1.9-4.8-0.5-0.7-0.8-1.7-0.3-0.8z m3.8 49.6l0.1 0 1.4-0.5 0.3 0 2.1 1.3 4.3 1.8 0.9 0.2 0.8-0.1 0.2 0 0.1-0.1 0.1-0.1 0.3-0.1 1.7-0.1 0.9 0.1 0.1 0.1 0.1 0.2 0.1 0.1 0 0.2 0 0.2-0.1 0.2 0.2 0.3 0.4 0.3 1.6 1 0.3 0.2 2.1-0.1 0.9 0.2 0.1 0.1 1.1 1.1 1.4 1.1 2.6 1.2 0.6 0.2 0.4-0.1 0.2-0.1 0.2-0.2 0.1-0.2 0-0.2 0.1-0.3 0.1-0.4 0.4-0.8 0.1-0.3 0.2-0.3 0.3-0.2 0.3 0 0.2 0.2 0.7 0.7 1.7 2 0.2 0.3 0 0.2-0.2 0.3-0.9 0.8-0.1 0.3-0.1 0.2 0.3 0.7 1.8 2 0.2 0.3 0.1 0.4-0.1 0.3-0.5 0.7-0.2 0.5-0.2 0.7-0.1 1.7-0.1 0.7-0.1 0.4-1.1 1.2-2.5 1.9-0.6 0.3-3.6-2.8 0 0.1 0 0.2 0 0.3 0 0.4-0.2 0.3-0.3 0.2-1 0.3-0.8-0.1-0.7-0.2-3.4-2.2-0.4-0.1-0.3 0-0.7 0.3-2.8 0.5-1.1-0.2-0.1-0.1-0.1-0.1 0-0.1 0-0.1 0-0.2 0-3.1 0-0.4-0.2-0.3-0.5-0.3-2.8-3.3-1.2-1.8-0.1-0.5-0.2-0.6 0-0.3-0.1-2.2-1.1-2.1-0.4-0.4-1.6 0.2-0.8-0.1-1.8-1.2-3-1.3-0.6-1.3-0.2-0.8-0.4-0.8 1.6-0.3 0.8 0.2 2.3 1.5 0.3 0.1z" id="DEHB" name="Bremen"></path>
                        </g>               
                    </svg>
                    <h2 className="text-2xl text-white animate-fadeIn">Počet Čechů zaměstnaných v dané spolkové zemi (odvádějících sociální pojištění)</h2>
                    <p className="text-white animate-slideInLeft text-xl text-pretty p-5">Data z roku 2014: 60</p>
                    <p className="text-white animate-slideInLeft text-xl text-pretty">Data z roku 2024: 100</p>
                    <p className="text-white animate-slideInLeft text-xl text-pretty p-5 max-w-6xl text-center">Brémy jsou vzdálené jak od hranic ČR, tak i od největších českých skupin v Německu. Z toho lze usuzovat, že dají Češi přednost jiné lokaci, která má zkrátka "lepší a více zajeté" podmínky. Oblast je taktéž dosti malá a pokud by někdo chtěl do většího města, Mnichov nebo Berlín jsou rozhodně velmi často na pořadníku dříve.</p>
                </div>
            </div>
            <footer className="fixed bottom-10 right-10">
                <Link href="/interaktivni-mapa" className="text-white text-xs lg:text-lg bg-red-900 px-5 py-2 rounded-lg hover:bg-red-600">Zpět</Link>
            </footer>
        </div>
    );
}