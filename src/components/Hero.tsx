import Image from "next/image";
import * as motion from "motion/react-client";

import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa6";
import SocialLinkButton from "./ui/social-link-button";
import { linksAndPaths } from "@/data/linksAndPaths";

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
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover md:object-[25%_25%] w-full h-full"
            priority
            fetchPriority="high"
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
          <p className="text-lg font-subTitles text-fourth">
            Personal Organizer
          </p>

          <h1 className="font-titles text-clamp text-first whitespace-pre letter-spacing-[-0.02em] leading-[1.2] font-bold lg:text-[100px] xl:text-[116px]">
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
          <p className="text-lg font-subTitles text-fourth text-balance">
            Organizar é a minha paixão: transformo ambientes para criar mais harmonia, funcionalidade e leveza no seu dia a dia.
          </p>

          <ul className="flex gap-4">
            <li>
              <SocialLinkButton
                href={linksAndPaths.instagram.href}
                Icon={FaInstagram}
              />
            </li>
            <li>
              <SocialLinkButton
                href={linksAndPaths.facebook.href}
                Icon={FaFacebook}
              />
            </li>
            <li>
              <SocialLinkButton
                href={linksAndPaths.whatsapp.href}
                Icon={FaWhatsapp}
              />
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  )
}