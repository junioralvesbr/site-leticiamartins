import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-dvh max-w-screen px-2">
      <div className="max-w-6xl mx-auto">
        <NavBar />
        <Header />
      </div>
    </div>
  );
}
