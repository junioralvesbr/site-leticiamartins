import SubTitleH2 from "./SubTitleH2";

import { FaRing } from "react-icons/fa6";

export default function Expertise() {
  return (
    <div className="flex justify-between gap-20">
      <div className="">
        <SubTitleH2>Expertise</SubTitleH2>
      </div>

      <div className="h-screen flex flex-col gap-10">
        <div className="bg-third flex flex-col justify-between rounded-2xl w-full min-h-64">
          <div className="flex justify-end-safe">
            <FaRing />
          </div>
          <div>
            <p>Digital Design</p>

            <p>
              Crafting digital experiences that are as functional as they are beautiful.
            </p>
          </div>
        </div>

        <div className="bg-third rounded-2xl">
          <p>Digital Design</p>
          <p>
            Crafting digital experiences that are as functional as they are beautiful.
          </p>
        </div>
      </div>
    </div>
  )
}