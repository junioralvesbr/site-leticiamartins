import { FlipText } from "@/components/ui/flip-text";
import { FaRing } from "react-icons/fa6";

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
      <div className="sticky top-20 sm:top-36">
        <h2 className="sticky top-20 sm:top-36">
          <FlipText>{`Sobre ${'\n'} min`}</FlipText>
        </h2>
      </div>

      <div className="flex flex-col gap-10 sticky top-36">
        <div className="bg-deepViolet-200 flex flex-col justify-between rounded-2xl w-full min-h-[360px] p-6 sticky top-36 rotate-2">
          <div className="flex justify-end-safe">
            <FaRing />
          </div>
          <div>
            <p className="text-3xl font-ptSerif font-bold text-black capitalize">
              Digital design
            </p>

            <p className="text-base font-ptSerif text-deepViolet-700">
              Crafting digital experiences that are as functional as they are beautiful.
            </p>
          </div>
        </div>

        <div className="bg-deepViolet-300 flex flex-col justify-between rounded-2xl w-full min-h-[360px] p-6 sticky top-36 -rotate-2">
          <div className="flex justify-end-safe">
            <FaRing />
          </div>
          <div>
            <p className="text-3xl font-ptSerif font-bold text-black capitalize">
              Digital design
            </p>

            <p className="text-base font-ptSerif text-deepViolet-700">
              Crafting digital experiences that are as functional as they are beautiful.
            </p>
          </div>
        </div>

        <div className="bg-deepViolet-400 flex flex-col justify-between rounded-2xl w-full min-h-[360px] p-6 sticky top-36 rotate-4">
          <div className="flex justify-end-safe">
            <FaRing />
          </div>
          <div>
            <p className="text-3xl font-ptSerif font-bold text-white capitalize">
              Digital design
            </p>

            <p className="text-base font-ptSerif text-white">
              Crafting digital experiences that are as functional as they are beautiful.
            </p>
          </div>
        </div>

        <div className="bg-deepViolet-500 flex flex-col justify-between rounded-2xl w-full min-h-[360px] p-6 sticky top-36">
          <div className="flex justify-end-safe">
            <FaRing />
          </div>
          <div>
            <p className="text-3xl font-ptSerif font-bold text-white capitalize">
              Digital design
            </p>

            <p className="text-base font-ptSerif text-white">
              Crafting digital experiences that are as functional as they are beautiful.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}