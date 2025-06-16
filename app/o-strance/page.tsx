import Navbar from "../navbar"
import Top from "../Top"

export default function OStrance() {
    return (
        <div className="min-h-screen">
            <Top />
            <Navbar />
            <h1 className="text-2xl p-4 pl-10 bg-gradient-to-l from-yellow-800 to-yellow-300">O STRÁNCE</h1>
            <h1 className="text-2xl mx-auto max-w-6xl justify-center mt-10 text-center">O stránce</h1>
            <div className="flex mx-auto max-w-6xl justify-center mt-10">
                <p className="text-lg">Tato stránka vznikla v rámci semestrální práce z předmětu Etnické minority Evropě na provozně ekonomické fakultě ČZU. Jejím údělem je poskytnout základní informace o české minoritě v Německu, zároveň tak má poskytovat přehled pro ty, kteří by i živobytí v Německu zvažovali. Stránka tak poskytne některé informace, případně odkáže na další zdroje.</p>
            </div>
        </div>
    );
}