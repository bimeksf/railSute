"use client";

import Link from "next/link";
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";
import { useState, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();
  const isActive = (path: string) => (pathname === path ? "border-b-2 border-[#E5595B]" : "");

  function handleClick() {
    setOpen((prev) => !prev);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
      
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-transparent sm:bg-[#F0EBE3] text-[#353535] font-bold transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-center p-2 max-w-7xl mx-auto">
        {!open && (
          <div className="relative w-[100px] h-[50px]">
            <Link href={"/"}>
              <Image
                width={50}
                height={50}
                src="/globe.svg"
                alt="Logo společnosti"
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
        )}

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link href="/aktuality" className={`hover:border-b-2 hover:border-[#E5595B] ${isActive("/aktuality")}`}>
              Aktuality
            </Link>
          </li>
          <li>
            <Link href="/cenik" className={`hover:border-b-2 hover:border-[#E5595B] ${isActive("/cenik")}`}>
              Ceník
            </Link>
          </li>
          <li>
            <Link href="/atrakce" className={`hover:border-b-2 hover:border-[#E5595B] ${isActive("/atrakce")}`}>
              Atrakce
            </Link>
          </li>
          <li>
            <Link href="/oslavy" className={`hover:border-b-2 hover:border-[#E5595B] ${isActive("/oslavy")}`}>
              Oslavy
            </Link>
          </li>
          <li>
            <Link href="/skoly" className={`hover:border-b-2 hover:border-[#E5595B] ${isActive("/skoly")}`}>
              Školy a školky
            </Link>
          </li>
        </ul>

        <Link href="/skoly#kontaktni-formular" className="bg-red-500 rounded-2xl p-3 text-white hidden md:block">
          Rezervace
        </Link>

        {/* Mobile menu toggle */}
        <button onClick={handleClick} className="md:hidden">
          {!open ? <FiAlignJustify className="w-6 h-6" /> : <ImCancelCircle className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="bg-[#AE4343] md:hidden px-6 pb-4 ">
          <ul className="flex flex-col gap-4">
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
            <li>
              <Link href="/skoly#kontaktni-formular" >Rezervace</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
