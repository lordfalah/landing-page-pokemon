import React from "react";

const ImgLoad = ({ className }) => {
  const addClass = className ? className : "";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      className={`text-gray-200 ${addClass} cursor-wait`}
      viewBox="0 0 640 512"
    >
      <path d="M480 80c0-44.18 35.8-80 80-80s80 35.82 80 80c0 44.2-35.8 80-80 80s-80-35.8-80-80zM0 456.1c0-10.5 2.964-20.8 8.551-29.7L225.3 81.01C231.9 70.42 243.5 64 256 64s24.1 6.42 30.8 17.01L412.7 281.7l48.2-79c3.2-6.6 11.3-10.7 19.1-10.7 7.8 0 15 4.1 19.1 10.7l132 216.4c5.8 9.5 8.9 20.6 8.9 31.8 0 33.7-27.4 61.1-61.1 61.1H55.91C25.03 512 0 486.1 0 456.1z"></path>
    </svg>
  );
};

export default ImgLoad;
