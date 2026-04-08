import { Metadata } from "next";

import Footer from "@/components/Footer";
import GridImage from "@/components/GridImage";
import Header from "@/components/Header";
import { Timeline } from "@/components/ui/timeline";

export const metadata: Metadata = {
  title: "Organização Comercial - Leticia Martins",
  alternates: {
    canonical: "https://www.leticiamartins.com.br/comercial",
  },
  description:
    "Serviço de organização comercial em Maringá com Leticia Martins. Soluções personalizadas para empresas, escritórios, lojas, estoques e ateliês. Aumente a produtividade, otimize espaços e transforme seu ambiente de trabalho com uma personal organizer especializada.",
  keywords: [
    "organização comercial",
    "personal organizer comercial",
    "organização de empresas",
    "organização de escritórios",
    "organização de lojas",
    "organização de estoque",
    "organização de ateliê",
    "organização profissional Maringá",
    "Leticia Martins",
    "produtividade empresarial",
    "otimização de ambientes comerciais",
    "organização de ambientes de trabalho",
    "consultoria organizacional Maringá",
    "organização para negócios",
    "personal organizer para empresas",
    "organização eficiente Maringá",
  ],
};

const data = [
  {
    id: 1,
    title: "Almoxarifado & Estoque",
    content: (
      <div>
        <p className="mb-8 text-base font-paragraph font-normal text-neutral-600 md:text-xl dark:text-neutral-200">
          Estamos prontos para facilitar e tornar a rotina da sua empresa mais
          eficiente e produtiva. Nossa equipe proporciona um plano personalizado
          e exclusivo para o seu negócio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GridImage
            src="/images/comercial/comercial-1.jpg"
            alt="Estoque comercial organizado para facilitar a logística interna"
          />
          <GridImage
            src="/images/comercial/comercial-2.jpg"
            alt="Almoxarifado de empresa com identificação e categorização de itens"
          />
          <GridImage
            src="/images/comercial/comercial-3.jpg"
            alt="Organização de estoque para aumento de produtividade empresarial"
          />
          <GridImage
            src="/images/comercial/comercial-4.jpg"
            alt="Soluções de armazenamento para ambientes comerciais em Maringá"
          />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Loja, Ateliê & Escritório",
    content: (
      <div>
        <p className="mb-8 text-base font-paragraph font-normal text-neutral-600 md:text-xl dark:text-neutral-200">
          Organização é liberdade: livre-se da bagunça e encontre o sucesso em
          seu escritório e loja.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GridImage
            src="/images/comercial/comercial-5.jpg"
            alt="Organização de ateliê com materiais facilmente acessíveis"
          />
          <GridImage
            src="/images/comercial/comercial-6.jpg"
            alt="Escritório organizado para melhor fluxo de trabalho e foco"
          />
          <GridImage
            src="/images/comercial/comercial-7.jpg"
            alt="Layout de loja organizado para melhor experiência do cliente"
          />
          <GridImage
            src="/images/comercial/comercial-8.jpg"
            alt="Personal Organizer comercial transformando ambientes corporativos"
          />
        </div>
      </div>
    ),
  },
];

export default function Organizacaocomercial() {
  return (
    <>
      <header>
        <Header
          title="Comercial"
          text="Organizar não é apenas arrumar coisas, é criar um ambiente que inspira criatividade, produtividade e sucesso. É estabelecer hábitos que transformam sua loja ou escritório em um espaço de eficiência, inovação e crescimento."
          subText="É investir em si mesmo e em seu negócio, para alcançar metas e superar desafios. Organize-se, organize seu negócio e veja o impacto que isso pode ter em sua vida e no seu negócio."
          capa="/images/comercial/capa.jpg"
          alt="Capa da página de Organização Comercial - Letícia Martins"
        />
      </header>

      <main className="h-dvh">
        <Timeline
          data={data}
          title="Organização,"
          title2="Produtividade e inovação"
        />
        <Footer />
      </main>
    </>
  );
}
