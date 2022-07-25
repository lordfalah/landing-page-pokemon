import React, { Fragment } from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import ArrowLeft from "../../icon/ArrowLeft";
import ArrowRight from "../../icon/ArrowRight";

const icons = [
  { element: <FaFacebookF size="15px" className="text-green-500/80" /> },
  { element: <FaTwitter size="15px" className="text-green-500/80" /> },
  { element: <FaGoogle size="15px" className="text-green-500/80" /> },
];

const SwapIcon = () => {
  return (
    <Fragment>
      <div className="w-5/12 flex justify-center gap-4">
        <ArrowLeft className="h-6 w-6" />
        <p className="text-xl font-semibold">1 of 3</p>
        <ArrowRight className="h-6 w-6" />
      </div>

      <div className="relative z-10 flex gap-3">
        {icons.map((icon, idx) => {
          return (
            <div className="rounded-full bg-white p-3" key={idx}>
              {icon.element}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default SwapIcon;
