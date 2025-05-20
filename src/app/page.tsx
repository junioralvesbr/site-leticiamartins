import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-dvh max-w-screen">
      <header>
        <div className="max-w-7xl mx-auto">
          <figure className="max-w-3xl h-120 relative aspect-video justify-self-end">
            <Image
              src="/images/leticia-martins.png"
              fill
              alt="Leticia Martins"
              className="rounded-xl absolute object-cover object-[25%_25%]"
            />
          </figure>

          <div>
            <span className="text-lg font-bold text-purple-1000">
              Software Engineer
            </span>

            <h1 className="font-anton text-9xl font-bold text-purple-1000">
              Leticia Martins
            </h1>

          </div>
        </div>
      </header>
    </div>
  );
}
