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
                <h1 className="text-2xl mx-auto max-w-6xl justify-center text-center text-white p-5 pt-10 animate-fadeIn">O stránce</h1>
                <div className="flex mx-auto max-w-6xl justify-center">
                    <p className="text-xl text-pretty text-center text-white p-5 animate-slideInLeft">Tato stránka vznikla v rámci semestrální práce z předmětu Etnické minority Evropě na provozně ekonomické fakultě ČZU. Jejím údělem je poskytnout základní informace o české minoritě v Německu, zároveň tak má poskytovat přehled pro ty, kteří by i živobytí v Německu zvažovali. Stránka tak poskytne některé informace, případně odkáže na další zdroje.
                    </p>
                </div>
                <div className="mx-auto max-w-6xl">
                    <p className="text-xl text-pretty text-white p-5 text-center animate-slideInLeft">K tvorbě stránky bylo využito frameworku Next.js spolu s Tailwind CSS, které umožňují tvořit webové stránky moderním a efektivním způsobem. K samotnému nasazení stránky pak bylo využito GitHub Pages společně s GitHub Actions, které se o celý průběh nasazování starají. Jedná se tak o staticky vyexportovaný web, který s přehledem splňuje účely této semestrální práce, a to předat informace, edukovat, a navést na další zdroje vzdělávání se o dané problematice.</p>
                    <h1 className="text-white text-2xl p-5 mx-auto flex justify-center pt-20 animate-fadeIn">Osobní vztah k problematice</h1>
                    <p className="text-white text-xl p-5 text-center animate-slideInLeft">Německo je mou nejnavštěvovanější zemí ze všech sousedních zemí České republiky. Zároveň se už 8 let učím němčinu na vlastní pěst a měla jsem i tu čest již potkat několik Čechů, kteří dlouhodobě žili a pracovali v Německu (a mimo jiné i v Rakousku). Přes tyto zkušenosti mi rozhodně nechybí motivace toto téma hlouběji zkoumat, a to jak pro vlastní zájem, tak i pro přímočarý účel splnění semestrální práce.</p>
                    <h1 className="text-white text-2xl p-5 mx-auto flex justify-center pt-20 animate-fadeIn">Použité zdroje</h1>
                    <p className="text-white text-xl p-5 animate-slideInLeft text-center">Old Town of Munich (Germany), Thomas Wolf, www.foto-tw.de </p>
                    <p className="text-white text-xl p-5 animate-slideInLeft text-center">Všechna data z interaktivní mapy jsou vzata z https://statistik.arbeitsagentur.de/, https://mzv.gov.cz/jnp/cz/zahranicni_vztahy/krajane/krajane_ve_svete/adresare/adresare-nemecko_adresar_krajanskych_spolku.html</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}