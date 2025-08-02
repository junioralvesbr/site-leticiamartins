'use client';
import { useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import AvatarImage from "./ui/avatar-image";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";


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
        <Link href="/">
          <AvatarImage />
        </Link>

        <motion.ul
          className="flex justify-between items-center right-0 absolute z-10"
          style={{ width: smoothWidth }}
          transition={{ duration: 5, ease: 'easeInOut' }}
        >
          <li>
            <Link
              href="/"
              className="font-subTitles text-zinc-600 hover:text-deepViolet-600 transition-all"
            >
              Inicio
            </Link>
          </li>

          <li className="group">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Serviços">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/residencial">Organização Residencial</HoveredLink>
                  <HoveredLink href="/posmudanca">Pós Mudança</HoveredLink>
                  <HoveredLink href="/comercial">Organização Comercial</HoveredLink>
                  <HoveredLink href="/consultoria">Consultoria</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </li>

          <li>
            <Link
              href="/#expertise"
              className="font-subTitles text-zinc-600 hover:text-deepViolet-600 transition-all"
            >
              Experiência
            </Link>
          </li>

          <li>
            <a
              href="https://curso.leticiamartins.com.br/" target="_blank" rel="noopener noreferrer">
              Curso
            </a>
          </li>


          <li className="group">
            <a
              href="https://wa.me/5544998138138"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border-1 rounded-full border-deepViolet-600 px-6 py-2 group-hover:bg-deepViolet-600 transition-all">
                <p className="font-subTitles text-deepViolet-600 group-hover:text-white transition-all">
                  Contato
                </p>
              </div>
            </a>
          </li>
        </motion.ul>
      </div>
    </nav>
  )
}