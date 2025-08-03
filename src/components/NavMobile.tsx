'use client'

import { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "motion/react";

import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa6";
import SocialLinkButton from "./ui/social-link-button";
import AvatarImage from "./ui/avatar-image";

export default function NavMobile() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className="sticky top-0 z-50 p-4 flex items-center justify-between backdrop-blur-xl bg-white/70 lg:hidden"
    >
      <Link href="#header">
        <AvatarImage />
      </Link>

      <div>
        <Hamburger
          toggled={isOpen}
          size={20}
          rounded
          label="Menu"
          toggle={setOpen}
          distance="lg"
          color="#9F56C7"
          direction="right"
        />

        <AnimatePresence>
          {isOpen &&
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed left-0 shadow-4xl right-0 top-[5rem] p-5 pt-0 bg-white border-b border-b-white/20"
              >
                <ul className="grid gap-5">
                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 0 / 10
                    }}
                    className="w-full p-[0.08rem] rounded-xl"
                    onClick={() => setOpen(false)}
                  >
                    <Link href="/">
                      <span className="flex gap-1 text-center text-lg text-deepViolet-400">
                        Inicio
                      </span>
                    </Link>
                  </motion.li>


                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 1 / 10
                    }}
                  >
                    <h2 className="flex gap-1 text-center text-lg text-deepViolet-400">
                      Serviços
                    </h2>

                    <ul className="flex flex-col px-4 gap-2">
                      <motion.li
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + 2 / 10
                        }}
                        className="w-full p-[0.08rem] rounded-xl"
                        onClick={() => setOpen(false)}
                      >
                        <Link href="/residencial">
                          <span className="flex gap-1 text-center text-lg text-deepViolet-400">
                            Organização Residencial
                          </span>
                        </Link>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + 3 / 10
                        }}
                        className="w-full p-[0.08rem] rounded-xl"
                        onClick={() => setOpen(false)}
                      >
                        <Link href="/posmudanca">
                          <span className="flex gap-1 text-center text-lg text-deepViolet-400">
                            Pós Mudança
                          </span>
                        </Link>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + 4 / 10
                        }}
                        className="w-full p-[0.08rem] rounded-xl"
                        onClick={() => setOpen(false)}
                      >
                        <Link href="/comercial">
                          <span className="flex gap-1 text-center text-lg text-deepViolet-400">
                            Organização Comercial
                          </span>
                        </Link>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + 5 / 10
                        }}
                        className="w-full p-[0.08rem] rounded-xl"
                        onClick={() => setOpen(false)}
                      >
                        <Link href="/marcenariainteligente">
                          <span className="flex gap-1 text-center text-lg text-deepViolet-400">
                            Marcenaria Inteligente
                          </span>
                        </Link>
                      </motion.li>
                    </ul>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 6 / 10
                    }}
                    className="w-full p-[0.08rem] rounded-xl"
                    onClick={() => setOpen(false)}
                  >
                    <Link href="/#expertise">
                      <span className="flex gap-1 text-center text-lg text-deepViolet-400">
                        Experiência
                      </span>
                    </Link>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 7 / 10
                    }}
                    className="w-full p-[0.08rem] rounded-xl"
                    onClick={() => setOpen(false)}
                  >
                    <a
                      href="https://curso.leticiamartins.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="flex gap-1 text-center text-lg text-deepViolet-400">
                        Curso
                      </span>
                    </a>
                  </motion.li>


                  {/* social Media */}
                  <ul className="flex gap-4">
                    <motion.li
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + 8 / 10
                      }}
                    >
                      <SocialLinkButton
                        href="https://www.instagram.com/leticiamartins.organizer/"
                        Icon={FaInstagram}
                      />
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + 9 / 10
                      }}
                    >
                      <SocialLinkButton
                        href="https://www.facebook.com/leticiamartinsorganizer/"
                        Icon={FaFacebook}
                      />
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + 10 / 10
                      }}
                    >
                      <SocialLinkButton
                        href="https://wa.me/5544998138138"
                        Icon={FaWhatsapp}
                      />
                    </motion.li>
                  </ul>
                </ul>
              </motion.div >
            </div>
          }
        </AnimatePresence>
      </div>
    </div >
  );
};