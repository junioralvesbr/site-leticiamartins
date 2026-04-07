import * as motion from 'motion/react-client'
import Image from 'next/image'

import { linksAndPaths } from '@/data/linksAndPaths'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import SocialLinkButton from './ui/social-link-button'

export default function Hero() {
  return (
    <div>
      <div className='mt-4 flex justify-end-safe'>
        <motion.figure
          className='relative aspect-square max-h-120 w-full max-w-3xl overflow-hidden rounded-xl'
          initial={{ opacity: 0, transform: 'translateY(100px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{
            duration: 1,
          }}
        >
          <Image
            src='/images/leticia-martins.png'
            alt='Leticia Martins'
            fill
            quality={100}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='h-full w-full object-cover md:object-[25%_25%]'
            priority
            fetchPriority='high'
          />
        </motion.figure>
      </div>

      <section className='mt-10 flex min-h-68 flex-col flex-nowrap gap-5 xl:flex-row xl:gap-20'>
        <motion.div
          className='flex flex-1 shrink-0 flex-col flex-wrap justify-start gap-2'
          initial={{ opacity: 0, transform: 'translateY(100px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{
            duration: 2,
            delay: 0.5,
          }}
        >
          <p className='font-subTitles text-fourth text-lg'>
            Personal Organizer
          </p>

          <span className='font-titles text-clamp text-first letter-spacing-[-0.02em] leading-[1.2] font-bold whitespace-pre lg:text-[100px] xl:text-[116px]'>
            Leticia Martins
          </span>
          <h1 className='font-subTitles text-fourth text-lg text-balance'>
            Organização Residencial e Comercial em Maringá
          </h1>
        </motion.div>

        <motion.div
          className='flex max-w-sm shrink flex-col flex-wrap gap-8 lg:self-end lg:pl-10'
          initial={{ opacity: 0, transform: 'translateY(100px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{
            duration: 1.5,
            delay: 1,
          }}
        >
          <p className='font-subTitles text-fourth text-lg text-balance'>
            Organizar é a minha paixão, sou personal organizer em Maringá
            especializada em criar ambientes funcionais, organizados e elegantes
            para o seu dia a dia.
          </p>

          <div>
            <strong className='font-subTitles text-fourth text-lg text-balance'>
              Entre em contato:
            </strong>
            <ul className='mt-2 flex gap-4'>
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
          </div>
        </motion.div>
      </section>
    </div>
  )
}
