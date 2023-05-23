import React, { Fragment } from "react";
import Facebook from "../../icon/sosmed/Facebook";
import Twitter from "../../icon/sosmed/Twitter";
import Instagram from "../../icon/sosmed/Instagram";

const icons = [
  {
    element: (
      <Facebook className="group-hover:-translate-y-full lg:group-hover:translate-y-full xl:group-hover:-translate-y-full group-hover:scale-150 group-hover:stroke-1 group-hover:stroke-[#4267B2] transition duration-150 ease-in-out group-hover:fill-[#4267B2] text-green-500/80 fill-green-500/80 w-5 stroke-1" />
    ),
  },
  {
    element: (
      <Twitter className="group-hover:-translate-y-full lg:group-hover:translate-y-full xl:group-hover:-translate-y-full group-hover:scale-150 transition duration-150 ease-in-out group-hover:fill-[#1da1f2] text-green-500/80 fill-green-500/80 w-5 stroke-0" />
    ),
  },
  {
    element: (
      <Instagram className="group-hover:-translate-y-full lg:group-hover:translate-y-full xl:group-hover:-translate-y-full group-hover:scale-150 transition duration-150 ease-in-out group-hover:fill-[#e4405f] stroke-white stroke-2 w-[26px] fill-green-500/80" />
    ),
  },
];

const SwapIcon = ({ className }) => {
  const addClass = className ? className : "";

  return (
    <Fragment>
      <div className={`${addClass} `}>
        {icons.map((icon, idx) => {
          return (
            <div
              className={`rounded-full bg-white w-10 h-10 cursor-pointer transition duration-150 ease-in-out flex justify-center items-center group relative z-10 hover:bg-transparent after:hover:content-[''] after:hover:absolute after:hover:inset-0 after:hover:bg-white after:hover:-z-10 after:hover:blur-md after:hover:rounded-full after:hover:opacity-80 after:hover:transition after:hover:ease-in after:hover:duration-150`}
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
