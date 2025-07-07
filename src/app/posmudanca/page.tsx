import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ResidencialTimeLine } from "@/components/ResidencialTimeLine";

export default function PosMudanca() {
  return (
    <>
      <header>
        <Header
          title="Pós Mudança"
          text="Somos apaixonados por organização e atuamos em todos os ambientes da sua casa. Estamos aqui para te ouvir e elaborar um plano personalizado e perfeito para seu conforto e de sua familia."
          subText="Eu e minha equipe estamos prontas para organizar a sua casa e te ajudar nas rotinas do dia a dia."
        />
      </header>

      <main className="h-dvh">
        <ResidencialTimeLine />
        <Footer />
      </main>
    </>
  )
}

