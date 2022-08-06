import React, { useEffect, useRef, useState } from "react";
import images from "../../components/images/ImageCards";
import ImgShow from "./ImgShow";
import { motion } from "framer-motion";
// import resizeWindow from "../../hooks/rezizeWindow";
// import useWidthObject from "../../hooks/useWidthObject";

const SlideImages = ({ className }) => {
  const addClass = className ? className : "";
  const [number, setNumber] = useState(0);
  const [element, setElement] = useState(null);
  const container = useRef(null);

  useEffect(() => {
    const scrollWidth = container.current.scrollWidth;
    const offsetWidth = container.current.offsetWidth;
    // setElement(container);
    setNumber(scrollWidth - offsetWidth);
  }, []);

  // const { width } = useWidthObject(element);

  // console.log(width);

  return (
    <div ref={container} className="overflow-hidden sm:w-full lg:w-[43%]">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -number }}
        className={`${addClass} mx-auto lg:mx-0 w-full
       gap-8 mt-20 xl:mt-16`}
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
