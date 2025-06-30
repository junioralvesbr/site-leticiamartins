import Image from "next/image";

export default function AvatarImage() {
  return (
    <figure className="relative w-12 h-12 rounded-full overflow-hidden">
      <Image
        src="/images/leticia-martins.png"
        alt="Logo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full h-full object-cover"
        style={{ objectPosition: "50% 25%" }}
      />
    </figure>
  )
}