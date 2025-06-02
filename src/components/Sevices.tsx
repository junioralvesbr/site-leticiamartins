import Image from "next/image";
import * as motion from "motion/react-client"
import SubTitleH2 from "@/components/SubTitleH2";

const data = [
  {
    image: '/images/service.jpg',
    title: 'Organização',
    description: 'Quarto, Closets, Escritórios, Sala, Cozinha, Lavanderia'
  },
  {
    image: '/images/service.jpg',
    title: 'Pós Mudança',
    description: 'Mudança residencial'
  },
  {
    image: '/images/service.jpg',
    title: 'Empresarial',
    description: 'Organização de empresas'
  },
  {
    image: '/images/service.jpg',
    title: 'Cursos',
    description: 'Cursos e palestras de organização'
  },
]

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto h-full px-5 lg:px-10">
      <h2 className="flex items-center justify-center">
        <SubTitleH2>Nossos Serviços</SubTitleH2>
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 mt-12"
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{
          duration: 1,
        }}>
        {data.map((item, index) => (
          <article key={index} className="flex flex-col gap-4">
            <Image
              src={item.image}
              alt="Serviços"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg mb-4 hover:scale-105 transition-all duration-1000"
            />
            <p className="text-secondary font-ptSerif">
              {item.description}
            </p>

            <h3 className="text-3xl font-ptSerif font-bold text-primary">
              {item.title}
            </h3>
          </article>
        ))}
      </motion.div>
    </div>
  )
}