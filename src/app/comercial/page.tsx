import Footer from "@/components/Footer";
import Header from "@/components/Header";
import * as motion from "motion/react-client"
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const data = [
  {
    title: "Almoxarifado Estoque",
    content: (
      <div>
        <p className="mb-8 text-xs font-paragraph font-normal text-neutral-600 md:text-sm dark:text-neutral-200">
          Estamos prontos para facilitar e tornar a rotina da sua empresa mais eficiente e produtiva. Nossa equipe proporciona um plano personalizado e exclusivo para o seu negócio.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/comercial/foto-1.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/comercial/foto-2.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/comercial/foto-3.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/comercial/foto-4.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>)
  },
  {
    title: "Loja, Ateliê Escritório",
    content: (
      <div>
        <p className="mb-8 text-xs font-paragraph font-normal text-neutral-600 md:text-sm dark:text-neutral-200">
          Organização é liberdade: livre-se da bagunça e encontre o sucesso em seu escritório e loja.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/comercial/foto-5.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/comercial/foto-6.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/comercial/foto-7.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/comercial/foto-8.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>)
  }
]

export default function Organizacaocomercial() {
  return (
    <>
      <header className="flex flex-col items-center justify-center px-4">
        <Header
          title="Organização Comercial"
          text="Organizar não é apenas arrumar coisas, é criar um ambiente que inspira criatividade, produtividade e sucesso. É estabelecer hábitos que transformam sua loja ou escritório em um espaço de eficiência, inovação e crescimento."
          subText="É investir em si mesmo e em seu negócio, para alcançar metas e superar desafios. Organize-se, organize seu negócio e veja o impacto que isso pode ter em sua vida e no seu negócio."
        />
        <motion.div
          className="w-full mt-20"
          initial={{ opacity: 0, transform: "translateY(100px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/comercial/capa.png"
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
          title="Um espaço organizado é um espaço produtivo. Organize-se agora."
        />
        <Footer />
      </main>
    </>
  )
}

