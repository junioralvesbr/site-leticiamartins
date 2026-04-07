import {
  FaCompassDrafting,
  FaHandshake,
  FaMedal,
  FaUsersGear,
} from 'react-icons/fa6'

export default function Expertise() {
  const calculaExperiencia = () => {
    const anoAtual = new Date().getFullYear()
    return anoAtual - 2018
  }

  return (
    <div className='relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:pt-20'>
      <div className='sticky top-20 sm:top-36'>
        <div className='sticky top-20 sm:top-36'>
          <h2 className='font-subTitles text-first text-4xl font-bold -tracking-tight md:text-7xl md:leading-20 dark:text-white'>
            Personal Organizer
          </h2>

          <p className='font-subTitles text-first mt-5 text-base -tracking-tight dark:text-white'>
            Ajudo pessoas a transformarem seus espaços em ambientes organizados,
            funcionais e harmoniosos.
          </p>

          <p className='font-subTitles text-first mt-5 text-base -tracking-tight dark:text-white'>
            Acredito que a organização vai muito além da estética. Ela impacta
            diretamente na sua rotina, produtividade e bem-estar. Cada projeto é
            pensado de forma personalizada, respeitando sua realidade, seus
            hábitos e suas necessidades.
          </p>

          <p className='font-subTitles text-first mt-5 text-base -tracking-tight dark:text-white'>
            Atendo projetos residenciais e comerciais em Maringá e região,
            sempre com foco em praticidade, leveza e sofisticação.
          </p>
        </div>
      </div>

      <div className='sticky top-36 flex flex-col gap-10'>
        <div className='bg-sixth sticky top-36 flex min-h-[360px] w-full rotate-2 flex-col justify-between rounded-2xl p-6'>
          <div className='flex justify-end-safe'>
            <div className='bg-fifth flex h-12 w-12 items-center justify-center rounded-4xl'>
              <FaMedal width={42} height={42} className='text-fourth h-6 w-6' />
            </div>
          </div>
          <div>
            <p className='font-subTitles text-3xl font-bold text-black capitalize'>
              Ampla experiência
            </p>

            <p className='font-subTitles text-first text-base'>
              Mais de {calculaExperiencia()} anos de atendimento com diversos
              projetos.
            </p>
          </div>
        </div>

        <div className='bg-fifth sticky top-36 flex min-h-[360px] w-full -rotate-2 flex-col justify-between rounded-2xl p-6'>
          <div className='flex justify-end-safe'>
            <div className='bg-second flex h-12 w-12 items-center justify-center rounded-4xl'>
              <FaUsersGear
                width={42}
                height={42}
                className='h-6 w-6 text-white'
              />
            </div>
          </div>
          <div>
            <p className='font-subTitles text-3xl font-bold text-black capitalize'>
              Formação de equipe
            </p>

            <p className='font-subTitles text-first text-base'>
              Equipe bem treinada e capacitada para o seu atendimento.
            </p>
          </div>
        </div>

        <div className='bg-second sticky top-36 flex min-h-[360px] w-full rotate-4 flex-col justify-between rounded-2xl p-6'>
          <div className='flex justify-end-safe'>
            <div className='bg-first flex h-12 w-12 items-center justify-center rounded-4xl'>
              <FaCompassDrafting
                width={42}
                height={42}
                className='h-6 w-6 text-white'
              />
            </div>
          </div>
          <div>
            <p className='font-subTitles text-3xl font-bold text-white capitalize'>
              Projetos profissionais
            </p>

            <p className='font-subTitles text-base text-white'>
              Praticidade e simplicidade para o seu dia a dia, tornando tudo
              mais produtivo e eficiente.
            </p>
          </div>
        </div>

        <div className='bg-fourth sticky top-36 flex min-h-[360px] w-full flex-col justify-between rounded-2xl p-6'>
          <div className='flex justify-end-safe'>
            <div className='bg-first flex h-12 w-12 items-center justify-center rounded-4xl'>
              <FaHandshake
                width={42}
                height={42}
                className='h-6 w-6 text-white'
              />
            </div>
          </div>
          <div>
            <p className='font-subTitles text-3xl font-bold text-white capitalize'>
              Atendimento ao cliente
            </p>

            <p className='font-subTitles text-base text-white'>
              Elaboramos soluções personalizadas para a organização da sua casa
              ou empresa.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
