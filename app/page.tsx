import Navbar from "./navbar";
import OStrance from "./o-strance";
import Top from "./Top";

export default function Home() {
  return (
    <div className="">
      <div className="text-4xl p-3 bg-amber-500 text-center">K 2.6.2025 byly řešeny technické problémy s GitHub Actions, obsah bude dodán v nejbližší možné době</div>
      <Top/>
      <header>
        <Navbar/>
        <h1 className="text-2xl p-3 pl-10 bg-gradient-to-l from-yellow-800 to-yellow-300">HLAVNÍ STRÁNKA</h1>
      </header>
    <main>
      <link href="./output.css" rel="stylesheet"></link>
      <div className="min-h-screen text-center flex mx-auto justify-center bg-white max-w-6xl">
        <h1 className="text-4xl p-5 mt-10">OBSAH BRZY</h1>
      </div>
    </main>
    </div>
  );
}
