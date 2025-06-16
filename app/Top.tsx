import Link from "next/link";

export default function Top() {
    return (
        <div className="bg-black flex items-center min-h-20 bg-gradient-to-l from-black to-gray-900">
            <Link href="/" className="text-3xl font-extrabold p-5 pl-10 text-white hover:text-yellow-500 transition-all duration-500">Češi v Německu</Link>
        </div>
    )
}