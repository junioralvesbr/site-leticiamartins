import { JSX } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

type Props = {
  name: string;
  href: string;
}

type Icons = Record<string, JSX.Element>

const Icons: Icons = {
  Instagram: <FaInstagram className="text-zinc-600 text-2xl group-hover:text-white transition-all duration-300" />,
  WhatsApp: <FaWhatsapp className="text-zinc-600 text-2xl group-hover:text-white transition-all duration-300" />,
  Facebook: <FaFacebook className="text-zinc-600 text-2xl group-hover:text-white transition-all duration-300" />
}

export default function SocialLinkButton({ name, href }: Props) {
  return (
    <div className="group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="text-lg font-subTitles bg-zinc-100 p-2.5 rounded-full group-hover:bg-purple-400 transition-all duration-300"
        >
          {Icons[name]}
        </div>
      </a>
    </div>
  )
}