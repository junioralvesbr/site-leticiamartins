import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const data = [
  {
    title: "Lojas, Ateliês, Escritórios, Almoxarifados",
    content: (
      <div>
        <p className="mb-8 text-xs font-paragraph font-normal text-neutral-600 md:text-sm dark:text-neutral-200">
          Eu e minha equipe estamos prontas para organizar a sua casa e te ajudar nas rotinas do dia a dia.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/comercial/almoxarifado.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/comercial/atelie.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/comercial/loja.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/comercial/loja.jpg"
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
          text="Somos apaixonados por organização e atuamos em todos os ambientes da sua casa. Estamos aqui para te ouvir e elaborar um plano personalizado e perfeito para seu conforto e de sua familia."
          subText="Eu e minha equipe estamos prontas para organizar a sua casa e te ajudar nas rotinas do dia a dia."
        />
        <HeroVideoDialog
          className="block dark:hidden mt-20"
          animationStyle="from-center"
          videoSrc="https://youtube.com/embed/iQkSFhT38nY?si=hXXMDxmL4JMVGOa0"
          thumbnailSrc="/images/leticia-martins.png"
          thumbnailAlt="Dummy Video Thumbnail"
        />
      </header>

      <main className="h-dvh">
        <Timeline
          data={data}
          title="Organização sem estresse e sem preocupação"
        />
        <Footer />
      </main>
    </>
  )
}

