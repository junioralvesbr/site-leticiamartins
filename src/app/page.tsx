import { Metadata } from "next";

import Hero from "@/components/Hero";
import { PicturesDesktop, PicturesMobile } from "@/components/Pictures";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Expertise from "@/components/Expertise";

export const metadata: Metadata = {
  title: 'Leticia Martins Personal Organizer',
  alternates: {
    canonical: 'https://www.leticiamartins.com.br',
  },
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
          id="services"
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
          id="pictures"
          className="h-screen bg-deepViolet-700 overflow-hidden mt-20">
          <div className="bg-white rounded-bl-12xl hidden sm:block">
            <PicturesDesktop />
          </div>
          <div className="bg-white rounded-bl-12xl block sm:hidden">
            <PicturesMobile />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
