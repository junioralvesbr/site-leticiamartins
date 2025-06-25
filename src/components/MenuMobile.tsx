'use client'

import { useState } from "react";
import { MenuButton } from "./ui/menu-button";

export default function MenuMobile() {
  const [isOpen, setOpen] = useState(false);

  const menuButtonStyle = {
    marginLeft: "2rem"
  };

  return (
    <MenuButton
      isOpen={isOpen}
      onClick={() => setOpen(!isOpen)}
      strokeWidth="8"
      color="#401952"
      lineProps={{ strokeLinecap: "round" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      width="24"
      height="24"
      style={menuButtonStyle}
    />
  )
}