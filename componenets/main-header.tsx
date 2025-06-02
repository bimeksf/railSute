import Link from "next/link";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className="fixed top-0 w-full  z-50 bg-transparent text-white">
      <nav className="flex justify-between items-center p-10 max-w-7xl mx-auto">
        <div className="relative w-[100px] h-[50px]">
          <Image
            width={100}
            height={50}
            src="/globe.svg" 
            alt="Logo společnosti"
            style={{ objectFit: "contain" }} 
          />
        </div>
        <ul className="flex gap-13">
          <li>
            <Link href="/">Aktuality</Link>
          </li>
          <li>
            <Link href="/cenik">Ceník</Link>
          </li>
          <li>
            <Link href="/atrakce">Atrakce</Link>
          </li>
          <li>
            <Link href="/oslavy">Oslavy</Link>
          </li>
          <li>
            <Link href="/skoly">Školy a školky</Link>
          </li>
        </ul>
        <Link href="/rezervace" className="bg-red-500 rounded-2xl p-4 text-white">
          Rezervace
        </Link>
      </nav>
    </header>
  );
}