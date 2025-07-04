import Footer from "@/components/Footer";
import { ResidencialTimeLine } from "@/components/ResidencialTimeLine";
import { FlipText } from "@/components/ui/flip-text";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export default function Residencial() {
  return (
    <>
      <header className="flex flex-col items-center justify-center">
        <h1 className="pt-40">
          <FlipText
            duration={0.5}
            delayMultiple={0.02}
            className="text-4xl font-bold font-subTitles -tracking-widest text-deepViolet-700 dark:text-white md:text-7xl md:leading-[5rem]"
          >
            Organização Residencial
          </FlipText>
        </h1>

        <div className="max-w-3xl mt-6">
          <p className="text-center text-zinc-600">
            Somos apaixonados por organização e atuamos em todos os ambientes da sua casa. Estamos aqui para te ouvir e elaborar um plano personalizado e perfeito para seu conforto e de sua familia.
          </p>

          <p className="text-center text-zinc-600">
            Eu e minha equipe estamos prontas para organizar a sua casa e te ajudar nas rotinas do dia a dia.
          </p>
        </div>

        <div className="mt-20">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://youtu.be/JXkAeCALWLU?si=HtzQJ8JvqX8D0pvT"
            thumbnailSrc="/images/leticia-martins.png"
            thumbnailAlt="Dummy Video Thumbnail"
          />
        </div>
      </header>

      <main className="h-dvh">
        <ResidencialTimeLine />
        <Footer />
      </main>
    </>
  )
}

