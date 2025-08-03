import { IconType } from "react-icons";

type Props = {
  href: string;
  Icon: IconType;
}

export default function SocialLinkButton({ href, Icon }: Props) {
  return (
    <div className="group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="text-lg font-subTitles bg-zinc-100 p-2 rounded-full group-hover:bg-fourth transition-all duration-300 lg:p-2.5"
        >
          <Icon className="text-zinc-600 text-xl group-hover:text-white transition-all duration-300 lg:text-2xl" />
        </div>
      </a>
    </div>
  )
}