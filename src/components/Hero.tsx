import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client"

import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'

export default function Hero() {
  return (
    <div>
      <div
        className="flex justify-end-safe mt-4">
        <motion.figure
          className="relative w-full max-w-3xl max-h-120 aspect-square overflow-hidden rounded-xl"
          initial={{ opacity: 0, transform: "translateY(100px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{
            duration: 1,
          }}
        >
          <Image
            src="/images/leticia-martins.png"
            alt="Leticia Martins"
            fill
            className="object-cover object-[25%_25%] w-full h-full"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </motion.figure>
      </div>


      <section className="flex flex-col flex-nowrap gap-5 min-h-68 mt-10 xl:flex-row xl:gap-20">
        <motion.div
          className="flex flex-col flex-wrap shrink-0 gap-2 justify-start"
          initial={{ opacity: 0, transform: "translateY(100px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{
            duration: 2,
            delay: 0.5
          }}
        >
          <p className="text-lg font-ptSerif text-deepViolet-600">
            Personal Organizer
          </p>

          <h1 className="font-anton text-clamp text-deepViolet-700 whitespace-pre letter-spacing-[-0.02em] leading-[1.2] font-bold lg:text-8xl xl:text-9xl">
            Leticia Martins
          </h1>
        </motion.div>

        <motion.div
          className="flex flex-col flex-wrap shrink gap-8 max-w-sm lg:self-end"
          initial={{ opacity: 0, transform: "translateY(100px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{
            duration: 1.5,
            delay: 1
          }}
        >
          <p className="text-lg font-ptSerif text-deepViolet-500 text-balance">
            Leticia Martins, uma personal apaixonada por organização que transforma espaços em harmonia e praticidade no seu dia dia.
          </p>

          <ul className="flex gap-4">
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
        </motion.div>
      </section>
    </div>
  )
}