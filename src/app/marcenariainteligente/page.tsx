import Footer from "@/components/Footer";
import Header from "@/components/Header";
import * as motion from "motion/react-client";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const data = [
  {
    title: "Tudo bem projetado",
    content: (
      <div>
        <p className="mb-8 text-xs font-paragraph font-normal text-neutral-600 md:text-sm dark:text-neutral-200">
          Organizamos com eficiência: maximizamos os espaços no móvel planejado, utilizando soluções como divisórias, gavetas sob medidas, prateleiras ajustadas e compartimentos personalizados para manter seus pertences em ordem e facilmente acessíveis.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/consultoria/foto-1.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/consultoria/foto-2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/consultoria/foto-3.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/consultoria/foto-4.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>)
  }
]


export default function MarcenariaInteligente() {
  return (
    <>
      <header className="flex flex-col items-center justify-center px-4">
        <Header
          title="Marcenaria Inteligente"
          text="Elaborar a parte interna de um móvel requer, um bom planejamento, cuidado e atenção com as medidas. É necessário focar na distribuição adequada das gavetas, prateleiras e de toda parte interna, trazendo maior praticidade, aproveitamento dos espaços e ainda mais beleza para os seus móveis."
        />
        <motion.div
          className="w-full mt-20"
          initial={{ opacity: 0, transform: "translateY(100px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/consultoria/foto-5.jpg"
            alt="Capa comercial"
            width={800}
            height={600}
            className="w-full rounded-md border shadow-lg max-w-5xl mx-auto"
          />
        </motion.div>
      </header>

      <main className="h-dvh">
        <Timeline
          data={data}
          title={`Ideal para clientes exigentes.`}
        />
        <Footer />
      </main>
    </>
  )
}

