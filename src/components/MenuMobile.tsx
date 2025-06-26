'use client'

import { useState } from "react";
import { motion } from "motion/react";
import { MenuButton } from "./ui/menu-button";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function MenuMobile() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-end-safe">
      <MenuButton
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        strokeWidth="8"
        color="#401952"
        lineProps={{ strokeLinecap: "round" }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        width="24"
        height="24"
      // style={menuButtonStyle}
      />


      <motion.div
        className="absolute top-12 bottom-0 left-0 right-0 h-screen overflow-hidden bg-[rgba(255,255,255,0.9)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      >
        <div className="flex justify-center items-center h-full relative">
          <ul className="flex flex-col gap-15">
            <li>
              <a
                href="#servicos"
                className="text-deepViolet-700 text-3xl"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-deepViolet-700 text-3xl"
              >
                Sobre Mim
              </a>
            </li>
            <li>
              <a
                href="#curso"
                className="text-deepViolet-700 text-3xl"
              >
                Curso
              </a>
            </li>
          </ul>

          <div className="absolute left-2 bottom-20">
            <ul className="flex flex-col gap-4">
              <Link
                href="https://www.instagram.com/leticiamartins.organizer/"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text-lg font-ptSerif bg-zinc-100 p-2.5 rounded-full group-hover:bg-purple-400 transition-all duration-300">
                  <FaInstagram
                    className="text-zinc-600 text-2xl group-hover:text-white transition-all duration-300" />
                </li>
              </Link>

              <Link
                href="https://wa.me/5511999999999"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li
                  className="text-lg font-ptSerif bg-zinc-100 p-2.5 rounded-full group-hover:bg-purple-400 transition-all duration-300">
                  <FaWhatsapp className="text-zinc-600 text-2xl group-hover:text-white transition-all duration-300" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}