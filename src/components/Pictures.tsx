import React from "react";
import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function Pictures() {
  const items = [
    {
      title: "Tyler Durden",
      image: "/images/mural/mural-1.jpg",
      className: "absolute top-10 left-[40%] rotate-[-5deg]",
      finalPosition: { x: '-200%', y: 40 }
    },
    {
      title: "The Narrator",
      image: "/images/mural/mural-2.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
      finalPosition: { x: '-40%', y: 220 }
    },
    {
      title: "Japan",
      image: "/images/mural/mural-3.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
      finalPosition: { x: '40%', y: 40 }
    },
    {
      title: "Norway",
      image: "/images/mural/mural-4.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
      finalPosition: { x: '180%', y: 300 }
    },
    {
      title: "New Zealand",
      image: "/images/mural/mural-5.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
      finalPosition: { x: '180%', y: -20 }
    },
    {
      title: "Canada",
      image: "/images/mural/mural-6.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
      finalPosition: { x: '-60%', y: 0 }
    },
  ];
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
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-paragraph font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
