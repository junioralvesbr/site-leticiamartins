import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white bg-deepViolet-700 p-8 lg:p-24">
      <div className="flex flex-col gap-24 max-w-7xl mx-auto min-h-64">
        <div className="flex flex-wrap gap-20">
          <div className="flex flex-col flex-2 gap-8">
            <h3 className="border-y-1 border-white uppercase font-titles text-lg py-5">
              Entre em contato
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://www.instagram.com/leticiamartins.organizer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-subTitles text-white hover:text-deepViolet-400 transition-all"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/leticiamartinsorganizer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-subTitles text-white hover:text-deepViolet-400 transition-all"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/5544998138138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-subTitles text-white hover:text-deepViolet-400 transition-all"
                >
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8 min-w-72">
            <h3 className="border-y-1 border-white uppercase font-titles text-lg py-5">
              Explore
            </h3>

            <div className="flex flex-wrap justify-between">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="/"
                    className="font-subTitles text-white hover:text-deepViolet-400 transition-all"
                  >
                    Inicio
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#services"
                    className="font-subTitles text-white hover:text-deepViolet-400 transition-all"
                  >
                    Serviços
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#expertise"
                    className="font-subTitles text-white hover:text-deepViolet-400 transition-all"
                  >
                    Experiência
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#curso"
                    className="font-subTitles text-white hover:text-deepViolet-400 transition-all"
                  >
                    Curso
                  </Link>
                </li>
              </ul>

              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="/residencial"
                    className="font-subTitles text-white hover:text-deepViolet-400 transition-all"
                  >
                    Residencial
                  </Link>
                </li>

                <li>
                  <Link
                    href="/posmudanca"
                    className="font-subTitles text-white hover:text-deepViolet-400 transition-all"
                  >
                    Pós Mudança
                  </Link>
                </li>
                <li>
                  <Link
                    href="/comercial"
                    className="font-subTitles text-white hover:text-deepViolet-400 transition-all"
                  >
                    Comercial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consultoria"
                    className="font-subTitles text-white hover:text-deepViolet-400 transition-all"
                  >
                    Consultoria
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-right border-t-1 border-white py-2">
          © 2025 Leticia Martins. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}