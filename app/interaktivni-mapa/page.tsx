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
            <div className="bg-gradient-to-tl from-black via-black to-red-950 mx-auto min-h-screen justify-center">
                <div>
                    <h1 className="text-2xl mx-auto max-w-6xl text-center justify-center text-white p-5 pt-10">Interaktivní mapa</h1>
                    <p className="text-xl max-w-6xl text-white justify-center mx-auto text-center">Níže se nachází mapa s jednotlivými spolkovými zeměmi Německa. Při rozkliknutí jednotlivého regionu je možné se dozvědět více informací. Některé regiony jsou zmapovány lépe, než jiné. </p>
                </div>
                <div>
                    <div>
                        <img src="de-02invert.jpg" alt="Map of Germany" width="1500" height="1125" useMap="#germanymap"></img>
                    </div>
                    <div>
                    <map name="germanymap" className="left-0">
                        <area target="" alt="Šlesvicko-Holštýnsko" title="Šlesvicko-Holštýnsko" href="/interaktivni-mapa" coords="1150,148,1352,164,1434,260,1630,270,1558,461,1521,567,1458,490,1375,511,1261,416,1206,321,1185,292,1166,268,1161,231" shape="poly"/>
                        <area target="" alt="Hamburk" title="Hamburk" href="/interaktivni-mapa" coords="1389,519,1442,488,1473,554,1415,562" shape="poly"/>
                        <area target="" alt="Meklenbursko - Přední Pomořansko" title="Meklenbursko - Přední Pomořansko" href="/interaktivni-mapa" coords="1566,427,1953,217,2125,477,2112,607,2049,551,1919,623,1776,591,1646,647,1537,564" shape="poly"/>
                        <area target="" alt="Bavorsko" title="Bavorsko" href="/interaktivni-mapa" coords="1283,1561,1267,1442,1378,1360,1444,1333,1532,1383,1659,1344,1752,1370,1823,1527,1905,1643,2035,1754,2022,1823,1972,1850,1876,1929,1913,2064,1818,2041,1731,2067,1572,2080,1466,2110,1407,2078,1466,1847,1500,1786,1442,1611,1391,1553,1330,1519" shape="poly"/>
                        <area target="" alt="Bádensko-Wurttembersko" title="Bádensko-Wurttembersko" href="/interaktivni-mapa" coords="1256,1603,1344,1542,1415,1595,1455,1667,1460,1829,1426,1863,1375,2059,1208,2025,1052,2059,1060,1858,1171,1572" shape="poly"/>
                        <area target="" alt="Porýní-Falc" title="Porýní-Falc" href="/interaktivni-mapa" coords="827,1391,991,1296,1079,1230,1110,1330,1076,1447,1134,1458,1163,1500,1169,1553,1095,1701,1002,1675,981,1580,906,1564,848,1564,808,1452" shape="poly"/>
                        <area target="" alt="Hesensko" title="Hesensko" href="/interaktivni-mapa" coords="1259,1601,1104,1431,1139,1272,1234,1111,1354,1066,1364,1148,1417,1169,1407,1251,1417,1320,1372,1386,1277,1402,1290,1407,1402,1163,1328,1330" shape="poly"/>
                        <area target="" alt="Severní Porýní-Vestfálsko" title="Severní Porýní-Vestfálsko" href="/interaktivni-mapa" coords="1087,1241,840,1363,774,1188,774,997,890,957,1039,830,1087,917,1174,909,1187,803,1277,825,1285,936,1328,999,1267,1074,1158,1241,1121,1291" shape="poly"/>
                        <area target="" alt="Durýnsko" title="Durýnsko" href="/interaktivni-mapa" coords="1426,1293,1434,1095,1545,1036,1606,1110,1670,1177,1760,1216,1826,1206,1794,1285,1752,1336,1646,1341,1606,1373,1529,1394" shape="poly"/>
                        <area target="" alt="Dolní Sasko" title="Dolní Sasko" href="/interaktivni-mapa" coords="1047,830,941,867,890,787,981,607,967,509,1110,485,1216,673,1185,610,1198,443,1277,448,1346,493,1391,535,1479,564,1683,670,1558,739,1595,909,1524,973,1516,1044,1397,1108,1330,1034,1293,928,1275,819,1198,822,1174,901,1100,920" shape="poly"/>
                        <area target="" alt="Brémy" title="Brémy" href="/interaktivni-mapa" coords="1232,647,33" shape="circle"/>
                        <area target="" alt="Sasko-Anhlatsko" title="Sasko-Anhlatsko" href="/interaktivni-mapa" coords="1532,1015,1574,925,1564,736,1693,670,1770,726,1778,811,1799,922,1882,972,1945,993,1929,1028,1799,1065,1792,1187,1712,1190" shape="poly"/>
                        <area target="" alt="Sársko" title="Sársko" href="/interaktivni-mapa" coords="907,1643,80" shape="circle"/>
                        <area target="" alt="Sasko" title="Sasko" href="/interaktivni-mapa" coords="1800,1079,1946,1057,1943,1102,2062,1110,2187,1073,2250,1140,2203,1240,2142,1195,2105,1248,1996,1288,1842,1373,1800,1413,1742,1344,1816,1285,1866,1240,1816,1185" shape="poly"/>
                        <area target="" alt="Braniborsko" title="Braniborsko" href="/interaktivni-mapa" coords="1670,644,1829,610,1935,631,2030,543,2102,604,2094,692,2173,782,2173,885,2192,1052,2064,1100,1935,1081,1958,978,1831,936,1789,901,1795,824,1789,716" shape="poly"/>
                        <area target="" alt="Berlín" title="Berlín" href="/interaktivni-mapa" coords="1974,811,56" shape="circle"/>
                    </map>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            <Footer />
        </div>
    );
}