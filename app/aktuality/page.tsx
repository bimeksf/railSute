"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function aktuality() {
  return (
    <>
      <section className="bg-amber-50 min-h-screen px-4 pt-24 ">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          <h1 className="text-[#AE4343] text-3xl sm:text-6xl mb-16">Akce a aktuality</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center pb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="relative w-64 h-64 mb-6">
                  <Image
                    src="/curry.jpg"
                    alt="Interaktivní expozice"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <h2 className="text-[#AE4343] text-2xl sm:text-4xl pb-5">Interaktivní expozice</h2>
                <p className="text-[#353535] text-center">{12 + i}. března 2025, Gabriela Slezáčková</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
