import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react"

export default function AvatarImage() {
  const { scrollYProgress } = useScroll();
  const itemOpacity = useTransform(scrollYProgress, [0, 0.02], [0, 1])
  const itemScale = useTransform(scrollYProgress, [0, 0.02], [0, 1])

  const smoothOpacity = useSpring(itemOpacity, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  const smoothScale = useSpring(itemScale, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  return (
    <motion.figure
      className="relative w-12 h-12 rounded-full overflow-hidden"
      style={{ opacity: smoothOpacity, scale: smoothScale }}
      transition={{ duration: 5, ease: 'easeInOut' }}
    >
      <Image
        src="/images/leticia-martins.png"
        alt="Logo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full h-full object-cover absolute"
        style={{ objectPosition: "50% 25%" }}
      />
    </motion.figure>
  )
}