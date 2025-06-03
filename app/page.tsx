"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUpDelayed = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <>
      <section className="bg-[#00784D] min-h-screen flex ">
        <motion.div
          className="flex flex-col justify-center items-center w-full max-w-4xl mx-2 text-center px-4 sm:mx-auto"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-4xl md:text-7xl text-white my-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Železniční park <br />
            <motion.span
              className="text-[#FFC779]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              plný zábavy!
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-amber-50 mb-10 sm:w-5xl"
            variants={fadeInUpDelayed}
          >
            Vítejte ve světě, kde se sny rozjíždějí po kolejích! Čeká vás den
            plný smíchu, dobrodružství a nových objevů – v historickém motoráčku,
            mezi atrakcemi, i v přírodě kolem. Naskočte do vlaku a hurá na cestu
            za zážitky, které budou bavit děti i dospělé!
          </motion.p>
          <motion.div className="flex gap-4" variants={staggerContainer} initial="initial" animate="animate">
            <motion.div variants={fadeInUpDelayed}>
              <Link
                href="/skoly#kontaktni-formular"
                className="bg-[#E5595B] rounded-3xl sm:px-8 sm:py-5  px-6 py-6 text-white font-bold hover:bg-amber-50 hover:text-[#E5595B] transition"
              >
                Rezervace
              </Link>
            </motion.div>
            <motion.div variants={fadeInUpDelayed}>
              <Link
                href="/informace"
                className="text-white border-2 border-[#E5595B] sm:px-8 sm:py-5 px-6 py-6 rounded-3xl font-bold hover:bg-[#E5595B] transition"
              >
                Více informací
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="min-h-screen bg-[#FFFFFF] flex flex-col justify-center items-center text-center px-4 pt-20">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h1
            className="text-[#AE4343] text-3xl sm:text-6xl font-bold mb-6"
            variants={fadeInUpDelayed}
          >
            Náš příběh
          </motion.h1>
          <motion.p className="text-[#353535] text-lg md:text-2xl mb-12 max-w-4xl" variants={fadeInUpDelayed}>
            Naše železniční dobrodružství se zrodilo na části trati Čejč–Ždánice,
            která zůstala zachována z Čejče do Uhřic u Kyjova a kterou jsme oživili
            s láskou k historii i hravosti. Společnost TMŽ s.r.o. si dala za cíl
            vytvořit místo, kde se potkává rodinná zábava, vůně dobrodružství a příběhy
            ze světa vlaků.
          </motion.p>
          <motion.div
            className="relative w-full max-w-4xl aspect-video mb-12 rounded-2xl overflow-hidden"
            variants={fadeInUpDelayed}
          >
            <iframe
              src="https://www.youtube.com/embed/19g66ezsKAg"
              allowFullScreen
              title="Video o Železničním parku"
              className="w-full h-full"
            />
          </motion.div>
          <motion.div className="max-w-4xl pb-20">
            <motion.p className="text-[#353535] text-lg md:text-2xl mb-12" variants={fadeInUpDelayed}>
              S pomocí Jirky Kotase a nadšenců z Klubu přátel kolejových vozidel z Brna
              a historických kousků z jeho sbírky získal náš park kouzlo starých časů.
              Díky podpoře mnoha dalších se nám daří vytvářet prostor, kde si každý
              najde to svoje – od dětských her až po kouzlo mašinek.
            </motion.p>
            <motion.p className="text-[#353535] text-lg md:text-2xl" variants={fadeInUpDelayed}>
              A víte co? Jsme teprve na začátku! Postupně přibývají tematické stanice,
              výstavy a atrakce, které spojují svět železnice s přírodou a fantazií.
              Chceme, aby se Zážitková železnice stala vaším oblíbeným výletním cílem –
              místem, kam se budete rádi vracet s úsměvem a plnou hlavou vzpomínek.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      <section className="min-h-screen bg-[#AE4343] py-20 px-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h1 className="text-[#FFC779] text-3xl sm:text-6xl mb-6" variants={fadeInUpDelayed}>
            Na co se u nás můžete těšit?
          </motion.h1>

          <motion.p className="text-amber-50 text-lg sm:text-2xl mb-16 max-w-4xl" variants={fadeInUpDelayed}>
            Připravili jsme pro vás nevšední zážitky, které si zamiluje celá rodina. Nasedněte
            do historického motoráku a vydejte se na cestu za dobrodružstvím, prozkoumejte
            interaktivní expozice a užijte si den plný her a atrakcí. Co vás tedy čeká?
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center pb-10"
                variants={fadeInUpDelayed}
              >
                <div className="relative w-64 h-64 mb-6">
                  <Image
                    src={i === 3 ? "/curry.jpg" : "/burger.jpg"}
                    alt={`Box ${i}`}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <h2 className="text-[#FFC779] text-2xl sm:text-4xl pb-5">
                  {i === 1
                    ? "Historický motorák"
                    : i === 2
                    ? "Zábavní park"
                    : "Interaktivní expozice"}
                </h2>
                <p className="text-amber-50 text-center">
                  {i === 1
                    ? "Naskočte do vláčku, který pamatuje staré časy! Podívejte se do kabiny strojvedoucího a splňte si dětský sen alespoň na chvíli."
                    : i === 2
                    ? "Skákací hrad, herní vagón, kolotoč i pískový svět – u nás si děti pořádně vyhrají a rodiče si odpočinou ve stínu lesíka, dají zaslouženou limonádu, kávu nebo třeba i pizzu."
                    : "Vyzkoušejte si, jak funguje železniční signalizace, nebo se ponořte do světa modelové železnice. Zábava pro malé i velké!"}
                </p>
              </motion.div>
            ))}
          </div>

          <Link
            href="/atrakce"
            className="mt-10 text-white border-2 border-[#E5595B] sm:px-8 sm:py-5 px-6 py-4 rounded-3xl font-bold hover:bg-[#E5595B] transition"
          >
            Prohlédnout atrakce
          </Link>
        </motion.div>
      </section>

      <section className="min-h-screen bg-amber-50 py-20 px-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h1 className="text-[#AE4343] text-3xl  sm:text-6xl mb-16" variants={fadeInUpDelayed}>
            Akce a aktuality
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center pb-10"
                variants={fadeInUpDelayed}
              >
                <div className="relative w-64 h-64 mb-6">
                  <Image
                    src={i === 3 ? "/curry.jpg" : "/burger.jpg"}
                    alt={`Aktualita ${i}`}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <h2 className="text-[#AE4343] text-2xl sm:text-4xl pb-5">
                  {i === 1
                    ? "Otevíráme nové atrakce!"
                    : i === 2
                    ? "Zábavní park"
                    : "Interaktivní expozice"}
                </h2>
                <p className="text-[#353535] text-center">
                  {i === 1
                    ? "12. března 2025, Gabriela Slezáčková"
                    : i === 2
                    ? "9. března 2025, Gabriela Slezáčková"
                    : "6. března 2025, Gabriela Slezáčková"}
                </p>
              </motion.div>
            ))}
          </div>

          <Link
            href="/atrakce"
            className="mt-10 text-[#353535] border-2 border-[#E5595B] sm:px-8 sm:py-5 px-6 py-4 rounded-3xl font-bold hover:bg-[#E5595B] transition mb-40"
          >
            Čtěte více
          </Link>
          <motion.h1 className="text-[#AE4343] text-3xl sm:text-6xl mb-16" variants={fadeInUpDelayed}>
            Jak to u nás vypadá?
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.div
                key={i}
                className="relative w-64 h-64"
                variants={fadeInUpDelayed}
              >
                <Image
                  src="/curry.jpg"
                  alt={`public ${i + 1}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
