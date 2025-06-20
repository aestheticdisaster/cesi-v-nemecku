import Footer from "../footer";
import Navbar from "../navbar"
import Top from "../Top"

export default function OStrance() {
    return (
        <div className="min-h-screen bg-black">
            <Top />
            <Navbar />
            <h1 className="text-2xl p-4 pl-10 bg-gradient-to-l from-black via-yellow-900 to-yellow-700 text-white">O STRÁNCE</h1>
            <div className="bg-gradient-to-tl from-black via-black to-red-950 mx-auto min-h-screen">
                <h1 className="text-2xl mx-auto max-w-6xl justify-center text-center text-white p-5 pt-10">O stránce</h1>
                <div className="flex mx-auto max-w-6xl justify-center">
                    <p className="text-xl text-pretty text-white p-5">Tato stránka vznikla v rámci semestrální práce z předmětu Etnické minority Evropě na provozně ekonomické fakultě ČZU. Jejím údělem je poskytnout základní informace o české minoritě v Německu, zároveň tak má poskytovat přehled pro ty, kteří by i živobytí v Německu zvažovali. Stránka tak poskytne některé informace, případně odkáže na další zdroje.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}