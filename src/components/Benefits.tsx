import { CheckCircle2 } from 'lucide-react'
import * as motion from 'motion/react-client'
import { TextAnimate } from './ui/text-animate'

const benefits = [
  'Mais praticidade no dia a dia',
  'Economia de tempo',
  'Redução do estresse',
  'Melhor aproveitamento dos espaços',
  'Ambientes mais leves e funcionais',
]

export default function Benefits() {
  return (
    <div className='py-16 md:py-24'>
      <div className='mb-16 flex flex-col items-center justify-center text-center'>
        <TextAnimate
          as='h2'
          animation='blurInUp'
          by='character'
          once={true}
          className='font-subTitles text-first text-4xl font-bold -tracking-tight text-balance md:text-6xl dark:text-white'
        >
          Por que investir em organização?
        </TextAnimate>
      </div>

      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='border-sixth/30 hover:border-second/50 group flex items-center gap-4 rounded-2xl border bg-white p-6 shadow-lg transition-colors'
          >
            <div className='bg-deepViolet-100 text-second group-hover:bg-second flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors group-hover:text-white'>
              <CheckCircle2 size={24} />
            </div>
            <p className='text-first text-left text-xl font-medium'>
              {benefit}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className='mt-20 text-center'
      >
        <p className='font-subTitles text-first/80 border-site-100 border-t pt-8 text-2xl font-bold italic md:text-3xl'>
          💎Organizar é investir em qualidade de vida.
        </p>
      </motion.div>
    </div>
  )
}
