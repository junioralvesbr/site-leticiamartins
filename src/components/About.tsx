import { FlipText } from "@/components/ui/flip-text";
import { FaRing } from "react-icons/fa6";
import { PiCertificateDuotone } from "react-icons/pi";


export default function About() {

  const calculaExperiencia = () => {
    const anoAtual = new Date().getFullYear()
    return anoAtual - 2018
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
      <div className="sticky top-20 sm:top-36">
        <h2 className="sticky top-20 sm:top-36">
          <FlipText>{`Sobre ${'\n'} min`}</FlipText>
        </h2>
      </div>

      <div className="flex flex-col gap-10 sticky top-36">
        <div className="bg-deepViolet-200 flex flex-col justify-between rounded-2xl w-full min-h-[360px] p-6 sticky top-36 rotate-2">
          <div className="flex justify-end-safe">
            <div className="flex justify-center items-center rounded-4xl bg-[#dec2f0] w-12 h-12">
              <PiCertificateDuotone width={42} height={42} color="#9556c7" />
            </div>
          </div>
          <div>
            <p className="text-3xl font-ptSerif font-bold text-black capitalize">
              Experiência
            </p>

            <p className="text-base font-ptSerif text-deepViolet-700">
              Mais de {calculaExperiencia()} anos de atendimento com diversos projetos.
            </p>
          </div>
        </div>

        <div className="bg-deepViolet-300 flex flex-col justify-between rounded-2xl w-full min-h-[360px] p-6 sticky top-36 -rotate-2">
          <div className="flex justify-end-safe">
            <FaRing />
          </div>
          <div>
            <p className="text-3xl font-ptSerif font-bold text-black capitalize">
              Equipe
            </p>

            <p className="text-base font-ptSerif text-deepViolet-700">
              Equipe bem treinada e capacitada para o seu atendimento.
            </p>
          </div>
        </div>

        <div className="bg-deepViolet-400 flex flex-col justify-between rounded-2xl w-full min-h-[360px] p-6 sticky top-36 rotate-4">
          <div className="flex justify-end-safe">
            <FaRing />
          </div>
          <div>
            <p className="text-3xl font-ptSerif font-bold text-white capitalize">
              Projetos profissionais
            </p>

            <p className="text-base font-ptSerif text-white">
              Facilidade e simplicidade para o seu dia a dia, tornando tudo mais prático e eficiente.
            </p>
          </div>
        </div>

        <div className="bg-deepViolet-500 flex flex-col justify-between rounded-2xl w-full min-h-[360px] p-6 sticky top-36">
          <div className="flex justify-end-safe">
            <FaRing />
          </div>
          <div>
            <p className="text-3xl font-ptSerif font-bold text-white capitalize">
              Atendimento ao cliente
            </p>

            <p className="text-base font-ptSerif text-white">
              Elaboramos soluções personalizadas para a organização da sua casa ou empresa.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}