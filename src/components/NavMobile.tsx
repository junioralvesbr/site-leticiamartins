'use client'

import { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "motion/react";
import { routes } from "@/data/routes";
import SocialLinkButton from "./ui/social-link-button";

export default function NavMobile() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className="sticky top-0 z-50 py-4 backdrop-blur-xl bg-white/70 lg:hidden"
    >
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
              className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-white border-b border-b-white/20"
            >
              <ul className="grid gap-2">
                {routes.internal.map((route, index) => (
                  <motion.li
                    key={route.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + index / 10
                    }}
                    className="w-full p-[0.08rem] rounded-xl"
                  >
                    <Link href={route.path}>
                      <span className="flex gap-1 text-center text-lg">
                        {route.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}

                <ul className="flex gap-4">
                  {routes.socialMedia.map((route) => (
                    <li key={route.id}>
                      <SocialLinkButton name={route.name} href={route.path} />
                    </li>
                  ))}
                </ul>
              </ul>
            </motion.div >
          </div>
        }
      </AnimatePresence>
    </div >
  );
};