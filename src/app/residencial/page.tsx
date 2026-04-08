import Footer from "@/components/Footer";
import GridImage from "@/components/GridImage";
import Header from "@/components/Header";
import { Timeline } from "@/components/ui/timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organização Residencial - Leticia Martins",
  alternates: {
    canonical: "https://www.leticiamartins.com.br/residencial",
  },
  description:
    "Leticia Martins é uma personal organizer em Maringá. Especialista em organização residencial, empresarial e pós-mudança. Transforme seus ambientes com soluções práticas, personalizadas e eficientes.",
  keywords: [
    "Curso",
    "organização",
    "personal organizer",
    "personal organizer maringá",
    "curso de personal organizer",
    "organizadores",
    "Minha casa organizada",
    "mudança",
    "mudança residencial",
    "pós mudança",
    "pós-mudança",
    "organização empresarial",
    "organização de lojas",
    "organização de vitrines",
    "moveis planejado",
  ],
};

const data = [
  {
    id: 1,
    title: "Quartos & Closets",
    content: (
      <div>
        <p className="mb-8 text-base font-paragraph font-normal text-neutral-600 md:text-xl dark:text-neutral-200">
          Um quarto organizado proporciona mais do que um ambiente bonito:
          oferece tranquilidade, bem-estar e uma sensação de acolhimento no dia
          a dia. Facilita a rotina, otimiza tempo, reduz o estresse e cria um
          espaço convidativo para descanso e renovação.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GridImage
            src="/images/residencial/closet-1.jpg"
            alt="Closet feminino organizado com cabides padronizados por Letícia Martins"
          />
          <GridImage
            src="/images/residencial/closet-2.jpg"
            alt="Gavetas de closet organizadas com colmeias e dobras verticais"
          />
          <GridImage
            src="/images/residencial/closet-3.jpg"
            alt="Prateleiras de closet com bolsas e acessórios bem dispostos"
          />
          <GridImage
            src="/images/residencial/closet-4.jpg"
            alt="Closet masculino organizado com calças e camisas por cores"
          />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Cozinhas & Despensas",
    content: (
      <div>
        <p className="mb-8 text-base font-normal text-neutral-600 md:text-xl dark:text-neutral-200">
          Uma cozinha organizada proporciona praticidade no preparo das
          refeições, otimiza o tempo, evita desperdícios e cria um ambiente mais
          funcional e agradável para a rotina. Mais do que isso, transforma o
          ato de cozinhar em um momento prazeroso, acolhedor e cheio de boas
          experiências para você e sua família.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GridImage
            src="/images/residencial/cozinha-1.jpg"
            alt="Armário de cozinha organizado com pratos e copos acessíveis"
          />
          <GridImage
            src="/images/residencial/cozinha-2.jpg"
            alt="Despensa de alimentos organizada com potes herméticos e identificação"
          />
          <GridImage
            src="/images/residencial/cozinha-3.jpg"
            alt="Gaveta de talheres e utensílios de cozinha organizada com divisórias"
          />
          <GridImage
            src="/images/residencial/cozinha-4.jpg"
            alt="Organização de panelas e potes plásticos otimizando o espaço"
          />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Banheiros & Lavanderia",
    content: (
      <div>
        <p className="mb-4 text-base font-normal text-neutral-600 md:text-xl dark:text-neutral-200">
          Esses ambientes organizados oferecem mais praticidade e funcionalidade
          para o dia a dia. No banheiro, a organização garante um ambiente
          agradável, limpo e relaxante para seus momentos de autocuidado. Já na
          lavanderia, facilita as tarefas domésticas, economiza tempo e torna o
          espaço mais eficiente e harmonioso para cuidar da casa com muito mais
          leveza.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GridImage
            src="/images/residencial/banheiro-1.jpg"
            alt="Gabinete de banheiro organizado com kits de higiene pessoal"
          />
          <GridImage
            src="/images/residencial/banheiro-2.jpg"
            alt="Armário de lavanderia organizado com produtos de limpeza em cestos"
          />
          <GridImage
            src="/images/residencial/banheiro-3.jpg"
            alt="Organização de toalhas e itens de banho em prateleiras"
          />
          <GridImage
            src="/images/residencial/banheiro-4.jpg"
            alt="Área de serviço otimizada e organizada por Personal Organizer"
          />
        </div>
      </div>
    ),
  },
];

export default function OrganizacaoResidencial() {
  return (
    <>
      <header>
        <Header
          title="Organização Residencial"
          text="Somos apaixonadas por organização e atuamos em todos os ambientes da casa. Nosso compromisso é ouvir você com atenção e criar um método personalizado, pensado no seu conforto e no bem-estar da sua familia."
          subText="Eu e minha equipe estamos prontas para transformar seu lar e facilitar sua rotina com leveza, praticidade e carinho em cada detalhe."
          capa="/images/servicos/foto-1.jpg"
          alt="Capa da página de Organização Residencial - Letícia Martins"
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
  );
}
