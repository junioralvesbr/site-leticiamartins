import SubTitleH2 from "./SubTitleH2";
import { expertise } from "@/data/expertise";

import { FaRing } from "react-icons/fa6";

export default function Expertise() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 mt-12">
      <div className="flex-auto">
        <SubTitleH2>Expertise</SubTitleH2>
      </div>

      <div className="h-screen flex flex-col gap-10">
        {expertise.map((item, index) => (
          <div
            key={index}
            className="bg-third flex flex-col justify-between rounded-2xl w-full min-h-[360px] p-6"
          >
            <div className="flex justify-end-safe">
              <FaRing />
            </div>
            <div>
              <p className="text-3xl font-ptSerif font-bold text-black">
                {item.title}
              </p>

              <p className="text-base font-ptSerif text-primary">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}