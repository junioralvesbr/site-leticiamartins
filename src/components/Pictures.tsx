import React from "react";
import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

const items = [
  {
    title: "",
    image: "/images/mural/mural-1.jpg",
    className: "absolute top-10 left-[40%] rotate-[-5deg]",
    finalPosition: { x: '-200%', y: 40 },
    finalPositionMobile: { x: '-80%', y: 10 }
  },
  {
    title: "",
    image: "/images/mural/mural-2.jpg",
    className: "absolute top-40 left-[25%] rotate-[-7deg]",
    finalPosition: { x: '-40%', y: 220 },
    finalPositionMobile: { x: '-60%', y: 300 }
  },
  {
    title: "",
    image: "/images/mural/mural-3.jpg",
    className: "absolute top-32 left-[55%] rotate-[10deg]",
    finalPosition: { x: '40%', y: 40 },
    finalPositionMobile: { x: '-10%', y: -40 }
  },
  {
    title: "",
    image: "/images/mural/mural-4.jpg",
    className: "absolute top-20 right-[35%] rotate-[2deg]",
    finalPosition: { x: '180%', y: 300 },
    finalPositionMobile: { x: '80%', y: 370 }
  },
  {
    title: "",
    image: "/images/mural/mural-5.jpg",
    className: "absolute top-24 left-[45%] rotate-[-7deg]",
    finalPosition: { x: '180%', y: -20 }
  },
  {
    title: "",
    image: "/images/mural/mural-6.jpg",
    className: "absolute top-8 left-[30%] rotate-[4deg]",
    finalPosition: { x: '-60%', y: 0 }
  },
];

export function PicturesDesktop() {
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute font-paragraph top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Organize seu LAR para aproveitar os melhores momentos da VIDA.
      </p>
      {items.map((item, index) => (
        <DraggableCardBody
          key={index}
          className={item.className}
          finalPosition={item.finalPosition}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={320}
            height={320}
            className="pointer-events-none relative z-10 object-cover w-60 h-40 lg:h-80 lg:w-80"
          />
          <h3 className="mt-4 text-center text-xl font-paragraph font-bold text-neutral-700 dark:text-neutral-300 lg:text-2xl">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
export function PicturesMobile() {
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute font-paragraph top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Organize seu LAR para aproveitar os melhores momentos da VIDA.
      </p>
      {items.filter((_, index) => index < 4).map((item, index) => (
        <DraggableCardBody
          key={index}
          className={item.className}
          finalPosition={item.finalPositionMobile}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={320}
            height={320}
            className="pointer-events-none relative z-10 object-cover w-60 h-40 lg:h-80 lg:w-80"
          />
          <h3 className="mt-4 text-center text-xl font-paragraph font-bold text-neutral-700 dark:text-neutral-300 lg:text-2xl">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
