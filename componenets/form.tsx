export default function Form() {
  return (
      <div className="max-w-lg mx-auto  py-20">
        <form className="flex flex-col space-y-6 ">
          <input
            type="text"
            placeholder="Předmět"
            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E5595B] text-lg bg-white"
          />
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
          <textarea
            placeholder="Text zprávy"
            rows={6}
            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E5595B] text-lg resize-none bg-white"
          />

          <button
            type="submit"
            className=" border-2 border-[#c44446] hover:bg-[#c44446] transition text-white font-bold py-4 px-8 rounded-3xl text-lg"
          >
            Odeslat formulář
          </button>
        </form>
      </div>
  );
}
