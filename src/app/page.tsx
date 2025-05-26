import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-dvh max-w-screen">
      <header>
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-end-safe">
            <figure className="relative w-full max-w-3xl aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/leticia-martins.png"
                alt="Leticia Martins"
                fill
                className="object-cover object-[25%_25%]"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </figure>
          </div>


          <div className="flex flex-nowrap gap-20 min-h-52">
            <div className="flex flex-col flex-wrap shrink-0 gap-2 justify-start">
              <p className="text-lg font-ptSerif text-secondary">
                Personal Organizer
              </p>

              <h1 className="font-anton text-9xl text-primary whitespace-pre letter-spacing-[-0.02em] leading-[1.2] font-bold">
                Leticia Martins
              </h1>
            </div>

            <div className="flex flex-col flex-wrap shrink gap-2 justify-end items-end-safe">
              <p className="text-lg font-ptSerif text-secondary">
                Sou especialista em organização de ambientes e pós-mudança. Meu trabalho é transformar espaços, unindo praticidade e harmonia para o dia a dia.
              </p>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}
