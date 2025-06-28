import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

type Props = {
  className: string
}

export default function SocialMediaButton({ className }: Props) {
  return (
    <ul className={className}>
      <Link
        href="https://www.instagram.com/leticiamartins.organizer/"
        className="group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className="text-lg font-subTitles bg-zinc-100 p-2.5 rounded-full group-hover:bg-purple-400 transition-all duration-300">
          <FaInstagram
            className="text-zinc-600 text-2xl group-hover:text-white transition-all duration-300" />
        </li>
      </Link>

      <Link
        href="https://wa.me/5511999999999"
        className="group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li
          className="text-lg font-subTitles bg-zinc-100 p-2.5 rounded-full group-hover:bg-purple-400 transition-all duration-300">
          <FaWhatsapp className="text-zinc-600 text-2xl group-hover:text-white transition-all duration-300" />
        </li>
      </Link>
    </ul>
  )
}