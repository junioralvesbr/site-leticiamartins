import { linksAndPaths } from '@/data/linksAndPaths'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import { TextAnimate } from './ui/text-animate'

const data = [
  {
    title: 'Organização Residencial',
    image: '/images/servicos/foto-1.jpg',
    alt: 'Foto de organização residencial',
    description:
      'Organização completa de ambientes como quartos, closets, cozinhas, lavanderias e despensas, trazendo mais praticidade para o seu dia a dia.',
    path: linksAndPaths.residencial.href,
  },
  {
    title: 'Pós Mudança',
    image: '/images/servicos/foto-2.png',
    alt: 'Foto de pós mudança residencial',
    description:
      'Desembale e organize sua nova casa de forma estratégica, funcional e sem estresse.',
    path: linksAndPaths.posMudanca.href,
  },
  {
    title: 'Organização Comercial',
    image: '/images/servicos/foto-3.png',
    alt: 'Foto de organização empresarial',
    description:
      'Ambientes de trabalho mais organizados aumentam a produtividade e passam mais profissionalismo para seus clientes.',
    path: linksAndPaths.comercial.href,
  },
  {
    title: 'Marcenaria Inteligente para Móveis Planejados',
    image: '/images/servicos/foto-4.png',
    alt: 'Foto de consultoria em móveis planejados',
    description:
      'Otimize seu espaço, facilite sua rotina e tenha uma visão clara de tudo o que você possui.',
    path: linksAndPaths.marcenariaInteligente.href,
  },
]

export default function Services() {
  return (
    <div>
      <div className='flex items-center justify-center gap-4'>
        <TextAnimate
          as='h2'
          animation='blurInUp'
          by='character'
          delay={0.5}
          once={true}
          className='font-subTitles text-first text-4xl font-bold -tracking-tight text-balance md:text-7xl md:leading-20 dark:text-white'
        >
          Serviços de Organização
        </TextAnimate>
      </div>

      <motion.div
        className='mt-20 grid grid-cols-1 gap-12 md:grid-cols-2'
        initial={{ opacity: 0, transform: 'translateY(100px)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{
          duration: 1,
        }}
      >
        {data.map((item, index) => (
          <article key={index} className='flex flex-col gap-4'>
            <Link href={item.path} aria-label='Link para os partes de serviços'>
              <div className='overflow-hidden rounded-lg'>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className='h-96 w-full rounded-lg object-cover transition-all duration-300 ease-in-out hover:scale-105'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <p className='text-third font-subTitles'>{item.description}</p>

                <h3 className='font-subTitles text-first text-3xl font-bold'>
                  {item.title}
                </h3>

                <div className='text-first flex items-center gap-2 font-bold'>
                  <span className='hover:underline'>Saiba Mais</span>
                  <FaArrowRightLong />
                </div>
              </div>
            </Link>
          </article>
        ))}
      </motion.div>
    </div>
  )
}
