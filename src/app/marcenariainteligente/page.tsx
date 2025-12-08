import { Metadata } from "next";

import Footer from "@/components/Footer";
import GridImage from "@/components/GridImage";
import Header from "@/components/Header";
import { Timeline } from "@/components/ui/timeline";

export const metadata: Metadata = {
  title: "Marcenaria Inteligente - Leticia Martins",
  alternates: {
    canonical: "https://www.leticiamartins.com.br",
  },
  description:
    "Marcenaria inteligente em Maringá com Leticia Martins. Planejamento e organização de móveis sob medida, otimizando espaços com divisórias, gavetas e prateleiras personalizadas. Soluções práticas para ambientes funcionais, bonitos e organizados.",
  keywords: [
    "marcenaria inteligente",
    "organização de móveis planejados",
    "móveis sob medida Maringá",
    "personal organizer Maringá",
    "otimização de espaços",
    "divisórias personalizadas",
    "gavetas sob medida",
    "prateleiras planejadas",
    "organização residencial",
    "Leticia Martins",
    "soluções para marcenaria",
    "ambientes funcionais",
    "organização de interiores",
    "móveis planejados Maringá",
    "consultoria em marcenaria",
    "projeto de móveis inteligentes",
  ],
};

const data = [
  {
    id: 1,
    title: "Tudo bem projetado",
    content: (
      <div>
        <p className="mb-8 text-base font-paragraph font-normal text-neutral-600 md:text-xl dark:text-neutral-200">
          Organizamos com eficiência: maximizamos os espaços no móvel planejado,
          utilizando soluções como divisórias, gavetas sob medidas, prateleiras
          ajustadas e compartimentos personalizados para manter seus pertences
          em ordem e facilmente acessíveis.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GridImage
            src="/images/marcenaria/foto-1.webp"
            alt="fotos de móveis planejados para organização"
          />
          <GridImage
            src="/images/marcenaria/foto-2.webp"
            alt="fotos de móveis planejados para organização"
          />
          <GridImage
            src="/images/marcenaria/foto-3.webp"
            alt="fotos de móveis planejados para organização"
          />
          <GridImage
            src="/images/marcenaria/foto-4.jpg"
            alt="fotos de móveis planejados para organização"
          />
        </div>
      </div>
    ),
  },
];

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
  );
}
