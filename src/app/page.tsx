import { Metadata } from "next";

import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { MuralDesktop, MuralMobile } from "@/components/Mural";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Personal Organizer em Maringá | Letícia Martins",
  description:
    "Organização residencial e comercial em Maringá. Transforme seu ambiente com praticidade, leveza e sofisticação.",
  alternates: {
    canonical: 'https://www.leticiamartins.com.br',
  },
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
    "Organização em maringá"
  ],
}

export default function Home() {
  return (
    <>
      <header
        id="header"
        className="bg-degrade"
      >
        <div className="bg-white rounded-bl-12xl pb-20">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <Hero />
          </div>
        </div>
      </header>

      <main>
        <section
          id="servicos"
          className="bg-degrade rounded-tr-12xl rounded-bl-12xl py-20">
          <div className="max-w-7xl mx-auto h-full px-5">
            <Services />
          </div>
        </section>

        <section
          id="experiencia"
          className="bg-site-100 mt-12 sm:mt-20">
          <div className="bg-white rounded-tr-12xl">
            <div className="max-w-7xl mx-auto px-5 lg:px-10">
              <Expertise />
            </div>
          </div>
        </section>

        <section
          id="mural"
          className="h-screen bg-first overflow-hidden mt-20">
          <div className="bg-white rounded-bl-12xl hidden sm:block">
            <MuralDesktop />
          </div>
          <div className="bg-white rounded-bl-12xl block sm:hidden">
            <MuralMobile />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
