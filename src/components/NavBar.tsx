'use client';
import { useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import AvatarImage from "./ui/avatar-image";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { linksAndPaths } from "@/data/linksAndPaths";


export default function NavBar() {
  const [active, setActive] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 0.01], ['100%', '40%'])

  const smoothWidth = useSpring(width, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-xl bg-white/70 hidden lg:block">
      <div className="flex items-center relative max-w-7xl mx-auto">
        <Link href={linksAndPaths.inicio.href}>
          <AvatarImage />
        </Link>

        <motion.ul
          className="flex justify-between items-center right-0 absolute z-10"
          style={{ width: smoothWidth }}
          transition={{ duration: 5, ease: 'easeInOut' }}
        >
          <li>
            <Link
              href={linksAndPaths.inicio.href}
              className="font-subTitles text-zinc-600 hover:text-third transition-all"
            >
              {linksAndPaths.inicio.name}
            </Link>
          </li>

          <li className="group">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Serviços">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href={linksAndPaths.residencial.href}>
                    {linksAndPaths.residencial.name}
                  </HoveredLink>
                  <HoveredLink href={linksAndPaths.posMudanca.href}>
                    {linksAndPaths.posMudanca.name}
                  </HoveredLink>
                  <HoveredLink href={linksAndPaths.comercial.href}>
                    {linksAndPaths.comercial.name}
                  </HoveredLink>
                  <HoveredLink href={linksAndPaths.marcenariaInteligente.href}>
                    {linksAndPaths.marcenariaInteligente.name}
                  </HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </li>

          <li>
            <Link
              href={linksAndPaths.experiencia.href}
              className="font-subTitles text-zinc-600 hover:text-third transition-all"
            >
              {linksAndPaths.experiencia.name}
            </Link>
          </li>

          <li>
            <a
              href={linksAndPaths.curso.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-subTitles text-zinc-600 hover:text-third transition-all"
            >
              {linksAndPaths.curso.name}
            </a>
          </li>


          <li className="group">
            <a
              href={linksAndPaths.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border-1 rounded-full border-third px-6 py-2 group-hover:bg-first transition-all">
                <p
                  className="font-subTitles text-third transition-all group-hover:text-white"
                >
                  {linksAndPaths.contato.name}
                </p>
              </div>
            </a>
          </li>
        </motion.ul>
      </div>
    </nav>
  )
}