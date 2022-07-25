import React from "react";

const ContentImg = ({ className }) => {
  const addClass = className ? className : "";
  return (
    <div className={`z-0 relative ${addClass}`}>
      <img src="/img/duck.png" alt="DUCK" className="w-1/2 mx-auto" />
    </div>
  );
};

export default ContentImg;
