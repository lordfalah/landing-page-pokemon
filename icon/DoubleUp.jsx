import React from "react";

const DoubleUp = ({ className, children }) => {
  const addClass = className ? className : "";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${addClass} cursor-pointer`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 11l7-7 7 7M5 19l7-7 7 7"
      />
    </svg>
  );
};

export default DoubleUp;
