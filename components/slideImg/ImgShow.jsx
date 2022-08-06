import React from "react";

const ImgShow = ({ source, className }) => {
  const addClass = className ? className : "";
  return (
    <div className={`group ${addClass}`}>
      <div
        className="group-hover:scale-125 bg-cover bg-no-repeat h-52
        transition duration-200 ease-in-out bg-center rounded-3xl"
        style={{
          backgroundImage: `url("/img/${source}")`,
        }}
      ></div>
    </div>
  );
};

export default ImgShow;
