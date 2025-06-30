'use client';
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import AvatarImage from "./ui/avatar-image";

export default function NavBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 0.01], ['100%', '30%'])
  const itemOpacity = useTransform(scrollYProgress, [0, 0.02], [0, 1])
  const itemScale = useTransform(scrollYProgress, [0, 0.02], [0, 1])

  const smoothWidth = useSpring(width, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  const smoothOpacity = useSpring(itemOpacity, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  const smoothScale = useSpring(itemScale, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  return (
    <div className="flex items-center relative">
      <a href="#header">
        <motion.div
          style={{ opacity: smoothOpacity, scale: smoothScale }}
          transition={{ duration: 5, ease: 'easeInOut' }}
        >
          <AvatarImage />
        </motion.div>
      </a>

      <motion.ul
        className="flex justify-between items-center right-0 absolute z-10"
        style={{ width: smoothWidth }}
        transition={{ duration: 5, ease: 'easeInOut' }}
      >
        <li>
          <a href="#services" className="font-subTitles text-zinc-600 hover:text-deepViolet-600 transition-all">
            Serviços
          </a>
        </li>
        <li>
          <a href="#about" className="font-subTitles text-zinc-600 hover:text-deepViolet-600 transition-all">
            Sobre
          </a>
        </li>
        <li>
          <a href="#pictures" className="font-subTitles text-zinc-600 hover:text-deepViolet-600 transition-all">
            Curso
          </a>
        </li>
        <li className="group">
          <a href="#contato">
            <div className="border-1 rounded-full border-deepViolet-600 px-6 py-2 group-hover:bg-deepViolet-600 transition-all">
              <p className="font-subTitles text-deepViolet-600 group-hover:text-white transition-all">
                Contato
              </p>
            </div>
          </a>
        </li>
      </motion.ul>
    </div>
  )
}