import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Sevices";

export default function Home() {
  return (
    <div className="min-h-dvh max-w-screen">

      <nav className="sticky top-0 z-50 py-4 backdrop-blur-xl bg-[rgba(255,255,255,0.7)]">
        <div className="max-w-6xl mx-auto">
          <NavBar />
        </div>
      </nav>

      <header className="bg-degrade">
        <div className="bg-white rounded-bl-12xl pb-20">
          <div className="max-w-6xl mx-auto">
            <Hero />
          </div>
        </div>
      </header>

      <main>
        <div className="bg-white">
          <section className="bg-degrade rounded-tr-12xl pt-20">
            <Services />
          </section>
        </div>
      </main>

    </div>
  );
}
