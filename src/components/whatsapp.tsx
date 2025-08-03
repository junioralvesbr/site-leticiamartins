import { linksAndPaths } from '@/data/linksAndPaths'
import { FaWhatsapp } from 'react-icons/fa'

export function WhatssAppIcon() {
  return (
    <a
      href={linksAndPaths.whatsapp.href}
      target="blank"
      className="flex flex-col fixed bottom-4 right-5 z-20 ease-in-out"
    >
      <div className="bg-green-600 w-12 h-12 rounded-full flex justify-center items-center self-end">
        <FaWhatsapp className="text-white text-3xl" />
      </div>
    </a>
  )
}
