"use client";

import Image from "next/image";
import Form from "@/componenets/form";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skoly() {
  return (
    <>
      <motion.section
        className="bg-amber-50 min-h-screen pt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div
          className="max-w-4xl px-4 mx-auto text-center pb-20"
          variants={fadeInUp}
        >
          <h1 className="text-[#AE4343] text-3xl sm:text-6xl mb-6">Školy a školky</h1>
          <p className="text-[#353535] text-lg md:text-xl">
            Připravte pro své žáky jedinečný výlet, který zábavnou formou rozvíjí znalosti o přírodě a technice. V Zábavním parku Zážitková železnice v Uhřicích je čeká den plný dobrodružství a poznání.
          </p>
        </motion.div>

        <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center pb-20">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              className="relative w-64 h-64"
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Image src="/curry.jpg" alt="Drezína" fill className="object-cover rounded-xl" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="bg-[#AE4343] min-h-screen pt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div
          className="max-w-4xl px-4 mx-auto text-center text-white pb-20"
          variants={fadeInUp}
        >
          <h1 className="text-[#FFC779] text-3xl sm:text-6xl mb-6">Co zažijete?</h1>
          <p>
            Výlet začíná na nádraží v Uhřicích, kde se děti rozdělí do skupin a vyzkouší si různé aktivity. Následuje jízda historickým motorákem M 240 na stanici Bohumilice, během které děti pozorují krajinu a navštíví strojvedoucího v kabině.
          </p>
        </motion.div>

        <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center pb-20">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              className="relative w-64 h-64"
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Image src="/curry.jpg" alt="Drezína" fill className="object-cover rounded-xl" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl px-4 mx-auto text-center text-white pb-20"
          variants={fadeInUp}
        >
          <p>
            V zábavním parku na ně čekají skákací hrady, kolotoč, pískoviště a další atrakce. Na stanici Bohumilice se děti promění v indiány, vyzkouší si rýžování zlata a navštíví bobří hráz a ropný vrt. Během výletu se děti seznamují s novými i historickými technologiemi a poznávají místní přírodu.
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        className="bg-amber-50 min-h-screen pt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div
          className="max-w-4xl px-4 mx-auto text-center pb-28"
          variants={fadeInUp}
        >
          <h1 className="text-[#AE4343] text-3xl sm:text-6xl mb-6">Proč si vybrat náš výlet?</h1>
          <p className="text-[#353535] text-lg md:text-xl whitespace-pre-line">
            Zábavnou formou rozvíjíme znalosti o přírodě a technice.
            Podporujeme zájem dětí o objevování světa.
            Zajišťujeme bezpečné a pohodlné prostředí.
            Areál je bezbariérový.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl px-4 mx-auto text-center mb-10"
          variants={fadeInUp}
        >
          <h1 className="text-[#AE4343] text-3xl sm:text-6xl mb-6">Praktické informace:</h1>
          <p className="text-[#353535] text-lg md:text-xl whitespace-pre-line">
            Maximální kapacita: 60 dětí + doprovod.
            Cenu vám sdělíme na základě požadavků.
            Po domluvě zajistíme občerstvení.
            Děti obdrží sádrový odlitek k vymalování.
            Autobus přijede přímo na nádraží.
          </p>
          <p className="text-[#353535] text-lg md:text-xl mt-4">
            Pro rezervaci a další informace nás kontaktujte.
            Těšíme se na vaši návštěvu!
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        className="bg-[#124432] min-h-screen pt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div
          className="max-w-4xl px-4 mx-auto text-center text-white mb-10"
          variants={fadeInUp}
        >
          <h1 className="text-[#FFC779] text-3xl sm:text-6xl mb-6">Kontaktujte nás</h1>
          <p className="text-white text-lg md:text-xl">
            Máte zájem o objednání vlaku na míru, máte dotaz či připomínku? Neváhejte nás kontaktovat!
          </p>
        </motion.div>
        <motion.div
          className="mx-auto sm:max-w-5xl pb-20"
          variants={fadeInUp}
        >
          <Form />
        </motion.div>
      </motion.section>
    </>
  );
}
