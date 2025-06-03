import Form from "@/componenets/form";
import Image from "next/image";

export default function oslav() {
  return (
    <>
      {/* Úvod */}
      <section className="bg-amber-50 min-h-screen pt-24">
        <div className="max-w-4xl px-4 mx-auto text-center flex flex-col items-center">
          <h1 className="text-[#AE4343] text-3xl sm:text-6xl mb-10">Oslavte s námi den plný zážitků!</h1>
          <p className="text-[#353535] text-lg md:text-xl">
          Hledáte místo, kde se děti budou celý den smát, běhat, tvořit a zažívat jedno dobrodružství za druhým? Zábavní park Zážitková železnice je jako stvořený pro narozeninové oslavy, setkání kamarádů nebo rodinné dny plné radosti. A když budete chtít, klidně i pro firemní akce.
          </p>
        </div>
              <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="relative w-64 h-64" key={i}>
              <Image src="/curry.jpg" alt="Motorák" fill className="object-cover rounded-xl" />
            </div>
          ))}
        </div>

            <div className="max-w-4xl px-4 mx-auto text-center flex flex-col items-center">
          <p className="text-[#353535] text-lg md:text-xl">
         Připravíme pro vás program na míru – ať slaví tříletý strojvůdce nebo desetiletá dobrodružka. Můžete se těšit na jízdu historickým motorákem, skákací hrad, kolotoč, pískový svět, tvořivé dílničky nebo projížďku šlapací drezínou. Náš areál nabídne spoustu prostoru pro hraní i odpočinek, a vy budete mít vše jen pro sebe.
          </p>
          <p className="text-[#353535] text-lg md:text-xl">
            Zajistíme i občerstvení, a pokud si budete přát, připravíme stylovou výzdobu nebo fotokoutek pro památeční snímky.
Oslavy u nás jsou vhodné pro narozeniny, srazy vláčkařů, školní rozloučení i různé tematické dny.
          </p>
          <p className="text-[#353535] text-lg md:text-xl">
            Cena se odvíjí podle programu a délky pronájmu. Rádi vám připravíme nabídku na míru. Pro rezervaci a další informace nás stačí kontaktovat.Hurá do toho!
          </p>
        </div>
      </section>

    

  

     

      {/* Drezína */}
      <section className="bg-[#124432] min-h-screen pt-24">
        <div className="max-w-4xl px-4 mx-auto text-center text-white mb-10">
          <h1 className="text-[#FFC779] text-3xl sm:text-6xl mb-6">Kontaktujte nás</h1>
          <p className="text-[#ffff] text-lg md:text-xl">
           Máte zájem o objednání vlaku na míru, máte dotaz či připomínku? Neváhejte nás kontaktovat!
          </p>
        
        </div>

            <Form/>

      </section>

  
    </>
  );
}
