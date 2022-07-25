import React from "react";

const ArrowLeft = ({ className }) => {
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
        d="M11 17l-5-5m0 0l5-5m-5 5h12"
      />
    </svg>
  );
};

export default ArrowLeft;
