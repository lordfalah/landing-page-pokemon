import React, { useEffect, useRef, useState } from "react";
import images from "../../components/images/ImageCards";
import ImgShow from "./ImgShow";
import { motion } from "framer-motion";

const SlideImages = ({ className }) => {
  const addClass = className ? className : "";
  const [number, setNumber] = useState(0);
  const container = useRef(null);

  useEffect(() => {
    const scrollWidth = container.current.scrollWidth;
    const offsetWidth = container.current.offsetWidth;
    setNumber(scrollWidth - offsetWidth);
  }, []);

  return (
    <div ref={container} className="overflow-hidden sm:w-full lg:w-[43%]">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -number }}
        whileHover={{ cursor: "grab" }}
        whileTap={{ cursor: "grabbing" }}
        className={`${addClass} mx-auto lg:mx-0 w-full
        gap-8 `}
      >
        {images.map((img, idx) => {
          return (
            <ImgShow
              source={img.source}
              className="min-w-[15rem] overflow-hidden"
              key={idx}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default SlideImages;
