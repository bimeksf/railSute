export default function Form() {
  return (
        <form className="flex flex-col space-y-6 mx-4 sm:mx-0">
          <input
            type="text"
            placeholder="Předmět"
            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E5595B] text-lg bg-white"
          />
          <div className="flex flex-col sm:flex-row gap-2">

          <input
            type="text"
            placeholder="Jméno a příjmení"
            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E5595B] text-lg bg-white"
            />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E5595B] text-lg bg-white"
            />
            </div>
          <textarea
            placeholder="Text zprávy"
            rows={6}
            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E5595B] text-lg resize-none bg-white"
          />


          <button
            type="submit"
            className=" border-2 border-[#c44446] hover:bg-[#c44446] transition text-white font-bold  py-2 px-4  sm:py-4 sm:px-8 rounded-3xl text-lg"
          >
            Odeslat formulář
          </button>
        </form>
  );
}
