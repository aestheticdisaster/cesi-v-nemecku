import Footer from "../footer";
import Navbar from "../navbar"
import Top from "../Top"

export default function ZakladniInformace() {
    return (
        <div className="">
              <Top/>
              <header>
                <Navbar/>
                <h1 className="text-2xl p-4 pl-10 bg-gradient-to-l from-black via-yellow-900 to-yellow-700 text-white">ZÁKLADNÍ INFORMACE</h1>
              </header>
            <main className="bg-black min-h-screen bg-gradient-to-tl from-black via-black to-red-950">
              <link href="./output.css" rel="stylesheet"></link>
              <div className="text-left flex mx-auto justify-center max-w-6xl">
                <h2 className="text-2xl p-5 mt-10 text-white animate-fadeIn">Stručný přehled</h2>
              </div>
              <div className="flex max-w-6xl mx-auto text-xl text-pretty">
                <p className="text-white animate-slideInLeft">Češi se v současné době vyskytují v německu počtu cca 50 000 jedinců, přičemž jejich přistěhování mělo historické důvody, ale i důvody dneška. V minulém století se tak jednalo spíše o politickou emigraci, jelikož zdejší lidé byli nespokojeni s režimem a emigrovali do různých zemí, včetně třeba Spojených států amerických či Kanady. Mnoho z těchto lidí se ale usídlilo i v západním Německu. Dnes jsou důvody pro emigraci spíše ekonomické. Lidé hledají lepší životní podmínky, nebo například lepší pracovní a studijní příležitosti. Jiní mají i velmi prostý důvod, a tím je, že se jim daná oblast líbí a nemají problém vystoupit ze své komfortní zóny, přizpůsobit se jiné kultuře, případně se i naučit jejich jazyk.</p>
              </div>
              <div className="text-left flex mx-auto justify-center max-w-6xl">
                <h2 className="text-2xl p-5 mt-10 text-white animate-fadeIn">Z jakého důvodu by mohlo Čecha Německu zaujmout?</h2>
              </div>
              <div className="flex max-w-6xl mx-auto text-xl text-pretty flex-col space-y-10">
                <p className="text-white animate-slideInLeft">Důvody jsou rozhodně pestré, ačkoliv ve své podstatě se často jedná o životní podmínky, nebo i příležitosti rozvoje. Hledět tak na Německo z ekonomických či jiných důvodů je celkem opodstatněné - ačkoliv byste tento fakt neměli říkat vaší prababičce či pradědovi, jelikož tam je více než pravděpodobné, že by na vás koukali lehce s odporem. Současná situace se má tak, že tyto historické aspekty jsou již hluboko v zemi. Tedy alespoň pro většinu lidí. Dnes je vše samozřejmě všechno jinak a jediné minus, které by člověka čekalo po odstěhování se do jiné země, je odloučení od rodiny, svého rodného místa, od známých, od přátel. I přesto ale existuje mezi lidmi dostatečně silná motivace na to, aby se rozhodli tento krok učinit.</p>
                <p className="text-white animate-slideInLeft">Ne všichni lidé se ovšem do Německa odstěhují, mnozí pouze jezdí přes hranice jen do Německa pracovat. Vyšší platy jsou pak to, co by člověka nutilo vystoupit ze své komfortní zóny, jít pracovat do jiného prostředí a možná se i základně naučit jazyk dané země. V případě Němčiny, jedná se tak celkem o výzvu, hlavně v pozdějším věku. Oproti například angličtině má němčina pády a obecně je na první pohled komplexnější. S angličtinou byste v Německu pravděpodobně přežili, ale znalost jazyka vám v prostředí, kde se možná rozhodnete žít, nepochybně prospěje. Kromě pracovního života je zde i aspekt studentského života. Německo vám může nabídnout i kvalitnější vzdělání, jako příklad si můžeme uvést Technickou univerzitu Mnichov. Ta zcela určitě láká mnohé technické nadšence z okolních zemí, jelikož její prestiž je poměrně velká a zároveň má i širší a hlubší záběr do mnohých problematik.</p>
              </div>
              <div className="text-left flex mx-auto justify-center max-w-6xl">
                <h2 className="text-2xl p-5 mt-10 text-white animate-fadeIn">Vyplatí se naučit jazyk?</h2>
              </div>
              <div className="flex max-w-6xl mx-auto text-xl text-pretty flex-col space-y-10">
                <p className="text-white animate-slideInLeft">Pokud se už někdo rozhodně v Německu žít, rozhodně není od věci se naučit i jazyk, jelikož to zcela nepochybně zjednuduší každodenní život. Zároveň to i otevře dveře zcela novému světu. Ti, kteří ovládají více jazyku, by dali této myšlence za pravdu. Vemte si to takhle - ve svém rodném jazyce konzumujeme obrovské množství různých informací. Lidi kolem nás si povídají v tramvaji, díváme se na zprávy, čteme články, nebo třeba projíždíme sociální sítě. Chodíme do restaurací, chodíme do školy. S každým naučeným jazykem se toto znásobí a máme možnost mít přístup k mnohem většímu množství informací (ne že by těch informací bylo málo, dnes jsme doslova přehlcení informacemi, ale jde o princip "poznávání světa podobně, jako malé dítě). Můžeme sledovat regionální zprávy. Můžeme si přečíst jídelní lístek a objednat si pohodlně jídlo, aniž bychom případné jazykové bariéry museli dohánět gestikulováním. Můžeme s lidmi vtipkovat v jejich rodné řeči. Člověku to vytváří i určitý hezký pocit, když ví, že mluví cizí řečí a je schopen jí rozumět a komunikovat v ní.</p>
                <p className="text-white animate-slideInLeft">Konkrétně v Německu je situace poměrně dobrá, ačkoliv záleží region od regionu. Lidé ocení, když se snažíte mluvit jejich rodnou řečí. Pokud ale uvidí, že máte spíše problémy, nabídnou angličtinu brzy sami. Žádné extra naštvání se taktéž nekoná, pokud vyslovíte něco špatně. Rozhodně se nebudete cítit jako ve Francii, kde na jednu stranu nemají rádi, když člověk francouzštinu úplně ignoruje, taky ale nebudou rádi, když budete věci vyslovat nedobře, což zrovna v případě francouzštiny je pro typického člověka slovanského původu poměrně těžké. V německu je situace klidnější. Dokonce se občas setkáte i s tím, že se vás v restauraci zeptají, jak se nějaká základní fráze řekne po vašem, aby vám vaší snahu oplatili. Neplatí to tak u všech, ale jsou zde i jisté regionální rozdíly. Ve spolkových zemí bývalé NDR jsou reakce na snahu mluvit němčinou více neutrální. Zatímco naopak na jihu, hlavně Bavorsko, jsou reakce více procítěné. Není to však podmínkou.</p>
                <p className="text-white animate-slideInLeft">Závěrem lze říci, že naučení jazyka není rozhodně povinnost, ale váš život to udělá značně jednodušším. V německu je stále poměrně časté, že dostanete odpověď: "anglicky mluvím špatně, ale pokusím se".</p>
              </div>
            </main>
            <Footer />
        </div>
    );
}