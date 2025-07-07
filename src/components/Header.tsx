import { FlipText } from "./ui/flip-text";
import { HeroVideoDialog } from "./ui/hero-video-dialog";

type HeaderProps = {
  title: string;
  text: string;
  subText: string;
};

export default function Header({ title, text, subText }: HeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="pt-40">
        <FlipText
          duration={0.5}
          delayMultiple={0.02}
          className="text-4xl font-bold font-subTitles -tracking-widest text-deepViolet-700 dark:text-white md:text-7xl md:leading-[5rem]"
        >
          {title}
        </FlipText>
      </h1>

      <div className="max-w-3xl mt-6">
        <p className="text-center text-zinc-600">
          {text}
        </p>

        <p className="text-center text-zinc-600">
          {subText}
        </p>
      </div>

      <div className="mt-20">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://youtu.be/JXkAeCALWLU?si=HtzQJ8JvqX8D0pvT"
          thumbnailSrc="/images/leticia-martins.png"
          thumbnailAlt="Dummy Video Thumbnail"
        />
      </div>
    </div>
  )
}