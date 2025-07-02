import { links } from "@/data/links";
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
              {links.socialMedia.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-subTitles text-white hover:text-deepViolet-400 transition-all"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8 min-w-72">
            <h3 className="border-y-1 border-white uppercase font-titles text-lg py-5">
              Explore
            </h3>

            <div className="flex flex-wrap justify-between">
              <ul className="flex flex-col gap-4">
                {links.internal.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className="font-subTitles text-white hover:text-deepViolet-400 transition-all"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-col gap-4">
                {links.navigation.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className="font-subTitles text-white hover:text-deepViolet-400 transition-all"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
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