import Link from "next/link";

export default function Home() {
  return (
    <>
    
   <section className="bg-[#00784D] min-h-screen flex pt-[120px]">
        <div className="flex flex-col justify-center items-center w-full max-w-4xl mx-2 text-center px-4 sm:mx-auto">
          <h1 className="text-4xl md:text-7xl text-white my-8">
            Železniční park <br />
            <span className="text-[#FFC779]">plný zábavy!</span>
          </h1>
          <p className="text-lg md:text-2xl text-amber-50 mb-10 sm:w-5xl">
            Vítejte ve světě, kde se sny rozjíždějí po kolejích! Čeká vás den plný smíchu, dobrodružství a nových objevů – v historickém motoráčku, mezi atrakcemi, i v přírodě kolem. Naskočte do vlaku a hurá na cestu za zážitky, které budou bavit děti i dospělé!
          </p>
          <div className="flex gap-4">
            <Link href="/rezervace" className="bg-[#E5595B] rounded-3xl sm:px-8 sm:py-5  px-6 py-6 text-white font-bold">
              Rezervace
            </Link>
            <Link href="/informace" className="text-white border-2 border-[#E5595B] sm:px-8 sm:py-5 px-6 py-6 rounded-3xl font-bold">
              Více informací
            </Link>
          </div>
        </div>
      </section>

        <section className="h-screen bg-[#AE4343]">
        <h1>Na co se u nás můžete těšit?</h1>
        <p>Připravili jsme pro vás nevšední zážitky, které si zamiluje celá rodina. Nasedněte do historického motoráku a vydejte se na cestu za dobrodružstvím, prozkoumejte interaktivní expozice a užijte si den plný her a atrakcí. Co vás tedy čeká?</p>
          <div>

              <div>1</div>
              <div>2</div>
              <div>3</div>



          </div>


        </section>


        <section className="h-screen">




        </section>


    </>
  );
}
