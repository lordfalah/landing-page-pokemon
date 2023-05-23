import React from "react";

function DotGrid({ className }) {
  const addClass = className ? className : "";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
      className={`${addClass} cursor-pointer`}
    >
      <circle
        cx="4"
        cy="4"
        r="1"
        strokeWidth="2"
        transform="rotate(90 4 4)"
      ></circle>
      <circle
        cx="12"
        cy="4"
        r="1"
        strokeWidth="2"
        transform="rotate(90 12 4)"
      ></circle>
      <circle
        cx="20"
        cy="4"
        r="1"
        strokeWidth="2"
        transform="rotate(90 20 4)"
      ></circle>
      <circle
        cx="4"
        cy="12"
        r="1"
        strokeWidth="2"
        transform="rotate(90 4 12)"
      ></circle>
      <circle
        cx="12"
        cy="12"
        r="1"
        strokeWidth="2"
        transform="rotate(90 12 12)"
      ></circle>
      <circle
        cx="20"
        cy="12"
        r="1"
        strokeWidth="2"
        transform="rotate(90 20 12)"
      ></circle>
      <circle
        cx="4"
        cy="20"
        r="1"
        strokeWidth="2"
        transform="rotate(90 4 20)"
      ></circle>
      <circle
        cx="12"
        cy="20"
        r="1"
        strokeWidth="2"
        transform="rotate(90 12 20)"
      ></circle>
      <circle
        cx="20"
        cy="20"
        r="1"
        strokeWidth="2"
        transform="rotate(90 20 20)"
      ></circle>
    </svg>
  );
}

export default DotGrid;
