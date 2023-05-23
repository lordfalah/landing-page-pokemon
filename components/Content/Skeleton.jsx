import React from "react";

const Skeleton = ({ className, children }) => {
  const addClass = className ? className : "";
  return (
    <div
      className={`${addClass} rounded-full text-transparent bg-gray-200 animate-pulse cursor-wait`}
    >
      {children}
    </div>
  );
};

export default Skeleton;
