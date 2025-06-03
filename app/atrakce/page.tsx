"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Atrakce() {
  return (
    <>
      {/* Úvod */}
      <section className="bg-amber-50 h-96 pt-24">
        <motion.div
          className="max-w-4xl px-4 mx-auto text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[#AE4343] text-3xl sm:text-6xl mb-10">Na co se u nás můžete těšit?</h1>
          <p className="text-[#353535] text-lg md:text-xl">
            V našem světě mašinek a smíchu se nudit rozhodně nebudete! Připravili jsme hromadu zážitků, které budou bavit malé dobrodruhy, jejich rodiče i prarodiče. Tak naskočte, dobrodružství právě začíná!
          </p>
        </motion.div>
      </section>

      {/* Motorák */}
      <section className="bg-[#AE4343] min-h-screen pt-24">
        <motion.div
          className="max-w-4xl px-4 mx-auto text-center text-white mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[#FFC779] text-3xl sm:text-6xl mb-6">Motorák</h1>
          <p className="mb-4">
            Tenhle fešák na kolejích vás sveze časem zpátky – a taky pěkně krajinou dopředu! Jízda historickým motorákem M 240 je zážitek s velkým „Z“. A víte, co je nejlepší? Děti se mohou za jízdy podívat až k samotnému strojvedoucímu do kabiny!
          </p>
          <p>Jezdíme hlavně o prázdninových víkendech a během speciálních akcí.</p>
        </motion.div>

        <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center pb-20">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              className="relative w-64 h-64"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Image src="/curry.jpg" alt="Motorák" fill className="object-cover rounded-xl" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Zábavní park */}
      <section className="bg-amber-50 min-h-screen pt-24">
        <motion.div
          className="max-w-4xl px-4 mx-auto text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[#AE4343] text-3xl sm:text-6xl mb-6">Zábavní park</h1>
          <p className="text-[#353535] text-lg">
            Skákání, kutění, hraní i točení – v našem parku to žije od rána do večera. Skákací hrad, kolotoč, pískový svět, herní vagon, modelová železnice i tvořivé dílničky. A když přijde hlad, čeká vás občerstvení přímo na stanici.
          </p>
        </motion.div>

        <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-20">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              className="flex flex-col items-center pb-10"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="relative w-64 h-64 mb-4">
                <Image src="/curry.jpg" alt="Zábavní park" fill className="object-cover rounded-xl" />
              </div>
              <h2 className="text-[#AE4343] text-2xl sm:text-4xl">Interaktivní expozice</h2>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Drezína */}
      <section className="bg-[#124432] min-h-screen pt-24">
        <motion.div
          className="max-w-4xl px-4 mx-auto text-center text-white mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[#FFC779] text-3xl sm:text-6xl mb-6">Šlapací drezína</h1>
          <p>
            Nasedněte, šlápněte a hurá na výlet! Naše šlapací drezína je ideální pro rodinnou zábavu s kapkou pohybu.
            Po cestě se pokocháte krajinou a uvidíte svět z jiného úhlu – třeba z výšky dřevěného pražce.
          </p>
          <p className="mt-4">
            Delší jízdy si můžete rezervovat ve všední dny. O víkendech (kdy jezdí motorák) si to švihneme jen na kratší štreku.
          </p>
        </motion.div>

        <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center pb-20">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              className="relative w-64 h-64"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Image src="/curry.jpg" alt="Drezína" fill className="object-cover rounded-xl" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Western */}
      <section className="bg-amber-50 min-h-screen pt-24">
        <motion.div
          className="max-w-4xl px-4 mx-auto text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[#AE4343] text-3xl sm:text-6xl mb-6">Westernové městečko</h1>
          <p className="text-[#353535] text-lg">
            Připravte se na neobyčejný zážitek, který vás přenese do časů kovbojů a indiánů. V našem Westernovém městečku v Bohumilicích na vás čeká spousta dobrodružství. Staňte se součástí divokého západu, vyzkoušejte si rýžování zlata, střelbu a prozkoumejte indiánskou vesničku. Můžete se také těšit na návštěvu bobří hráze a ropného vrtu.
          </p>
        </motion.div>

        <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center pb-20">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              className="relative w-64 h-64"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Image src="/curry.jpg" alt="Western" fill className="object-cover rounded-xl" />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
