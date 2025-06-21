import Image from "next/image";
import * as motion from "motion/react-client"
import { FlipText } from "@/components/ui/flip-text";

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
    <div>
      <h2 className="flex items-center justify-center">
        <FlipText>{`Nossos ${'\n'} Serviços`}</FlipText>
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20"
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{
          duration: 1,
        }}>
        {data.map((item, index) => (
          <article key={index} className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt="Serviços"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
            <p className="text-deepViolet-600 font-ptSerif">
              {item.description}
            </p>

            <h3 className="text-3xl font-ptSerif font-bold text-deepViolet-700">
              {item.title}
            </h3>
          </article>
        ))}
      </motion.div>
    </div>
  )
}