'use client'

import { linksAndPaths } from '@/data/linksAndPaths'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import AvatarImage from './ui/avatar-image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-first relative overflow-hidden border-t border-white/10 px-8 py-20 lg:px-24 lg:pt-32'>
      {/* Background Decoration (Subtle Glows inspired by Aceternity) */}
      <div className='bg-second/10 pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full blur-[120px]' />
      <div className='bg-fourth/10 pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full blur-[120px]' />

      <div className='relative mx-auto max-w-7xl'>
        {/* CTA Section */}
        <div className='mx-auto mb-24 flex max-w-4xl flex-col items-center text-center'>
          <h2 className='font-subTitles mb-6 text-4xl font-bold text-balance text-white md:text-7xl'>
            Pronta para transformar seu ambiente?
          </h2>
          <p className='font-subTitles mb-12 max-w-2xl text-lg text-balance text-white/80 md:text-2xl'>
            Entre em contato e descubra como a organização pode facilitar sua
            rotina e trazer mais leveza para o seu dia a dia.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='group relative'
          >
            <div className='bg-second absolute -inset-1 rounded-full opacity-30 blur-lg transition-all group-hover:opacity-60' />
            <a
              href={linksAndPaths.whatsapp.href}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-second hover:bg-fourth relative inline-flex items-center gap-3 rounded-full px-10 py-5 text-xl font-bold text-white shadow-2xl transition-all md:px-14 md:py-6 md:text-2xl'
            >
              <FaWhatsapp className='h-8 w-8' />
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className='grid grid-cols-1 gap-12 border-t border-white/10 pt-20 md:grid-cols-2 lg:grid-cols-4'>
          {/* Brand Identity */}
          <div className='flex flex-col gap-6'>
            <Link href='/' className='group flex items-center gap-4'>
              <div className='rounded-full bg-white p-1 shadow-lg transition-all group-hover:scale-110 group-hover:rotate-12'>
                <AvatarImage />
              </div>
              <div className='flex flex-col'>
                <span className='font-titles group-hover:text-second text-2xl tracking-tight text-white transition-colors'>
                  Letícia Martins
                </span>
                <span className='text-third text-xs font-bold tracking-widest uppercase'>
                  Personal Organizer
                </span>
              </div>
            </Link>
            <p className='font-subTitles max-w-[280px] text-base leading-relaxed text-white/60'>
              Especialista em organização que transforma rotinas e traz leveza
              para o seu lar ou empresa em Maringá e região.
            </p>
          </div>

          {/* Navigation */}
          <div className='flex flex-col gap-8'>
            <h4 className='font-titles after:bg-second relative w-fit text-lg tracking-wider text-white uppercase after:absolute after:-bottom-2 after:left-0 after:h-px after:w-8'>
              Navegação
            </h4>
            <ul className='flex flex-col gap-4'>
              {[
                linksAndPaths.inicio,
                linksAndPaths.servicos,
                linksAndPaths.sobremim,
                linksAndPaths.curso,
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='font-subTitles group flex items-center gap-2 text-base text-white/70 transition-all hover:translate-x-1 hover:text-white'
                    target={link.name === 'Curso' ? '_blank' : undefined}
                    rel={
                      link.name === 'Curso' ? 'noopener noreferrer' : undefined
                    }
                  >
                    <span className='bg-second h-1 w-1 rounded-full opacity-0 transition-all group-hover:opacity-100' />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className='flex flex-col gap-8'>
            <h4 className='font-titles after:bg-fourth relative w-fit text-lg tracking-wider text-white uppercase after:absolute after:-bottom-2 after:left-0 after:h-px after:w-8'>
              Especialidades
            </h4>
            <ul className='flex flex-col gap-4'>
              {[
                linksAndPaths.residencial,
                linksAndPaths.posMudanca,
                linksAndPaths.comercial,
                linksAndPaths.marcenariaInteligente,
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className='font-subTitles group flex items-center gap-2 text-base text-white/70 transition-all hover:translate-x-1 hover:text-white'
                  >
                    <span className='bg-fourth h-1 w-1 rounded-full opacity-0 transition-all group-hover:opacity-100' />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className='flex flex-col gap-8'>
            <h4 className='font-titles after:bg-third relative w-fit text-lg tracking-wider text-white uppercase after:absolute after:-bottom-2 after:left-0 after:h-px after:w-8'>
              Conecte-se
            </h4>
            <div className='flex flex-col gap-5'>
              <SocialLink
                href={linksAndPaths.instagram.href}
                icon={<FaInstagram className='h-5 w-5' />}
                label='Instagram'
              />
              <SocialLink
                href={linksAndPaths.facebook.href}
                icon={<FaFacebookF className='h-5 w-5' />}
                label='Facebook'
              />
              <SocialLink
                href={linksAndPaths.whatsapp.href}
                icon={<FaWhatsapp className='h-5 w-5' />}
                label='WhatsApp'
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row'>
          <p>© {currentYear} Letícia Martins. Todos os direitos reservados.</p>
          <div className='flex items-center gap-8'>
            <Link
              href='/privacidade'
              className='transition-colors hover:text-white'
            >
              Privacidade
            </Link>
            <Link href='/termos' className='transition-colors hover:text-white'>
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='group flex items-center gap-3 text-base text-white/70 transition-all hover:text-white'
    >
      <div className='group-hover:text-second group-hover:shadow-second/10 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-all group-hover:scale-110 group-hover:bg-white/10 group-hover:shadow-lg'>
        {icon}
      </div>
      <span className='font-subTitles'>{label}</span>
    </a>
  )
}
