import Image from "next/image";

export default function Cenik() {
  return (
    <section className="min-h-screen bg-amber-50 flex flex-col justify-center items-center text-center px-4 pt-24">
      <div className="max-w-4xl w-full mx-auto">
        <h1 className="text-[#AE4343]  text-3xl sm:text-6xl   mb-6">
          Ceník a provozní řád
        </h1>

        <div className="relative w-full h-[400px] sm:h-[700px] mx-auto">
          <Image
            src="/cenik.webp"
            alt="Ceník"
            fill
            className="object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
