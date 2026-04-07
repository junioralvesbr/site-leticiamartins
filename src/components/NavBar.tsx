'use client'
import { linksAndPaths } from '@/data/linksAndPaths'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import AvatarImage from './ui/avatar-image'
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu'

export default function NavBar() {
  const [active, setActive] = useState<string | null>(null)
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 0.01], ['100%', '40%'])

  const smoothWidth = useSpring(width, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  })

  return (
    <nav className='sticky top-0 z-50 hidden bg-white/70 py-4 backdrop-blur-xl lg:block'>
      <div className='relative mx-auto flex max-w-7xl items-center'>
        <Link href={linksAndPaths.inicio.href}>
          <AvatarImage />
        </Link>

        <motion.ul
          className='absolute right-0 z-10 flex items-center justify-between'
          style={{ width: smoothWidth }}
          transition={{ duration: 5, ease: 'easeInOut' }}
        >
          <li>
            <Link
              href={linksAndPaths.inicio.href}
              aria-label='Link para o inicio'
              className='font-subTitles hover:text-third text-zinc-600 transition-all'
            >
              {linksAndPaths.inicio.name}
            </Link>
          </li>

          <li className='group'>
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item='Serviços'>
                <div className='flex flex-col space-y-4 text-sm'>
                  <HoveredLink href={linksAndPaths.residencial.href}>
                    {linksAndPaths.residencial.name}
                  </HoveredLink>
                  <HoveredLink href={linksAndPaths.posMudanca.href}>
                    {linksAndPaths.posMudanca.name}
                  </HoveredLink>
                  <HoveredLink href={linksAndPaths.comercial.href}>
                    {linksAndPaths.comercial.name}
                  </HoveredLink>
                  <HoveredLink href={linksAndPaths.marcenariaInteligente.href}>
                    {linksAndPaths.marcenariaInteligente.name}
                  </HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </li>

          <li>
            <Link
              href={linksAndPaths.sobremim.href}
              className='font-subTitles hover:text-third text-zinc-600 transition-all'
            >
              {linksAndPaths.sobremim.name}
            </Link>
          </li>

          <li>
            <a
              href={linksAndPaths.curso.href}
              target='_blank'
              rel='noopener noreferrer'
              className='font-subTitles hover:text-third text-zinc-600 transition-all'
            >
              {linksAndPaths.curso.name}
            </a>
          </li>

          <li className='group'>
            <a
              href={linksAndPaths.whatsapp.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='border-third group-hover:bg-first rounded-full border px-6 py-2 transition-all'>
                <p className='font-subTitles text-third transition-all group-hover:text-white'>
                  {linksAndPaths.contato.name}
                </p>
              </div>
            </a>
          </li>
        </motion.ul>
      </div>
    </nav>
  )
}
