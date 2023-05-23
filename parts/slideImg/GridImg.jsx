import Image from "next/image";
import React from "react";

const GridImg = ({ className }) => {
  const addClass = className ? className : "";
  return (
    <div className={`${addClass}`}>
      <Image
        src="/img/dotGrid2.png"
        width="100%"
        height="100%"
        layout="responsive"
        priority
        alt="dot grid"
      />
    </div>
  );
};

export default GridImg;
