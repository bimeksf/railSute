import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#AE4343] text-white py-10 px-4 text-sm">
      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
        <div>
          <h3 className="font-semibold text-yellow-500">E-mail</h3>
          <p>info@zazitkovazeleznice.cz</p>
        </div>
        <div>
          <h3 className="font-semibold text-yellow-500">Telefon</h3>
          <p>+420 725 784 000</p>
        </div>
        <div>
          <h3 className="font-semibold text-yellow-500">TMŽ s.r.o.</h3>
          <p>Polská 1271/14, Vinohrady</p>
          <p>120 00 Praha 2</p>
          <p>IČ: 06633404</p>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-8">
        <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="w-6 h-6 hover:text-yellow-400 transition" />
        </Link>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="w-6 h-6 hover:text-yellow-400 transition" />
        </a>
      </div>

      <p className="mt-8 text-center">
        © {year} TMŽ s.r.o. Všechna práva vyhrazena.
      </p>
    </footer>
  );
}
