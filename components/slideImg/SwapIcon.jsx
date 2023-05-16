import React, { Fragment } from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import Facebook from "../../icon/sosmed/Facebook";
import Twitter from "../../icon/sosmed/Twitter";
import Instagram from "../../icon/sosmed/Instagram";

const icons = [
  {
    element: (
      <Facebook className="transition duration-150 ease-in-out group-hover:fill-[#4267B2] text-green-500/80 fill-green-500/80 w-5 stroke-1" />
    ),
  },
  {
    element: (
      <Twitter className="transition duration-150 ease-in-out group-hover:fill-[#1da1f2] text-green-500/80 fill-green-500/80 w-5 stroke-0" />
    ),
  },
  {
    element: (
      <Instagram className="transition duration-150 ease-in-out group-hover:fill-[#e4405f] stroke-white stroke-2 w-[26px] fill-green-500/80" />
    ),
  },
];

const SwapIcon = ({ className }) => {
  const addClass = className ? className : "";

  return (
    <Fragment>
      <div
        className={`flex gap-3 justify-evenly lg:justify-end w-full sm:w-fit ${addClass}`}
      >
        {icons.map((icon, idx) => {
          return (
            <div
              className={`rounded-full bg-white w-10 h-10 cursor-pointer 
              flex justify-center items-center group `}
              key={idx}
            >
              {icon.element}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default SwapIcon;
