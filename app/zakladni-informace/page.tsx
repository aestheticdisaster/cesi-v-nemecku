import Navbar from "../navbar"
import Top from "../Top"

export default function ZakladniInformace() {
    return (
        <div className="">
              <div className="text-xl p-2 bg-amber-500 text-center">K 2.6.2025 byly řešeny technické problémy s GitHub Actions, obsah bude dodán v nejbližší možné době</div>
              <Top/>
              <header>
                <Navbar/>
                <h1 className="text-2xl p-4 pl-10 bg-gradient-to-l from-yellow-800 to-yellow-300">ZÁKLADNÍ INFORMACE</h1>
              </header>
            <main>
              <link href="./output.css" rel="stylesheet"></link>
              <div className="text-left flex mx-auto justify-center bg-white max-w-6xl">
                <h2 className="text-2xl p-5 mt-10">Stručný přehled</h2>
              </div>
              <div className="flex max-w-6xl mx-auto text-lg">
                <p>Češi se v současné době vyskytují v německu počtu cca 50 000 jedinců, přičemž jejich přistěhování mělo historické důvody, ale i důvody dneška. V minulém století se tak jednalo spíše o politickou emigraci, jelikož zdejší lidé byli nespokojeni s režimem a emigrovali do různých zemí, včetně třeba Spojených států amerických či Kanady. Mnoho z těchto lidí se ale usídlilo i v západním Německu. Dnes jsou důvody pro emigraci spíše ekonomické. Lidé hledají lepší životní podmínky, nebo například lepší pracovní a studijní příležitosti. Jiní mají i velmi prostý důvod, a tím je, že se jim daná oblast líbí a nemají problém vystoupit ze své komfortní zóny, přizpůsobit se jiné kultuře, případně se i naučit jejich jazyk</p>
              </div>
            </main>
        </div>
    );
}