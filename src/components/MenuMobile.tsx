'use client'

import { useState } from "react";
import { MenuButton } from "./ui/menu-button";

export default function MenuMobile() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-end-safe">
      <MenuButton
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        strokeWidth="8"
        color="#401952"
        lineProps={{ strokeLinecap: "round" }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        width="24"
        height="24"
      // style={menuButtonStyle}
      />

      {isOpen &&
        <div className="absolute bg-white inset-0">
          teste
        </div>
      }
    </div>
  )
}