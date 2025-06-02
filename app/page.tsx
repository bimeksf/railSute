import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
    
   <section className="bg-[#00784D] min-h-screen flex ">
        <div className="flex flex-col justify-center items-center w-full max-w-4xl mx-2 text-center px-4 sm:mx-auto">
          <h1 className="text-4xl md:text-7xl text-white my-8">
            Železniční park <br />
            <span className="text-[#FFC779]">plný zábavy!</span>
          </h1>
          <p className="text-lg md:text-2xl text-amber-50 mb-10 sm:w-5xl">
            Vítejte ve světě, kde se sny rozjíždějí po kolejích! Čeká vás den plný smíchu, dobrodružství a nových objevů – v historickém motoráčku, mezi atrakcemi, i v přírodě kolem. Naskočte do vlaku a hurá na cestu za zážitky, které budou bavit děti i dospělé!
          </p>
          <div className="flex gap-4">
            <Link href="/rezervace" className="bg-[#E5595B] rounded-3xl sm:px-8 sm:py-5  px-6 py-6 text-white font-bold hover:bg-amber-50 hover:text-[#E5595B] transition">
              Rezervace
            </Link>
            <Link href="/informace" className="text-white border-2 border-[#E5595B] sm:px-8 sm:py-5 px-6 py-6 rounded-3xl font-bold hover:bg-[#E5595B] transition">
              Více informací
            </Link>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#FFFFFF] flex flex-col justify-center items-center text-center px-4 pt-20">
        <div className="max-w-7xl mx-auto">

      <h1 className="text-[#AE4343] text-3xl sm:text-6xl font-bold mb-6">Náš příběh</h1>
      <p className="text-[#353535] text-lg md:text-2xl mb-12 max-w-4xl">
        Naše železniční dobrodružství se zrodilo na části trati Čejč–Ždánice, která zůstala zachována z Čejče do Uhřic u Kyjova a kterou jsme oživili s láskou k historii i hravosti. Společnost TMŽ s.r.o. si dala za cíl vytvořit místo, kde se potkává rodinná zábava, vůně dobrodružství a příběhy ze světa vlaků.
      </p>
      <div className="relative w-full max-w-4xl aspect-video mb-12 rounded-2xl overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/19g66ezsKAg"
          allowFullScreen
          title="Video o Železničním parku"
          className="w-full h-full"
          />
      </div>
      <div className="max-w-4xl pb-20">
        <p className="text-[#353535] text-lg md:text-2xl mb-12">
          S pomocí Jirky Kotase a nadšenců z Klubu přátel kolejových vozidel z Brna a historických kousků z jeho sbírky získal náš park kouzlo starých časů. Díky podpoře mnoha dalších se nám daří vytvářet prostor, kde si každý najde to svoje – od dětských her až po kouzlo mašinek.
        </p>
        <p className="text-[#353535] text-lg md:text-2xl">
          A víte co? Jsme teprve na začátku! Postupně přibývají tematické stanice, výstavy a atrakce, které spojují svět železnice s přírodou a fantazií. Chceme, aby se Zážitková železnice stala vaším oblíbeným výletním cílem – místem, kam se budete rádi vracet s úsměvem a plnou hlavou vzpomínek.
        </p>
      </div>
          </div>
    </section>


     <section className="min-h-screen bg-[#AE4343] py-20 px-10">
  <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
    <h1 className="text-[#FFC779] text-3xl sm:text-6xl mb-6">Na co se u nás můžete těšit?</h1>

    <p className="text-amber-50 text-lg sm:text-2xl mb-16 max-w-4xl">
      Připravili jsme pro vás nevšední zážitky, které si zamiluje celá rodina. Nasedněte do historického motoráku a vydejte se na cestu za dobrodružstvím, prozkoumejte interaktivní expozice a užijte si den plný her a atrakcí. Co vás tedy čeká?
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
      {/* Box 1 */}
      <div className="flex flex-col items-center pb-10">
        <div className="relative w-64 h-64 mb-6">
          <Image src="/burger.jpg" alt="Historický motorák" fill className="object-cover rounded-xl" />
        </div>
        <h2 className="text-[#FFC779] text-2xl sm:text-4xl pb-5">Historický motorák</h2>
        <p className="text-amber-50 text-center">
          Naskočte do vláčku, který pamatuje staré časy! Podívejte se do kabiny strojvedoucího a splňte si dětský sen alespoň na chvíli.
        </p>
      </div>

      {/* Box 2 */}
      <div className="flex flex-col items-center pb-10">
        <div className="relative w-64 h-64 mb-6">
          <Image src="/burger.jpg" alt="Zábavní park" fill className="object-cover rounded-xl" />
        </div>
        <h2 className="text-[#FFC779] text-2xl sm:text-4xl pb-5">Zábavní park</h2>
        <p className="text-amber-50 text-center">
          Skákací hrad, herní vagón, kolotoč i pískový svět – u nás si děti pořádně vyhrají a rodiče si odpočinou ve stínu lesíka, dají zaslouženou limonádu, kávu nebo třeba i pizzu.
        </p>
      </div>

      {/* Box 3 */}
      <div className="flex flex-col items-center pb-10">
        <div className="relative w-64 h-64 mb-6">
          <Image src="/curry.jpg" alt="Interaktivní expozice" fill className="object-cover rounded-xl" />
        </div>
        <h2 className="text-[#FFC779] text-2xl sm:text-4xl pb-5">Interaktivní expozice</h2>
        <p className="text-amber-50 text-center">
          Vyzkoušejte si, jak funguje železniční signalizace, nebo se ponořte do světa modelové železnice. Zábava pro malé i velké!
        </p>
      </div>
    </div>

    <Link
      href="/atrakce"
      className="mt-10 text-white border-2 border-[#E5595B] sm:px-8 sm:py-5 px-6 py-4 rounded-3xl font-bold hover:bg-[#E5595B] transition"
    >
      Prohlédnout atrakce
    </Link>
  </div>
</section>

     <section className="min-h-screen bg-amber-50 py-20 px-10">
  <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
    <h1 className="text-[#AE4343] text-3xl  sm:text-6xl mb-16">Akce a aktuality</h1>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
      {/* Box 1 */}
      <div className="flex flex-col items-center pb-10">
        <div className="relative w-64 h-64 mb-6">
          <Image src="/burger.jpg" alt="Historický motorák" fill className="object-cover rounded-xl" />
        </div>
        <h2 className="text-[#AE4343] text-2xl sm:text-4xl pb-5">Otevíráme nové atrakce!</h2>
        <p className="text-[#353535] text-center">
         12. března 2025, Gabriela Slezáčková
        </p>
      </div>

      {/* Box 2 */}
      <div className="flex flex-col items-center pb-10">
        <div className="relative w-64 h-64 mb-6">
          <Image src="/burger.jpg" alt="Zábavní park" fill className="object-cover rounded-xl" />
        </div>
        <h2 className="text-[#AE4343] text-2xl sm:text-4xl pb-5">Zábavní park</h2>
        <p className=" text-center text-[#353535]">
     9. března 2025, Gabriela Slezáčková
        </p>
      </div>

      {/* Box 3 */}
      <div className="flex flex-col items-center pb-10">
        <div className="relative w-64 h-64 mb-6">
          <Image src="/curry.jpg" alt="Interaktivní expozice" fill className="object-cover rounded-xl" />
        </div>
        <h2 className="text-[#AE4343] text-2xl sm:text-4xl pb-5">Interaktivní expozice</h2>
        <p className="text-[#353535] text-center">
       6. března 2025, Gabriela Slezáčková
        </p>
      </div>
    </div>

    <Link
      href="/atrakce"
      className="mt-10 text-[#353535] border-2 border-[#E5595B] sm:px-8 sm:py-5 px-6 py-4 rounded-3xl font-bold hover:bg-[#E5595B] transition mb-40"
    >
Čtěte více
    </Link>
    <h1 className="text-[#AE4343] text-3xl sm:text-6xl mb-16">Jak to u nás vypadá?</h1>



               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="relative w-64 h-64">
          <Image
            src="/curry.jpg"
            alt={`public ${i + 1}`}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      ))}



            </div>




  </div>
</section>






    </>
  );
}
