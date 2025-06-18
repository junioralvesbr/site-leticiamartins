import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Sevices";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <div className="min-h-dvh max-w-screen bg-white">

      <nav className="sticky top-0 z-50 py-4 backdrop-blur-xl bg-[rgba(255,255,255,0.7)]">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <NavBar />
        </div>
      </nav>

      <header className="bg-degrade">
        <div className="bg-white rounded-bl-12xl pb-20">
          <div className="max-w-6xl mx-auto px-5 lg:px-10">
            <Hero />
          </div>
        </div>
      </header>

      <main>
        <section data-name="nossos-servicos" className="bg-degrade rounded-tr-12xl rounded-bl-12xl pt-20">
          <div className="max-w-6xl mx-auto h-full px-5 lg:px-10">
            <Services />
          </div>
        </section>

        <section data-name="expertises" className="bg-third h-screen">
          <div className="bg-white rounded-tr-12xl pt-20">
            <div className="max-w-6xl mx-auto h-full px-5 lg:px-10">
              <Expertise />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
