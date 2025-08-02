import { FaMedal, FaUsersGear, FaCompassDrafting, FaHandshake } from "react-icons/fa6";
import { TextAnimate } from "./ui/text-animate";

export default function Expertise() {

  const calculaExperiencia = () => {
    const anoAtual = new Date().getFullYear()
    return anoAtual - 2018
  }

  return (
    <div className="grid grid-cols-1 gap-12 relative md:grid-cols-2 lg:pt-20">
      <div className="sticky top-20 sm:top-36">
        <h2 className="sticky top-20 sm:top-36">
          <TextAnimate
            animation="blurInUp"
            by="character"
            delay={0.5}
            once={true}
            className="text-4xl font-bold font-subTitles -tracking-tight text-deepViolet-700 dark:text-white md:text-7xl md:leading-[5rem]"
          >
            Experiência
          </TextAnimate>
        </h2>
      </div>

      <div className="flex flex-col gap-10 sticky top-36">
        <div className="bg-deepViolet-200 flex flex-col justify-between rounded-2xl w-full min-h-[360px] p-6 sticky top-36 rotate-2">
          <div className="flex justify-end-safe">
            <div className="flex justify-center items-center rounded-4xl bg-deepViolet-300 w-12 h-12">
              <FaMedal width={42} height={42} className="text-deepViolet-500 w-6 h-6" />
            </div>
          </div>
          <div>
            <p className="text-3xl font-subTitles font-bold text-black capitalize">
              Ampla experiência
            </p>

            <p className="text-base font-subTitles text-deepViolet-700">
              Mais de {calculaExperiencia()} anos de atendimento com diversos projetos.
            </p>
          </div>
        </div>

        <div className="bg-deepViolet-300 flex flex-col justify-between rounded-2xl w-full min-h-[360px] p-6 sticky top-36 -rotate-2">
          <div className="flex justify-end-safe">
            <div className="flex justify-center items-center rounded-4xl bg-deepViolet-400 w-12 h-12">
              <FaUsersGear width={42} height={42} className="text-white w-6 h-6" />
            </div>
          </div>
          <div>
            <p className="text-3xl font-subTitles font-bold text-black capitalize">
              Formação de equipe
            </p>

            <p className="text-base font-subTitles text-deepViolet-700">
              Equipe bem treinada e capacitada para o seu atendimento.
            </p>
          </div>
        </div>

        <div className="bg-deepViolet-400 flex flex-col justify-between rounded-2xl w-full min-h-[360px] p-6 sticky top-36 rotate-4">
          <div className="flex justify-end-safe">
            <div className="flex justify-center items-center rounded-4xl bg-deepViolet-600 w-12 h-12">
              <FaCompassDrafting width={42} height={42} className="text-white w-6 h-6" />
            </div>
          </div>
          <div>
            <p className="text-3xl font-subTitles font-bold text-white capitalize">
              Projetos profissionais
            </p>

            <p className="text-base font-subTitles text-white">
              Praticidade e simplicidade para o seu dia a dia, tornando tudo mais produtivo e eficiente.
            </p>
          </div>
        </div>

        <div className="bg-deepViolet-500 flex flex-col justify-between rounded-2xl w-full min-h-[360px] p-6 sticky top-36">
          <div className="flex justify-end-safe">
            <div className="flex justify-center items-center rounded-4xl bg-deepViolet-700 w-12 h-12">
              <FaHandshake width={42} height={42} className="text-white w-6 h-6" />
            </div>
          </div>
          <div>
            <p className="text-3xl font-subTitles font-bold text-white capitalize">
              Atendimento ao cliente
            </p>

            <p className="text-base font-subTitles text-white">
              Elaboramos soluções personalizadas para a organização da sua casa ou empresa.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}