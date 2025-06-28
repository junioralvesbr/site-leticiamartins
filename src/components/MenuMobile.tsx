'use client'

import { useState } from "react";
import { motion } from "motion/react";
import { MenuButton } from "./ui/menu-button";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import SocialMediaButton from "./SocialMediaButtons";

export default function MenuMobile() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-end-safe">
        <MenuButton
          isOpen={isOpen}
          onClick={() => setOpen(!isOpen)}
          strokeWidth="4"
          color="#401952"
          lineProps={{ strokeLinecap: "round" }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          width="24"
          height="24"
        // style={menuButtonStyle}
        />
      </div>


      <motion.div
        className="absolute overflow-hidden top-10 left-0 right-0 h-dvh p-8 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      >

        <ul className="flex flex-col gap-10 backdrop-blur-xl">
          <li>
            <a
              href="#services"
              className="text-deepViolet-700 text-3xl"
              onClick={() => setOpen(false)}
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-deepViolet-700 text-3xl"
              onClick={() => setOpen(false)}
            >
              Sobre Mim
            </a>
          </li>
          <li>
            <a
              href="#curso"
              className="text-deepViolet-700 text-3xl"
              onClick={() => setOpen(false)}
            >
              Curso
            </a>
          </li>
        </ul>

        <div>
          <SocialMediaButton className="flex justify-center items-center gap-8 mt-10" />
        </div>
      </motion.div>
    </>
  )
}