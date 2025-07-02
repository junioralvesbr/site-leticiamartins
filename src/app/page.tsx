import { Metadata } from "next";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Pictures from "@/components/Pictures";
import About from "@/components/About";
import Services from "@/components/Services";

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
          id="servicos"
          className="bg-degrade rounded-tr-12xl rounded-bl-12xl py-20">
          <div className="max-w-7xl mx-auto h-full px-5">
            <Services />
          </div>
        </section>

        <section
          id="sobre"
          className="bg-site-100 mt-12 sm:mt-20">
          <div className="bg-white rounded-tr-12xl">
            <div className="max-w-7xl mx-auto px-5 lg:px-10">
              <About />
            </div>
          </div>
        </section>

        <section
          id="pictures"
          className="h-screen bg-deepViolet-700 overflow-hidden mt-20 hidden md:block">
          <div className="bg-white rounded-bl-12xl">
            <Pictures />
          </div>
        </section>
      </main>

      <footer
        id="footer"
        className="bg-deepViolet-700">
        <Footer />
      </footer>
    </>
  );
}
