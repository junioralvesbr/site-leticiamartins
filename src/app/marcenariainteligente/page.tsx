import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const data = [
  {
    title: "Tudo bem projetado",
    content: (
      <div>
        <p className="mb-8 text-base font-paragraph font-normal text-neutral-600 md:text-sm dark:text-neutral-200">
          Organizamos com eficiência: maximizamos os espaços no móvel planejado, utilizando soluções como divisórias, gavetas sob medidas, prateleiras ajustadas e compartimentos personalizados para manter seus pertences em ordem e facilmente acessíveis.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/images/marcenaria/foto-1.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
          <Image
            src="/images/marcenaria/foto-2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
          <Image
            src="/images/marcenaria/foto-3.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
          <Image
            src="/images/marcenaria/foto-4.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
        </div>
      </div>)
  }
]


export default function MarcenariaInteligente() {
  return (
    <>
      <header>
        <Header
          title="Marcenaria Inteligente"
          text="Elaborar a parte interna de um móvel requer, um bom planejamento, cuidado e atenção com as medidas. É necessário focar na distribuição adequada das gavetas, prateleiras e de toda parte interna, trazendo maior praticidade, aproveitamento dos espaços e ainda mais beleza para os seus móveis."
          capa="/images/marcenaria/foto-5.jpg"
          alt="foto capa do site macenaria inteligente"
        />
      </header>

      <main className="h-dvh">
        <Timeline
          data={data}
          title={`Ideal para clientes`}
          title2={`exigentes.`}
        />
        <Footer />
      </main>
    </>
  )
}

