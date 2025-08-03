import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const data = [
  {
    title: "Quartos & Closets",
    content: (
      <div>
        <p className="mb-8 text-xs font-paragraph font-normal text-neutral-600 md:text-xl dark:text-neutral-200">
          Um quarto organizado proporciona mais do que um ambiente bonito: oferece tranquilidade, bem-estar e uma sensação de acolhimento no dia a dia. Facilita a rotina, otimiza tempo, reduz o estresse e cria um espaço convidativo para descanso e renovação.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/images/residencial/closet-1.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
          <Image
            src="/images/residencial/closet-2.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
          <Image
            src="/images/residencial/closet-3.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
          <Image
            src="/images/residencial/closet-4.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Cozinhas & Despensas",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-600 md:text-xl dark:text-neutral-200">
          Uma cozinha organizada proporciona praticidade no preparo das refeições, otimiza o tempo, evita desperdícios e cria um ambiente mais funcional e agradável para a rotina. Mais do que isso, transforma o ato de cozinhar em um momento prazeroso, acolhedor e cheio de boas experiências para você e sua família.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/images/residencial/cozinha-1.jpg"
            alt="hero template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
          <Image
            src="/images/residencial/cozinha-2.jpg"
            alt="feature template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
          <Image
            src="/images/residencial/cozinha-3.jpg"
            alt="bento template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
          <Image
            src="/images/residencial/cozinha-4.jpg"
            alt="cards template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Banheiros & Lavanderia",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-600 md:text-xl dark:text-neutral-200">
          Esses ambientes organizados oferecem mais praticidade e funcionalidade para o dia a dia. No banheiro, a organização garante um ambiente agradável, limpo e relaxante para seus momentos de autocuidado. Já na lavanderia, facilita as tarefas domésticas, economiza tempo e torna o espaço mais eficiente e harmonioso para cuidar da casa com muito mais leveza.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/images/residencial/banheiro-1.jpg"
            alt="hero template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
          <Image
            src="/images/residencial/banheiro-2.jpg"
            alt="feature template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
          <Image
            src="/images/residencial/banheiro-3.jpg"
            alt="bento template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
          <Image
            src="/images/residencial/banheiro-4.jpg"
            alt="cards template"
            width={500}
            height={500}
            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
          />
        </div>
      </div>
    ),
  },
];


export default function OrganizacaoResidencial() {
  return (
    <>
      <header className="flex flex-col items-center justify-center px-4">
        <Header
          title="Organização Residencial"
          text="Somos apaixonadas por organização e atuamos em todos os ambientes da casa. Nosso compromisso é ouvir você com atenção e criar um método personalizado, pensado no seu conforto e no bem-estar da sua familia."
          subText="Eu e minha equipe estamos prontas para transformar seu lar e facilitar sua rotina com leveza, praticidade e carinho em cada detalhe."
        />
        <HeroVideoDialog
          className="block dark:hidden mt-20"
          animationStyle="from-center"
          videoSrc="https://youtube.com/embed/p-a3oyMTcRk?si=Gp9Z3xgqBewOkyS3"
          thumbnailSrc="/images/leticia-martins.png"
          thumbnailAlt="Dummy Video Thumbnail"
        />
      </header>

      <main className="h-dvh">
        <div className="relative w-full overflow-clip">
          <Timeline
            data={data}
            title="Organização que traz paz,"
            title2="conforto e tranquilidade."
          />
        </div>

        <Footer />
      </main>
    </>
  )
}

