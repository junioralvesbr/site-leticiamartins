import Image from "next/image";
import * as motion from "motion/react-client"
import { FlipText } from "@/components/ui/flip-text";

const data = [
  {
    image: "/images/servicos/residencial.png",
    alt: "Foto de organização residencial",
    title: 'Organização Residencial',
    description: 'Quarto, Closets, Escritórios, Sala, Cozinha, Lavanderia'
  },
  {
    image: "/images/servicos/pos-mudanca.png",
    alt: "Foto de pós mudança residencial",
    title: 'Pós Mudança Residencial',
    description: 'Mudança residencial'
  },
  {
    image: "/images/servicos/empresarial.png",
    alt: "Foto de organização empresarial",
    title: 'Organização Empresarial',
    description: 'Organização de empresas'
  },
  {
    image: "/images/servicos/moveis-planejados.png",
    alt: "Foto de consultoria em móveis planejados",
    title: 'Consultora em Móveis Planejados',
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
                alt={item.alt}
                width={500}
                height={500}
                className="w-full h-96 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
            <p className="text-deepViolet-600 font-subTitles">
              {item.description}
            </p>

            <h3 className="text-3xl font-subTitles font-bold text-deepViolet-700">
              {item.title}
            </h3>
          </article>
        ))}
      </motion.div>
    </div>
  )
}