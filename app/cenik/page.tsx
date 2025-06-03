"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Cenik() {
  return (
    <section className="min-h-screen bg-amber-50 flex flex-col justify-center items-center text-center px-4 pt-24">
      <motion.div
        className="max-w-4xl w-full mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <h1 className="text-[#AE4343] text-3xl sm:text-6xl mb-6">
          Ceník a provozní řád
        </h1>

        <motion.div
          className="relative w-full h-[400px] sm:h-[700px] mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/cenik.webp"
            alt="Ceník"
            fill
            className="object-contain rounded-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
