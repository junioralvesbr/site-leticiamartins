import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client"
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { links } from "@/data/links";
import SocialLinkButton from "./ui/social-link-button";

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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-[25%_25%] w-full h-full"
            priority
          />
        </motion.figure>
      </div>


      <section className="flex flex-col flex-nowrap gap-5 min-h-68 mt-10 xl:flex-row xl:gap-20">
        <motion.div
          className="flex flex-col flex-wrap flex-1 shrink-0 gap-2 justify-start"
          initial={{ opacity: 0, transform: "translateY(100px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{
            duration: 2,
            delay: 0.5
          }}
        >
          <p className="text-lg font-subTitles text-deepViolet-600">
            Personal Organizer
          </p>

          <h1 className="font-titles text-clamp text-deepViolet-700 whitespace-pre letter-spacing-[-0.02em] leading-[1.2] font-bold lg:text-[100px] xl:text-[116px]">
            Leticia Martins
          </h1>
        </motion.div>

        <motion.div
          className="flex flex-col flex-wrap shrink gap-8 max-w-sm lg:pl-10 lg:self-end"
          initial={{ opacity: 0, transform: "translateY(100px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{
            duration: 1.5,
            delay: 1
          }}
        >
          <p className="text-lg font-subTitles text-deepViolet-500 text-balance">
            Minha paixão é organizar! Transformo ambientes para trazer mais harmonia e praticidade ao seu dia a dia.
          </p>

          <ul className="flex gap-4">
            {links.socialMedia.map((link) => (
              <li key={link.id}>
                <SocialLinkButton name={link.name} href={link.path} />
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </div>
  )
}