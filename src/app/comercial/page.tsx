import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ResidencialTimeLine } from "@/components/ResidencialTimeLine";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

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
        <ResidencialTimeLine />
        <Footer />
      </main>
    </>
  )
}

