import Image from "next/image";
import SubTitleH2 from "@/components/SubTitleH2";

const data = [
  {
    image: '/images/service.jpg',
    title: 'Organização de Ambientes',
    description: 'Quarto, Closets, Escritórios, Sala, Cozinha, Lavanderia'
  },
  {
    image: '/images/service.jpg',
    title: 'Pós Mudança',
    description: 'Quarto, Closets, Escritórios, Sala, Cozinha, Lavanderia'
  },
  {
    image: '/images/service.jpg',
    title: 'Organização Empresarial',
    description: 'Quarto, Closets, Escritórios, Sala, Cozinha, Lavanderia'
  },
  {
    image: '/images/service.jpg',
    title: 'Cursos e palestras',
    description: 'Quarto, Closets, Escritórios, Sala, Cozinha, Lavanderia'
  },
]

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 h-full">
      <h2 className="flex items-center justify-center">
        <SubTitleH2>Nossos Serviços</SubTitleH2>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 mt-12">
        {data.map((item, index) => (
          <article key={index}>
            <Image
              src={item.image}
              alt="Serviços"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-secondary font-ptSerif">
              {item.description}
            </p>

            <h3 className="text-3xl font-ptSerif font-bold text-primary">
              {item.title}
            </h3>
          </article>
        ))}
      </div>
    </div>
  )
}