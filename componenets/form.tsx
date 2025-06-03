'use client';

import { useActionState   } from "react";
import { addPost } from "@/lib/actions";

type FormStateType = {
  message: string;
  success: boolean;
};

export default function Form() {
  const initialState: FormStateType = {
    message: '',
    success: false,
  };

  const [state, formAction] = useActionState(addPost, initialState);
  return (
    <div>
      <form 
      id="kontaktni-formular"
        className="flex flex-col space-y-6 mx-4 sm:mx-0"
        action={formAction}
      >
        <input
          name="title"
          type="text"
          placeholder="Předmět"
          className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E5595B] text-lg bg-white"
        />
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            name="name"
            type="text"
            placeholder="Jméno a příjmení"
            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E5595B] text-lg bg-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E5595B] text-lg bg-white"
          />
        </div>
        <textarea
          name="description"
          placeholder="Text zprávy"
          rows={6}
          className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E5595B] text-lg resize-none bg-white"
        />
    <input
  type="text"
  name="company"
  className="hidden"
  tabIndex={-1}
  autoComplete="off"
/>
        <button
          type="submit"
          className="border-2 border-[#c44446] hover:bg-[#c44446] transition text-white font-bold py-2 px-4 sm:py-4 sm:px-8 rounded-3xl text-lg"
        >
          Odeslat formulář
        </button>
      </form>

      {state.message && (
        <p
          className={`max-w-md mx-auto mt-4 p-3 rounded text-center font-medium ${
            state.success
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
