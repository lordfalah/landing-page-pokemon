import React from "react";

const Instagram = ({ className }) => {
  const addClass = className ? className : "";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={`feather feather-instagram ${addClass}`}
      viewBox="0 0 24 24"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
      <path d="M17.5 6.5L17.51 6.5"></path>
    </svg>
  );
};

export default Instagram;
