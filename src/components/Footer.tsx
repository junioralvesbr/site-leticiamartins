import Link from "next/link";
import { linksAndPaths } from "@/data/linksAndPaths";

export default function Footer() {
  return (
    <footer className="text-white bg-first p-8 lg:p-24">
      <div className="flex flex-col gap-24 max-w-7xl mx-auto min-h-64">
        <div className="flex flex-wrap gap-20">
          <div className="flex flex-col flex-2 gap-8">
            <h3 className="border-y-1 border-white uppercase font-titles text-lg py-5">
              Entre em contato
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={linksAndPaths.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-subTitles text-white hover:text-second transition-all"
                >
                  {linksAndPaths.instagram.name}
                </a>
              </li>

              <li>
                <a
                  href={linksAndPaths.facebook.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-subTitles text-white hover:text-second transition-all"
                >
                  {linksAndPaths.facebook.name}
                </a>
              </li>

              <li>
                <a
                  href={linksAndPaths.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-subTitles text-white hover:text-second transition-all"
                >
                  {linksAndPaths.whatsapp.name}
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
                    href={linksAndPaths.inicio.href}
                    className="font-subTitles text-white hover:text-second transition-all"
                  >
                    {linksAndPaths.inicio.name}
                  </Link>
                </li>

                <li>
                  <Link
                    href={linksAndPaths.servicos.href}
                    className="font-subTitles text-white hover:text-second transition-all"
                  >
                    {linksAndPaths.servicos.name}
                  </Link>
                </li>

                <li>
                  <Link
                    href={linksAndPaths.experiencia.href}
                    className="font-subTitles text-white hover:text-second transition-all"
                  >
                    {linksAndPaths.experiencia.name}
                  </Link>
                </li>

                <li>
                  <a
                    href={linksAndPaths.curso.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-subTitles text-white hover:text-second transition-all"
                  >
                    {linksAndPaths.curso.name}
                  </a>
                </li>
              </ul>

              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href={linksAndPaths.residencial.href}
                    className="font-subTitles text-white hover:text-second transition-all"
                  >
                    {linksAndPaths.residencial.name}
                  </Link>
                </li>

                <li>
                  <Link
                    href={linksAndPaths.posMudanca.href}
                    className="font-subTitles text-white hover:text-second transition-all"
                  >
                    {linksAndPaths.posMudanca.name}
                  </Link>
                </li>
                <li>
                  <Link
                    href={linksAndPaths.comercial.href}
                    className="font-subTitles text-white hover:text-second transition-all"
                  >
                    {linksAndPaths.comercial.name}
                  </Link>
                </li>
                <li>
                  <Link
                    href={linksAndPaths.marcenariaInteligente.href}
                    className="font-subTitles text-white hover:text-second transition-all"
                  >
                    {linksAndPaths.marcenariaInteligente.name}
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