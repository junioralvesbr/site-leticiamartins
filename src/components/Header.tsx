import * as motion from "motion/react-client";
import { TextAnimate } from "./ui/text-animate";
import Image from "next/image";

type HeaderProps = {
  title: string;
  text: string;
  subText?: string
  capa: string;
  alt: string;
};

export default function Header({ title, text, subText, capa, alt }: HeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="pt-10 lg:pt-40">
          <TextAnimate
            as="h1"
            animation="blurInUp"
            by="character"
            delay={0.5}
            once={true}
            className="text-4xl font-bold font-subTitles text-balance -tracking-tight text-deepViolet-700 dark:text-white md:text-7xl md:leading-[5rem]"
          >
            {title}
          </TextAnimate>
        </div>

        <div className="max-w-3xl mt-6">
          <TextAnimate
            as="p"
            animation="fadeIn"
            by="line"
            delay={0.5}
            once={true}
            className="text-center text-zinc-600"
          >
            {text}
          </TextAnimate>
        </div>

        {subText && (
          <div className="max-w-3xl mt-6">
            <TextAnimate
              as="p"
              animation="fadeIn"
              by="line"
              delay={0.5}
              once={true}
              className="text-center text-zinc-600"
            >
              {subText}
            </TextAnimate>
          </div>
        )}
      </div>
      <motion.div
        className="w-full mt-20"
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 1 }}
      >
        <Image
          src={capa}
          alt={alt}
          width={800}
          height={600}
          className="w-full h-120 object-cover rounded-md border shadow-lg max-w-5xl mx-auto"
        />
      </motion.div>
    </div>
  )
}