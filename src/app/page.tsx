import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Pictures from "@/components/Pictures";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-dvh max-w-screen bg-white">

      <nav className="sticky top-0 z-50 py-4 backdrop-blur-xl bg-[rgba(255,255,255,0.7)]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <NavBar />
        </div>
      </nav>

      <header
        id="header"
        data-name="header"
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
          data-name="services"
          className="bg-degrade rounded-tr-12xl rounded-bl-12xl py-20">
          <div className="max-w-7xl mx-auto h-full px-5">
            <Services />
          </div>
        </section>

        <section
          id="about"
          data-name="about"
          className="bg-site-100 mt-12 sm:mt-20">
          <div className="bg-white rounded-tr-12xl">
            <div className="max-w-7xl mx-auto px-5 lg:px-10">
              <About />
            </div>
          </div>
        </section>

        <section
          id="pictures"
          data-name="pictures"
          className="h-screen bg-deepViolet-700 overflow-hidden mt-20">
          <div className="bg-white rounded-bl-12xl">
            <Pictures />
          </div>
        </section>
      </main>

      <footer
        id="footer"
        data-name="footer"
        className="bg-deepViolet-700">
        <Footer />
      </footer>
    </div>
  );
}
