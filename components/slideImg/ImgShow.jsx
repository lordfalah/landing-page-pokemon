import React from "react";

const ImgShow = ({ source, className }) => {
  const addClass = className ? className : "";
  return (
    <div className={`group overflow-hidden ${addClass} rounded-3xl`}>
      <div
        className="group-hover:scale-125 scale-100 bg-cover bg-no-repeat h-52
        transition duration-200 ease-in-out bg-center"
        style={{
          backgroundImage: `url("/img/${source}")`,
        }}
      ></div>
    </div>
  );
};

export default ImgShow;
