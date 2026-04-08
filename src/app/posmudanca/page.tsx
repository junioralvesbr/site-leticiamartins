import { Metadata } from "next";

import Footer from "@/components/Footer";
import GridImage from "@/components/GridImage";
import Header from "@/components/Header";
import { Timeline } from "@/components/ui/timeline";

export const metadata: Metadata = {
  title: "Pós Mudança - Leticia Martins",
  alternates: {
    canonical: "https://www.leticiamartins.com.br/posmudanca",
  },
  description:
    "Serviço de organização pós-mudança em Maringá com Leticia Martins. Desempacote, organize e transforme seu novo lar com praticidade, conforto e soluções personalizadas para sua família.",
  keywords: [
    "organização pós-mudança",
    "personal organizer pós-mudança",
    "organização residencial",
    "organização de mudança",
    "desempacotar mudança",
    "organização de casa nova",
    "personal organizer Maringá",
    "organização profissional",
    "organização de armários",
    "organização de ambientes",
    "Leticia Martins",
    "mudança sem estresse",
    "serviço pós-mudança",
    "organização familiar",
    "organização eficiente",
  ],
};

const data = [
  {
    id: 1,
    title: "Equipe Profissional",
    content: (
      <div>
        <p className="mb-8 text-base font-paragraph font-normal text-neutral-600 md:text-xl dark:text-neutral-200">
          Ao contar com a ajuda da minha equipe de personal organizer, você todo
          cuidado e zelo com seus pertences, garantindo todo conforto e
          tranquilidade a etapa final do serviço.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GridImage
            src="/images/posmudanca/posmudanca-1.jpg"
            alt="Equipe de Personal Organizers desencaixando mudança com cuidado"
          />
          <GridImage
            src="/images/posmudanca/posmudanca-2.jpg"
            alt="Organização estratégica de mudança residencial em Maringá"
          />
          <GridImage
            src="/images/posmudanca/posmudanca-3.jpg"
            alt="Processo de triagem e organização de itens após mudança"
          />
          <GridImage
            src="/images/posmudanca/posmudanca-4.jpg"
            alt="Instalação e organização de pertences no novo lar"
          />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Nosso Trabalho",
    content: (
      <div>
        <p className="mb-8 text-base font-normal text-neutral-600 md:text-xl dark:text-neutral-200">
          Inclui otimizar o espaço nos armários, criar sistemas de organização
          eficientes e encontrar soluções práticas para armazenar seus
          pertences. Além disso, oferecemos orientações sobre como manter a
          organização a longo prazo, o que facilitará sua adaptação ao novo lar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GridImage
            src="/images/posmudanca/posmudanca-5.jpg"
            alt="Otimização de espaço em armários novos de cozinha"
          />
          <GridImage
            src="/images/posmudanca/posmudanca-6.jpg"
            alt="Sistemas de organização eficientes para closets após mudança"
          />
          <GridImage
            src="/images/posmudanca/posmudanca-7.jpg"
            alt="Acomodação de roupas e enxoval em nova residência"
          />
          <GridImage
            src="/images/posmudanca/posmudanca-8.jpg"
            alt="Finalização de serviço de pós-mudança com Letícia Martins"
          />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Mudança organizada",
    content: (
      <div>
        <p className="mb-4 text-base font-normal text-neutral-600 md:text-xl dark:text-neutral-200">
          Estamos prontos para te oferecer uma experiência única e exclusiva,
          com todo conforto e tranquilidade que você e sua familia merece.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GridImage
            src="/images/posmudanca/posmudanca-9.jpg"
            alt="Casa nova totalmente organizada e funcional"
          />
          <GridImage
            src="/images/posmudanca/posmudanca-10.jpg"
            alt="Experiência de morar em um lar organizado desde o primeiro dia"
          />
          <GridImage
            src="/images/posmudanca/posmudanca-11.jpg"
            alt="Praticidade e bem-estar familiar após organização de mudança"
          />
          <GridImage
            src="/images/posmudanca/posmudanca-12.jpg"
            alt="Serviço exclusivo de Personal Organizer para pós-mudança"
          />
        </div>
      </div>
    ),
  },
];

export default function PosMudanca() {
  return (
    <>
      <header>
        <Header
          title="Pós Mudança"
          text="Organização de pós-mudança é muito mais do que desempacotar caixas, é pensar em cada detalhe para criar um lar funcional, acolhedor e harmonioso."
          subText="Nosso compromisso é ouvir você com atenção e criar um método personalizado, pensado no seu conforto e no bem-estar da sua familia."
          capa="/images/posmudanca/capa.jpg"
          alt="Imagem de capa da página de Pós-Mudança - Letícia Martins"
        />
      </header>

      <main className="h-dvh">
        <div className="relative w-full overflow-clip">
          <Timeline
            data={data}
            title={`Mudança sem estresse`}
            title2={`e sem preocupação`}
          />
        </div>
        <Footer />
      </main>
    </>
  );
}
