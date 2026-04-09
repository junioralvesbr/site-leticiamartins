import {
  DraggableCardBody,
  DraggableCardContainer,
} from '@/components/ui/draggable-card'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const items = [
  {
    title: 'Entrevistas para TV',
    image: '/images/mural/mural-1.jpg',
    className: 'lg:top-10 lg:left-[40%] rotate-[-5deg]',
    finalPosition: { x: '-200%', y: 40 },
    // Mobile: Superior Esquerdo
    finalPositionMobile: { x: '-35%', y: -250 },
  },
  {
    title: 'Parcerias com empresas e serviços',
    image: '/images/mural/mural-2.jpg',
    className: 'lg:top-40 lg:left-[25%] rotate-[-7deg]',
    finalPosition: { x: '-40%', y: 220 },
    // Mobile: Inferior Esquerdo
    finalPositionMobile: { x: '-38%', y: 250 },
  },
  {
    title: 'Gravação de videos e conteúdo',
    image: '/images/mural/mural-3.jpg',
    className: 'lg:top-32 lg:left-[55%] rotate-[10deg]',
    finalPosition: { x: '40%', y: 40 },
    // Mobile: Superior Direito
    finalPositionMobile: { x: '42%', y: -280 },
  },
  {
    title: 'Participação em eventos e feiras',
    image: '/images/mural/mural-4.jpg',
    className: 'lg:top-20 lg:right-[35%] rotate-[2deg]',
    finalPosition: { x: '180%', y: 300 },
    // Mobile: Inferior Direito
    finalPositionMobile: { x: '35%', y: 280 },
  },
  {
    title: 'Gravação de cursos e palestras',
    image: '/images/mural/mural-5.jpg',
    className: 'absolute top-24 left-[45%] rotate-[-7deg]',
    finalPosition: { x: '180%', y: -20 },
  },
  {
    title: 'Consultoria em organização',
    image: '/images/mural/mural-6.jpg',
    className: 'absolute top-8 left-[30%] rotate-[4deg]',
    finalPosition: { x: '-60%', y: 0 },
  },
]

export function MuralDesktop() {
  return (
    <DraggableCardContainer className='relative flex h-screen w-full items-center justify-center overflow-clip'>
      <p className='font-paragraph absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800'>
        Organize seu <span className='text-second/30'>LAR</span> para aproveitar
        os melhores momentos da <span className='text-second/30'>VIDA</span>.
      </p>
      {items.map((item, index) => (
        <DraggableCardBody
          key={index}
          className={cn('absolute', item.className)}
          finalPosition={item.finalPosition}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={320}
            height={320}
            className='pointer-events-none relative z-10 object-cover'
          />

          <h3 className='font-paragraph mt-4 text-center text-xl font-bold text-neutral-700 lg:text-2xl dark:text-neutral-300'>
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  )
}
export function MuralMobile() {
  return (
    <DraggableCardContainer className='relative flex min-h-[850px] w-full items-center justify-center overflow-clip bg-neutral-50/20'>
      {/* Central Text with better mobile sizing */}
      <p className='font-paragraph pointer-events-none absolute top-1/2 z-0 mx-auto max-w-[260px] -translate-y-1/2 text-center text-2xl leading-tight font-black text-neutral-400'>
        Organize seu <span className='text-second/30'>LAR</span> para aproveitar
        os melhores momentos da <span className='text-second/30'>VIDA</span>.
      </p>

      {items
        .filter((_, index) => index < 4)
        .map((item, index) => (
          <DraggableCardBody
            key={index}
            className='absolute' // Center them initially to spread correctly
            finalPosition={item.finalPositionMobile}
            isDraggable={false}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={320}
              height={320}
              className='pointer-events-none relative z-10 h-40 w-60 object-cover lg:h-80 lg:w-80'
            />
            <h3 className='font-paragraph mt-4 text-center text-xl font-bold text-neutral-700 lg:text-2xl dark:text-neutral-300'>
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
    </DraggableCardContainer>
  )
}
