import React, { Fragment } from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

const icons = [
  { element: <FaFacebookF size="15px" className="text-green-500/80" /> },
  { element: <FaTwitter size="15px" className="text-green-500/80" /> },
  { element: <FaGoogle size="15px" className="text-green-500/80" /> },
];

const SwapIcon = ({ className }) => {
  const addClass = className ? className : "";

  return (
    <Fragment>
      <div className="flex gap-3">
        {icons.map((icon, idx) => {
          return (
            <div
              className={`rounded-full bg-white w-10 h-10 cursor-pointer 
              ${addClass}`}
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
