"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

const DummyContent = () => {
  return (
    <Image
      src="/images/closet.jpg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

export function TabsDemo() {
  const tabs = [
    {
      title: "Quartos & Closets",
      value: "quarto",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Quartos e closets organizados trazem leveza e tranquilidade ao seu dia.</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Cozinhas e Dispensas",
      value: "cozinha",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Cozinha organizada facilita a rotina e inspira bons momentos.</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Banheiros & Lavanderia",
      value: "banheiros",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Cozinha organizada facilita a rotina e inspira bons momentos.</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} tabClassName="hover:cursor-pointer" />
    </div>
  );
}

