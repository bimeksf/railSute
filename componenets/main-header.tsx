
"use client"

import Link from "next/link";
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
export default function MainHeader() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(prev => !prev);
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent text-white">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">

  { !open &&      <div className="relative w-[100px] h-[50px]">
          <Image
            width={100}
            height={50}
            src="/globe.svg"
            alt="Logo společnosti"
            style={{ objectFit: "contain" }}
          />
        </div>}

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          <li><Link href="/">Aktuality</Link></li>
          <li><Link href="/cenik">Ceník</Link></li>
          <li><Link href="/atrakce">Atrakce</Link></li>
          <li><Link href="/oslavy">Oslavy</Link></li>
          <li><Link href="/skoly">Školy a školky</Link></li>
        </ul>

        <Link href="/rezervace" className="bg-red-500 rounded-2xl p-3 text-white hidden md:block">
          Rezervace
        </Link>

        {/* Mobile menu toggle */}
        <button onClick={handleClick} className="md:hidden">
         { !open ?  <FiAlignJustify className="w-6 h-6" /> : <ImCancelCircle  className="w-6 h-6"/>}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="bg-[#AE4343] md:hidden px-6 pb-4 ">
          <ul className="flex flex-col gap-4">
            <li><Link href="/">Aktuality</Link></li>
            <li><Link href="/cenik">Ceník</Link></li>
            <li><Link href="/atrakce">Atrakce</Link></li>
            <li><Link href="/oslavy">Oslavy</Link></li>
            <li><Link href="/skoly">Školy a školky</Link></li>
            <li><Link href="/rezervace">Rezervace</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
