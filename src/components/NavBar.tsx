'use client';
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function NavBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 0.01], ['100%', '30%'])

  const smoothWidth = useSpring(width, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  return (
    <motion.ul
      className="flex justify-between items-center ml-auto"
      style={{ width: smoothWidth }}
      transition={{ duration: 5, ease: 'easeInOut' }}
    >
      <li>
        <a href="#serviços" className="font-ptSerif text-zinc-600 hover:text-deepViolet-600 transition-all">
          Serviços
        </a>
      </li>
      <li>
        <a href="#sobre" className="font-ptSerif text-zinc-600 hover:text-deepViolet-600 transition-all">
          Sobre
        </a>
      </li>
      <li>
        <a href="#curso" className="font-ptSerif text-zinc-600 hover:text-deepViolet-600 transition-all">
          Curso
        </a>
      </li>
      <li className="group">
        <a href="#contato">
          <div className="border-1 rounded-full border-deepViolet-600 px-6 py-2 group-hover:bg-deepViolet-600 transition-all">
            <p className="font-ptSerif text-deepViolet-600 group-hover:text-white transition-all">
              Contato
            </p>
          </div>
        </a>
      </li>
    </motion.ul>
  )
}