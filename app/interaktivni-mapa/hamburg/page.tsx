import Navbar from "@/app/navbar";
import Top from "@/app/Top";
import Link from "next/link";

export default function Hamburg() {
    return (
        <div className="min-h-screen bg-black">
            <Top />
            <Navbar />
            <h1 className="text-2xl p-4 pl-10 bg-gradient-to-l from-black via-yellow-900 to-yellow-700 text-white">INTERAKTIVNÍ MAPA - REGIONY</h1>
            <div className="bg-gradient-to-tl from-black via-black to-red-950 mx-auto min-h-screen justify-center">
                <h1 className="text-2xl text-white pl-10 p-5 justify-center mx-auto flex pt-10">Hamburg</h1>
                <div className="justify-center flex flex-col items-center">
                    <svg baseProfile="tiny" fill="#660000" height="600" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" version="1.2" viewBox="0 0 400 400" width="400" className="w-full max-w-4xl" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                        <g id="features" className="lg:scale-150 hover:stroke-red-600 transition-all duration-500">
                            <path d="M115.2 112.1l0-0.1 0.6-2.3 0.1-0.8 0.1-0.8 0.1-0.4 0.1-0.2 0.1-0.3 0.3-0.2 0.3-0.3 0.1-0.3 0.1-0.9 0.1-0.4 0.3-0.1 0.3 0.1 0.9 0.2 0.6 0.4 0.1 0.1 0.6 0.5 0.3 0.2 0 0.3-0.2 1.1-0.1 0.6 0 0.3 0 0.2 0.1 0.2 0.1 0.1 0.1 0.1 0.2 0 0.2 0.1 0.9-0.5 7.2-5.9 1.9-0.6 2 0.5 0.3-0.1 0.4-0.2 0.3-0.3 0.7-1.9 0.3-0.5 0.4-0.3 0.9-0.3 0.5-0.1 0.5 0 0.9 0.2 0.6-0.4 0.4-0.3 0.9-4 0.3-0.4 0.3-0.3 0.2-0.1 0.1-0.1 0.2 0 3.6 0.9 0.4-0.1 0.4-0.2 1.3-1.2 0.4-0.3 0.4 0 0.4 0 0.3 0.1 0.1 0.2 0.1 0.3-0.1 0.6-0.1 0.3-0.9 1.2-0.7 1.5-0.3 0.7-0.1 0.4 0.1 0.3 0.3 0.4 2.6 2 0.1 0.7 0 0.8 0.2 0.7 0.4 0.4 0.3 0.1 0.2 0.3 0.1 0.6-0.2 0.9 0 0.4-0.3 0.6-0.1 0.5-0.1 1.5-0.1 1.7-0.1 0.3 0 0.1-0.2 0.2-0.2 0.1-0.7 0.3-1.3 0.4-0.2 0.1-0.2 0.2 0 0.4 0.1 0.6 0.5 2 0.1 1 0 0.9 0.1 0.6 0.2 0.5 0.8 0.4 1.2 0.4 0.7 0.7 1.8 2.9 1.6 0.9 0.6 0.5 2.5 2.8 0.1-0.1 0.1 0 0.3 0 0.1 0 0.2 0.6 0.3 2.2-3.1 0-0.7 0.2-0.7 0.5-1.6 2.2-0.2 0.3-4 0.3-1.2-0.3-1.2-0.9-0.7-1.1-0.9-0.9-1.5-0.4-0.9-0.7-1.1-1.4-0.5 0-2.8 0.9-0.4 0.3-0.2 0.3 0 0.2 0 0.3 0.1 0.2 0 0.2-0.1 0.2-0.1 0.2-1.3 0.8-1.8 0.8-0.8 0.1-0.5-0.1-1.3-0.9-0.4-0.1-0.4 0.1-1.5 0.8-0.4 0-0.3-0.3 0-0.4-0.1-1.2-0.2-1.2-0.4-0.7-0.3-0.2-0.3-0.1-0.6 0.2-0.4 0.3-0.9 1.4-0.3 0.2-0.3-0.1-2.4-2.3-0.5-0.7-0.5-0.6-0.4-0.9-0.3-0.7-0.3-1.1-0.2-0.4-0.2-0.3-0.4-0.3-0.2-0.2-0.2-0.3-0.1-0.4-0.1-0.3-0.7-0.7-0.2-4.4-0.1-0.5 4 0.9 1-0.4-0.9-1.6-2.8-1.6-3-0.3z" id="DEHH" name="Hamburg"></path>
                        </g>               
                    </svg>
                    <p className="text-white text-xl">djddddddddddddddddddddddddddsi</p>
                </div>
            </div>
            <footer className="fixed bottom-10 right-10">
                <Link href="/interaktivni-mapa" className="text-white text-xs lg:text-lg bg-red-900 px-5 py-2 rounded-lg hover:bg-red-600">Zpět</Link>
            </footer>
        </div>
    );
}