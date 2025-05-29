import * as motion from "motion/react-client"

type SubTitleH2Props = {
  children: string;
}

const SubTitleH2 = ({ children }: SubTitleH2Props) => {

  const subTitleToarray = children.split("")

  return (
    <>
      {subTitleToarray && subTitleToarray.map((child, index) => {
        if (child === " ") {
          return (
            <span
              key={index}
              className="font-anton font-bold text-6xl text-primary inline-block">
              {'\u00A0'}
            </span>
          )
        }

        return (
          <motion.span
            key={index}
            className="font-anton font-bold text-6xl text-primary inline-block"
            style={{ perspective: "1000px" }}
            initial={{ opacity: 0, scale: 0, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 0.2,
              scale: { type: "spring", visualDuration: 0.2, bounce: 0.5 },
              delay: index * 0.1,
            }}>
            {child}
          </motion.span>
        )
      }
      )}
    </>
  )
}

export default SubTitleH2;