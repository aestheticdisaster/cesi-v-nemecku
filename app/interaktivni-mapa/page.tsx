import Footer from "../footer";
import Navbar from "../navbar"
import Top from "../Top"
import Map from "../../public/de-02invert.jpg"

export default function InteraktivniMapa() {
    return (
        <div className="min-h-screen bg-black">
            <Top />
            <Navbar />
            <h1 className="text-2xl p-4 pl-10 bg-gradient-to-l from-black via-yellow-900 to-yellow-700 text-white">INTERAKTIVNÍ MAPA</h1>
            <div className="bg-gradient-to-tl from-black via-black to-red-950 mx-auto min-h-screen flex justify-center">
                <h1 className="text-2xl mx-auto max-w-6xl text-center text-white p-5 pt-10">Interaktivní mapa</h1>
                <img src="de-02invert.jpg" alt="Map of Germany" className="size-2/3 mt-44 rounded-full p-5"></img>
            </div>
            <div>
                
            </div>
            <Footer />
        </div>
    );
}