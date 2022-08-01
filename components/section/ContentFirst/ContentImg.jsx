import Image from "next/image";
import React from "react";

const ContentImg = ({ className }) => {
  const addClass = className ? className : "";
  return (
    <div className={`${addClass}`}>
      <Image
        src="/img/PikPng.com_pokemon-go-characters-png_4973553.png"
        alt="DUCK"
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
        priority={true}
      />
    </div>
  );
};

export default ContentImg;
