import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Pictures from "@/components/Pictures";
import About from "@/components/About";
import Services from "@/components/Services";
import MenuMobile from "@/components/MenuMobile";

export default function Home() {
  return (
    <div className="min-h-dvh max-w-screen bg-white">

      <nav
        id="navbar"
        className="sticky top-0 z-50 py-4 backdrop-blur-xl bg-[rgba(255,255,255,0.7)]"
      >
        <div className="max-w-7xl mx-auto px-5 hidden md:block lg:px-10">
          <NavBar />
        </div>

        <div>
          <MenuMobile />
        </div>
      </nav>

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
          id="about"
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
    </div>
  );
}
