import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Sevices";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <div className="min-h-dvh max-w-screen bg-white">

      <nav className="sticky top-0 z-50 py-4 backdrop-blur-xl bg-[rgba(255,255,255,0.7)]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <NavBar />
        </div>
      </nav>

      <header className="bg-degrade">
        <div className="bg-white rounded-bl-12xl pb-20">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <Hero />
          </div>
        </div>
      </header>

      <main>
        <section
          data-name="nossos-servicos"
          className="bg-degrade rounded-tr-12xl rounded-bl-12xl py-20"
        >
          <div className="max-w-7xl mx-auto h-full px-5">
            <Services />
          </div>
        </section>

        <section data-name="expertises" className="bg-site-100">
          <div className="bg-white rounded-tr-12xl pt-20">
            <div className="max-w-7xl mx-auto px-5 lg:px-10">
              <Expertise />
            </div>
          </div>
        </section>

        <section className="h-screen bg-white">
          <h2 className="text-3xl font-bold text-deepViolet-700">Ultima seção</h2>
        </section>
      </main>
    </div>
  );
}
