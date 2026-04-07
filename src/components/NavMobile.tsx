'use client'

import Hamburger from 'hamburger-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'

import { linksAndPaths } from '@/data/linksAndPaths'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import AvatarImage from './ui/avatar-image'
import SocialLinkButton from './ui/social-link-button'

export default function NavMobile() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='sticky top-0 z-50 flex items-center justify-between bg-white/70 p-4 backdrop-blur-xl lg:hidden'>
      <Link href='#header'>
        <AvatarImage />
      </Link>

      <div>
        <Hamburger
          toggled={isOpen}
          size={20}
          rounded
          label='Menu'
          toggle={setOpen}
          distance='lg'
          color='#642c4a'
          direction='right'
        />

        <AnimatePresence>
          {isOpen && (
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='shadow-4xl fixed top-20 right-0 left-0 border-b border-b-white/20 bg-white p-5 pt-0'
              >
                <ul className='grid gap-5'>
                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 0 / 10,
                    }}
                    className='w-full rounded-xl p-[0.08rem]'
                    onClick={() => setOpen(false)}
                  >
                    <Link href='/' aria-label='Link para o Inicio'>
                      <span className='text-second flex gap-1 text-center text-lg'>
                        Início
                      </span>
                    </Link>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 1 / 10,
                    }}
                  >
                    <h2 className='text-second flex gap-1 text-center text-lg'>
                      Serviços
                    </h2>

                    <ul className='flex flex-col gap-2 px-4'>
                      <motion.li
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + 2 / 10,
                        }}
                        className='w-full rounded-xl p-[0.08rem]'
                        onClick={() => setOpen(false)}
                      >
                        <Link
                          href={linksAndPaths.residencial.href}
                          aria-label='Link para o residencial'
                        >
                          <span className='text-second flex gap-1 text-center text-lg'>
                            {linksAndPaths.residencial.name}
                          </span>
                        </Link>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + 3 / 10,
                        }}
                        className='w-full rounded-xl p-[0.08rem]'
                        onClick={() => setOpen(false)}
                      >
                        <Link
                          href={linksAndPaths.posMudanca.href}
                          aria-label='Link para o pos mudanca'
                        >
                          <span className='text-second flex gap-1 text-center text-lg'>
                            {linksAndPaths.posMudanca.name}
                          </span>
                        </Link>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + 4 / 10,
                        }}
                        className='w-full rounded-xl p-[0.08rem]'
                        onClick={() => setOpen(false)}
                      >
                        <Link
                          href={linksAndPaths.comercial.href}
                          aria-label='Link para o comercial'
                        >
                          <span className='text-second flex gap-1 text-center text-lg'>
                            {linksAndPaths.comercial.name}
                          </span>
                        </Link>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + 5 / 10,
                        }}
                        className='w-full rounded-xl p-[0.08rem]'
                        onClick={() => setOpen(false)}
                      >
                        <Link
                          href={linksAndPaths.marcenariaInteligente.href}
                          aria-label='Link para o marcenaria inteligente'
                        >
                          <span className='text-second flex gap-1 text-center text-lg'>
                            {linksAndPaths.marcenariaInteligente.name}
                          </span>
                        </Link>
                      </motion.li>
                    </ul>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 6 / 10,
                    }}
                    className='w-full rounded-xl p-[0.08rem]'
                    onClick={() => setOpen(false)}
                  >
                    <Link
                      href={linksAndPaths.sobremim.href}
                      aria-label='Link para a experiencias'
                    >
                      <span className='text-second flex gap-1 text-center text-lg'>
                        {linksAndPaths.sobremim.name}
                      </span>
                    </Link>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 7 / 10,
                    }}
                    className='w-full rounded-xl p-[0.08rem]'
                    onClick={() => setOpen(false)}
                  >
                    <a
                      href={linksAndPaths.curso.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label='Link para o Curso da leticia Martins'
                    >
                      <span className='text-second flex gap-1 text-center text-lg'>
                        {linksAndPaths.curso.name}
                      </span>
                    </a>
                  </motion.li>

                  {/* social Media */}
                  <ul className='flex gap-4'>
                    <motion.li
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + 8 / 10,
                      }}
                    >
                      <SocialLinkButton
                        href={linksAndPaths.instagram.href}
                        Icon={FaInstagram}
                      />
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + 9 / 10,
                      }}
                    >
                      <SocialLinkButton
                        href={linksAndPaths.facebook.href}
                        Icon={FaFacebook}
                      />
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + 10 / 10,
                      }}
                    >
                      <SocialLinkButton
                        href={linksAndPaths.whatsapp.href}
                        Icon={FaWhatsapp}
                      />
                    </motion.li>
                  </ul>
                </ul>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
