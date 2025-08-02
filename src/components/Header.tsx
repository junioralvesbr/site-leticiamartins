import { TextAnimate } from "./ui/text-animate";

type HeaderProps = {
  title: string;
  text: string;
  subText?: string
};

export default function Header({ title, text, subText }: HeaderProps) {
  return (
    <div className="text-center">
      <div className="pt-10 lg:pt-40">
        <TextAnimate
          as="h1"
          animation="blurInUp"
          by="character"
          delay={0.5}
          once={true}
          className="text-4xl font-bold font-subTitles -tracking-tight text-deepViolet-700 dark:text-white md:text-7xl md:leading-[5rem]"
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
  )
}